import { Navigate } from "react-router-dom";

type TProtectedRoute = {
  user: unknown;

  children: React.ReactNode;
};

const ProtectedRoute: React.FC<TProtectedRoute> = ({ user, children }) => {
  if (user) {
    return children;
  }

  return <Navigate to={"/login"} />;
};

export default ProtectedRoute;
