import React, { useState } from "react";
import Biscoitos from "../../Components/Biscoitos";
import Header from "../../Components/Header";
import "./styles.css";

export default function EncomendaBiscoitos(){

    const biscoitosDisponiveis =[
        {
            nome: "Espiral de sabores",
            peso: 150,
            quantidade: 0
        },
        {
            nome: "Amorzinho",
            peso: 100,
            quantidade: 0
        },
        {
            nome: "Amorzinho",
            peso: 200,
            quantidade: 0
        }
    ]

    const renderList = biscoitosDisponiveis.map((item, index)=>(
        <p key={index}>
            <Biscoitos data={item}/>
        </p>
    ));


    const addCarrinho=()=>{
        const indice = 0
        while (indice > Object.keys(biscoitosDisponiveis).length){
            if (biscoitosDisponiveis[{indice}].quantidade > 0){
                const novoItem = {nome:biscoitosDisponiveis[{indice}].nome, peso:biscoitosDisponiveis[{indice}].peso, quantidade:biscoitosDisponiveis[{indice}].quantidade}
                const novaLista = carrinho.concat(novoItem)
                setCarrinho(novaLista)
            }
            const indice = indice + 1
        }
    }

    const carrinhoVazio =[]

    const [carrinho, setCarrinho] = useState(carrinhoVazio);

    const carrinhoLista = carrinho.map((item, index)=>(
        <p key={index}>
            <Biscoitos data={item}/>
        </p>
    ));

    return(
        <div className="principal">
            <Header/>
            <div className="listaPrincipal">
                <div className="titulo">
                    <h2>Biscoitos disponíveis:</h2>
                </div>
                <ul>{renderList}</ul>
                <button onClick={addCarrinho} className="botao-carrinho">Adicionar ao carrinho</button>
                <ul>{carrinhoLista}</ul>
            </div>
        </div>
    )
}