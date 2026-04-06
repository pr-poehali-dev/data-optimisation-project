import { useState } from "react"
import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

const topics: {
  number: string
  title: string
  category: string
  tag: string
  direction: string
  icon: string
  accent?: string
  content: {
    intro: string
    sections: { heading: string; items: string[] }[]
  }
}[] = [
  {
    number: "01",
    title: "Беременность",
    category: "Подготовка к родам",
    tag: "Основы",
    direction: "left",
    icon: "Heart",
    content: {
      intro: "Беременность — это путь длиной 9 месяцев. Важно подготовиться заранее, чтобы роды прошли спокойно и уверенно.",
      sections: [
        {
          heading: "Базовая подготовка к родам",
          items: [
            "Встать на учёт в женскую консультацию до 12 недель",
            "Сдать все анализы по назначению врача (кровь, моча, УЗИ в 12, 20, 32 недели)",
            "Посетить курсы для будущих мам — дыхание, роды, уход за новорождённым",
            "Выбрать роддом и при желании заключить контракт на роды",
            "Обсудить с врачом план родов и предпочтения",
            "Подготовить документы: паспорт, полис ОМС, обменная карта",
          ],
        },
        {
          heading: "Что взять в роддом — полный список",
          items: [
            "📋 Документы: паспорт, полис ОМС, СНИЛС, обменная карта, родовой сертификат",
            "🧴 Гигиена: зубная щётка и паста, шампунь, гель для душа, мочалка, прокладки послеродовые (5–6 упаковок), одноразовые трусы (10–15 шт.), крем для сосков (Бепантен), влажные салфетки",
            "👗 Одежда маме: ночная рубашка для родов (тёмная), халат, тапочки, носки, бюстгальтер для кормления (2–3 шт.), компрессионные чулки",
            "👶 Малышу: боди с длинным рукавом (3–5 шт.), ползунки (3–5 шт.), шапочки (2–3 шт.), носочки, пеленальные пелёнки (5–7 шт.), подгузники новорождённый размер (1 упаковка)",
            "🍼 Для кормления: прокладки для груди, молокоотсос (по желанию)",
            "📱 Телефон + зарядка, наушники, небольшой перекус (орехи, сухофрукты)",
          ],
        },
      ],
    },
  },
  {
    number: "02",
    title: "Уход за малышом",
    category: "Кормление, сон, режим",
    tag: "Практика",
    direction: "right",
    icon: "Baby",
    content: {
      intro: "Первые месяцы жизни малыша — это адаптация для вас обоих. Режим и знания помогут чувствовать себя увереннее.",
      sections: [
        {
          heading: "Кормление — расписание по возрасту",
          items: [
            "0–1 мес: по требованию, каждые 1.5–2.5 ч., ночью также — грудь не ограничивать",
            "1–3 мес: каждые 2–3 часа, 8–12 раз в сутки, ночью 2–3 кормления",
            "3–6 мес: каждые 3–4 часа, 6–8 раз в сутки, ночные кормления сокращаются",
            "6–8 мес: вводится прикорм — овощные пюре, каши (начинать с 1 ч.л.), 5–6 раз в сутки",
            "8–12 мес: 4–5 раз в сутки + 2–3 прикорма, разнообразие блюд расширяется",
          ],
        },
        {
          heading: "Чем кормить — рекомендации",
          items: [
            "До 6 месяцев — исключительно грудное молоко или адаптированная смесь",
            "Первый прикорм: кабачок, брокколи, цветная капуста — варить и пюрировать",
            "Каши: гречневая, рисовая, кукурузная безглютеновые на воде",
            "Избегать: соль, сахар, мёд, коровье молоко, орехи — до 1 года",
            "Вода: с 6 месяцев, кипячёная или детская бутилированная",
          ],
        },
        {
          heading: "Сон малыша — режим и советы",
          items: [
            "0–3 мес: 16–20 ч. в сутки, днём 3–5 коротких снов по 30–120 мин",
            "3–6 мес: 14–16 ч., 3 дневных сна, ночной сон 10–12 ч. с пробуждениями",
            "6–9 мес: 12–14 ч., 2–3 дневных сна, укладывать в 19:00–20:30",
            "9–12 мес: 2 дневных сна, суммарно 1.5–3 ч., ночь 10–12 ч.",
            "Лучшее время для укладывания: в 19:00–20:00, при первых признаках усталости (зевота, потирание глаз)",
            "Ритуал перед сном: купание → кормление → колыбельная → тёмная комната",
          ],
        },
      ],
    },
  },
  {
    number: "03",
    title: "Восстановление",
    category: "Стресс после родов и релаксация",
    tag: "Здоровье",
    direction: "left",
    icon: "Sparkles",
    content: {
      intro: "Послеродовой период — серьёзное испытание. Забота о себе — это не эгоизм, это необходимость.",
      sections: [
        {
          heading: "Как справиться со стрессом",
          items: [
            "Принять: идеальных мам не бывает, ошибки — это нормально",
            "Просить о помощи близких — с малышом, готовкой, уборкой",
            "Спать, когда спит ребёнок — хотя бы 20 минут восстанавливают силы",
            "Ограничить поток негативных новостей и соцсетей",
            "Общаться с другими мамами — живые группы или онлайн-сообщества",
          ],
        },
        {
          heading: "Музыка и фильмы для расслабления",
          items: [
            "🎵 Музыка: Lo-fi beats, природные звуки (дождь, лес), классика — Spotify, YouTube",
            "🎬 Лёгкие фильмы: романтические комедии, анимация Pixar, добрые сериалы",
            "🧘 Йога и медитация: приложения Insight Timer, Calm, YouTube-каналы для мам",
            "📚 Аудиокниги: слушать во время кормления или прогулки с коляской",
          ],
        },
        {
          heading: "Массаж и физическое восстановление",
          items: [
            "Начинать с лёгкой гимнастики через 6–8 недель после родов (с разрешения врача)",
            "Массаж живота — восстановление мышц пресса, улучшение тонуса",
            "Самомассаж груди при кормлении — снимает напряжение и улучшает лактацию",
            "Ароматерапия: лаванда, ромашка, иланг-иланг — в диффузоре перед сном",
          ],
        },
      ],
    },
  },
  {
    number: "04",
    title: "Послеродовая депрессия",
    category: "Признаки, помощь и поддержка",
    tag: "Важно",
    direction: "right",
    icon: "HeartHandshake",
    accent: "border-pink-300/40",
    content: {
      intro: "Послеродовая депрессия — это не слабость и не плохое материнство. Это медицинское состояние, которое встречается у каждой 5-й мамы. Главное — вовремя распознать и не оставаться с этим один на один.",
      sections: [
        {
          heading: "🚨 Первые признаки — на что обратить внимание",
          items: [
            "Постоянная плаксивость без видимой причины — слёзы несколько дней подряд",
            "Ощущение пустоты или равнодушия к ребёнку — «я должна любить, но ничего не чувствую»",
            "Тревога, которая не проходит: страх навредить малышу, страх остаться наедине с ним",
            "Бессонница даже когда ребёнок спит — мысли не дают отдохнуть",
            "Раздражительность и вспышки гнева на близких без повода",
            "Ощущение, что вы «плохая мать», вина и стыд за свои чувства",
            "Потеря аппетита или, наоборот, постоянное заедание тревоги",
            "Мысли о том, что всем было бы лучше без вас — это серьёзный сигнал, нужна срочная помощь",
          ],
        },
        {
          heading: "✅ Что делать — шаги к выходу",
          items: [
            "Признать: то, что вы чувствуете — реально и требует внимания, а не игнорирования",
            "Рассказать близкому человеку — мужу, маме, подруге. Молчание усугубляет состояние",
            "Обратиться к врачу: терапевт или психиатр поставят диагноз и при необходимости назначат лечение",
            "Психотерапия: когнитивно-поведенческая терапия (КПТ) показывает лучшие результаты при ПРД",
            "Группы поддержки для мам — живые и онлайн, где можно говорить честно без осуждения",
            "Принять помощь: разрешить близким взять малыша, чтобы вы могли поспать и восстановиться",
            "Телефон доверия: 8-800-2000-122 (бесплатно, круглосуточно, по всей России)",
          ],
        },
        {
          heading: "Куда обратиться за помощью",
          items: [
            "👩‍⚕️ Участковый терапевт или акушер-гинеколог — первый шаг, направят к специалисту",
            "🧠 Психиатр или психотерапевт — не страшно, это медицинская помощь как при любой болезни",
            "📞 Телефон доверия: 8-800-2000-122 — бесплатно, анонимно, 24/7",
            "💬 Чат психологической помощи: pomoschryadom.ru — онлайн, бесплатно",
            "👥 Группы поддержки мам: ищите в Telegram по запросу «послеродовая депрессия поддержка»",
            "🏥 ПНД по месту жительства — консультация бесплатна по полису ОМС",
          ],
        },
        {
          heading: "🚫 Что категорически нельзя делать",
          items: [
            "Молчать и ждать, что «само пройдёт» — без помощи состояние усугубляется неделями и месяцами",
            "Стыдиться своих чувств и скрывать их от врача — врачи не осудят, они помогут",
            "Пить алкоголь «чтобы расслабиться» — алкоголь при депрессии резко ухудшает состояние",
            "Самостоятельно принимать антидепрессанты или успокоительные без назначения врача",
            "Оставаться в изоляции — уходить от общения, запираться дома, отказываться от помощи",
            "Читать истории «у меня всё плохо навсегда» в интернете — это не ваша история",
            "Сравнивать себя с «идеальными мамами» из соцсетей — там не показывают правду",
            "Игнорировать мысли о причинении вреда себе или ребёнку — при их появлении вызывайте скорую немедленно",
          ],
        },
      ],
    },
  },
]

