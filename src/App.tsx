import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Create from "./components/Create";
import Details from "./components/Details";
import NotFound from "./components/NotFound";
import SignUp from "./components/SignUp";
import { auth } from "./lib/controller";
import Login from "./components/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Monitor Firebase authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true); // User is authenticated
      } else {
        setIsAuthenticated(false); // User is logged out
      }
      setLoading(false); // Set loading to false once Firebase finishes loading
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    // Display a loading spinner or message while Firebase authentication is loading
    return <div>Loading...</div>;
  }
  return (
    <Routes>
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={isAuthenticated ? <Card /> : <Navigate to="/signUp" />}
      />
      <Route
        path="/hotels/:id"
        element={isAuthenticated ? <Details /> : <Navigate to="/signUp" />}
      />

      <Route path="*" element={<NotFound />} />
      <Route
        path="/create"
        element={isAuthenticated ? <Create /> : <Navigate to="/signUp" />}
      />
      {/* Redirect to the signUp screen as default */}
      {/* <Route path="*" element={<Navigate to="/signUp" />} /> */}
    </Routes>
  );
}

export default App;
