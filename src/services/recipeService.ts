import { Recipe } from "@/types/recipe";
import { MOCK_RECIPES } from "@/mocks/recipe"; // Tvoje mock dáta

// Toto rozhranie definuje, čo musí náš servis vedieť robiť
export interface IRecipeService {
  getRecipeById(id: string): Promise<Recipe | undefined>;
  getAllRecipes(): Promise<Recipe[]>;
}

// Implementácia pre Mock dáta
class MockRecipeService implements IRecipeService {
  async getRecipeById(id: string): Promise<Recipe | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_RECIPES.find((recipe) => recipe.id === id));
      }, 500);
    });
  }

  async getAllRecipes(): Promise<Recipe[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_RECIPES);
      }, 500);
    });
  }
}

export const recipeService: IRecipeService = new MockRecipeService();
