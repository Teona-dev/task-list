import React, { useMemo, useRef, useState } from "react";
import styles from "../styles/taskForm.module.css";

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const canAdd = useMemo(() => text.trim().length > 0, [text]);

  const submit = (e) => {
    e.preventDefault();
    const clean = text.trim();
    if (!clean) return;

    onAdd(clean);
    setText("");
    inputRef.current?.focus();
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <input
        ref={inputRef}
        className={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Новая задача…"
        aria-label="Новая задача"
      />
      <button className={styles.button} type="submit" disabled={!canAdd}>
        Добавить
      </button>
    </form>
  );
}