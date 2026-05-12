import { CustomJumbotron } from '@/components/custom/CustomJumbotron'
import { HeroStats } from '@/heroes/components/HeroStats'
import { SearchControl } from './ui/SearchControl'
import { CustomBreadcrums } from '@/components/custom/CustomBreadcrums'
import { HeroGrid } from '@/heroes/components/HeroGrid'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from "react-router"
import { searchHEroesAction } from '@/heroes/actions/get-search-heroes'

export const SearchPage = () => {

  const [searchParams] = useSearchParams()
  console.log(searchParams)

  const name = searchParams.get('name') ?? undefined;
  const strength = searchParams.get('strength') ?? undefined;
  console.log(strength);

  // TODO: usequery
  const {data: heroes = []} = useQuery({
    queryKey: ['search', {name, strength}],
    queryFn: () => searchHEroesAction({name, strength}),
    staleTime: 1000 * 60 * 5
  })

  return (

    <>
      <CustomJumbotron title="Busqueda de SuperHeroes" description="Descubre, explora y administra super heroes y villanos" />

      <CustomBreadcrums currentPage='Busqueda de Heroes' bradCrumbs={[{label: 'link 1', to: '/'}]} />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* filter searcch */}
      <SearchControl />

      <HeroGrid heroes={heroes}/>
    </>
  )
}


