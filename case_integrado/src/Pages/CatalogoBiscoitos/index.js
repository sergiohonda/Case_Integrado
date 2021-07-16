import React from "react";
import Header from "../../Components/Header";
import Menu from "../../Components/Menu";
import "./styles.css";

export default function CatalogoBiscoitos(){

    const menuBiscoitos =[
        {
            nome: "Espiral de sabores",
            formato: "Espiral",
            peso: 100,
            preco: "3,50",
            validade: 5,
        },    
        {
            nome: "Espiral de sabores",
            formato: "Espiral",
            peso: 150,
            preco: "5,00",
            validade: 5
        },    
        {
            nome: "Espiral de sabores",
            formato: "Espiral",
            peso: 200,
            preco: "6,00",
            validade: 6
        },
        {
            nome: "Amorzinho",
            formato: "Coração",
            peso: 100,
            preco: "3,50",
            validade: 5
        },
        {
            nome: "Amorzinho",
            formato: "Coração",
            peso: 150,
            preco: "5,00",
            validade: 5
        },
        {
            nome: "Amorzinho",
            formato: "Coração",
            peso: 200,
            preco: "6,00",
            validade: 6
        }
    ]

    const renderList = menuBiscoitos.map((item, index)=>(
        <p key={index}>
            <Menu data={item}/>
        </p>
    ));

    return(
        <div className="principal">
            <Header/>
            <div className="listaPrincipal">
                <div className="titulo"> <h2>Menu:</h2> </div>
                <ul>{renderList}</ul>
            </div>       
        </div>
    )
}