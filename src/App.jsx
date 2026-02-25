import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import TasksPage from "./pages/TasksPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import styles from "./styles/app.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Link to="/" className={styles.brand}>Todo App</Link>
        <nav className={styles.nav}>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
            Задачи
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
            About
          </NavLink>
        </nav>
      </header>

      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<TasksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<div>Страница не найдена</div>} />
        </Routes>
      </main>
    </div>
  );
}