const DEPRESSION_INDEX = topics.findIndex((t) => t.tag === "Важно")

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [expanded, setExpanded] = useState<number | null>(null)
  const showBanner = expanded === DEPRESSION_INDEX

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-start overflow-y-auto px-6 pt-24 pb-16 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Темы
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Всё о материнстве</p>
        </div>

        <div className="space-y-0">
          {topics.map((topic, i) => (
            <TopicCard
              key={i}
              topic={topic}
              index={i}
              isVisible={isVisible}
              isExpanded={expanded === i}
              onToggle={() => setExpanded(expanded === i ? null : i)}
            />
          ))}
        </div>
      </div>

      {/* Плавающий баннер линии помощи */}
      <div
        className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ${
          showBanner ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-16 opacity-0 pointer-events-none"
        }`}
      >
        <a
          href="tel:88002000122"
          className="group flex items-center gap-3 rounded-full border border-pink-300/50 bg-black/60 px-5 py-3 shadow-lg shadow-pink-900/20 backdrop-blur-md transition-all duration-300 hover:bg-pink-300/20 hover:border-pink-300/80 hover:scale-105"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-300/20 group-hover:bg-pink-300/30">
            <Icon name="Phone" size={14} className="text-pink-200 group-hover:animate-pulse" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-sans text-xs font-medium text-foreground/90">Линия психологической помощи</span>
            <span className="font-mono text-xs text-pink-200/80">8-800-200-01-22 · бесплатно</span>
          </div>
          <Icon name="ArrowRight" size={14} className="text-foreground/40 group-hover:text-foreground/70 transition-colors" />
        </a>
      </div>
    </section>
  )
}

function TopicCard({
  topic,
  index,
  isVisible,
  isExpanded,
  onToggle,
}: {
  topic: typeof topics[0]
  index: number
  isVisible: boolean
  isExpanded: boolean
  onToggle: () => void
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return topic.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  const isImportant = topic.tag === "Важно"

  return (
    <div
      className={`transition-all duration-700 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <button
        onClick={onToggle}
        className={`group flex w-full items-center justify-between border-b py-5 text-left transition-all duration-300 md:py-7 ${
          isImportant
            ? "border-pink-300/30 hover:border-pink-300/60"
            : "border-foreground/10 hover:border-foreground/30"
        }`}
      >
        <div className="flex items-center gap-4 md:gap-8">
          <span className="font-mono text-sm text-foreground/30 group-hover:text-foreground/50 md:text-base">
            {topic.number}
          </span>
          <div>
            <div className="mb-0.5 flex items-center gap-3">
              <h3 className="font-sans text-2xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-1 md:text-3xl lg:text-4xl">
                {topic.title}
              </h3>
              {isImportant && (
                <span className="rounded-full bg-pink-300/20 px-2.5 py-0.5 font-mono text-xs text-pink-200/90 border border-pink-300/30">
                  Важно знать
                </span>
              )}
            </div>
            <p className="font-mono text-xs text-foreground/50 md:text-sm">{topic.category}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-xs text-foreground/30 md:block">{topic.tag}</span>
          <div className={`transition-transform duration-300 ${isExpanded ? "rotate-45" : "rotate-0"}`}>
            <Icon name="Plus" size={18} className="text-foreground/50" />
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className={`border-b py-6 md:py-8 ${isImportant ? "border-pink-300/20" : "border-foreground/10"}`}>
          {isImportant && (
            <div className="mb-5 flex items-start gap-3 rounded-xl border border-pink-300/25 bg-pink-300/5 p-4">
              <Icon name="HeartHandshake" size={18} className="mt-0.5 shrink-0 text-pink-300/70" />
              <p className="text-sm leading-relaxed text-foreground/80">
                Ты не одна — и это не твоя вина. Послеродовая депрессия лечится, и тысячи мам прошли через это и стали счастливы. Главное — не молчать.
              </p>
            </div>
          )}
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-foreground/70 md:text-base">{topic.content.intro}</p>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {topic.content.sections.map((section, si) => {
              const isLastOdd = si === topic.content.sections.length - 1 && topic.content.sections.length % 2 !== 0
              const isDanger = section.heading.includes("нельзя")
              return (
                <div key={si} className={isLastOdd ? "md:col-span-2" : ""}>
                  <div className="mb-3 flex items-center gap-2">
                    <div className={`h-px w-6 ${isDanger ? "bg-red-300/50" : "bg-foreground/30"}`} />
                    <h4 className={`font-mono text-xs uppercase tracking-wider ${isDanger ? "text-red-300/70" : "text-foreground/60"}`}>
                      {section.heading}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, ii) => (
                      <li key={ii} className="flex gap-2 text-sm leading-relaxed text-foreground/80">
                        <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${isDanger ? "bg-red-300/50" : "bg-foreground/30"}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {isImportant && (
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a
                href="tel:88002000122"
                className="group flex items-center gap-3 rounded-full border border-pink-300/40 bg-pink-300/10 px-6 py-3 transition-all duration-300 hover:bg-pink-300/20 hover:border-pink-300/60 hover:scale-105"
              >
                <Icon name="Phone" size={16} className="text-pink-200/90 group-hover:animate-pulse" />
                <span className="font-sans text-sm font-medium text-foreground/90">
                  Позвонить на линию помощи
                </span>
                <span className="font-mono text-sm text-pink-200/80">
                  8-800-200-01-22
                </span>
              </a>
              <p className="font-mono text-xs text-foreground/40">Бесплатно · Анонимно · Круглосуточно</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}