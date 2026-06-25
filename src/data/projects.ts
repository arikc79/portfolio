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
    description: 'E-commerce магазин чоловічого одягу: каталог, замовлення, адмінпанель. Автоматизація через Make.com webhooks.',
    stack: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Supabase', 'Vercel'],
    github: 'https://github.com/arikc79/varel-style',
    live: 'https://varel-style.onrender.com/',
  },
  {
    title: 'MusicPortal.Api',
    description: 'Full-stack музичний портал: REST API на C# + адмінпанель на Vue.js з Entity Framework Migrations.',
    stack: ['C#', 'ASP.NET Core', 'Vue.js', 'TypeScript', 'Entity Framework'],
    github: 'https://github.com/arikc79/MusicPortal.Api',
  },
  {
    title: 'Kinopoisk SPA',
    description: 'Frontend SPA для перегляду фільмів на React + TypeScript. Налаштований ESLint з type-aware правилами.',
    stack: ['React', 'TypeScript', 'Vite', 'ESLint'],
    github: 'https://github.com/arikc79/kinopoisk',
  },
  {
    title: 'EcoSorterAPI',
    description: 'REST API для ML-класифікації матеріалів. AutoML-модель навчена на датасеті Kaggle, інтеграція Azure Custom Vision.',
    stack: ['C#', 'ASP.NET Core', 'Microsoft.ML', 'Azure', 'Swagger'],
  },
]
