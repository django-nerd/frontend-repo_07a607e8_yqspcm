import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0b0f1a] text-white">      
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Crafting Future‑Ready Digital Experiences
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/70 max-w-2xl">
            Web, apps, automation and AI — built with precision and a modern, glassmorphic aesthetic.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#our-work" className="inline-flex items-center rounded-xl bg-white/10 hover:bg-white/20 text-white px-5 py-3 transition-colors">
              Explore Our Work
            </a>
            <a href="#expertise" className="inline-flex items-center rounded-xl border border-white/20 hover:border-white/40 px-5 py-3 transition-colors">
              Our Expertise
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0f1a]/20 to-[#0b0f1a]" />
    </section>
  );
}
