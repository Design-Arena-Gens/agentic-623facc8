import { ComplimentGenerator } from "../components/ComplimentGenerator";
import { MessageBoard } from "../components/MessageBoard";
import { MoodRing } from "../components/MoodRing";
import Link from "next/link";

export default function Home() {
  const highlights = [
    {
      title: "One Tiny Win",
      note: "Count a 30-second victory. Making tea. Stretching. Smiling at the barista.",
    },
    {
      title: "Something You Noticed",
      note: "Take a snapshot in your mind and describe it in five words.",
    },
    {
      title: "Who Lit You Up",
      note: "Send a quick ping to say thanks for their spark.",
    },
  ];

  const pulses = [
    {
      label: "Morning stretch",
      detail: "Reach up, breathe in, whisper something kind to yourself.",
    },
    {
      label: "Midday glow check",
      detail: "Drink water, look out a window, find a tiny patch of light.",
    },
    {
      label: "Evening wind-down",
      detail: "Put your phone on rest mode and write any lingering sparks here.",
    },
  ];

  const intentions = [
    {
      title: "Move",
      detail: "Bring your shoulders up, back, and down. Do it twice.",
    },
    {
      title: "Notice",
      detail: "Name the softest color around you right now.",
    },
    {
      title: "Reach out",
      detail: "Text a friend: “Just saying hi. Wanted you to know you matter.”",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#f9a8d420,_transparent_55%),radial-gradient(circle_at_bottom,_#38bdf820,_transparent_50%)]" />
      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-16 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-12 pt-6">
          <div className="inline-flex w-max items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs tracking-[0.3em] uppercase text-white/70 shadow-lg shadow-pink-500/20 backdrop-blur">
            Hey! You made it here.
          </div>
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Hiii 👋 This is your cozy corner for sending out soft signals of joy
              and collecting them right back.
            </h1>
            <p className="text-lg leading-relaxed text-white/70 sm:text-xl">
              Take a breath. Unclench your jaw. Let the day slow down for a moment
              while you pen tiny love notes to yourself, remix radiant compliments,
              and tune into the exact mood you&apos;re craving.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Presence online
            </div>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Updated just for you today
            </span>
            <Link
              href="#glow-board"
              className="rounded-full bg-white px-5 py-2 font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-white/80"
            >
              Drop a note
            </Link>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          <ComplimentGenerator />
          <MoodRing />
          <section className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-emerald-500/10 backdrop-blur">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white">
                Tiny intentions
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Pick one of these gentle nudges when you need a reset.
              </p>
            </div>
            <ul className="mt-6 space-y-4 text-sm text-white/70">
              {intentions.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 transition hover:-translate-y-0.5 hover:border-white/30"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-2xl border border-white/10 bg-white/10 p-3 text-xs uppercase tracking-[0.25em] text-white/60">
              Return whenever you need a soft reminder.
            </p>
          </section>
        </section>

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-cyan-500/10 backdrop-blur md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">
              Tiny highlight ritual
            </h2>
            <p className="text-white/70">
              When everything feels loud, return to the small beams. Pick one
              prompt and jot a note on the Glow Board. Repeat as often as you want—
              consistency grows anchors.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {item.note}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <aside className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-inner shadow-black/40">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Pulse moments</h3>
              <p className="text-sm text-white/60">
                Three checkpoints to keep your glow steady.
              </p>
            </div>
            <ul className="space-y-4">
              {pulses.map((pulse) => (
                <li
                  key={pulse.label}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                    {pulse.label}
                  </p>
                  <p className="mt-2 text-sm text-white/60">{pulse.detail}</p>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section
          id="glow-board"
          className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/80 via-indigo-950/80 to-slate-900/80 p-8 text-white shadow-xl shadow-indigo-500/20"
        >
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold tracking-tight">
                Keep the kindness loop open
              </h2>
              <p className="text-base leading-relaxed text-white/70">
                Add a note to your Glow Board whenever something warms your heart.
                Revisit the board on days you need proof the glow is still there.
              </p>
              <div className="space-y-3 text-sm text-white/60">
                <p>Need prompts?</p>
                <ul className="space-y-2">
                  <li className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    ✨ Describe a win you almost forgot to celebrate.
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    💬 Write the kindest message you received this week.
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    🌱 Note one thing you are gently becoming.
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-white/10 p-1 backdrop-blur">
              <div className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6">
                <MessageBoard />
              </div>
            </div>
          </div>
        </section>

        <footer className="pb-10 text-sm text-white/50">
          Built with a sprinkle of shimmer. If this brought a smile, share the
          link or{" "}
          <Link
            href="mailto:hello@softsignals.chat"
            className="underline decoration-dotted underline-offset-4"
          >
            send a love note back
          </Link>
          .
        </footer>
      </main>
    </div>
  );
}
