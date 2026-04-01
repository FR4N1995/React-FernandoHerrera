import {
  Heart,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import {  use, useMemo,  } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrums } from "@/components/custom/CustomBreadcrums"
import { useSearchParams } from "react-router"
import useHerosummary from "@/heroes/hooks/useHerosummary"
import usePaginatedHero from "@/heroes/hooks/usePaginatedHero"
import { FavoriteHEroContext } from "@/heroes/context/FavoritesHEroContext"




export const HomePage = () => {


  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get('tab') ?? 'all';
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '10';
  const category = searchParams.get('category') ?? 'all';

  // usamos el contexto(nos sirve para colocar data a sierta altitud de nuestroc componentes y poder acceder a esa informacion)
  const {favoriteCount, favorites} = use(FavoriteHEroContext)

  // validar url para que cuando la manipule un usuario no se rompa
  const selectedTab = useMemo(() =>{
    const validTabs = ['all', 'favorites', 'heroes', 'villains'];
    return validTabs.includes(activeTab) ? activeTab : 'all'
  }, [activeTab])

  // const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'heroes' | 'villains'>('all');

  // usamos tasnstack en lugar de useEfect
  // creamos un hook por eso ya no lo necesitamos
  // const {data} = useQuery({
  //   queryKey: ['heroes', {page, limit}],
  //   queryFn: () => getHeroesByPages(+page, +limit),
  //   staleTime: 1000 * 60 * 5
  // });

  const {data} = usePaginatedHero(+page, +limit, category)

    // ya no es necesario por que creamos un hook    
    // const {data: summary} = useQuery({
    //      queryKey: ['summary-information'],
    //      queryFn: getSummary,
    //      staleTime: 1000 * 60 * 5
    // })

    const {data: summary} = useHerosummary()



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
              prev.set('category', 'all'); 
              prev.set('page', '1'); 
              return prev
            })}
              >All Characters ({summary?.totalHeroes})
              </TabsTrigger>
            
            <TabsTrigger value="favorites"onClick={() => setSearchParams((prev) => {
              prev.set('tab', 'favorites'); 
              return prev
            })}>
              <Heart className="h-4 w-4" />
              Favorites ({favoriteCount})
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setSearchParams((prev) =>{
              prev.set('tab', 'heroes'),
              prev.set('category', 'hero')
              prev.set('page', '1'); 

              return prev
            })}>Heroes ({summary?.heroCount})</TabsTrigger>
            <TabsTrigger value="villains" onClick={() => setSearchParams((prev) => {
              prev.set('tab', 'villains')
              prev.set('category', 'villain')
              prev.set('page', '1'); 

              return prev
            })}>Villains ({summary?.villainCount})</TabsTrigger>
          </TabsList>

          <TabsContent value='all'>
            {/* mostrar todos los personajes */}
            <HeroGrid heroes ={data?.heroes ?? []} />

          </TabsContent>
          <TabsContent value="favorites">
            {/* mostrar todos los personajes favoritos*/}
            <HeroGrid  heroes={favorites}/>
            
          </TabsContent>
          <TabsContent value="heroes">
            {/* mostrar todos los personajes heroes*/}
            <HeroGrid heroes ={data?.heroes ?? []}/>
            <h1>Heroes</h1>
          </TabsContent>
          <TabsContent value="villains">
            {/* mostrar todos los personajes villanos*/}
            <HeroGrid heroes ={data?.heroes ?? []}/>
            <h1>Villanos</h1>
          </TabsContent>

        </Tabs>

        {/* Character Grid */}

            
        {/* Pagination  menos para favoritos*/}
        {
          selectedTab !== 'favorites' && (  
            <CustomPagination totalPages={data?.pages ?? 1} />
          )}
      </>
    </>
  )
}