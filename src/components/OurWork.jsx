import { useMemo, useState } from 'react';

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'app', label: 'App' },
  { key: 'design', label: 'Design' },
  { key: 'automation', label: 'Automation (n8n)' },
  { key: 'ai', label: 'AI Development' },
];

const projects = [
  // Existing sample projects
  {
    id: 'p1',
    title: 'Marketing Website Revamp',
    category: 'web',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p2',
    title: 'iOS Travel Planner',
    category: 'app',
    img: 'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p3',
    title: 'Brand Design System',
    category: 'design',
    img: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200&auto=format&fit=crop',
  },
  // New Automation (n8n) projects
  {
    id: 'a1',
    title: 'n8n Workflow Dashboard',
    category: 'automation',
    img: 'https://images.unsplash.com/photo-1667372393114-161803d332a2?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'a2',
    title: 'Integration Flow Builder',
    category: 'automation',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop',
  },
  // New AI Development projects
  {
    id: 'ai1',
    title: 'AI Chatbot Interface',
    category: 'ai',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'ai2',
    title: 'ML Ops Pipeline Dashboard',
    category: 'ai',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1400&auto=format&fit=crop',
  },
];

function FilterButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl px-4 py-2 text-sm transition-all border ${
        active
          ? 'bg-white/20 border-white/40 text-white shadow'
          : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/15 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
}

function Card({ title, img }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(59,130,246,0.35)]">
      <img src={img} alt={title} className="h-56 w-full object-cover" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-semibold text-lg drop-shadow">{title}</h3>
      </div>
    </div>
  );
}

export default function OurWork() {
  const [active, setActive] = useState('all');

  const filtered = useMemo(() => {
    if (active === 'all') return projects;
    return projects.filter(p => p.category === active);
  }, [active]);

  return (
    <section id="our-work" className="bg-[#0b0f1a] text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Our Work</h2>
            <p className="mt-2 text-white/70">Explore selected projects across web, apps, design, automation, and AI.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(c => (
              <FilterButton key={c.key} active={active === c.key} onClick={() => setActive(c.key)}>
                {c.label}
              </FilterButton>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(p => (
            <Card key={p.id} title={p.title} img={p.img} />
          ))}
        </div>
      </div>
    </section>
  );
}
