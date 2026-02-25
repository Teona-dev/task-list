import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, fetchTasks, toggleTask } from "../store/tasksSlice.js";
import TaskForm from "../components/TaskForm.jsx";
import TaskItem from "../components/TaskItem.jsx";
import FiltersBar from "../components/FiltersBar.jsx";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import styles from "../styles/page.module.css";
import { AnimatePresence, motion } from "framer-motion";

export default function TasksPage() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((s) => s.tasks);

  const [filter, setFilter] = useLocalStorage("todo:filter", "all");

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const onAdd = useCallback(
    (text) => dispatch(addTask(text)),
    [dispatch]
  );

  const onToggle = useCallback(
    (id, completed) => dispatch(toggleTask({ id, completed })),
    [dispatch]
  );

  const onDelete = useCallback(
    (id) => dispatch(deleteTask(id)),
    [dispatch]
  );
  
  const filtered = useMemo(() => {
    if (filter === "active") return items.filter((t) => !t.completed);
    if (filter === "completed") return items.filter((t) => t.completed);
    return items;
  }, [items, filter]);

  const stats = useMemo(() => {
    const total = items.length;
    const done = items.filter((t) => t.completed).length;
    return { total, done };
  }, [items]);

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Список задач</h1>

        <TaskForm onAdd={onAdd} />

        <FiltersBar filter={filter} setFilter={setFilter} total={stats.total} done={stats.done} />

        {status === "loading" && <div className={styles.info}>Загрузка…</div>}
        {status === "failed" && <div className={styles.error}>Ошибка: {error}</div>}

        {status !== "loading" && filtered.length === 0 ? (
          <div className={styles.empty}>Задач пока нет. Добавьте первую!</div>
        ) : (
          <motion.ul
            className={styles.list}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <AnimatePresence initial={false}>
              {filtered.map((t) => (
                <TaskItem
                  key={t.id}
                  task={t}
                  onToggle={onToggle}
                  onDelete={onDelete}
                />
              ))}
            </AnimatePresence>
          </motion.ul>
        )}
      </div>
    </div>
  );
}