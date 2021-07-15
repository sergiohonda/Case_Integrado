import React, {useState} from "react"
import "./styles.css"
import {FaCookieBite} from 'react-icons/fa'
import {RiAddCircleFill} from 'react-icons/ri'
import {RiIndeterminateCircleFill} from 'react-icons/ri'

export default function Biscoitos({data}){

    const [quantidadeVar, setQuantity] = useState(data.quantidade);

    const adicionar=()=>{
        setQuantity(quantidadeVar + 1)
    }

    const remover=()=>{
        if(quantidadeVar === 0){
            console.log('Não é possível remover mais itens')
        }
        else{
        setQuantity(quantidadeVar - 1)
        }
    }

    return(
        <div className="bloco-biscoito">
            <div className="info-biscoito">
                <FaCookieBite color="#f5564e"/>
                <h2> <strong>Nome:</strong> {data.nome} </h2>
                <h2> <strong>Sabor:</strong> {data.sabor} </h2>
                <h2> <strong>Quantidade:</strong> {quantidadeVar} unidade(s) </h2>
            </div>
            <div className="botoes-quantidade">
                <button onClick={()=>{adicionar()}}><RiAddCircleFill size="fit"/></button>
                <button onClick={()=>{remover()}}><RiIndeterminateCircleFill size="fit"/></button>
            </div>
        </div>
    )
}