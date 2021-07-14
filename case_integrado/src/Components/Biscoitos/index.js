import React from "react"
import "./styles.css"

export default function Biscoitos({data}){
    return(
        <div className="bloco-biscoito">
            <h2>
                <strong>Nome:</strong> {data.nome}
            </h2>
            <h2>
                <strong>Sabor:</strong> {data.sabor}
            </h2>
            <h2>
                <strong>Quantidade:</strong> {data.quantidade} unidade(s)
            </h2>
        </div>
    )
}