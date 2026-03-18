import { CustomJumbotron } from '@/components/custom/CustomJumbotron'
import { HeroStats } from '@/heroes/components/HeroStats'
import { SearchControl } from './ui/SearchControl'
import { CustomBreadcrums } from '@/components/custom/CustomBreadcrums'

export const SearchPage = () => {
  return (

    <>
      <CustomJumbotron title="Busqueda de SuperHeroes" description="Descubre, explora y administra super heroes y villanos" />

      <CustomBreadcrums currentPage='Busqueda de Heroes' bradCrumbs={[{label: 'link 1', to: '/'}]} />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* filter searcch */}
      <SearchControl />


    </>
  )
}


