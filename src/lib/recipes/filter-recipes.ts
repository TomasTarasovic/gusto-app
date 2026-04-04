import type { Recipe, RecipeTag } from "@/types/recipe"

export interface RecipeFilterState {
  query: string
  selectedTags: RecipeTag[]
}

function normalize(s: string): string {
  return s.toLowerCase().trim()
}

function recipeMatchesQuery(recipe: Recipe, q: string): boolean {
  if (!q) return true

  const { content, taxonomy, meta } = recipe
  const parts: string[] = [
    content.title,
    content.description ?? "",
    taxonomy.cuisine ?? "",
    taxonomy.mainIngredient ?? "",
    ...taxonomy.tags,
    ...content.ingredients.flatMap((i) => [i.item, i.originalText]),
    meta.originalTranscript ?? "",
  ]

  return parts.some((p) => normalize(p).includes(q))
}

/**
 * Filters recipes by optional text search (title, ingredients, tags, cuisine, etc.)
 * and by tag chips (AND: every selected tag must appear on the recipe).
 */
export function filterRecipes(
  recipes: Recipe[],
  { query, selectedTags }: RecipeFilterState
): Recipe[] {
  const q = normalize(query)

  let next = recipes

  if (selectedTags.length > 0) {
    next = next.filter((r) =>
      selectedTags.every((t) => r.taxonomy.tags.includes(t))
    )
  }

  if (!q) return next

  return next.filter((r) => recipeMatchesQuery(r, q))
}

/** Unique tags present in the given recipes, sorted alphabetically. */
export function collectTagsFromRecipes(recipes: Recipe[]): RecipeTag[] {
  const set = new Set<RecipeTag>()
  for (const r of recipes) {
    for (const t of r.taxonomy.tags) {
      set.add(t)
    }
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b))
}

export function formatRecipeTagLabel(tag: RecipeTag): string {
  return tag
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}
