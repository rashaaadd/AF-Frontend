import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import './App.css'
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SetMFA from "./pages/SetMFA/SetMFA";

function App() {
  const { loading } = useSelector((state: any) => state.alerts)
  console.log(loading, 'hiii')
  return (
    <Router>
      <div className="App">
        {loading && (
          <div className="spinner-parent">
            <div className="spinner-border text-white" role="status"></div>
          </div>
        )}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route path="/" element={<Navigate to="/get-started" />} />
          <Route path="/get-started" element={<Auth />} />
          <Route path="/set-mfa" element={<SetMFA />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
