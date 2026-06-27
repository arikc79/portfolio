export interface Project {
  title: string
  description: string
  stack: string[]
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    title: 'VAREL Style — сайт',
    description:
      'E-commerce магазин чоловічого одягу: каталог товарів, оформлення замовлень, адмінпанель із дашбордом продажів і CRM клієнтів. Email-сповіщення через Resend API, Telegram-бот, Cloudinary для медіа. Задеплоєно на Render.',
    stack: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Cloudinary', 'JavaScript'],
    github: 'https://github.com/arikc79/varel-style',
    live: 'https://varel-style.onrender.com/',
  },
  {
    title: 'VAREL Style — мобільний застосунок',
    description:
      'React мобільний застосунок магазину: каталог з фільтрами, кошик із варіантами розмір/колір, оформлення замовлення, VAREL CLUB форма. Аутентифікація та БД через Supabase.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'Capacitor'],
    github: 'https://github.com/arikc79/varel-style-app',
    live: 'https://github.com/arikc79/varel-style-app/releases/tag/v2.0',
  },
  {
    title: 'MusicPortal.Api',
    description:
      'Full-stack музичний портал: REST API на ASP.NET Core з JWT-аутентифікацією та SHA-256 хешуванням паролів. Адмінпанель на React + Material UI з CRUD пісень/жанрів/користувачів, завантаження аудіотреків зі стрімінгом, пошук, мультимовний інтерфейс (UA/EN).',
    stack: ['C#', 'ASP.NET Core', 'React', 'TypeScript', 'Material UI', 'PostgreSQL', 'JWT', 'TanStack Query'],
    github: 'https://github.com/arikc79/MusicPortal.Api',
  },
  {
    title: 'Cinema',
    description:
      'Django-застосунок кінотеатру: каталог фільмів з пошуком і фільтрами, бронювання квитків із перевіркою залишку місць та конфліктів сеансів у залі, відгуки, улюблені, профілі з аватарами, ролі (робітник/глядач). REST API на DRF.',
    stack: ['Python', 'Django', 'DRF', 'SQLite', 'Bootstrap'],
    github: 'https://github.com/arikc79/cinema',
    live: 'https://cinema-1zo1.onrender.com',
  },
  {
    title: 'WinCalc',
    description:
      'WPF десктоп-застосунок для розрахунку вартості вікон ПВХ: мультивіконний інтерфейс, ролі користувачів, хешування паролів, аудит-лог дій, звіти. SQLite через ADO.NET.',
    stack: ['C#', 'WPF', '.NET 9', 'SQLite', 'ADO.NET', 'XAML'],
    github: 'https://github.com/arikc79/WinCalc',
    live: 'https://github.com/arikc79/WinCalc/releases/tag/v1.0',
  },
  {
    title: 'energy-ses',
    description:
      'Застосунок для обліку виробництва сонячної електростанції: введення щомісячних показників, автоматичний розрахунок заробітку за зеленим тарифом, експорт/імпорт БД. Реальні дані, SQLite.',
    stack: ['Python', 'tkinter', 'SQLite', 'Pillow'],
    github: 'https://github.com/arikc79/energy-ses-arapova',
    live: 'https://github.com/arikc79/energy-ses-arapova/releases/tag/v1.0',
  },
]
