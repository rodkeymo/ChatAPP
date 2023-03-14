import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chatroom from "./components/chatroom";
import ProtectedRoutes from "./utils/protectedRoutes";
import SignUP from "./components/auth/siginup";
import Login from "./components/auth/login";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<SignUP />} path ='/signup' />
        <Route element={<ProtectedRoutes />}>
          <Route element={<Chatroom />} path ='/chat' />
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
