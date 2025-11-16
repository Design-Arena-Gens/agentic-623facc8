"use client";

import { useMemo, useState } from "react";

const compliments = [
  "You're a spark of good energy today.",
  "Your kindness changes the room.",
  "Someone is smiling because of you.",
  "Your ideas make ordinary moments feel new.",
  "You bring a thoughtful calm everywhere you go.",
  "Your curiosity keeps the world interesting.",
  "Tiny steps you take today become ripples tomorrow.",
  "You notice the details that matter most.",
  "There's magic in the way you show up for people.",
  "You have a talent for making others feel seen.",
];

function getRandomCompliment(exclude: string | null) {
  const pool = exclude
    ? compliments.filter((entry) => entry !== exclude)
    : compliments;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function ComplimentGenerator() {
  const [current, setCurrent] = useState<string>(() =>
    getRandomCompliment(null),
  );
  const [history, setHistory] = useState<string[]>([]);

  const nextCompliment = useMemo(
    () => getRandomCompliment(current),
    [current],
  );

  const handleShuffle = () => {
    setHistory((prev) => [current, ...prev.slice(0, 2)]);
    setCurrent(nextCompliment);
  };

  return (
    <section className="h-full rounded-3xl border border-white/10 bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-slate-900/60 p-6 text-white shadow-lg shadow-purple-500/10 backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight">
          Compliment Mixer
        </h3>
        <button
          onClick={handleShuffle}
          className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium transition hover:bg-white/25"
        >
          Shuffle
        </button>
      </div>
      <p className="mt-6 text-lg leading-relaxed text-white/90">{current}</p>
      {history.length > 0 && (
        <div className="mt-6 space-y-2 text-sm text-white/60">
          <p className="font-medium uppercase tracking-[0.2em] text-white/70">
            Recent sparks
          </p>
          <ul className="space-y-1">
            {history.map((entry) => (
              <li
                key={entry}
                className="rounded-xl border border-white/5 bg-white/5 px-3 py-2"
              >
                {entry}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
