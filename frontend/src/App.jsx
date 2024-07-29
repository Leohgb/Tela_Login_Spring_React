import React from "react";
import RoutesApp from "./routes/RoutesApp"; // Correct import path
import { AuthProvider } from "./contexts/AuthContext"; // Ensure correct import path
import GlobalStyle from "./styles/global";

const App = () => (
  <AuthProvider>
    <RoutesApp />
    <GlobalStyle />
  </AuthProvider>
);

export default App;
