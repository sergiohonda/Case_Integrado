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
                <strong>Preço:</strong> R${data.preco}
            </h2>
        </div>
    )
}