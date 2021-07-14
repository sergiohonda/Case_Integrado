import React, { useState } from "react";
import Biscoitos from "../../Components/Biscoitos";
import "./styles.css"

export default function ListaBiscoitos(){

    const [name, setName] = useState();
    const [flavor, setFlavor] = useState();
    const [quantity, setQuantity] = useState();

    const addHandler=()=>{
        const novoItem = {nome:name, sabor:flavor, quantidade:quantity}
        const novaLista = biscoitos.concat(novoItem)
        setBiscoitos(novaLista)
    }

    const biscoitosPadrao =[
        {
            nome: "Gergelícia",
            sabor: "Gergelim com mel",
            quantidade: "2"
        },
        {
            nome: "Amendoamor",
            sabor: "Amendoim",
            quantidade: "4"
        },
        {
            nome: "Chocolover",
            sabor: "Chocolate com morango",
            quantidade: "5"
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
                    <input placeholder="Quantidade" onChange={(e)=>setQuantity(e.currentTarget.value)}/>
                </div>
                <button onClick={addHandler}>Adicionar biscoito</button>
            </div>
        </div>
    )
}