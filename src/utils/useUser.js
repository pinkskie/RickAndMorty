const KEY_NAME = "user";

const useUser = () => {
  const user = JSON.parse(localStorage.getItem(KEY_NAME));

  const setUser = data => {
    localStorage.setItem(KEY_NAME, JSON.stringify({ ...data, succeeded: true }));
  };

  return [user, setUser];
};

export default useUser;