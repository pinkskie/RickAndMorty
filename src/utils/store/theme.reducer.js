// action
export const toggleTheme = { type: "TOGGLE_THEME" };

// initial state
const isLight = localStorage.getItem("light");

// get state
const getState = isLight => ({
  isLight,
  label: isLight ? "Выключена" : "Включена"
});

// reducer
const theme = (state = getState(isLight === "true"), { type }) => {
  if (type === toggleTheme.type) {
    localStorage.setItem("light", !isLight);
    return getState(!state.isLight);
  }
  return state;
};

export default theme;
