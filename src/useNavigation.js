import { useContext } from "react";
import { NavigationContext } from "./NavigationProvider";

export const useNavigation = () => {
  const value = useContext(NavigationContext);

  if (!value) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }

  const { path, setPath } = value;

  const push = (path) => {
    history.pushState({ path }, "", path);
    setPath(path);
  };

  return { path, push };
};
