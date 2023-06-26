import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Public from "./pages/Public";
import Private from "./pages/Private";

import ProtectedRoute from "./layouts/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/public">
          <Route path="" element={<Public />} />
        </Route>

        <Route path="/private" element={<ProtectedRoute />}>
          <Route path="p" element={<Private />} />
          {/* <Route path="/o" element={<SecretAdmin />} /> */}
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
