import {
  Heart,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import {  useMemo,  } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrums } from "@/components/custom/CustomBreadcrums"
import { getHeroesByPages } from "@/heroes/actions/get-heroes-by-pages.action"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router"




export const HomePage = () => {


  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get('tab') ?? 'all';
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '10';

  // validar url para que cuando la manipule un usuario no se rompa
  const selectedTab = useMemo(() =>{
    const validTabs = ['all', 'favorites', 'heroes', 'villains'];
    return validTabs.includes(activeTab) ? activeTab : 'all'
  }, [activeTab])

  // const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'heroes' | 'villains'>('all');

  // usamos tasnstack en lugar de useEfect
  const {data} = useQuery({
    queryKey: ['heroes', {page, limit}],
    queryFn: () => getHeroesByPages(+page, +limit),
    staleTime: 1000 * 60 * 5
  })



  console.log({data});
  // useEffect(()=>{
  //   getHeroesByPages().then(heroes =>{
  //     console.log({heroes})
  //   })
  // }, [])


  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron title="Universo de SuperHeroes" description="Descubre, explora y administra super heroes y villanos" />

        {/* Enlaces para avanzar o regresar bhr  */}
        <CustomBreadcrums currentPage="Nuestros Super Heroes"/>   

        {/* Stats Dashboard */}
        <HeroStats />

 

        {/* Tabs */}
        {/* <Tabs value={activeTab} className="mb-8"> */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">

            <TabsTrigger value="all" onClick={() => setSearchParams((prev) => {
              prev.set('tab', 'all'); 
              return prev
            })}
              >All Characters (16)
              </TabsTrigger>
            
            <TabsTrigger value="favorites"onClick={() => setSearchParams((prev) => {
              prev.set('tab', 'favorites'); 
              return prev
            })}>
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setSearchParams((prev) =>{
              prev.set('tab', 'heroes')
              return prev
            })}>Heroes (12)</TabsTrigger>
            <TabsTrigger value="villains" onClick={() => setSearchParams((prev) => {
              prev.set('tab', 'villains');
              return prev
            })}>Villains (2)</TabsTrigger>
          </TabsList>

          <TabsContent value='all'>
            {/* mostrar todos los personajes */}
            <HeroGrid heroes ={data?.heroes ?? []} />

          </TabsContent>
          <TabsContent value="favorites">
            {/* mostrar todos los personajes favoritos*/}
            <HeroGrid  heroes={[]}/>
            <h1>Favoritos</h1>
          </TabsContent>
          <TabsContent value="heroes">
            {/* mostrar todos los personajes heroes*/}
            <HeroGrid heroes={[]}/>
            <h1>Heroes</h1>
          </TabsContent>
          <TabsContent value="villains">
            {/* mostrar todos los personajes villanos*/}
            <HeroGrid heroes={[]}/>
            <h1>Villanos</h1>
          </TabsContent>

        </Tabs>

        {/* Character Grid */}

            
        {/* Pagination */}
        <CustomPagination totalPages={data?.pages ?? 1} />
      </>
    </>
  )
}