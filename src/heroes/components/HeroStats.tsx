import { useQuery } from "@tanstack/react-query"
import { Heart, Users, Zap, Trophy } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { HeroStatCard } from "./HeroStatCard"

import { getSummaryAction } from "../actions/get-summary.action"

export const HeroStats = () => {

  const { data: summary } = useQuery({
    queryKey: ['summary-information'],
    queryFn: getSummaryAction,
    staleTime: 1000 * 60 * 5 // 5 minutes
  });

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
              {summary?.villainCount} Villains
            </Badge>
          </div>
        </CardContent>
      </Card>

      <HeroStatCard
        title="Favorites"
        icon={<Heart className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold text-red-600">3</div>
        <p className="text-xs text-muted-foreground">18.8% of total</p>
      </HeroStatCard>

      <HeroStatCard
        title="Strongest"
        icon={<Zap className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">{summary?.strongestHero.alias}</div>
        <p className="text-xs text-muted-foreground">Strength: {summary?.strongestHero.strength}/10</p>
      </HeroStatCard>

      <HeroStatCard
        title="Smartest"
        icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">{summary?.smartestHero.alias}</div>
        <p className="text-xs text-muted-foreground">Strength: {summary?.smartestHero.strength}/10</p>
      </HeroStatCard>
    </div>
  )
}
