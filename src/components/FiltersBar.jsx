import React from "react";
import styles from "../styles/filters.module.css";

export default function FiltersBar({ filter, setFilter, total, done }) {
  return (
    <div className={styles.bar}>
      <div className={styles.stats}>
        Всего: <b>{total}</b> · Выполнено: <b>{done}</b>
      </div>

      <div className={styles.buttons}>
        <button
          className={`${styles.btn} ${filter === "all" ? styles.active : ""}`}
          type="button"
          onClick={() => setFilter("all")}
        >
          Все
        </button>
        <button
          className={`${styles.btn} ${filter === "active" ? styles.active : ""}`}
          type="button"
          onClick={() => setFilter("active")}
        >
          Активные
        </button>
        <button
          className={`${styles.btn} ${filter === "completed" ? styles.active : ""}`}
          type="button"
          onClick={() => setFilter("completed")}
        >
          Выполненные
        </button>
      </div>
    </div>
  );
}