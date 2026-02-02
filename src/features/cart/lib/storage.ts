const KEY = "cart";

export const loadCart = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "null");
  } catch {
    return null;
  }
};

export const saveCart = (state: unknown) => {
  localStorage.setItem(KEY, JSON.stringify(state));
};
