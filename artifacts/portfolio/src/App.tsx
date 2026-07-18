import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { useState } from "react";

// ─── ДАННЫЕ — редактируй здесь ────────────────────────────────────────────────

const NAME = "Лия Лысенко";
const ROLE = "Методист · Проектировщик образовательного опыта";
const ABOUT_TEXT =
  "Почти 9 лет я\u00a0работаю в\u00a0сфере обучения взрослых. За\u00a0это время я\u00a0сменила несколько ролей: была специалистом по\u00a0оценке персонала, организатором и\u00a0куратором корпоративного обучения, сборщиком электронных курсов. При\u00a0этом я\u00a0всегда участвовала в\u00a0проектировании учебных программ, была открыта к\u00a0новым инструментам и\u00a0подходам — и\u00a0со\u00a0временем это стало моей основной профессией.\n\nДля меня важно создавать не\u00a0просто материалы, а\u00a0образовательные системы, которые действительно работают и\u00a0приносят результат — компаниям, проектам и\u00a0людям, которые через это обучение проходят.";
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
  "Больше о\u00a0моём опыте и\u00a0образовании можно узнать из\u00a0резюме.\nЕго я\u00a0предоставлю по\u00a0запросу.";

const PROJECTS = [
  {
    id: "01",
    title: "Редизайн вводной программы о\u00a0креативных индустриях",
    audience: "Подростки, студенты 1-го курса",
    company: "МКТ",
    task: "Переосмыслить вводный курс «Введение в\u00a0креативные индустрии» для студентов 1-го курса (14–15 лет). Первый запуск прошёл хаотично и\u00a0без измеримых результатов. Нужно было создать систему, которая познакомит подростков с\u00a0миром креативных профессий и\u00a0даст опыт первых самостоятельных проектов.",
    result: "5-недельная лаборатория креативных индустрий, где студенты проходят 10 творческих проб в\u00a0кино, маркетинге и\u00a0дизайне, формируя насмотренность и\u00a0создавая первое портфолио.",
    decisions: [
      "На брифинге стало ясно: первокурсникам тяжело в\u00a0строго лекционном формате, а\u00a0самостоятельно вести проекты без кураторства они пока не\u00a0умеют. Поэтому каждая проба идёт по\u00a0единому алгоритму: Разогрев\u00a0→ Теория\u00a0→ Практика\u00a0→ Презентация — вся работа идёт внутри занятия, без домашних заданий.",
      "Подростки редко любят рефлексировать, но\u00a0именно это помогает закрепить насмотренность. Моя команда внедрила «Скетчбук креатора» — личное пространство для самовыражения, которое к\u00a0концу курса становится первым портфолио из\u00a0работ по\u00a0всем 10 пробам.",
      "У\u00a0многих творческих профессий есть свои ритуалы, поэтому каждая проба начинается именно с\u00a0него — чтобы студенты с\u00a0первых минут могли проникнуться духом индустрии. Так, например, в\u00a0начале блока про кино студенты разбивают тарелку с\u00a0названием занятия, а\u00a0кусочки тарелки уносят домой на\u00a0память.",
    ],
    review: {
      text: "«Спасибо, что провели исследования, которые мы\u00a0не\u00a0сделали сами. Очень мощная история про саморефлексию! Классная история со\u00a0скетчбуком. Сквозной инструмент для работы. Никто не\u00a0хочет рефлексировать в\u00a0конце занятия. Вы\u00a0нашли очень крутую форму — очень хочется эту форму дальше дорабатывать и\u00a0работать с\u00a0ней».",
      author: "Константин Левушкин, академический директор МКТ",
    },
  },
  {
    id: "02",
    title: "Разработка программы\nо\u00a0современной\nскульптуре",
    audience: "Художники, начинающие скульпторы",
    company: "MSCA",
    task: "Спроектировать среднесрочную офлайн-программу «Основы современной скульптуры» для начинающих скульпторов, которая поможет молодым художникам перейти от\u00a0интуитивных экспериментов к\u00a0осознанной художественной практике: научиться формулировать концепцию, выбирать материал под идею и\u00a0создавать объекты современного искусства.",
    result: "9-недельный офлайн-интенсив по\u00a0современной скульптуре, который помогает начинающим художникам войти в\u00a0профессию через практические эксперименты с\u00a0материалами, групповую рефлексию и\u00a0совместное обсуждение искусства, встречи с\u00a0профессионалами сообщества — для постепенного формирования авторского высказывания.",
    decisions: [
      "Одна из\u00a0бизнес-целей заказчика — расширить продуктовую линейку и\u00a0создать курс-трамплин к\u00a0двухгодичной программе по\u00a0современному искусству. Поэтому провели исследование рынка аналогичных программ в\u00a0России и\u00a0за рубежом и\u00a0серию глубинных интервью, чтобы собрать лучшие подходы к\u00a0обучению современной скульптуре и\u00a0повысить практическую полезность программы для будущих студентов.",
      "Программа выстроена в\u00a0комбинированном подходе: практическая работа в\u00a0мастерской сочетается с\u00a0лекциями о\u00a0современном искусстве, дискуссиями и\u00a0разборами работ современных скульпторов, экскурсиями и\u00a0общением с\u00a0кураторами и\u00a0руководителями музеев и\u00a0галерей.",
      "Студенты работают с\u00a0разнообразием материалов и\u00a0подходов к\u00a0созданию современной скульптуры — от\u00a0привычной глины до\u00a0редимейда.",
    ],
    review: {
      text: "«Была проведена огромная работа, на\u00a0которую в\u00a0условиях операционной реализации у\u00a0нас бы просто не\u00a0хватило времени и\u00a0возможностей. Учебный план получился логичным и\u00a0последовательным. С\u00a0огромным интересом погружаемся в\u00a0результаты исследований и\u00a0уже в\u00a0этом году начнём внедрять курс в\u00a0реализацию!»",
      author: "Данила Чернышов, методический блок MSCA",
    },
  },
  {
    id: "03",
    title: "Telegram-бот для\u00a0тренировки навыков саморегуляции",
    audience: "Взрослая аудитория Казахстана",
    company: "NeuroForce",
    task: "Спроектировать верхнюю ступень воронки для казахстанского нейротех-стартапа — бесплатный Telegram-бот, который мягко знакомит холодную аудиторию с\u00a0подходом компании — методом биологической обратной связи — и\u00a0подводит к\u00a0флагманскому продукту. Ключевой запрос заказчика — нащупать язык и\u00a0формат, которые резонируют с\u00a0казахстанской аудиторией.",
    result: "Telegram-помощник по\u00a0запросу: под актуальное состояние пользователя (успокоиться, собраться, восстановить силы) даёт короткое упражнение и\u00a0через замеры до/после помогает измерить эффект от\u00a0тренировки.",
    decisions: [
      "Изначальная концепция предполагала ограниченный по\u00a0дням формат — около 10 дней. Но\u00a0после серии тестов и\u00a0глубинных интервью стало понятно, что аудитории интересен продукт, к\u00a0которому можно возвращаться постоянно — тогда, когда это необходимо. Поэтому концепция продукта изменилась: вместо мини-курса решили сделать тренажёр.",
      "Биологическая обратная связь — совершенно новый и\u00a0незнакомый подход для аудитории тренажера. Поэтому знакомство с\u00a0методом происходит нарративно, через параллельный теоретический трек, доступный по\u00a0желанию, а\u00a0основной акцент — на\u00a0тренировках.",
      "Выбранный формат тренажера расширяет возможности заказчика: бот становится не\u00a0просто верхней ступенью воронки, а\u00a0работает и\u00a0на\u00a0удержание пользователей флагманского курса.",
    ],
    link: {
      label: "Посмотреть прототип тренажера",
      url: "https://soeprot3.netlify.app/",
    },
    review: {
      text: "«Версия прототипа, получившаяся в\u00a0итоге, превосходит по\u00a0попаданию в\u00a0целевую аудиторию и\u00a0маркетингово-экономическому эффекту изначальную задачу в\u00a0брифе — благодаря тому, что вы\u00a0провели тесты на\u00a0реальных пользователях и\u00a0их болях. Совместная работа помогла нам расширить узкое место в\u00a0привлечении внимания к\u00a0нашему основному продукту».",
      author: "основатель NeuroForce",
    },
  },
  {
    id: "04",
    title: "Построение системы обучения и\u00a0сертификации партнеров",
    audience: "IT-специалисты",
    company: "IT-вендор РФ",
    note: "Действующий проект, веду с\u00a02024 года по\u00a0сей день",
    task: "Создать с\u00a0нуля процедуру онбординга и\u00a0оценки квалификации специалистов компаний-партнёров на\u00a0одном из\u00a0продуктов вендора. Ранее у\u00a0команды продукта не\u00a0было ни\u00a0одной программы обучения и\u00a0ни\u00a0одного аттестованного партнёра — нужен был механизм, который гарантирует, что в\u00a0проекты вендора попадают только специалисты с\u00a0подтверждённым уровнем квалификации.",
    result: "4 продуктовые программы-онбординга для разных направлений технических специалистов, 4 аттестационных экзамена, которые я\u00a0веду под ключ уже 2 года — от\u00a0взаимодействия с\u00a0заказчиком и\u00a0предметными экспертами до\u00a0проектирования программ, разработки материалов и\u00a0квалификационных листов оценки.",
    responsibilities: {
      title: "Что ещё, кроме проектирования, входит в\u00a0мою зону ответственности",
      items: [
        "Проведение самих аттестаций и\u00a0взаимодействие с\u00a0кандидатами от\u00a0компаний-партнёров.",
        "Находить предметных экспертов от\u00a0продукта: без их вовлечённости не\u00a0создать базу знаний и\u00a0не\u00a0провести аттестацию. Поэтому приходится балансировать между скоростью обновлений в\u00a0продукте, выпуском материалов и\u00a0высокой занятостью экспертов.",
      ],
    },
    decisionsTitle: "Как проект развивался",
    decisions: [
      "Первые полгода ушли на\u00a0выстраивание процессов с\u00a0нуля и\u00a0создание первой базы знаний и\u00a0серии сертификаций по\u00a0всем четырём ролям — остальные полтора года это уже запуск, постоянные доработки и\u00a0развитие программы как живого продукта.",
      "Формат аттестационного экзамена прошёл через серию изменений: первая версия была скорее формальной проверкой, сейчас экзамен приближен к\u00a0боевым условиям работы с\u00a0продуктом — это снижает риск, что специалист будет совершать в\u00a0проекте дорогостоящие ошибки уже после аттестации.",
    ],
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
        className="relative bg-background max-w-xl w-full rounded-2xl shadow-2xl max-h-[88vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Шапка — не скроллится */}
        <div className="px-8 pt-8 md:px-10 md:pt-10 pb-5 border-b border-border shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-secondary hover:bg-border transition-colors cursor-pointer"
            aria-label="Закрыть"
          >
            <X className="w-4 h-4" />
          </button>
          <span className="text-[11px] font-mono text-muted-foreground tracking-[0.18em] uppercase mb-4 block">
            {project.id}
          </span>
          <h3 className="text-2xl font-bold mb-1 leading-snug whitespace-pre-line">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.company}</p>
        </div>

        {/* Тело — скроллится */}
        <div className="overflow-y-auto px-8 py-7 md:px-10 flex flex-col gap-7">

          {project.note && (
            <p className="text-xs font-mono text-accent uppercase tracking-widest border border-accent/30 rounded-full px-3 py-1 self-start">
              {project.note}
            </p>
          )}

          {project.task && (
            <div>
              <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                Задача
              </p>
              <p className="text-sm leading-relaxed text-foreground/80">{project.task}</p>
            </div>
          )}

          {project.result && (
            <div>
              <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                Что получилось в итоге
              </p>
              <p className="text-sm leading-relaxed text-foreground/80">{project.result}</p>
            </div>
          )}

          {project.responsibilities && (
            <div>
              <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
                {project.responsibilities.title}
              </p>
              <ul className="flex flex-col gap-2">
                {project.responsibilities.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-muted-foreground mt-1 shrink-0">–</span>
                    <p className="text-sm leading-relaxed text-foreground/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.decisions.length > 0 && (
            <div>
              <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
                {project.decisionsTitle ?? "Ключевые решения"}
              </p>
              <ul className="flex flex-col gap-4">
                {project.decisions.map((d, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[11px] font-mono text-muted-foreground mt-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/80">{d}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.link && (
            <a
              href={project.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold border border-foreground/30 rounded-full px-5 py-2 hover:bg-foreground hover:text-background transition-colors self-start"
            >
              {project.link.label} →
            </a>
          )}

          {project.review && (
            <div className="border-t border-border pt-6">
              <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
                Отзыв заказчика
              </p>
              <blockquote className="text-sm leading-relaxed text-foreground/80 italic mb-3">
                {project.review.text}
              </blockquote>
              <p className="text-xs text-muted-foreground">— {project.review.author}</p>
            </div>
          )}

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
              <span className="block text-5xl md:text-7xl text-accent" style={{ fontFamily: "'Cormorant', serif", fontWeight: 400 }}>
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
              className="text-base font-sans leading-relaxed text-muted-foreground whitespace-pre-line"
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
                    className="group rounded-2xl p-6 flex flex-col gap-4 border border-border transition-colors duration-300 hover:bg-[#E5E5DE]"
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
            <p className="text-base font-sans leading-relaxed text-muted-foreground whitespace-pre-line">
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
                className="group text-left bg-background p-6 flex flex-col gap-3 cursor-pointer hover:bg-[#E5E5DE] transition-colors"
                style={{ minHeight: "220px" }}
              >
                <span className="text-xs font-mono text-muted-foreground tracking-widest">
                  {p.id}
                </span>
                <h3 className="text-base font-bold leading-snug group-hover:text-accent transition-colors whitespace-pre-line">
                  {p.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-snug flex-1">{p.audience}</p>
                <div className="pt-2">
                  <span className="text-[11px] border border-border rounded-full px-3 py-1 text-muted-foreground">
                    {p.company}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>

          <p className="mt-10 text-xs text-muted-foreground tracking-wide">
            Нажмите на карточку, чтобы узнать подробнее
          </p>
        </section>

      </main>

      {/* ── CTA ── */}
      <section id="contact" className="scroll-mt-16 mt-6 border-t border-border bg-[#E5E5DE]">
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
