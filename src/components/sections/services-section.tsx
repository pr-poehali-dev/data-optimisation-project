import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"

const articles = [
  {
    image: "https://cdn.poehali.dev/projects/786bdcb3-9127-4718-9784-fd08e80fd34c/files/a3cd8b39-9eb5-4a2e-ac7d-62b8533e55a4.jpg",
    tag: "Уход",
    title: "Купание и гигиена",
    excerpt: "Первое купание пугает почти каждую маму. На самом деле это проще, чем кажется — и даже приятно для малыша.",
    direction: "top",
    body: [
      "Температура воды: 36–37°C — проверяйте локтем, не рукой.",
      "Время купания: 5–10 минут, каждый день или через день.",
      "Уши и нос: чистить только снаружи, ватными палочками не лезть внутрь.",
      "После купания: промокните мягким полотенцем, не трите.",
      "Пупок: обрабатывайте хлоргексидином до полного заживления (7–14 дней).",
      "Детский крем или масло наносить на сухие участки — щёчки, локтевые сгибы.",
    ],
  },
  {
    image: "https://cdn.poehali.dev/projects/786bdcb3-9127-4718-9784-fd08e80fd34c/files/f91aec14-573a-4ce2-96f9-21f8347df535.jpg",
    tag: "Питание",
    title: "Кормление",
    excerpt: "Кормить по требованию или по часам? Грудь или смесь? Разберём честно и без лишних страхов.",
    direction: "right",
    body: [
      "Грудное молоко — лучшее питание до 6 месяцев, иммунитет и тепло мамы в одном.",
      "Если грудь болит — проверьте захват: рот малыша должен захватывать не только сосок, но и ареолу.",
      "Смесь: выбирайте адаптированную по возрасту, готовьте строго по инструкции.",
      "Первый прикорм в 6 месяцев: кабачок или брокколи — 1 ч.л., постепенно увеличивая.",
      "Признак сытости: малыш сам отпускает грудь, спокоен, набирает вес.",
      "Норма мочеиспусканий: 8–12 раз в сутки = малыш получает достаточно молока.",
    ],
  },
  {
    image: "https://cdn.poehali.dev/projects/786bdcb3-9127-4718-9784-fd08e80fd34c/files/0169201f-1ea3-447e-90f6-9101bfce72b1.jpg",
    tag: "Мама",
    title: "Антистресс для мамы",
    excerpt: "Послеродовая хандра — это нормально. Но есть простые способы вернуть себе лёгкость и радость каждый день.",
    direction: "left",
    body: [
      "10 минут тишины в день — уже восстановление. Попросите кого-то побыть с малышом.",
      "Музыка: Lo-fi, звуки природы, классика — включайте фоном во время кормления.",
      "Фильмы: тёплые комедии, Pixar, лёгкие сериалы — смотрите без чувства вины.",
      "Йога для мам: 15 минут утром — YouTube, каналы @mamayoga или Insight Timer.",
      "Прогулка с коляской = движение + воздух + смена картинки. Хотя бы 20 минут.",
      "Если грусть не проходит 2+ недели — обратитесь к врачу, это не слабость.",
    ],
  },
  {
    image: "https://cdn.poehali.dev/projects/786bdcb3-9127-4718-9784-fd08e80fd34c/files/a3cd8b39-9eb5-4a2e-ac7d-62b8533e55a4.jpg",
    tag: "Развитие",
    title: "Массаж и развитие",
    excerpt: "Нежный массаж — это не только приятно, но и очень полезно: успокаивает, укрепляет и помогает малышу расти.",
    direction: "bottom",
    body: [
      "Начинать можно с 3–4 недель, когда заживёт пупок.",
      "Масло для массажа: миндальное или специальное детское — согрейте в руках перед нанесением.",
      "Движения: лёгкие, поглаживающие, по часовой стрелке на животике — помогает от колик.",
      "Время: 10–15 минут после купания, когда малыш сытый и в хорошем настроении.",
      "Не делать: при температуре, прививке в этот день, раздражении кожи.",
      "Ваши руки — лучший инструмент. Спокойно, нежно, с улыбкой — малыш чувствует всё.",
    ],
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-start overflow-y-auto px-6 pt-24 pb-16 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Советы
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Практические руководства</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:gap-6">
          {articles.map((article, i) => (
            <ArticleCard
              key={i}
              article={article}
              index={i}
              isVisible={isVisible}
              isExpanded={expanded === i}
              onToggle={() => setExpanded(expanded === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ArticleCard({
  article,
  index,
  isVisible,
  isExpanded,
  onToggle,
}: {
  article: typeof articles[0]
  index: number
  isVisible: boolean
  isExpanded: boolean
  onToggle: () => void
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (article.direction) {
        case "left": return "-translate-x-16 opacity-0"
        case "right": return "translate-x-16 opacity-0"
        case "top": return "-translate-y-16 opacity-0"
        case "bottom": return "translate-y-16 opacity-0"
        default: return "opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 backdrop-blur-sm transition-all duration-700 hover:border-foreground/20 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {!isExpanded && (
        <div className="relative h-44 overflow-hidden md:h-52">
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-foreground/15 px-3 py-1 font-mono text-xs text-foreground/90 backdrop-blur-md">
            {article.tag}
          </span>
        </div>
      )}

      <div className="p-5 md:p-6">
        <h3 className="mb-2 font-sans text-xl font-light text-foreground md:text-2xl">{article.title}</h3>

        {!isExpanded && (
          <p className="mb-4 text-sm leading-relaxed text-foreground/70">{article.excerpt}</p>
        )}

        {isExpanded && (
          <ul className="mb-4 space-y-2">
            {article.body.map((tip, ti) => (
              <li key={ti} className="flex gap-2 text-sm leading-relaxed text-foreground/80">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={onToggle}
          className="font-mono text-xs text-foreground/50 transition-colors hover:text-foreground/90 underline underline-offset-4"
        >
          {isExpanded ? "Свернуть" : "Читать полностью →"}
        </button>
      </div>
    </div>
  )
}
