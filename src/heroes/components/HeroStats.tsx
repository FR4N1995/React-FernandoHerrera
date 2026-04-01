import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Trophy, Users, Zap } from "lucide-react"
import { HeroStatCard } from "./HeroStatCard"
import { useQuery } from "@tanstack/react-query"
import { getSummary } from "../actions/get-summary.action"
import useHerosummary from "../hooks/useHerosummary"
import { use } from "react"
import { FavoriteHEroContext } from "../context/FavoritesHEroContext"

export const HeroStats = () => {

    // ya no se necesita por que consumimos nuestro hook
    // const {data: summary} = useQuery({
    //     queryKey: ['summary-information'],
    //     queryFn: getSummary,
    //     staleTime: 1000 * 60 * 5
    // })
    const {favoriteCount} = use(FavoriteHEroContext)

    const {data: summary} = useHerosummary()

    if(!summary){
        return <div>Loadin...</div>
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Characters</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{summary?.totalHeroes}</div>
                    <div className="flex gap-1 mt-2">
                        <Badge variant="secondary" className="text-xs">
                            {summary?.heroCount} Heroes
                        </Badge>
                        <Badge variant="destructive" className="text-xs">
                            {summary?.villainCount} Villanos
                        </Badge>
                    </div>
                </CardContent>
            </Card>

            <HeroStatCard title="favoritos" icon={<Heart className="h-4 w-4 text-muted-foreground" />} >

                <div className="text-2xl font-bold text-red-600">{favoriteCount}</div>
                <p className="text-xs text-muted-foreground">{(favoriteCount / summary?.totalHeroes * 100).toFixed(2)}% del Total</p>
            </HeroStatCard>

            <HeroStatCard title="Fuerte" icon={<Zap className="h-4 w-4 text-muted-foreground" />} >

                <div className="text-lg font-bold">{summary?.strongestHero.alias}</div>
                <p className="text-xs text-muted-foreground">{summary?.strongestHero.strength}</p>
            </HeroStatCard>

            <HeroStatCard title="Inteligente" icon={<Trophy className="h-4 w-4 text-muted-foreground" />} >

                <div className="text-lg font-bold">{summary?.smartestHero.alias}</div>
                <p className="text-xs text-muted-foreground">{summary?.strongestHero.intelligence}</p>
            </HeroStatCard>
        </div>
    )
}
