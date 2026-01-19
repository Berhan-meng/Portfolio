import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Routes/AppRouter.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Components/Spinner/Loader.jsx";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (or wait for real data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  return (
    <BrowserRouter>
      {loading ? <Loader /> : <AppRouter />}
      <ToastContainer position="top-right" />
    </BrowserRouter>
  );
}
