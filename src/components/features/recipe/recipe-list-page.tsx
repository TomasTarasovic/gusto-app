"use client"

import { ChefHat, Search } from "lucide-react"
import { useMemo, useState } from "react"

import { RecipeCard } from "@/components/features/recipe/recipe-card"
import {
  collectTagsFromRecipes,
  filterRecipes,
  formatRecipeTagLabel,
} from "@/lib/recipes/filter-recipes"
import { cn } from "@/lib/utils"
import type { Recipe, RecipeTag } from "@/types/recipe"

export interface RecipeListPageProps {
  recipes: Recipe[]
}

export const RecipeListPage = ({ recipes }: RecipeListPageProps) => {
  const [query, setQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<RecipeTag[]>([])

  const availableTags = useMemo(
    () => collectTagsFromRecipes(recipes),
    [recipes]
  )

  const filtered = useMemo(
    () =>
      filterRecipes(recipes, {
        query,
        selectedTags,
      }),
    [recipes, query, selectedTags]
  )

  const toggleTag = (tag: RecipeTag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const countLabel =
    filtered.length === recipes.length
      ? `${recipes.length} recipe${recipes.length === 1 ? "" : "s"} saved`
      : `${filtered.length} of ${recipes.length} recipe${
          recipes.length === 1 ? "" : "s"
        }`

  return (
    <div className="min-h-0 flex-1 bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-col gap-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <span
              className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm sm:size-14"
              aria-hidden
            >
              <ChefHat className="size-6 sm:size-7" strokeWidth={1.75} />
            </span>
            <div className="min-w-0 pt-0.5">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                My Recipes
              </h1>
              <p className="mt-0.5 text-sm text-muted-foreground">{countLabel}</p>
            </div>
          </div>

          <div className="relative w-full">
            <label htmlFor="recipe-search" className="sr-only">
              Search recipes
            </label>
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <input
              id="recipe-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search recipes, ingredients, cuisines..."
              className={cn(
                "h-12 w-full rounded-full border border-border bg-card pl-12 pr-4 text-sm text-foreground shadow-sm",
                "placeholder:text-muted-foreground",
                "transition-all duration-200",
                "focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
              )}
              autoComplete="off"
            />
          </div>

          {availableTags.length > 0 ? (
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Filter by tag
              </p>
              <div
                className="-mx-1 flex flex-wrap gap-2 px-1 pb-1 sm:flex-nowrap sm:overflow-x-auto sm:pb-2 sm:[scrollbar-width:thin]"
                role="group"
                aria-label="Recipe tags"
              >
                {availableTags.map((tag) => {
                  const pressed = selectedTags.includes(tag)
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      aria-pressed={pressed}
                      className={cn(
                        "shrink-0 rounded-full border-0 px-4 py-2 text-sm font-medium text-primary transition-all duration-200",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        pressed
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-primary/10 hover:bg-primary/15 active:bg-primary/20"
                      )}
                    >
                      {formatRecipeTagLabel(tag)}
                    </button>
                  )
                })}
              </div>
            </div>
          ) : null}
        </header>

        <section aria-live="polite" aria-label="Recipe results">
          {filtered.length === 0 ? (
            <div
              className="rounded-2xl border border-dashed border-border bg-muted/30 px-6 py-16 text-center"
              role="status"
            >
              <p className="text-base font-medium text-foreground">
                No recipes match your filters
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try clearing the search or tag filters to see more results.
              </p>
            </div>
          ) : (
            <ul className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((recipe) => (
                <li key={recipe.id} className="min-h-0">
                  <RecipeCard
                    recipe={recipe}
                    href={`/recipes/${recipe.id}`}
                    className="h-full"
                  />
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}
