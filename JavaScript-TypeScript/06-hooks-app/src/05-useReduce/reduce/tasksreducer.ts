
import * as z from "zod";



/* forma del todo */
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}


/*creamos las reglas  */
interface Taskstate {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

export type TaskAction =
    | { type: 'ADD_TODO'; payload: string }
    | { type: 'TOGGLE_TODO'; payload: number }
    | { type: 'DELETE_TODO'; payload: number }


const TodoSchema = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean()
});


const TaskStateSchema = z.object({
    todos: z.array(TodoSchema),
    length: z.number(),
    completed: z.number(),
    pending: z.number()

});


export const getTaskInitialState = () : Taskstate =>{

    const stateLocalStorage = localStorage.getItem('task');

    if(!stateLocalStorage){
        return {
            todos: [],
            completed: 0,
            pending: 0,
            length: 0
        }
        
    }

    /* validacion con zod */
    // tambien se podria hacer con un try catch

    // lo aremos con un saveParce
    const result = TaskStateSchema.safeParse(JSON.parse(stateLocalStorage));

    if(result.error){
        console.log(result.error);
       return {
            todos: [],
            completed: 0,
            pending: 0,
            length: 0
        }
    }

    return result.data 

}

export const taskReducer = (state: Taskstate, action: TaskAction) => {

    switch (action.type) {

        case 'ADD_TODO': {

            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            }
            return {
                ...state,
                todos: [...state.todos, newTodo],
                length: state.todos.length + 1,
                pending: state.pending + 1
            }


        }
        case 'DELETE_TODO': {
            const currentTodos = state.todos.filter((todo) => {
                return todo.id != action.payload;
            })


            return {
                ...state,
                todos: currentTodos,
                length: currentTodos.length,
                completed: currentTodos.filter((todo) => todo.completed).length,
                pending: currentTodos.filter((todo) => !todo.completed).length

            }
        }

        case 'TOGGLE_TODO': {

            const currentTodos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            })

            return {
                ...state,
                todos: currentTodos,
                completed: currentTodos.filter((todo) => todo.completed).length,
                pending: currentTodos.filter((todo) => !todo.completed).length

            }



        }

        default:
            return state



    }



}