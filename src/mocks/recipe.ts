import { Recipe } from "@/types/recipe";

export const MOCK_RECIPES: Recipe[] = [
  {
    id: "mock-001-bryndzove-halusky",
    meta: {
      sourceType: "web",
      sourceUrl: "https://example.com/recepty/bryndzove-halusky",
      optimisticLockVersion: 1,
      createdAt: "2026-01-15T10:00:00.000Z",
      updatedAt: "2026-01-20T14:30:00.000Z",
      isDraft: false,
    },
    content: {
      title: "Bryndzové halušky",
      description:
        "Klasické slovenské jedlo – zemiakové halušky so syrom bryndza a opečenou slaninkou.",
      portions: 4,
      prepTimeMinutes: 35,
      cookTimeMinutes: 25,
      difficulty: 3,
      ingredients: [
        {
          item: "Zemiaky",
          amount: 800,
          unit: "g",
          originalText: "800 g stredne veľkých zemiakov",
          category: "Zelenina",
        },
        {
          item: "Múka",
          amount: 200,
          unit: "g",
          originalText: "cca 200 g hladkej múky",
          category: "Pečenie",
        },
        {
          item: "Bryndza",
          amount: 400,
          unit: "g",
          originalText: "400 g bryndze",
          category: "Mliečne",
        },
        {
          item: "Slanina",
          amount: 150,
          unit: "g",
          originalText: "150 g údenej slaniny na orestovanie",
          category: "Mäso",
        },
        {
          item: "Soľ",
          originalText: "soľ podľa chuti",
          category: "Korenie",
        },
      ],
      instructions: [
        {
          stepNumber: 1,
          text: "Zemiaky nastrúhajte najemno, vytlačte prebytočnú vodu a zmiešajte s múkou a soľou na tuhšie cesto.",
        },
        {
          stepNumber: 2,
          text: "Cez haluškár pretláčajte cesto priamo do vriacej osolenej vody. Varí sa približne 3–4 minúty po vyplávaní.",
        },
        {
          stepNumber: 3,
          text: "Slaninu pokrájajte a orestujte do chrumkava. Halušky sceďte, premiešajte s bryndzou a podávajte so slaninou.",
        },
      ],
      nutrientsEstimate: {
        calories: 620,
        protein: 28,
        carbs: 52,
        fat: 32,
      },
    },
    taxonomy: {
      tags: ["dinner", "budget-friendly", "high-protein", "one-pot"],
      mainIngredient: "potatoes",
      cuisine: "slovak",
    },
  },
  {
    id: "mock-002-margherita",
    meta: {
      sourceType: "youtube",
      sourceUrl: "https://www.youtube.com/watch?v=example",
      optimisticLockVersion: 2,
      createdAt: "2026-02-01T08:00:00.000Z",
      updatedAt: "2026-02-10T19:15:00.000Z",
      isDraft: false,
      originalTranscript:
        "Dnes si urobíme klasickú margheritu. Najprv pripravíme cesto na pizzu...",
    },
    content: {
      title: "Pizza Margherita",
      description:
        "Tenké cesto, passata, mozzarella a bazalka podľa neapolskej tradície.",
      portions: 2,
      prepTimeMinutes: 120,
      cookTimeMinutes: 12,
      difficulty: 4,
      ingredients: [
        {
          item: "Múka typ 00",
          amount: 300,
          unit: "g",
          originalText: "300 g múky typ 00",
          category: "Pečenie",
        },
        {
          item: "Voda",
          amount: 180,
          unit: "ml",
          originalText: "180 ml vody vlažnej",
          category: "Ostatné",
        },
        {
          item: "Kvasnice",
          amount: 3,
          unit: "g",
          originalText: "3 g čerstvých kvasníc alebo 1 g sušených",
          category: "Pečenie",
        },
        {
          item: "Passata",
          amount: 200,
          unit: "ml",
          originalText: "200 ml passaty",
          category: "Konzervované",
        },
        {
          item: "Mozzarella",
          amount: 250,
          unit: "g",
          originalText: "250 g mozzarelly fior di latte",
          category: "Mliečne",
        },
        {
          item: "Bazalka",
          originalText: "čerstvá bazalka na dokončenie",
          category: "Bylinky",
        },
      ],
      instructions: [
        {
          stepNumber: 1,
          text: "Z múky, vody, soli a kvasníc miesite cesto 10 minút, nechajte kysnúť 1–2 hodiny pri izbovej teplote.",
          mediaTimestamp: "01:20",
        },
        {
          stepNumber: 2,
          text: "Rúru predhrejte na čo najvyššiu teplotu (ideálne s kameňom). Rozvaľkajte cesto nadrobno.",
          mediaTimestamp: "08:45",
        },
        {
          stepNumber: 3,
          text: "Potrite passatou, pridajte mozzarella a pečte 8–12 minút. Pred servírovaním pridajte bazalku.",
          mediaTimestamp: "12:10",
        },
      ],
      nutrientsEstimate: {
        calories: 480,
        protein: 22,
        carbs: 68,
        fat: 14,
      },
    },
    taxonomy: {
      tags: ["dinner", "baking", "vegetarian", "oven-baked"],
      mainIngredient: "cheese",
      cuisine: "italian",
    },
  },
  {
    id: "mock-003-overnight-oats-draft",
    meta: {
      sourceType: "manual",
      optimisticLockVersion: 0,
      createdAt: "2026-03-01T12:00:00.000Z",
      updatedAt: "2026-03-01T12:00:00.000Z",
      isDraft: true,
    },
    content: {
      title: "Overnight oats s ovocím (draft)",
      description:
        "Rýchle raňajky bez varenia – na doladenie porcií a doplnkov.",
      portions: 1,
      prepTimeMinutes: 10,
      difficulty: 1,
      ingredients: [
        {
          item: "Ovsené vločky",
          amount: 50,
          unit: "g",
          originalText: "50 g jemných ovsených vločiek",
          category: "Obilniny",
        },
        {
          item: "Mlieko",
          amount: 120,
          unit: "ml",
          originalText: "120 ml mlieka alebo rastlinného nápoja",
          category: "Mliečne",
        },
        {
          item: "Jogurt",
          amount: 80,
          unit: "g",
          originalText: "80 g bieleho jogurtu",
          category: "Mliečne",
        },
        {
          item: "Med",
          amount: 1,
          unit: "čl",
          originalText: "1 čl medu (voliteľné)",
          category: "Sladidlá",
        },
        {
          item: "Ovocie",
          originalText: "čerstvé bobuľové ovocie podľa sezóny",
          category: "Ovocie",
        },
      ],
      instructions: [
        {
          stepNumber: 1,
          text: "Vločky zmiešajte s mliekom a jogurtom v uzatvárateľnej nádobe.",
        },
        {
          stepNumber: 2,
          text: "Odložte do chladničky minimálne na 4 hodiny alebo cez noc.",
        },
        {
          stepNumber: 3,
          text: "Ráno dochutite medom a pridajte ovocie.",
        },
      ],
    },
    taxonomy: {
      tags: ["breakfast", "quick-eat", "meal-prep", "vegetarian", "no-cook"],
      mainIngredient: "yogurt",
    },
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    meta: {
      sourceType: "youtube",
      sourceUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      optimisticLockVersion: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isDraft: false,
      originalTranscript:
        "Today we are making a classic creamy chicken pasta with sun-dried tomatoes...",
    },
    content: {
      title: "Creamy Sun-dried Tomato Chicken Pasta",
      description:
        "A rich and flavorful pasta dish that combines tender chicken breast with the intense sweetness of sun-dried tomatoes in a silky cream sauce.",
      portions: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      difficulty: 2,
      ingredients: [
        {
          item: "Chicken Breast",
          amount: 500,
          unit: "g",
          originalText: "2 large chicken breasts, cubed",
          category: "Meat",
        },
        {
          item: "Penne Pasta",
          amount: 400,
          unit: "g",
          originalText: "1 box of penne",
          category: "Pasta",
        },
        {
          item: "Heavy Cream",
          amount: 250,
          unit: "ml",
          originalText: "1 cup of heavy whipping cream",
          category: "Dairy",
        },
        {
          item: "Sun-dried Tomatoes",
          amount: 100,
          unit: "g",
          originalText: "half a jar of sun-dried tomatoes in oil",
          category: "Produce",
        },
        {
          item: "Spinach",
          amount: 2,
          unit: "handfuls",
          originalText: "two large handfuls of baby spinach",
          category: "Produce",
        },
      ],
      instructions: [
        {
          stepNumber: 1,
          text: "Boil a large pot of salted water and cook the penne according to package instructions until al dente.",
          mediaTimestamp: "01:20",
        },
        {
          stepNumber: 2,
          text: "While pasta is cooking, heat oil in a large skillet over medium heat. Season chicken with salt and pepper, then sear until golden brown.",
          mediaTimestamp: "03:45",
        },
        {
          stepNumber: 3,
          text: "Add chopped sun-dried tomatoes and pour in the heavy cream. Let it simmer for 5 minutes until the sauce starts to thicken.",
          mediaTimestamp: "06:10",
        },
        {
          stepNumber: 4,
          text: "Stir in the fresh spinach until wilted. Toss the cooked pasta into the sauce and serve immediately.",
          mediaTimestamp: "08:30",
        },
      ],
      nutrientsEstimate: {
        calories: 650,
        protein: 35,
        carbs: 72,
        fat: 24,
      },
    },
    taxonomy: {
      tags: ["lunch", "dinner", "high-protein", "under-30-mins"],
      mainIngredient: "chicken",
      cuisine: "italian",
    },
  },
];
