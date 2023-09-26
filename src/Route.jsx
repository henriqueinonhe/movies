import { useNavigation } from "./useNavigation";

export const Route = ({ path, children }) => {
  const { path: currentPath } = useNavigation();

  const isMatch = new URL(currentPath, location.origin).pathname === path;

  return isMatch ? children : null;
};
