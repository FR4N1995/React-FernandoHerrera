import { useQuery } from '@tanstack/react-query'
import { getHeroesByPages } from '../actions/get-heroes-by-pages.action'

const usePaginatedHero = (page: number, limit: number, category = 'all') => {
  return useQuery({
    queryKey: ['heroes', {page, limit, category}],
    queryFn: () => getHeroesByPages(+page, +limit, category),
    staleTime: 1000 * 60 * 5
  })
}

export default usePaginatedHero
