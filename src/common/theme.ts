export const getLocalStorageTheme = () => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return (localStorage.getItem("theme") ?? "light") as "light" | "dark";
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
};

export const setLocalStorageTheme = (theme: "light" | "dark") => {
  window.localStorage.setItem("theme", theme);
};

export const setHtmlDataTheme = (theme: "light" | "dark") => {
  try {
    const element = document.documentElement;
    element.dataset.theme = theme;
  } catch (error) {
    console.error("Error setting data-theme attribute", error);
  }
};

export const getHtmlDataTheme = () => {
  try {
    const element = document.documentElement;
    return element.dataset.theme;
  } catch (error) {
    console.error("Error getting data-theme attribute", error);
  }
};

export const updateHtmlClassTheme = (theme: "light" | "dark") => {
  try {
    const oldTheme = theme === "light" ? "dark" : "light";
    removeHtmlClassTheme(oldTheme);
    setHtmlClassTheme(theme);
  } catch (error) {
    console.error("Error updating class theme", error);
  }
};

export const setHtmlClassTheme = (theme: "light" | "dark") => {
  try {
    const element = document.body;
    element.classList.add(theme);
  } catch (error) {
    console.error("Error setting class theme", error);
  }
};

export const removeHtmlClassTheme = (theme: "light" | "dark") => {
  try {
    const element = document.body;
    element.classList.remove(theme);
  } catch (error) {
    console.error("Error removing class theme", error);
  }
};
