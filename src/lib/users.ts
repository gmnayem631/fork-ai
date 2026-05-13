import { User } from "@/types";

// In-memory user store (persists during server session)
const USERS: User[] = [
  {
    id: "admin1",
    name: "Admin User",
    email: "admin@forkai.com",
    role: "admin",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop",
    createdAt: "2024-01-01",
  },
  {
    id: "user1",
    name: "Demo User",
    email: "user@forkai.com",
    role: "user",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop",
    createdAt: "2024-01-01",
  },
];

// Passwords stored separately (in real app this would be hashed in DB)
export const USER_PASSWORDS: Record<string, string> = {
  "admin@forkai.com": "admin123",
  "user@forkai.com": "user123",
};

export function getAllUsers(): User[] {
  return USERS;
}

export function findUserByEmail(email: string): User | undefined {
  return USERS.find((u) => u.email.toLowerCase() === email.toLowerCase());
}

export function createUser(data: {
  name: string;
  email: string;
  password: string;
}): User {
  const newUser: User = {
    id: `user_${Date.now()}`,
    name: data.name,
    email: data.email,
    role: "user",
    createdAt: new Date().toISOString().split("T")[0],
  };
  USERS.push(newUser);
  USER_PASSWORDS[data.email] = data.password;
  return newUser;
}
