import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useState } from "react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const projects = [
  {
    id: "01",
    title: "Онбординг-программа",
    description: "Разработала систему адаптации для 200+ сотрудников",
    tags: ["Onboarding", "EdTech", "Knowledge Base"]
  },
  {
    id: "02",
    title: "База знаний",
    description: "Спроектировала корпоративную wiki с нуля",
    tags: ["Wiki", "Knowledge Management", "Notion"]
  },
  {
    id: "03",
    title: "Курс по управлению временем",
    description: "Методологический дизайн и контент",
    tags: ["Time Management", "LXD", "Course Design"]
  },
  {
    id: "04",
    title: "Менторинг методистов",
    description: "Программа поддержки 15 коллег",
    tags: ["Mentorship", "Community", "Leadership"]
  }
];

export default function App() {
  const [openProject, setOpenProject] = useState<string | null>("01");

  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold tracking-widest uppercase text-sm">
            Королева
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
            <a href="#about" className="hover:text-accent transition-colors">Обо мне</a>
            <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#projects" className="hover:text-accent transition-colors">Проекты</a>
            <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-[calc(100vh-4rem)]">
            <div className="flex-1 p-6 md:p-12 lg:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border">
              <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-6">
                  Елена<br />Королева
                </motion.h1>
                <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl text-muted-foreground font-light max-w-md">
                  Методист &middot; Проектировщик образовательного опыта
                </motion.p>
              </motion.div>
            </div>
            <div className="flex-1 p-6 md:p-12 lg:p-20 flex items-center justify-center bg-secondary/30 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="w-full aspect-[3/4] max-w-md bg-border/30 rounded-sm flex items-center justify-center relative overflow-hidden"
              >
                <span className="text-sm tracking-widest uppercase text-muted-foreground font-medium">Ваше фото</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4 Facts */}
        <section className="border-b border-border">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4"
          >
            {[
              { stat: "5+ лет", label: "в методологии" },
              { stat: "20+", label: "проектов" },
              { stat: "3", label: "направления" },
              { stat: "100+", label: "обученных специалистов" }
            ].map((fact, i) => (
              <motion.div key={i} variants={fadeUpVariant} className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-border last:border-r-0 odd:border-r md:odd:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r">
                <div className="text-3xl md:text-4xl font-bold mb-2">{fact.stat}</div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{fact.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="border-b border-border scroll-m-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 p-6 md:p-12 lg:p-20 border-b md:border-b-0 md:border-r border-border flex items-start">
              <h2 className="text-sm font-bold tracking-widest uppercase mt-2">Обо мне</h2>
            </div>
            <div className="w-full md:w-2/3 p-6 md:p-12 lg:p-20">
              <motion.p 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
                className="text-2xl md:text-4xl font-light leading-relaxed md:leading-relaxed max-w-3xl"
              >
                Я проектирую системы обучения внутри компаний и помогаю командам выстраивать эффективные образовательные процессы. Работаю на стыке методологии, дизайна опыта и управления знаниями.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-b border-border scroll-m-16">
          <div className="max-w-7xl mx-auto flex flex-col">
            <div className="p-6 md:p-12 lg:p-20 border-b border-border">
              <h2 className="text-sm font-bold tracking-widest uppercase">С чем могу помочь</h2>
            </div>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3"
            >
              {[
                { title: "Проектирование обучения", desc: "Разработка программ, курсов и треков развития под задачи бизнеса" },
                { title: "Системы управления знаниями", desc: "Базы знаний, онбординг, корпоративные wiki и процессы передачи экспертизы" },
                { title: "Поддержка методистов", desc: "Консультации, разборы кейсов, ревью материалов для коллег-специалистов" }
              ].map((service, i) => (
                <motion.div key={i} variants={fadeUpVariant} className="p-8 md:p-12 lg:p-20 border-b md:border-b-0 md:border-r border-border last:border-b-0 md:last:border-r-0">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-b border-border scroll-m-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 p-6 md:p-12 lg:p-20 border-b md:border-b-0 md:border-r border-border flex items-start">
              <h2 className="text-sm font-bold tracking-widest uppercase mt-2">Мои проекты</h2>
            </div>
            <div className="w-full md:w-2/3 flex flex-col">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className={`border-b border-border last:border-b-0 flex flex-col transition-colors duration-300 ${openProject === project.id ? 'bg-secondary/20' : 'hover:bg-secondary/10'}`}
                >
                  <button 
                    onClick={() => setOpenProject(openProject === project.id ? null : project.id)}
                    className="w-full text-left p-6 md:p-12 flex items-center justify-between focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-center gap-6 md:gap-12">
                      <span className="text-sm md:text-base text-muted-foreground font-mono">{project.id}</span>
                      <span className="text-xl md:text-3xl font-bold">{project.title}</span>
                    </div>
                    <motion.div 
                      animate={{ rotate: openProject === project.id ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ArrowUpRight className="w-6 h-6 text-muted-foreground" />
                    </motion.div>
                  </button>
                  <motion.div 
                    initial={false}
                    animate={{ height: openProject === project.id ? "auto" : 0, opacity: openProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden px-6 md:px-12"
                  >
                    <div className="pb-8 md:pb-12 max-w-2xl ml-[3.25rem] md:ml-[4.5rem]">
                      <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs uppercase tracking-wider border border-border px-3 py-1 rounded-full text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-secondary/30 scroll-m-16">
          <div className="max-w-7xl mx-auto p-12 md:p-24 lg:p-32 text-center flex flex-col items-center justify-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-6xl font-extrabold mb-6">Давайте поговорим</motion.h2>
              <motion.p variants={fadeUpVariant} className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12">
                Напишите мне в Telegram — расскажу подробнее о своём опыте и обсудим вашу задачу.
              </motion.p>
              <motion.a 
                variants={fadeUpVariant}
                href="https://t.me/username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all rounded-none group"
              >
                Написать в Telegram
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-xs text-muted-foreground font-medium uppercase tracking-widest">
          <div>&copy; {new Date().getFullYear()} Елена Королева</div>
          <div className="hidden md:block">LXD Portfolio</div>
        </div>
      </footer>
    </div>
  );
}
