const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

const parseOrThrow = async (res, fallback) => {
  if (res.ok) return res.json();
  const data = await res.json().catch(() => ({}));
  throw new Error(data.error || fallback);
};

export const fetchPet = async () => {
  const res = await fetch(`${API_URL}/api/pet`);
  return parseOrThrow(res, "Failed to fetch pet");
};

export const actOnPet = async (action) => {
  const res = await fetch(`${API_URL}/api/pet/${action}`, {
    method: "POST"
  });
  return parseOrThrow(res, "Failed to act on pet");
};

export const fetchPetTypes = async () => {
  const res = await fetch(`${API_URL}/api/pet/types`);
  return parseOrThrow(res, "Failed to fetch pet types");
};
