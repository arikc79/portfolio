export interface Project {
  title: string
  description: string
  stack: string[]
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    title: 'VAREL Style',
    description:
      'Мобільний React-застосунок чоловічого одягу: каталог з фільтрами, кошик із варіантами розмір/колір, оформлення замовлення, VAREL CLUB форма. Аутентифікація та БД через Supabase.',
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
      'ASP.NET Core MVC застосунок: пошук фільмів через OMDb API з модальними деталями, власна БД із CRUD-операціями та завантаженням постерів. SQLite.',
    stack: ['C#', 'ASP.NET Core MVC', 'SQLite', 'Entity Framework', 'Bootstrap'],
    github: 'https://github.com/arikc79/MovieSearch',
  },
  {
    title: 'Kinopoisk SPA',
    description:
      'Single-page застосунок для пошуку фільмів через OMDb API. React Query для кешування запитів, MUI для UI, повна типізація через TypeScript.',
    stack: ['React', 'TypeScript', 'Vite', 'MUI', 'React Query', 'Axios'],
    github: 'https://github.com/arikc79/kinopoisk',
  },
  {
    title: 'WinCalc',
    description:
      'WPF десктоп-застосунок для розрахунку вартості вікон ПВХ: мультивіконний інтерфейс, ролі користувачів, хешування паролів, аудит-лог дій, звіти. SQLite через ADO.NET.',
    stack: ['C#', 'WPF', '.NET 9', 'SQLite', 'ADO.NET', 'XAML'],
    github: 'https://github.com/arikc79/WinCalc',
  },
  {
    title: 'energy-ses',
    description:
      'Python-застосунок для обліку виробництва сонячної електростанції: введення щомісячних показників, розрахунок заробітку, графіки динаміки, PDF-акти. tkinter + SQLite.',
    stack: ['Python', 'tkinter', 'SQLite', 'Matplotlib', 'Pillow'],
    github: 'https://github.com/arikc79/energy-ses-arapova',
  },
]
