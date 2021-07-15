import React, { useState } from "react";
import Biscoitos from "../../Components/Biscoitos";
import Header from "../../Components/Header";
import "./styles.css";

export default function EncomendaBiscoitos(){

    const [name, setName] = useState();
    const [flavor, setFlavor] = useState();
    const [quantity, setQuantity] = useState();

    const addHandler=()=>{
        const novoItem = {nome:name, sabor:flavor, quantidade:quantity}
        const novaLista = biscoitos.concat(novoItem)
        setBiscoitos(novaLista)
        setName('')
        setFlavor('')
        setQuantity('')
    }

    const biscoitosPadrao =[
        {
            nome: "Gergelícia",
            sabor: "Gergelim com mel",
            quantidade: 0
        },
        {
            nome: "Amendoamor",
            sabor: "Amendoim",
            quantidade: 0
        },
        {
            nome: "Chocolover",
            sabor: "Chocolate com morango",
            quantidade: 0
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
            <Header/>
            <div className="listaPrincipal">
                <div className="titulo">
                    <h2>Biscoitos disponíveis:</h2>
                </div>
                <ul>{renderList}</ul>
            </div>
            <div className="adder">
                <div className="inputs">
                    <input placeholder="Nome" value={name} onChange={(e)=>setName(e.currentTarget.value)}/>
                    <input placeholder="Sabor" value={flavor} onChange={(e)=>setFlavor(e.currentTarget.value)}/>
                    <input placeholder="Quantidade" value={quantity} onChange={(e)=>setQuantity(e.currentTarget.value)}/>
                </div>
                <button onClick={addHandler}>Adicionar biscoito</button>
            </div>
        </div>
    )
}