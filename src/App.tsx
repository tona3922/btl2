import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailTour, HomePage, LoginPage } from "./pages";
import ProtectedRoute from "./pages/protected";
import ShareLayout from "./layouts/ShareLayout";

const App: React.FC = () => {
  const user = localStorage.getItem("user");

  // useEffect(() => {
  //   if (!user) {
  //     user = localStorage.getItem("user");
  //   }
  // }, [user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute user={user}>
              <ShareLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<HomePage />}></Route>

          <Route path="/tour/:id" element={<DetailTour />}></Route>
        </Route>

        <Route path="/login" element={<LoginPage />}></Route>

        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
