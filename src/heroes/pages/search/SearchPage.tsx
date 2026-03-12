import { CustomJumbotron } from '@/components/custom/CustomJumbotron'
import { HeroStats } from '@/heroes/components/HeroStats'
import { SearchControl } from './ui/SearchControl'

export const SearchPage = () => {
  return (

    <>
      <CustomJumbotron title="Busqueda de SuperHeroes" description="Descubre, explora y administra super heroes y villanos" />
      {/* Stats Dashboard */}
      <HeroStats />

      {/* filter searcch */}
      <SearchControl />


    </>
  )
}


