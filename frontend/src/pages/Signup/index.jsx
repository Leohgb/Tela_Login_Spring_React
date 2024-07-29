import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";

const Signup = () => {

    const { signup } = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [usernameConf, setUsernameConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleSignup = async () => {

        if (!username | !usernameConf | !senha) {
            setError("Preencha todos os campos");
        } else if (username !== usernameConf) {
            setError("Os e-mails não são iguais");
            return;
        }

        const success = await signup(username, senha);
        if (success) {
            alert("Usuário cadastrado com sucesso!");
            navigate("/")
        } else {
            setError("Erro ao efetuar o cadastro. Verifique suas credenciais.");
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
                    type="username"
                    placeholder="Confirme seu User Name"
                    value={usernameConf}
                    onChange={(e) => [setUsernameConf(e.target.value), setError("")]} />
                <Input
                    type="password"
                    placeholder="Digite sua Senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]} />
                <C.LabelError>{error}</C.LabelError>
                <Button Text="Cadastre-se" onClick={handleSignup} />
                <C.LabelSignup>
                    Já tem uma conta?
                    <C.Strong>
                        <Link to="/">&nbsp;Entre</Link>
                    </C.Strong>
                </C.LabelSignup>
            </C.Content>
        </C.Container>
    );
}

export default Signup;