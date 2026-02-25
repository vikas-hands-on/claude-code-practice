import { Hook } from "@/types/hook";

const categoryColors: Record<string, string> = {
  Webhooks: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  Deployment:
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Infrastructure:
    "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  "CI/CD":
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  Lifecycle:
    "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200",
  API: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
};

export default function HookCard({ hook }: { hook: Hook }) {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div>
        <div className="mb-3 flex items-start justify-between gap-2">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {hook.name}
          </h2>
          <span
            className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[hook.category] ?? "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"}`}
          >
            {hook.category}
          </span>
        </div>
        <p className="line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {hook.description}
        </p>
      </div>
      <a
        href={hook.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-300"
      >
        View Repo
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </a>
    </div>
  );
}
