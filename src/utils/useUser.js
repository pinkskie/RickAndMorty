const KEY_NAME = "user";

const useUser = () => {
  const user = JSON.parse(localStorage.getItem(KEY_NAME));

  const setUser = data => {
    localStorage.setItem(KEY_NAME, JSON.stringify({ ...data, succeeded: true }));
  };

  if (!user) {
    return [{ succeeded: false }, setUser];
  }

  return [user, setUser];
};

export default useUser;