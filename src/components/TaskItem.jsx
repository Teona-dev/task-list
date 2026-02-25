import React, { useCallback } from "react";
import styles from "../styles/taskItem.module.css";
import { motion } from "framer-motion";

export default function TaskItem({ task, onToggle, onDelete }) {
  const handleToggle = useCallback(
    (e) => onToggle(task.id, e.target.checked),
    [onToggle, task.id]
  );

  const handleDelete = useCallback(
    () => onDelete(task.id),
    [onDelete, task.id]
  );

  return (
    <motion.li
      className={`${styles.item} ${task.completed ? styles.completed : ""}`}
      layout
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.18 }}
    >
      <label className={styles.label}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
        />
        <span className={styles.text}>{task.text}</span>
      </label>

      <button className={styles.delete} type="button" onClick={handleDelete} aria-label="Удалить">
        ×
      </button>
    </motion.li>
  );
}