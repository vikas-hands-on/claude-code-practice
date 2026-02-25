export const CATEGORIES = [
  "Webhooks",
  "Deployment",
  "Infrastructure",
  "CI/CD",
  "Lifecycle",
  "API",
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface Hook {
  id: string;
  name: string;
  description: string;
  category: Category;
  repoUrl: string;
}
