import Link from "next/link"
import {
  AlertCircle,
  Apple,
  Bean,
  Beef,
  Bird,
  Carrot,
  ChefHat,
  Clock,
  Croissant,
  Drumstick,
  Egg,
  Fish,
  Ham,
  Milk,
  Shell,
  Soup,
  Sprout,
  Star,
  Wheat,
  type LucideIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import type {
  CuisineType,
  MainIngredientType,
  Recipe,
  RecipeTag,
} from "@/types/recipe"

const MAIN_INGREDIENT_ICON: Record<MainIngredientType, LucideIcon> = {
  chicken: Drumstick,
  beef: Beef,
  pork: Ham,
  turkey: Bird,
  duck: Bird,
  fish: Fish,
  seafood: Shell,
  tofu: Bean,
  tempeh: Bean,
  legumes: Bean,
  mushrooms: Sprout,
  pasta: Wheat,
  rice: Wheat,
  potatoes: Sprout,
  noodles: Soup,
  quinoa: Wheat,
  couscous: Wheat,
  bread: Croissant,
  pastry: Croissant,
  eggs: Egg,
  cheese: Milk,
  yogurt: Milk,
  "cottage-cheese": Milk,
  vegetables: Carrot,
  fruit: Apple,
}

function formatRecipeTagLabel(tag: RecipeTag): string {
  return tag
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

function formatMainIngredientLabel(type: MainIngredientType): string {
  return type
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

function formatCuisineLabel(cuisine: CuisineType): string {
  return cuisine
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

const DIFFICULTY_LABEL: Record<Recipe["content"]["difficulty"], string> = {
  1: "Very simple",
  2: "Simple",
  3: "Moderate",
  4: "Advanced",
  5: "Expert",
}

export interface RecipeCardProps {
  recipe: Recipe
  /** When set, the whole card is a link (e.g. `/recipes/[id]`). */
  href?: string
  className?: string
  /** Max taxonomy tags shown before "+N" (default 3). */
  maxTags?: number
}

export const RecipeCard = ({
  recipe,
  href,
  className,
  maxTags = 3,
}: RecipeCardProps) => {
  const { meta, content, taxonomy } = recipe
  const mainIngredient = taxonomy.mainIngredient
  const IngredientIcon = mainIngredient
    ? MAIN_INGREDIENT_ICON[mainIngredient]
    : null
  const tags = taxonomy.tags
  const visibleTags = tags.slice(0, maxTags)
  const overflowTagCount = Math.max(0, tags.length - visibleTags.length)
  const cuisine = taxonomy.cuisine
  const HeroIcon = IngredientIcon ?? ChefHat

  const inner = (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-200",
        "hover:border-primary/25 hover:shadow-md",
        href && "group-hover:border-primary/30 group-hover:shadow-md",
        className
      )}
    >
      <div
        className={cn(
          "relative flex aspect-5/3 shrink-0 items-center justify-center",
          "bg-primary/20 dark:bg-primary/25"
        )}
      >
        {meta.isDraft ? (
          <span
            className={cn(
              "absolute right-2 top-2 z-10 inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide",
              "bg-accent/90 text-accent-foreground shadow-sm",
              "dark:bg-accent dark:text-accent-foreground"
            )}
          >
            <AlertCircle className="size-3 shrink-0" aria-hidden />
            Needs Review
          </span>
        ) : null}

        <span className="text-primary/70 dark:text-primary/60" aria-hidden>
          <HeroIcon className="mx-auto size-16 shrink-0 sm:size-17" strokeWidth={1.25} />
        </span>

        {mainIngredient && IngredientIcon ? (
          <span
            className={cn(
              "absolute bottom-3 left-3 z-1 inline-flex max-w-[calc(100%-5.5rem)] items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium",
              "border border-border/60 bg-background/90 text-foreground shadow-sm backdrop-blur-sm",
              "dark:border-border/50 dark:bg-card/95"
            )}
            title={formatMainIngredientLabel(mainIngredient)}
          >
            <IngredientIcon className="size-3.5 shrink-0 text-muted-foreground" aria-hidden />
            <span className="truncate">{formatMainIngredientLabel(mainIngredient)}</span>
          </span>
        ) : null}

        <span
          className={cn(
            "absolute bottom-3 right-3 z-1 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium",
            "border border-border/60 bg-background/90 text-foreground shadow-sm backdrop-blur-sm",
            "dark:border-border/50 dark:bg-card/95"
          )}
        >
          <Clock className="size-3.5 shrink-0 text-muted-foreground" aria-hidden />
          <span>{content.prepTimeMinutes} min</span>
          <span className="sr-only">prep time</span>
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-3 p-3.5 pt-3 sm:p-4 sm:pt-3.5">
        <h3
          className="line-clamp-2 text-lg font-semibold leading-snug tracking-tight text-foreground"
          id={`recipe-card-title-${recipe.id}`}
        >
          {content.title}
        </h3>

        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-2">
          <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 font-medium text-foreground">
              <ChefHat className="size-3.5 shrink-0 text-primary" aria-hidden />
              <span>{DIFFICULTY_LABEL[content.difficulty]}</span>
            </span>
            <span
              className="inline-flex items-center gap-0.5"
              role="img"
              aria-label={`Difficulty ${content.difficulty} out of 5`}
            >
              {([1, 2, 3, 4, 5] as const).map((level) => (
                <Star
                  key={level}
                  className={cn(
                    "size-3.5 shrink-0",
                    level <= content.difficulty
                      ? "fill-accent text-accent"
                      : "fill-transparent text-muted-foreground/35"
                  )}
                  aria-hidden
                />
              ))}
            </span>
          </div>

          {cuisine ? (
            <span
              className={cn(
                "inline-flex max-w-[min(100%,11rem)] shrink-0 items-center rounded-full px-2.5 py-1 text-xs font-medium",
                "bg-accent/15 text-accent dark:bg-accent/20 dark:text-accent"
              )}
              title={formatCuisineLabel(cuisine)}
            >
              <span className="truncate">{formatCuisineLabel(cuisine)}</span>
            </span>
          ) : null}
        </div>

        {visibleTags.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {visibleTags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  "max-w-full truncate rounded-full bg-primary/10 px-2.5 py-0.5 text-[0.7rem] font-medium text-primary",
                  "dark:bg-primary/15"
                )}
              >
                {formatRecipeTagLabel(tag)}
              </span>
            ))}
            {overflowTagCount > 0 ? (
              <span
                className={cn(
                  "rounded-full bg-primary/10 px-2.5 py-0.5 text-[0.7rem] font-medium text-primary",
                  "dark:bg-primary/15"
                )}
              >
                +{overflowTagCount}
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  )

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "group block h-full min-h-[44px] rounded-2xl outline-none",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        )}
        aria-labelledby={`recipe-card-title-${recipe.id}`}
      >
        {inner}
      </Link>
    )
  }

  return inner
}
