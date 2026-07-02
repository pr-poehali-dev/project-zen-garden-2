import { useParams, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { getExperienceBySlug } from "@/lib/experience-data"

function formatDate(start: string, end: string) {
  const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" }
  const startDate = new Date(start).toLocaleDateString("ru-RU", options)
  if (start === end) return startDate
  const endDate = new Date(end).toLocaleDateString("ru-RU", options)
  return `${startDate} — ${endDate}`
}

export default function EventPage() {
  const { slug } = useParams<{ slug: string }>()
  const event = slug ? getExperienceBySlug(slug) : undefined

  if (!event) {
    return (
      <div className="min-h-screen bg-[#0B0C0F] text-[#F2F3F5] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-4xl md:text-6xl font-medium mb-4">Мероприятие не найдено</h1>
        <p className="text-[#A7ABB3] mb-8">Возможно, оно уже прошло или ссылка устарела.</p>
        <Link to="/">
          <Button className="glass-button px-8 py-6 text-base rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white">
            Вернуться к афише
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-[#0B0C0F] text-[#F2F3F5] overflow-x-hidden">
      <header className="fixed top-6 left-6 z-40 border border-white/10 backdrop-blur-md bg-[#0B0C0F]/80 rounded-[16px]">
        <div className="px-6">
          <div className="flex items-center gap-6 h-14">
            <Link
              to="/"
              className="text-lg md:text-xl font-semibold font-mono hover:text-pink-400 transition-colors duration-300"
            >
              GLAMDATE
            </Link>
          </div>
        </div>
      </header>

      <section
        className="relative min-h-[60vh] flex items-end px-4 pt-32 pb-16 overflow-hidden"
        style={{
          backgroundImage: `url('/hero-landscape.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0F] via-[#0B0C0F]/70 to-[#0B0C0F]/40 pointer-events-none" />
        <div className="max-w-[900px] w-full mx-auto relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors mb-6"
          >
            <Icon name="ArrowLeft" size={16} />
            Назад к афише
          </Link>
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-2 rounded-full mb-6 text-xs md:text-sm text-[#A7ABB3]">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            {event.category}
          </div>
          <h1 className="font-serif text-[36px] leading-[1.1] md:text-[60px] md:leading-[1.05] font-medium mb-4 text-balance">
            {event.title}
          </h1>
          <p className="text-[#A7ABB3] text-base md:text-lg">{event.company}</p>
        </div>
      </section>

      <section className="relative px-4 py-16 md:py-20">
        <div className="max-w-[900px] w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4">О мероприятии</h2>
            <p className="text-[#A7ABB3] text-base md:text-lg leading-relaxed mb-10">{event.description}</p>

            <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6">Программа</h2>
            <div className="space-y-4">
              {event.program.map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-4 border border-white/10 rounded-xl">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm text-pink-400">
                    {i + 1}
                  </span>
                  <span className="text-sm md:text-base text-[#F2F3F5] pt-0.5">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="md:col-span-1">
            <div className="sticky top-28 border border-white/10 rounded-2xl p-6 backdrop-blur-md bg-white/5">
              <div className="font-serif text-3xl font-medium mb-6">{event.price}</div>
              <div className="space-y-4 mb-6">
                <div className="flex gap-3 items-start">
                  <Icon name="Calendar" size={18} className="text-pink-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="text-[#A7ABB3]">Дата</div>
                    <div>{formatDate(event.startDate, event.endDate)}</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="MapPin" size={18} className="text-pink-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="text-[#A7ABB3]">Место</div>
                    <div>{event.location.city}</div>
                    <div className="text-[#A7ABB3] text-xs mt-1">{event.location.venue}</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="Sparkles" size={18} className="text-pink-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="text-[#A7ABB3]">Формат</div>
                    <div>{event.format}</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="User" size={18} className="text-pink-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="text-[#A7ABB3]">Спикер</div>
                    <div>{event.speaker}</div>
                    <div className="text-[#A7ABB3] text-xs mt-1">{event.speakerRole}</div>
                  </div>
                </div>
              </div>
              <Button className="glass-button w-full py-6 text-base rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 text-white">
                Забронировать место
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
