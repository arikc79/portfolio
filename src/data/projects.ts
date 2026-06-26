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
      'E-commerce магазин чоловічого одягу: каталог товарів, кошик, оформлення замовлень, адмінпанель. Автоматизація через Make.com webhooks. Задеплоєно на Render.',
    stack: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Supabase', 'JavaScript'],
    github: 'https://github.com/arikc79/varel-style',
    live: 'https://varel-style.onrender.com/',
  },
  {
    title: 'VAREL Style — мобільний застосунок',
    description:
      'React мобільний застосунок магазину: каталог з фільтрами, кошик із варіантами розмір/колір, оформлення замовлення, VAREL CLUB форма. Аутентифікація та БД через Supabase.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'React Query'],
    github: 'https://github.com/arikc79/varel-style-app',
  },
  {
    title: 'MusicPortal.Api',
    description:
      'Full-stack музичний портал: REST API на ASP.NET Core з JWT-аутентифікацією, React-адмінпанель для керування піснями, жанрами та користувачами. EF Core + PostgreSQL.',
    stack: ['C#', 'ASP.NET Core', 'React', 'TypeScript', 'Entity Framework', 'PostgreSQL', 'JWT'],
    github: 'https://github.com/arikc79/MusicPortal.Api',
  },
  {
    title: 'MovieSearch',
    description:
      'ASP.NET Core MVC застосунок: пошук фільмів через OMDb API з модальними деталями, власна БД із повним CRUD та завантаженням постерів. SQLite, готовий до деплою на Render.',
    stack: ['C#', 'ASP.NET Core MVC', 'SQLite', 'Entity Framework', 'Bootstrap', 'Docker'],
    github: 'https://github.com/arikc79/MovieSearch',
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
    stack: ['Python', 'tkinter', 'SQLite', 'Matplotlib', 'Pillow'],
    github: 'https://github.com/arikc79/energy-ses-arapova',
    live: 'https://github.com/arikc79/energy-ses-arapova/releases/tag/v1.0',
  },
]
