const KEY_NAME = "user";

const useUser = () => {
  const user = JSON.parse(localStorage.getItem(KEY_NAME)) || { succeeded: false };

  const setUser = data => {
    localStorage.setItem(KEY_NAME, JSON.stringify({ ...data, succeeded: true }));
  };

  const signOut = () => {
    localStorage.removeItem(KEY_NAME);
  };

  return [user, setUser, signOut];
};

export default useUser;