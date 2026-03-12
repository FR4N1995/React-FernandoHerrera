import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string,
    quantity: number
}

const itemsInCart: ItemInCart[] = [
    {productName: 'Nintendo Switch 2', quantity: 1},
    {productName: 'Controler PRO', quantity: 2},
    {productName: 'Super smash bros ultimate', quantity: 1},
    {productName: 'Super Mario Odesey', quantity: 1}
]

export function FirstStepsApp(){
    return (
        <>
              {/* <h1>Hola mundo</h1>
              <p>Esto es un parrafo</p>

              <button>Click me</button>


            <div>
                <h2>hola dentro de un div</h2>
            </div> */}

            <h1>Carrito de Compras</h1>
            {/* <ItemCounter name="Nintendo Switch 2" quantity={1} />
            <ItemCounter name="Pro Controller" quantity={2} />
            <ItemCounter name="Super smash ultimate" quantity={1} /> */}
            {itemsInCart.map(({productName, quantity}) =>(
                <ItemCounter key={productName} name={productName} quantity={quantity} />
            ))}
        </>
    )
}