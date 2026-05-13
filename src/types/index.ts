export type UserRole = "user" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  role: UserRole;
  createdAt: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  cuisine: string;
  difficulty: "Easy" | "Medium" | "Hard";
  prepTime: number;
  cookTime: number;
  servings: number;
  calories: number;
  rating: number;
  reviewCount: number;
  ingredients: string[];
  instructions: string[];
  tags: string[];
  authorId: string;
  authorName: string;
  createdAt: string;
  isFeatured: boolean;
}

export interface Review {
  id: string;
  recipeId: string;
  userId: string;
  userName: string;
  userImage?: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface MealPlan {
  id: string;
  userId: string;
  week: string;
  days: {
    day: string;
    breakfast?: Recipe;
    lunch?: Recipe;
    dinner?: Recipe;
  }[];
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
