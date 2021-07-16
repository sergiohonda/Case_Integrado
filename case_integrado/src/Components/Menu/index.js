import React from "react"
import "./styles.css"
import { BiCookie } from "react-icons/bi"

export default function Menu({data}){

    return(
        <div className="bloco-biscoito">
            <div className="info-biscoito">
                <BiCookie color="#f5564e" size="30px"/>
                <h2> <strong>Nome:</strong> {data.nome} </h2>
                <h2> <strong>Formato:</strong> {data.formato} </h2>
                <h2> <strong>Peso:</strong> {data.peso} gramas</h2>
                <h2> <strong>Preço:</strong> R${data.preco} </h2>
                <h2> <strong>Validade:</strong> {data.validade} meses</h2>
            </div>
        </div>
    )
}