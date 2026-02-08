import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"

import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action"

type TypeTab = 'all' | 'favorites' | 'heroes' | 'villains';

export const HomePage = () => {

  const [activeTab, setActiveTab] = useState<TypeTab>('all')

  const { data: heroesResponse } = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPageAction(),
    staleTime: 1000 * 60 * 5
  });

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Superhero Universe"
        description="Discover, explore, and manage your favorite superheroes and villains"
      />

      <CustomBreadcrumb currentPage="Super heroes" />

      {/* Stats Dashboard */}
      <HeroStats />


      {/* Tabs */}
      <Tabs value={activeTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger
            value="all"
            onClick={() => setActiveTab('all')}
          >
            All Characters (16)
          </TabsTrigger>
          <TabsTrigger
            value="favorites"
            className="flex items-center gap-2" onClick={() => setActiveTab('favorites')}>
            Favorites (3)
          </TabsTrigger>
          <TabsTrigger
            value="heroes"
            onClick={() => setActiveTab('heroes')}>
            Heroes (12)
          </TabsTrigger>
          <TabsTrigger
            value="villains"
            onClick={() => setActiveTab('villains')}>
            Villains (2)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <h1>All characters</h1>
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
        <TabsContent value="favorites">
          <h1>Favorites!!!</h1>
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
        <TabsContent value="heroes">
          <h1>Heroes</h1>
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
        <TabsContent value="villains">
          <h1>Villains</h1>
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <CustomPagination totalPages={10} />
    </>
  )
}

export default HomePage;