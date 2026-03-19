import {
  Heart,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useEffect, useState } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrums } from "@/components/custom/CustomBreadcrums"
import { getHeroesByPages } from "@/heroes/actions/get-heroes-by-pages.action"

export const HomePage = () => {

  const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'heroes' | 'villains'>('all');

  useEffect(()=>{
    getHeroesByPages().then(heroes =>{
      console.log({heroes})
    })
  }, [])


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
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab('all')}>All Characters (16)</TabsTrigger>
            <TabsTrigger value="favorites" onClick={() => setActiveTab('favorites')} className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab('heroes')}>Heroes (12)</TabsTrigger>
            <TabsTrigger value="villains" onClick={() => setActiveTab('villains')}>Villains (2)</TabsTrigger>
          </TabsList>

          <TabsContent value='all'>
            {/* mostrar todos los personajes */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="favorites">
            {/* mostrar todos los personajes favoritos*/}
            <HeroGrid />
            <h1>Favoritos</h1>
          </TabsContent>
          <TabsContent value="heroes">
            {/* mostrar todos los personajes heroes*/}
            <HeroGrid />
            <h1>Heroes</h1>
          </TabsContent>
          <TabsContent value="villains">
            {/* mostrar todos los personajes villanos*/}
            <HeroGrid />
            <h1>Villanos</h1>
          </TabsContent>

        </Tabs>

        {/* Character Grid */}


        {/* Pagination */}
        <CustomPagination totalPages={8} />
      </>
    </>
  )
}