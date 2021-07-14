import React, { useState } from "react";
import Biscoitos from "../../Components/Biscoitos";
import "./styles.css"

export default function ListaBiscoitos(){

    const [name, setName] = useState();
    const [flavor, setFlavor] = useState();
    const [price, setPrice] = useState();

    const addHandler=()=>{
        const novoItem = {nome:name, sabor:flavor, preco:price}
        const novaLista = biscoitos.concat(novoItem)
        setBiscoitos(novaLista)
    }

    const biscoitosPadrao =[
        {
            nome: "Gergelícia",
            sabor: "Gergelim com mel",
            preco: "5,50"
        },
        {
            nome: "Amendoamor",
            sabor: "Amendoim",
            preco: "4,50"
        },
        {
            nome: "Chocolover",
            sabor: "Chocolate com morango",
            preco: "5,00"
        }
    ]

    const [biscoitos, setBiscoitos] = useState(biscoitosPadrao);

    const renderList = biscoitos.map((item, index)=>(
        <p key={index}>
            <Biscoitos data={item}/>
        </p>
    ));

    return(
        <div className="principal">
            <div className="listaPrincipal">
                <div className="titulo">
                    <h2>Biscoitos disponíveis:</h2>
                </div>
                <ul>{renderList}</ul>
            </div>
            <div className="adder">
                <div className="inputs">
                    <input placeholder="Nome" onChange={(e)=>setName(e.currentTarget.value)}/>
                    <input placeholder="Sabor" onChange={(e)=>setFlavor(e.currentTarget.value)}/>
                    <input placeholder="Preço" onChange={(e)=>setPrice(e.currentTarget.value)}/>
                </div>
                <button onClick={addHandler}>Adicionar biscoito</button>
            </div>
        </div>
    )
}