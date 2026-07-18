import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { useState } from "react";

// ─── ДАННЫЕ — редактируй здесь ────────────────────────────────────────────────

const NAME = "Лия Лысенко";
const ROLE = "Методист · Проектировщик образовательного опыта";
const ABOUT_TEXT =
  "Я проектирую системы обучения внутри компаний и помогаю командам выстраивать эффективные образовательные процессы. Работаю на стыке методологии, дизайна опыта и управления знаниями.";
const TELEGRAM_LINK = "https://telegram.me/leahlysenko";

// 4 текстовых факта под фото — редактируй текст в кавычках
// \n внутри строки = перенос строки
const FACTS = [
  "Выпускница CG Education\nи School of Education",
  "Проектирую обучение для взрослых и подростков в IT, нейротехе и креативных индустриях",
  "Веду проекты от брифа до запуска\nи анализа результатов",
  "Помогаю коллегам\nв решении их методических\nзадач",
];

const SERVICES_SUBTITLE =
  "При создании образовательного продукта я могу подключиться как к отдельному блоку работ, так и более комплексно, взяв на себя организацию процесса и лидирование методической команды.";

const SERVICES = [
  {
    title: "Создать образовательный продукт с нуля — от идеи до реализации",
    items: [
      "Проведу брифинг, помогу уточнить цели, задачи и требования к образовательному продукту.",
      "Сформулирую гипотезы и проведу исследование, чтобы собрать концепцию продукта.",
      "Спроектирую программу: цели, путь студента, образовательную среду, методологию и рабочие шаблоны.",
      "Разработаю систему оценки: способы проверки образовательных результатов и ключевые метрики программы.",
      "Помогу команде с разработкой контента и сопровожу первый запуск с последующим анализом результатов.",
    ],
  },
  {
    title: "Переработать существующую программу и улучшить результат",
    items: [
      "Проведу методический аудит, помогу найти слабые места и составлю список улучшений",
      "Сделаю редизайн программы или её части, проведу тестирование",
      "Спроектирую систему оценки программы — если её ещё нет или непонятно, как оценить результаты программы на уровне студента и метрик",
    ],
  },
  {
    title: "Стать опорой и поддержкой,\nесли вы коллега по цеху",
    items: [
      "Проконсультирую и дам второе мнение, как можно решить вашу текущую задачу, поделюсь своим опытом",
      "Поддержу, если вы в начале своего пути и чувствуете неуверенность в своих шагах",
      "Помогу отрефлексировать опыт и определить свой следующий шаг в карьере",
      "И просто выслушаю, если вы чувствуете, что попали в среду «без методистов»",
    ],
  },
];

const PROJECTS_SUBTITLE =
  "При создании образовательного продукта я могу подключиться как к отдельному блоку работ, так и более комплексно, взяв на себя организацию процесса и лидирование методической команды.";

const PROJECTS = [
  {
    id: "01",
    title: "Онбординг-программа",
    subtitle: "Технологическая компания",
    description:
      "Разработала систему адаптации для 200+ сотрудников крупной технологической компании. Проект включал анализ текущих процессов, проектирование нового пути сотрудника и создание учебных материалов.",
    tags: ["Онбординг", "Образование", "HR"],
  },
  {
    id: "02",
    title: "База знаний",
    subtitle: "EdTech-платформа",
    description:
      "Спроектировала корпоративную wiki с нуля: архитектура, навигация, контент. Внедрила процессы поддержания базы в актуальном состоянии и обучила команду работе с ней.",
    tags: ["Wiki", "Управление знаниями"],
  },
  {
    id: "03",
    title: "Курс по управлению временем",
    subtitle: "Внутреннее обучение",
    description:
      "Методологический дизайн и разработка контента для внутреннего обучения. Курс прошли 150+ сотрудников, NPS составил 82%.",
    tags: ["Курс", "LXD"],
  },
  {
    id: "04",
    title: "Менторинг методистов",
    subtitle: "Профессиональное сообщество",
    description:
      "Программа поддержки 15 коллег-специалистов: разборы, обратная связь, рост компетенций. Итогом стал рост удовлетворённости участников на 40%.",
    tags: ["Менторинг", "Сообщество"],
  },
];

// ──────────────────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

// Ставит неразрывный пробел после предлогов и союзов,
// чтобы они не оставались в конце строки.
// Примечание: \b не работает с кириллицей в JS,
// поэтому ищем пробел (или начало строки) перед предлогом.
function nb(text: string): string {
  return text.replace(
    /(^|[\s\u00A0])(в|и|а|на|с|к|о|от|из|за|до|у|по|под|над|при|но|да|то|как|что|или|ни|же|бы|ли|не|со|ко|об|обо|это|для|всё|все|её|его|их)([\s])/gi,
    (_, before, prep) => `${before}${prep}\u00A0`,
  );
}


