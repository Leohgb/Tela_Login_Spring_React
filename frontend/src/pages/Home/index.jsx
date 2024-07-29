import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useAuth } from "../../contexts/AuthContext";
import * as C from "./styles";

const Home = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>Home</C.Title>
      <Button Text="Deslogar" onClick={() => [logout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;