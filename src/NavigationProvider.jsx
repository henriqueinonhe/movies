import { createContext, useEffect, useMemo, useRef, useState } from "react";

export const NavigationContext = createContext(undefined);

export const NavigationProvider = ({ children }) => {
  const initialPath = location.pathname + location.search + location.hash;
  const [path, setPath] = useState(initialPath);

  const subscribeToPopState = () => {
    const handlePopState = (event) => {
      setPath(event.state?.path ?? "/");
    };

    addEventListener("popstate", handlePopState);

    return () => {
      removeEventListener("popstate", handlePopState);
    };
  };
  const subscribeToPopStateRef = useRef(subscribeToPopState);
  subscribeToPopStateRef.current = subscribeToPopState;

  useEffect(() => {
    subscribeToPopStateRef.current();
  }, []);

  const value = useMemo(
    () => ({
      path,
      setPath,
    }),
    [path]
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