function PillButton({
  href,
  children,
  variant = "dark",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full text-sm font-semibold px-6 py-2.5 transition-all duration-200 cursor-pointer whitespace-nowrap";
  const styles =
    variant === "dark"
      ? "bg-foreground text-background hover:bg-accent hover:text-accent-foreground"
      : "border border-foreground/30 text-foreground hover:bg-foreground hover:text-background";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof PROJECTS)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-background max-w-md w-full rounded-2xl p-8 md:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-secondary hover:bg-border transition-colors cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="w-4 h-4" />
        </button>
        <span className="text-[11px] font-mono text-muted-foreground tracking-[0.18em] uppercase mb-5 block">
          {project.id}
        </span>
        <h3 className="text-2xl font-bold mb-1 leading-snug">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-6">{project.subtitle}</p>
        <p className="text-base leading-relaxed font-sans text-foreground/80 mb-7">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] uppercase tracking-wider border border-border rounded-full px-3 py-1 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [activeProject, setActiveProject] = useState<(typeof PROJECTS)[0] | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-40 bg-background/96 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          <span className="text-sm font-bold tracking-widest uppercase shrink-0">{NAME}</span>
          <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.12em] uppercase text-muted-foreground">
            <a href="#about"    className="hover:text-foreground transition-colors">Обо мне</a>
            <a href="#services" className="hover:text-foreground transition-colors">С чем могу помочь</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Мои проекты</a>
          </div>
          <PillButton href={TELEGRAM_LINK}>Написать в Telegram</PillButton>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">

        {/* ── HERO — 3-column ref-1 layout ── */}
        <section className="pt-12 pb-12 grid grid-cols-[5fr_6fr_3fr] items-center gap-0">

          {/* LEFT: text — nudges right to slightly overlap photo */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="relative z-10 pr-0 translate-x-10"
          >
            <motion.h1 variants={fadeUp} className="leading-[1.02] tracking-tight mb-5">
              <span className="block text-5xl md:text-7xl font-bold font-sans">
                Привет,
              </span>
              <span
                className="block text-5xl md:text-7xl italic text-accent"
                style={{ fontFamily: "'Bodoni Moda', Georgia, serif" }}
              >
                я Лия
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl font-sans leading-relaxed text-muted-foreground"
            >
              {ROLE}
            </motion.p>
          </motion.div>

          {/* CENTER: photo */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative z-0 overflow-hidden bg-secondary mx-auto"
            style={{
              width: "100%",
              maxWidth: "420px",
              aspectRatio: "3 / 4",
              borderRadius: "0 0 9999px 9999px",
            }}
          >
            <img
              src="/photo.jpg"
              alt="Лия Лысенко"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

          {/* RIGHT: empty column for visual balance */}
          <div />
        </section>

        {/* ── FACTS STRIP ── */}
        <section className="py-12 border-t border-border">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          >
            {FACTS.map((text, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "hsl(162 38% 24%)" }}
                />
                <p className="text-sm font-sans leading-snug text-foreground/80 whitespace-pre-line">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-20 scroll-mt-16 border-t border-border">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 items-start"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold uppercase leading-none"
            >
              Обо мне
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base font-sans leading-relaxed text-muted-foreground"
            >
              {ABOUT_TEXT}
            </motion.p>
          </motion.div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="py-14 scroll-mt-16 border-t border-border">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {/* Heading + subtitle */}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 mb-16">
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-5xl font-bold uppercase leading-none"
              >
                С чем могу<br />помочь
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-base font-sans leading-relaxed text-muted-foreground"
              >
                {SERVICES_SUBTITLE}
              </motion.p>
            </div>

            {/* Three columns — card style like reference */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {SERVICES.map((s, i) => {
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="group rounded-2xl p-6 flex flex-col gap-4 border border-border transition-colors duration-300 hover:bg-[#DBDDD6]"
                  >
                    <span className="text-[10px] text-foreground/40 font-mono tracking-widest">
                      0{i + 1}
                    </span>
                    <h3 className="text-base font-bold leading-snug whitespace-pre-line transition-colors duration-300 group-hover:text-accent">{nb(s.title)}</h3>
                    <ul className="flex flex-col gap-2">
                      {s.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm font-sans text-foreground/70 leading-snug"
                        >
                          <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {nb(item)}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="py-20 scroll-mt-16 border-t border-border">
          {/* Heading — rendered without whileInView to guarantee visibility */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold uppercase leading-none">
              Мои проекты
            </h2>
            <p className="text-base font-sans leading-relaxed text-muted-foreground">
              {PROJECTS_SUBTITLE}
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-border"
          >
            {PROJECTS.map((p) => (
              <motion.button
                key={p.id}
                variants={fadeUp}
                onClick={() => setActiveProject(p)}
                className="group text-left bg-background p-6 flex flex-col gap-3 cursor-pointer hover:bg-[#C7CCC7] transition-colors"
                style={{ minHeight: "220px" }}
              >
                <span className="text-xs font-mono text-muted-foreground tracking-widest">
                  {p.id}
                </span>
                <h3 className="text-base font-bold leading-snug group-hover:text-accent transition-colors flex-1">
                  {p.title}
                </h3>
                <p className="text-xs font-sans text-muted-foreground">{p.subtitle}</p>
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider border border-border rounded-full px-2.5 py-0.5 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.button>
            ))}
          </motion.div>

          <p className="mt-4 text-xs text-muted-foreground tracking-wide">
            Нажмите на карточку, чтобы узнать подробнее
          </p>
        </section>

      </main>

      {/* ── CTA ── */}
      <section id="contact" className="scroll-mt-16 mt-6 border-t border-border bg-[#DBDDD6]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="max-w-6xl mx-auto px-6 py-28 flex flex-col md:flex-row md:items-end justify-between gap-12"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold uppercase leading-none"
          >
            Давайте<br />знакомиться
          </motion.h2>
          <motion.div variants={fadeUp} className="flex flex-col gap-5 md:items-end">
            <p className="text-base font-sans text-muted-foreground max-w-xs md:text-right leading-relaxed">
              Я всегда рада новым знакомствам и обмену опытом, смело пишите мне
            </p>
            <PillButton href={TELEGRAM_LINK} className="self-start md:self-auto">
              Написать в Telegram <ArrowRight className="w-4 h-4" />
            </PillButton>
          </motion.div>
        </motion.div>
      </section>

      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between text-[10px] text-muted-foreground uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} {NAME}</span>
          <span>Portfolio</span>
        </div>
      </footer>

      {/* ── PROJECT MODAL ── */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
