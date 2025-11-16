"use client";

import { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";

type Entry = {
  id: string;
  message: string;
  vibe: "sparkly" | "grounded" | "sunny";
};

const vibeStyles: Record<Entry["vibe"], string> = {
  sparkly:
    "border-pink-400/40 bg-pink-500/20 text-pink-50 shadow-[0_5px_25px_rgba(236,72,153,0.35)]",
  grounded:
    "border-emerald-400/30 bg-emerald-500/15 text-emerald-50 shadow-[0_5px_25px_rgba(16,185,129,0.28)]",
  sunny:
    "border-amber-300/35 bg-amber-400/20 text-amber-50 shadow-[0_5px_25px_rgba(251,191,36,0.3)]",
};

export function MessageBoard() {
  const [entries, setEntries] = useState<Entry[]>([
    {
      id: "default-1",
      message: "Leave a note for future-you to find later.",
      vibe: "sunny",
    },
    {
      id: "default-2",
      message: "Notice one small thing you're proud of today.",
      vibe: "grounded",
    },
  ]);
  const [message, setMessage] = useState("");
  const [vibe, setVibe] = useState<Entry["vibe"]>("sparkly");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!message.trim()) return;

    const entry: Entry = {
      id: uuid(),
      message: message.trim(),
      vibe,
    };

    setEntries((prev) => [entry, ...prev].slice(0, 6));
    setMessage("");
  };

  return (
    <section className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-900 shadow-lg shadow-slate-900/5 backdrop-blur dark:bg-white/8 dark:text-white">
      <div>
        <h3 className="text-xl font-semibold tracking-tight">Glow Board</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-white/60">
          Drop a note, mantra, or anything that makes today brighter.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-5 rounded-3xl border border-slate-300/40 bg-white/70 p-4 shadow-inner dark:border-white/10 dark:bg-white/10"
      >
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={3}
          placeholder="Tell future-you something gentle…"
          className="w-full resize-none rounded-2xl border border-transparent bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:bg-white dark:bg-white/5 dark:text-white dark:focus:border-white/60 dark:focus:bg-white/15"
        />
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2">
            {(["sparkly", "grounded", "sunny"] as Entry["vibe"][]).map(
              (option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setVibe(option)}
                  className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wide transition ${
                    vibe === option
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                      : "bg-white/60 text-slate-600 hover:bg-white/80 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/20"
                  }`}
                >
                  {option}
                </button>
              ),
            )}
          </div>
          <button
            type="submit"
            className="rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900"
          >
            Save note
          </button>
        </div>
      </form>

      <div className="mt-5 grid flex-1 gap-3 overflow-y-auto pb-2">
        {entries.map((entry) => (
          <article
            key={entry.id}
            className={`rounded-3xl border px-4 py-5 text-sm leading-relaxed transition hover:-translate-y-0.5 ${vibeStyles[entry.vibe]}`}
          >
            {entry.message}
          </article>
        ))}
      </div>
    </section>
  );
}
