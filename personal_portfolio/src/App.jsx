import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Routes/AppRouter.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      <ToastContainer position="top-right" />
    </BrowserRouter>
  );
}
