import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Signin = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        if (!username || !senha) {
            setError("Preencha todos os campos");
            return;
        }

        const success = await login(username, senha);
        if (success) {
            alert("Usuário logado com sucesso!");
            navigate("/home");
        } else {
            setError("Erro ao efetuar login. Verifique suas credenciais.");
        }
    }
    return (
        <C.Container>
            <C.Label>SISTEMA DE LOGIN</C.Label>
            <C.Content>
                <Input
                    type="username"
                    placeholder="Digite seu User Name"
                    value={username}
                    onChange={(e) => [setUsername(e.target.value), setError("")]} />
                <Input
                    type="password"
                    placeholder="Digite sua Senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]} />
                <C.LabelError>{error}</C.LabelError>
                <Button Text="Entrar" onClick={handleLogin} />
                <C.LabelSignin>
                    Não tem uma conta?
                    <C.Strong>
                        <Link to="/signup">&nbsp;Registre-se</Link>
                    </C.Strong>
                </C.LabelSignin>
            </C.Content>
        </C.Container>
    );
}

export default Signin;