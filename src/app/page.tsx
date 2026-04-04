import type { Metadata } from "next"

import { RecipeListPage } from "@/components/features/recipe/recipe-list-page"
import { MOCK_RECIPES } from "@/mocks/recipe"

export const metadata: Metadata = {
  title: "My Recipes · Gusto",
  description: "Browse, search, and filter your saved recipes.",
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <RecipeListPage recipes={MOCK_RECIPES} />
    </div>
  )
}
