import { Botao } from "@/components/ui/botao";
import { FormInput } from "@/components/ui/form-input";
import Navbar from "@/components/ui/navbar/navbar";
import './profile/profile.css';

import React from "react";

export default function () {
    return (
        <div className="main">
            <div className="title">
                <p className="meu">Meu</p><p className="perfil">Perfil</p>
            </div>

            <div className="buttons">
                <Botao title="Editar Dados" />
                <Botao title="Redefinir Senha" />
            </div>

            <div className="forms">
                <p className="formLabel">Nome</p>
                <FormInput placeholder={"Seu nome"} />

                <p className="formLabel">Data de Nascimento</p>
                <FormInput placeholder="DD/MM/AAA"/>

                <p className="formLabel">Email</p>
                <FormInput placeholder="email@email.com"/>

                <p className="formLabel">CEP</p>
                <FormInput placeholder="000000-000"/>
            </div>

            <div className="lowerButtons">
                <Botao title="Fale Conosco"/>
                <Botao title="Excluir Conta"/>
            </div>

            <div className="navbar">
                <Navbar />
            </div>
        </div>
    );
}