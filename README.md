# Todo App

Учебное веб-приложение для управления списком задач, разработанное с использованием современной экосистемы React.

## Технологический стек

- React 18 (функциональные компоненты)
- Vite
- React Router v6
- Redux Toolkit
- JSON Server (имитация REST API)
- CSS Modules
- Framer Motion
- Netlify (deployment)

---

## Архитектура

Проект реализован с разделением на слои:

- `components/` — переиспользуемые UI-компоненты
- `pages/` — маршрутизируемые страницы
- `store/` — управление состоянием (Redux Toolkit)
- `api/` — работа с REST API
- `hooks/` — кастомные React-хуки
- `styles/` — модульные стили (CSS Modules)

---

## Реализованная функциональность

- CRUD-операции через JSON Server
- Клиентская маршрутизация (React Router v6)
- Глобальное управление состоянием (Redux Toolkit)
- Кастомный хук `useLocalStorage`
- Анимация добавления и удаления задач (Framer Motion)
- Оптимизация рендеринга через `useMemo` и `useCallback`

---

## Локальный запуск

1. Установка зависимостей:

```bash
npm install

2. Запуск JSON Server:

npx json-server --watch db.json --port 3001

3. Запуск приложения:

npm run dev

Приложение доступно по адресу:

http://localhost:5173

## Deployment

Проект задеплоен на Netlify:

https://vermillion-gumdrop-afdab2.netlify.app/