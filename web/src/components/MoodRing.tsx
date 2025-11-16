"use client";

import { useState } from "react";

const moods = [
  { label: "Chill", description: "Unwind and let the good vibes roll.", hue: 210 },
  { label: "Curious", description: "Explore every little spark of wonder.", hue: 160 },
  { label: "Bold", description: "Take the leap, even if it's a tiny hop.", hue: 320 },
  { label: "Playful", description: "Let silliness lead the way today.", hue: 45 },
];

export function MoodRing() {
  const [index, setIndex] = useState(1);
  const active = moods[index];

  return (
    <section className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-white shadow-lg shadow-cyan-500/10 backdrop-blur">
      <div>
        <h3 className="text-xl font-semibold tracking-tight">Mood Ring</h3>
        <p className="mt-2 text-sm text-white/60">
          Slide the dial and set the tone for your day.
        </p>
      </div>

      <div className="mt-6 flex flex-col items-center gap-6">
        <div
          className="grid h-32 w-32 place-items-center rounded-full border border-white/20 text-center transition-all"
          style={{
            background: `conic-gradient(from 45deg, hsl(${active.hue} 100% 70%), hsl(${(active.hue + 60) % 360} 100% 20%))`,
            boxShadow: `0 0 40px hsla(${active.hue} 90% 60% / 0.4)`,
          }}
        >
          <span className="text-lg font-semibold drop-shadow">{active.label}</span>
        </div>
        <input
          type="range"
          min={0}
          max={moods.length - 1}
          value={index}
          onChange={(event) => setIndex(Number(event.target.value))}
          className="w-full accent-white/80"
        />
      </div>

      <p className="mt-6 rounded-2xl border border-white/5 bg-white/5 p-4 text-sm leading-relaxed text-white/80">
        {active.description}
      </p>
    </section>
  );
}
