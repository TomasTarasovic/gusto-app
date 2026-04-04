import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { MOCK_RECIPES } from "@/mocks/recipe"

import { RecipeCard } from "./recipe-card"

const meta = {
  title: "Features/Recipe/RecipeCard",
  component: RecipeCard,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story, context) => {
      if (context.parameters.fullWidthCanvas) {
        return <Story />
      }
      return (
        <div className="min-h-[200px] bg-background p-4">
          <div className="mx-auto w-full max-w-[360px]">
            <Story />
          </div>
        </div>
      )
    },
  ],
} satisfies Meta<typeof RecipeCard>

export default meta
type Story = StoryObj<typeof meta>

export const Published: Story = {
  args: {
    recipe: MOCK_RECIPES[0],
    href: `/recipes/${MOCK_RECIPES[0].id}`,
  },
}

export const WithLink: Story = {
  name: "Published (long title)",
  args: {
    recipe: MOCK_RECIPES[3],
    href: `/recipes/${MOCK_RECIPES[3].id}`,
  },
}

export const Draft: Story = {
  args: {
    recipe: MOCK_RECIPES[2],
    href: `/recipes/${MOCK_RECIPES[2].id}`,
  },
}

export const StaticCard: Story = {
  args: {
    recipe: MOCK_RECIPES[1],
  },
}

export const NoMainIngredient: Story = {
  args: {
    recipe: {
      ...MOCK_RECIPES[1],
      taxonomy: {
        ...MOCK_RECIPES[1].taxonomy,
        mainIngredient: undefined,
      },
    },
    href: `/recipes/${MOCK_RECIPES[1].id}`,
  },
}

export const ManyTags: Story = {
  args: {
    recipe: MOCK_RECIPES[2],
    maxTags: 5,
    href: `/recipes/${MOCK_RECIPES[2].id}`,
  },
}

export const GridPreview: Story = {
  name: "Grid (1 / 2 / 3 columns)",
  parameters: {
    fullWidthCanvas: true,
    controls: { disable: true },
  },
  args: {
    recipe: MOCK_RECIPES[0],
  },
  render: () => (
    <div className="bg-background p-4">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_RECIPES.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            href={`/recipes/${recipe.id}`}
          />
        ))}
      </div>
    </div>
  ),
}
