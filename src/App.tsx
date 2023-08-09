import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage } from "./pages";
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
        <Route path="/" element={<ShareLayout></ShareLayout>}>
          <Route
            index
            element={
              <ProtectedRoute user={user}>
                <HomePage />
              </ProtectedRoute>
            }
          ></Route>
        </Route>

        <Route path="/login" element={<LoginPage />}></Route>

        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
