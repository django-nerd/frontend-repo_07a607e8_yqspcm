import { Code, Smartphone, Palette, Workflow, Bot } from 'lucide-react';

function ExpertiseCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.2)] p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_40px_rgba(59,130,246,0.35)]">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-white/10 p-2 border border-white/20">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-3 text-white/70 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Expertise() {
  return (
    <section id="expertise" className="bg-[#0b0f1a] text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Our Expertise</h2>
        <p className="mt-2 text-white/70 max-w-2xl">We deliver end‑to‑end solutions from strategy to deployment across platforms.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ExpertiseCard icon={Code} title="Web Development" desc="High‑performance websites and platforms with modern frameworks and best practices." />
          <ExpertiseCard icon={Smartphone} title="App Development" desc="Native and cross‑platform mobile apps with delightful UX and robust performance." />
          <ExpertiseCard icon={Palette} title="Product & UI Design" desc="Design systems, prototypes and visual identities with a clean, modern aesthetic." />
          <ExpertiseCard icon={Workflow} title="Automation (n8n)" desc="Automate workflows, integrate services, and orchestrate data with n8n." />
          <ExpertiseCard icon={Bot} title="AI Development" desc="Chatbots, copilots and AI pipelines powered by LLMs and ML tooling." />
          <ExpertiseCard icon={Code} title="Cloud & DevOps" desc="CI/CD, observability and scalable infrastructure for reliable delivery." />
        </div>
      </div>
    </section>
  );
}
