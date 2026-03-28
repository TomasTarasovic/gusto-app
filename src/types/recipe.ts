/**
 * List of all supported general tags for categorization.
 */
export type RecipeTag =
  // Meal Types
  | "breakfast"
  | "brunch"
  | "lunch"
  | "dinner"
  | "dessert"
  | "snack"
  | "appetizer"
  | "soup"
  | "drink"
  // Dietary
  | "vegan"
  | "vegetarian"
  | "gluten-free"
  | "dairy-free"
  | "lactose-free"
  | "sugar-free"
  | "low-carb"
  | "keto"
  | "paleo"
  | "high-protein"
  // Cooking Methods
  | "baking"
  | "frying"
  | "grilling"
  | "steaming"
  | "roasting"
  | "stewing"
  | "blanching"
  // Practical Context
  | "quick-eat"
  | "under-30-mins"
  | "one-pot"
  | "no-cook"
  | "no-bake"
  | "meal-prep"
  | "budget-friendly"
  | "kids-friendly"
  | "5-ingredients-or-less"
  | "freezer-friendly"
  | "pantry-staples"
  | "leftovers"
  | "seasonal"
  | "air-fryer"
  | "oven-baked"
  | "slow-cooker";

/**
 * Supported world cuisines for categorization and filtering.
 */
export type CuisineType =
  | "slovak"
  | "czech"
  | "italian"
  | "french"
  | "spanish"
  | "mediterranean"
  | "central-european"
  | "chinese"
  | "japanese"
  | "indian"
  | "thai"
  | "vietnamese"
  | "korean"
  | "american"
  | "mexican"
  | "latin-american"
  | "middle-eastern"
  | "african";

/**
 * Main ingredient types for high-level classification.
 */
export type MainIngredientType =
  // Meat & Seafood
  | "chicken"
  | "beef"
  | "pork"
  | "turkey"
  | "duck"
  | "fish"
  | "seafood"
  // Plant-based Proteins
  | "tofu"
  | "tempeh"
  | "legumes"
  | "mushrooms"
  // Carbs & Bases
  | "pasta"
  | "rice"
  | "potatoes"
  | "noodles"
  | "quinoa"
  | "couscous"
  | "bread"
  | "pastry"
  // Dairy & Eggs
  | "eggs"
  | "cheese"
  | "yogurt"
  | "cottage-cheese"
  // Produce
  | "vegetables"
  | "fruit";

/**
 * The primary Recipe interface.
 * Represents the complete data structure from AI extraction to final storage.
 */
export interface Recipe {
  /** Unique identifier for the recipe (UUID or Database ID) */
  id: string;

  /** Metadata regarding the origin and state of the record */
  meta: {
    /** Identifies the method/source used to import the recipe */
    sourceType: "youtube" | "web" | "audio" | "manual" | "video_upload";
    /** URL of the original source (mandatory for youtube and web) */
    sourceUrl?: string;
    /** Version for optimistic locking to prevent data overwrites */
    optimisticLockVersion: number;
    /** Record creation timestamp in ISO 8601 format */
    createdAt: string;
    /** Last update timestamp in ISO 8601 format */
    updatedAt: string;
    /** Indicates if the recipe is an unverified AI draft */
    isDraft: boolean;
    /** Raw transcript from audio/video source for search indexing */
    originalTranscript?: string;
  };

  /** Core culinary content of the recipe */
  content: {
    /** Title of the dish */
    title: string;
    /** Brief AI-generated description or story about the dish */
    description?: string;
    /** Number of servings the recipe is designed for */
    portions: number;
    /** Estimated preparation time in minutes */
    prepTimeMinutes: number;
    /** Cooking/baking time in minutes */
    cookTimeMinutes?: number;
    /** Difficulty level ranging from 1 (easiest) to 5 (hardest) */
    difficulty: 1 | 2 | 3 | 4 | 5;
    /** List of required ingredients */
    ingredients: Ingredient[];
    /** Step-by-step cooking instructions */
    instructions: InstructionStep[];
    /** AI-estimated nutritional values per serving */
    nutrientsEstimate?: Nutrients;
  };

  /** Categorization and classification data */
  taxonomy: {
    /** Tags selected from the fixed RecipeTag list */
    tags: RecipeTag[];
    /** Primary ingredient used in the recipe */
    mainIngredient?: MainIngredientType;
    /** World cuisine classification */
    cuisine?: CuisineType;
  };
}

/**
 * Represents a single item within an ingredient list.
 */
export interface Ingredient {
  /** Normalized name of the ingredient (e.g., "Onion") */
  item: string;
  /** Numeric quantity */
  amount?: number;
  /** Unit of measurement (e.g., "g", "ml", "tbsp") */
  unit?: string;
  /** Original, unparsed text from the source (e.g., "2 large shallots") */
  originalText: string;
  /** Shopping list category (e.g., "Vegetables", "Dairy") */
  category?: string;
}

/**
 * Represents a specific step in the preparation process.
 */
export interface InstructionStep {
  /** Order of the step (starting from 1) */
  stepNumber: number;
  /** Textual description of the instruction */
  text: string;
  /** Video/Audio timestamp for the specific step (e.g., "02:45") */
  mediaTimestamp?: string;
  /** URL of an image associated with this specific step */
  imageUrl?: string;
}

/**
 * Nutritional values per serving.
 * Protein, carbs, and fat values are always in grams (g).
 */
export interface Nutrients {
  /** Energy value in kilocalories (kcal) */
  calories?: number;
  /** Protein content in grams */
  protein?: number;
  /** Carbohydrate content in grams */
  carbs?: number;
  /** Fat content in grams */
  fat?: number;
}
