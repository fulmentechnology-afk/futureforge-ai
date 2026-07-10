import { ArrowRight, Sparkles } from "lucide-react";

export default function CareerCTA() {
  return (
    <section className="py-24">
      <div className="container">

        <div className="relative overflow-hidden rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-blue-600/10 p-12 md:p-20">

          {/* Background Glow */}
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
          <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

          <div className="relative z-10 text-center max-w-4xl mx-auto">

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300">

              <Sparkles size={18} />

              Careers at Fulmen Technology

            </div>

            <h2 className="mt-8 text-4xl md:text-6xl font-bold leading-tight">

              Ready To Build The
              <span className="gradient-text">
                {" "}Future With AI?
              </span>

            </h2>

            <p className="mt-8 text-lg text-slate-300 leading-8 max-w-2xl mx-auto">

              Join a passionate team building AI-powered business
              platforms, enterprise applications, automation solutions,
              and next-generation digital products that transform
              businesses worldwide.

            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

              <button className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105">

                View Open Positions

                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />

              </button>

              <button className="rounded-2xl border border-cyan-500/20 bg-white/5 px-8 py-4 text-lg font-semibold backdrop-blur transition hover:bg-white/10">

                Meet Lucy AI

              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}