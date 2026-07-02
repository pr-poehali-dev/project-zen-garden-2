export interface Experience {
  id: string
  slug: string
  title: string
  company: string
  category: string
  format: string
  price: string
  speaker: string
  speakerRole: string
  description: string
  program: string[]
  location: {
    city: string
    country: string
    venue: string
    lat: number
    lng: number
    isRemote: boolean
  }
  startDate: string
  endDate: string
  color: "pink" | "yellow" | "green" | "blue"
}

export const experiences: Experience[] = [
  {
    id: "1",
    slug: "brow-master-moscow",
    title: "Мастер-класс по архитектуре бровей",
    company: "Beauty Space Moscow",
    category: "Брови и ресницы",
    format: "Офлайн, с моделями",
    price: "12 000 ₽",
    speaker: "Анна Соколова",
    speakerRole: "Топ-мастер, амбассадор бренда",
    description:
      "Практический интенсив, где вы отработаете авторскую технику построения идеальной формы бровей под тип лица. Работаем с настоящими моделями, каждый участник получает индивидуальный разбор.",
    program: [
      "Теория: типы лица и подбор формы",
      "Разметка и построение архитектуры",
      "Окрашивание хной и краской",
      "Работа с моделями под контролем наставника",
      "Разбор ошибок и сертификат",
    ],
    location: {
      city: "Москва",
      country: "Россия",
      venue: "Beauty Space, ул. Тверская, 12",
      lat: 55.7558,
      lng: 37.6173,
      isRemote: false,
    },
    startDate: "2026-07-18",
    endDate: "2026-07-18",
    color: "pink",
  },
  {
    id: "2",
    slug: "nail-forum-spb",
    title: "Форум nail-мастеров: тренды сезона",
    company: "Nail Pro Forum",
    category: "Ногтевой сервис",
    format: "Офлайн, конференция",
    price: "8 500 ₽",
    speaker: "Мария Ветрова",
    speakerRole: "Чемпионка России по нейл-арту",
    description:
      "Большой форум для мастеров маникюра: свежие коллекции, техники дизайна и бизнес-подходы. Более 10 спикеров, зона нетворкинга и выставка брендов.",
    program: [
      "Тренды дизайна сезона осень-зима",
      "Здоровье ногтей и безопасные материалы",
      "Скоростные техники покрытия",
      "Как поднять чек и удержать клиента",
      "Выставка брендов и розыгрыши",
    ],
    location: {
      city: "Санкт-Петербург",
      country: "Россия",
      venue: "Expoforum, Петербургское ш., 64",
      lat: 59.7376,
      lng: 30.3529,
      isRemote: false,
    },
    startDate: "2026-08-02",
    endDate: "2026-08-03",
    color: "yellow",
  },
  {
    id: "3",
    slug: "makeup-workshop-online",
    title: "Онлайн-воркшоп «Вечерний макияж»",
    company: "MUA Academy",
    category: "Макияж",
    format: "Онлайн, с обратной связью",
    price: "4 900 ₽",
    speaker: "Ольга Лебедева",
    speakerRole: "Визажист-стилист, педагог",
    description:
      "Пошаговый онлайн-воркшоп по созданию эффектного вечернего макияжа. Разбираем smoky eyes, стойкость, работу со светом. Запись остаётся у вас навсегда.",
    program: [
      "Подготовка кожи и база под макияж",
      "Техника smoky eyes шаг за шагом",
      "Стрелки и стойкость на весь вечер",
      "Работа с оттенками под цвет глаз",
      "Домашнее задание и разбор от эксперта",
    ],
    location: {
      city: "Онлайн",
      country: "Россия",
      venue: "Zoom + личный кабинет",
      lat: 55.0,
      lng: 60.0,
      isRemote: true,
    },
    startDate: "2026-07-25",
    endDate: "2026-07-25",
    color: "green",
  },
  {
    id: "4",
    slug: "hair-intensive-kazan",
    title: "Интенсив по стрижкам и колористике",
    company: "Hair Lab Kazan",
    category: "Парикмахерское искусство",
    format: "Офлайн, 2 дня",
    price: "18 000 ₽",
    speaker: "Дмитрий Орлов",
    speakerRole: "Стилист-колорист международного класса",
    description:
      "Двухдневный интенсив для парикмахеров: современные стрижки, сложное окрашивание и техники тонирования. Максимум практики на манекенах и моделях.",
    program: [
      "Базовые и трендовые формы стрижек",
      "Сложное окрашивание: airtouch, балаяж",
      "Тонирование и уход за цветом",
      "Практика на моделях",
      "Сертификат и портфолио работ",
    ],
    location: {
      city: "Казань",
      country: "Россия",
      venue: "Hair Lab, ул. Баумана, 44",
      lat: 55.7963,
      lng: 49.1088,
      isRemote: false,
    },
    startDate: "2026-08-15",
    endDate: "2026-08-16",
    color: "blue",
  },
  {
    id: "5",
    slug: "cosmetology-congress-sochi",
    title: "Конгресс косметологов и эстетистов",
    company: "Esthetic Congress",
    category: "Косметология",
    format: "Офлайн, конгресс",
    price: "15 000 ₽",
    speaker: "Елена Крылова",
    speakerRole: "Врач-косметолог, к.м.н.",
    description:
      "Профессиональный конгресс для косметологов: аппаратные методики, уходовые протоколы и новинки индустрии. Лекции, мастер-классы и живые демонстрации.",
    program: [
      "Современные протоколы ухода за кожей",
      "Аппаратная косметология: обзор методик",
      "Продажи и удержание клиентов в косметологии",
      "Живые демонстрации процедур",
      "Нетворкинг и выставка оборудования",
    ],
    location: {
      city: "Сочи",
      country: "Россия",
      venue: "Гранд Отель, Курортный пр., 75",
      lat: 43.5855,
      lng: 39.7231,
      isRemote: false,
    },
    startDate: "2026-09-05",
    endDate: "2026-09-06",
    color: "pink",
  },
]

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug)
}
