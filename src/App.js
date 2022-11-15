import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./pages/Account";
import AuthComponent from "./pages/AuthComponent";
import FreeComponent from "./pages/FreeComponent";
import PrivateRoute from "./PrivateRoute";
// import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Account />} />
      <Route path="/free" element={<FreeComponent />} />
      <Route
        path="/auth"
        element={
          <PrivateRoute>
            <AuthComponent />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
