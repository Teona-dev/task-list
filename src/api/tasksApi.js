const BASE_URL = "http://localhost:3001/tasks";

async function request(url, options) {
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `HTTP ${res.status}`);
  }
  
  const contentType = res.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) return null;

  return res.json();
}

export const tasksApi = {
  getAll: () => request(`${BASE_URL}?_sort=createdAt&_order=desc`),

  create: (text) =>
    request(BASE_URL, {
      method: "POST",
      body: JSON.stringify({
        text,
        completed: false,
        createdAt: new Date().toISOString(),
      }),
    }),

  update: (id, patch) =>
    request(`${BASE_URL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(patch),
    }),

  remove: (id) =>
    request(`${BASE_URL}/${id}`, {
      method: "DELETE",
    }),
};