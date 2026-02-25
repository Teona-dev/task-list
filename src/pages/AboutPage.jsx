import React from "react";
import styles from "../styles/page.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>About</h1>
        <p className={styles.text}>
          Это учебный проект на React 18 + Vite + React Router v6 + Redux Toolkit + JSON Server.
        </p>
        <ul className={styles.text}>
          <li>CRUD через API (json-server)</li>
          <li>Фильтры, хранение фильтра в localStorage через кастомный хук</li>
          <li>Анимации добавления/удаления через framer-motion</li>
          <li>Оптимизация через useMemo/useCallback</li>
        </ul>
      </div>
    </div>
  );
}