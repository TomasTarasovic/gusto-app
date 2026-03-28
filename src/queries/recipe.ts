import { recipeService } from "@/services/recipeService";
import { useQuery } from "@tanstack/react-query";

export const RECIPE_QUERY_KEYS = {
  getRecipeById: (id: string) => ["recipe", id],
  getAllRecipes: () => ["recipes"],
};

export const useGetRecipeById = (id: string) => {
  return useQuery({
    queryKey: RECIPE_QUERY_KEYS.getRecipeById(id),
    queryFn: () => recipeService.getRecipeById(id),
    enabled: !!id,
  });
};

export const useGetAllRecipes = () => {
  return useQuery({
    queryKey: RECIPE_QUERY_KEYS.getAllRecipes(),
    queryFn: () => recipeService.getAllRecipes(),
  });
};
