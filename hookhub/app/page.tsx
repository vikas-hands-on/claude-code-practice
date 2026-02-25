"use client";

import { useState } from "react";
import type { Category, Hook } from "@/types/hook";
import hooksData from "@/data/hooks.json";
import CategoryFilter from "@/components/category-filter";
import HookCard from "@/components/hook-card";

const hooks: Hook[] = hooksData as Hook[];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const filtered = activeCategory
    ? hooks.filter((h) => h.category === activeCategory)
    : hooks;

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            HookHub
          </h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            Discover open-source cloud hooks for deployments, infrastructure,
            CI/CD, and more.
          </p>
        </header>

        <section className="mb-8">
          <CategoryFilter
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </section>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((hook) => (
            <HookCard key={hook.id} hook={hook} />
          ))}
        </section>
      </div>
    </div>
  );
}
