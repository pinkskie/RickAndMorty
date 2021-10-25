import { useCallback, useMemo } from "react";

const KEY_NAME = "user";

const useUser = () => {
  const user = useMemo(() => JSON.parse(localStorage.getItem(KEY_NAME)) || { succeeded: false }, []);

  const setUser = useCallback(data => {
    localStorage.setItem(KEY_NAME, JSON.stringify({ ...data, succeeded: true }));
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(KEY_NAME);
    window.location.href = "/login";
  }, []);

  return [user, setUser, signOut];
};

export default useUser;