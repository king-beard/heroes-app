import { use, useMemo } from "react"
import { useSearchParams } from "react-router"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"

import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { CustomPagination } from "@/components/custom/CustomPagination"

import { useHeroSummary } from "@/heroes/hooks/useHeroSummary"
import { useHeroPaginated } from "@/heroes/hooks/useHeroPaginated"
import { FavoriteHeroContext } from "@/heroes/context/FavoriteHeroContext"

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get('tab') ?? 'all';
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '10';
  const category = searchParams.get('category') ?? 'all';

  const selectedTab = useMemo(() => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains'];
    return validTabs.includes(activeTab) ? activeTab : 'all';
  }, [activeTab]);

  const { data: heroesResponse } = useHeroPaginated(+page, +limit, category);
  const { data: summary } = useHeroSummary();

  const { favorites, favoriteCount } = use(FavoriteHeroContext);

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
      <Tabs value={selectedTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger
            value="all"
            onClick={() => setSearchParams(prev => {
              prev.set('category', 'all');
              prev.set('page', '1');
              prev.set('tab', 'all');
              return prev;
            })}
          >
            All Characters ({summary?.totalHeroes})
          </TabsTrigger>
          <TabsTrigger
            value="favorites"
            className="flex items-center gap-2"
            onClick={() => setSearchParams(prev => {
              prev.set('tab', 'favorites');
              return prev;
            })}
          >
            Favorites ({favoriteCount})
          </TabsTrigger>
          <TabsTrigger
            value="heroes"
            onClick={() => setSearchParams(prev => {
              prev.set('category', 'hero');
              prev.set('page', '1');
              prev.set('tab', 'heroes');
              return prev;
            })}
          >
            Heroes ({summary?.heroCount})
          </TabsTrigger>
          <TabsTrigger
            value="villains"
            onClick={() => setSearchParams(prev => {
              prev.set('category', 'villain');
              prev.set('page', '1');
              prev.set('tab', 'villains');
              return prev;
            })}
          >
            Villains ({summary?.villainCount})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
        <TabsContent value="favorites">
          <HeroGrid heroes={favorites} />
        </TabsContent>
        <TabsContent value="heroes">
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
        <TabsContent value="villains">
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
    </>
  )
}

export default HomePage;