import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

// ─── ДАННЫЕ — редактируй здесь ────────────────────────────────────────────────

const NAME = "Твоё Имя";
const ROLE = "Методист · Проектировщик образовательного опыта";
const ABOUT_TEXT =
  "Я проектирую системы обучения внутри компаний и помогаю командам выстраивать эффективные образовательные процессы. Работаю на стыке методологии, дизайна опыта и управления знаниями.";
const TELEGRAM_LINK = "https://t.me/username"; // ← замени на свою ссылку

const FACTS = [
  { stat: "5+", label: "лет в методологии" },
  { stat: "20+", label: "завершённых проектов" },
  { stat: "3", label: "направления работы" },
  { stat: "100+", label: "обученных специалистов" },
];

const SERVICES = [
  {
    title: "Проектирование обучения",
    desc: "Разработка программ, курсов и треков развития под задачи бизнеса",
  },
  {
    title: "Управление знаниями",
    desc: "Базы знаний, онбординг, корпоративные wiki и процессы передачи экспертизы",
  },
  {
    title: "Поддержка методистов",
    desc: "Консультации, разборы кейсов, ревью материалов для коллег-специалистов",
  },
];

const PROJECTS = [
  {
    id: "01",
    title: "Онбординг-программа",
    description:
      "Разработала систему адаптации для 200+ сотрудников крупной технологической компании.",
    tags: ["Онбординг", "Образование", "HR"],
  },
  {
    id: "02",
    title: "База знаний",
    description:
      "Спроектировала корпоративную wiki с нуля: архитектура, навигация, контент.",
    tags: ["Wiki", "Управление знаниями"],
  },
  {
    id: "03",
    title: "Курс по управлению временем",
    description:
      "Методологический дизайн и разработка контента для внутреннего обучения.",
    tags: ["Курс", "LXD"],
  },
  {
    id: "04",
    title: "Менторинг методистов",
    description:
      "Программа поддержки 15 коллег-специалистов: разборы, обратная связь, рост.",
    tags: ["Менторинг", "Сообщество"],
  },
];

// ──────────────────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-none flex flex-col">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-start justify-between gap-4 p-6 text-left w-full group cursor-pointer"
      >
        <div>
          <span className="block text-xs text-muted-foreground font-mono mb-3 tracking-widest">
            {project.id}
          </span>
          <span className="block text-xl font-bold leading-snug group-hover:text-accent transition-colors">
            {project.title}
          </span>
        </div>
        <span className="mt-1 shrink-0 text-muted-foreground">
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-border pt-4">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider border border-border px-2.5 py-1 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-xs font-bold tracking-[0.2em] uppercase">{NAME}</span>
          <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.15em] uppercase text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">Обо мне</a>
            <a href="#services" className="hover:text-foreground transition-colors">Услуги</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Проекты</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">

        {/* HERO */}
        <section className="pt-20 pb-24 grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 items-start">

          {/* Left: name + photo */}
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Привет, я
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-6xl md:text-8xl font-extrabold leading-[1.0] tracking-tight mb-8"
            >
              {NAME.split(" ").map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base text-muted-foreground max-w-xs leading-relaxed mb-10">
              {ROLE}
            </motion.p>
            <motion.a
              variants={fadeUp}
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background text-xs font-bold uppercase tracking-widest px-6 py-3 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Написать мне <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>
          </motion.div>

          {/* Center: photo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="w-52 md:w-64 aspect-[3/4] bg-secondary flex items-center justify-center shrink-0"
          >
            {/* ЗАМЕНИ IMG: раскомментируй строку ниже и укажи путь к своему фото */}
            {/* <img src="/photo.jpg" alt="Фото" className="w-full h-full object-cover" /> */}
            <span className="text-xs tracking-widest uppercase text-muted-foreground">Ваше фото</span>
          </motion.div>

          {/* Right: stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col gap-8 pt-2"
          >
            {FACTS.map((f, i) => (
              <motion.div key={i} variants={fadeUp} className="text-right">
                <div className="text-4xl font-extrabold leading-none">{f.stat}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1 max-w-[100px] ml-auto leading-tight">
                  {f.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-24 scroll-mt-16 border-t border-border">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold uppercase leading-none mb-12">
              Обо мне
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl text-muted-foreground"
            >
              {ABOUT_TEXT}
            </motion.p>
          </motion.div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-24 scroll-mt-16 border-t border-border">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold uppercase leading-none mb-16">
              С чем могу<br />помочь
            </motion.h2>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {SERVICES.map((s, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <span className="block text-xs text-muted-foreground font-mono mb-4 tracking-widest">0{i + 1}</span>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24 scroll-mt-16 border-t border-border">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold uppercase leading-none mb-16">
              Мои проекты
            </motion.h2>
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
            >
              {PROJECTS.map((p) => (
                <motion.div key={p.id} variants={fadeUp}>
                  <ProjectCard project={p} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

      </main>

      {/* CTA */}
      <section id="contact" className="scroll-mt-16 mt-8 border-t border-border bg-secondary/40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-6xl mx-auto px-6 py-28 flex flex-col md:flex-row md:items-end justify-between gap-12"
        >
          <motion.h2
            variants={fadeUp}
            className="text-5xl md:text-7xl font-extrabold uppercase leading-none"
          >
            Давайте<br />поговорим
          </motion.h2>
          <motion.div variants={fadeUp} className="flex flex-col gap-6 md:items-end">
            <p className="text-sm text-muted-foreground max-w-xs md:text-right leading-relaxed">
              Напишите мне в Telegram — расскажу подробнее о своём опыте и обсудим вашу задачу.
            </p>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-foreground text-background text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-accent hover:text-accent-foreground transition-colors self-start md:self-auto"
            >
              Написать в Telegram <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between text-[10px] text-muted-foreground uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} {NAME}</span>
          <span>Portfolio</span>
        </div>
      </footer>
    </div>
  );
}
