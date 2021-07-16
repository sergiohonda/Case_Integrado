import React, { useState } from "react";
import Header from "../../Components/Header";
import "./styles.css";

export default function Cadastro(){

    const [name, setName] = useState();
    const [day, setDay] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [age, setAge] = useState();
    const [city, setCity] = useState();
    const [district, setDistrict] = useState();
    const [cellphone, setCellphone] = useState();
    const [emailuser, setEmail] = useState();
    const [password, setPassword] = useState();


    const addUser=()=>{
        const novoItem = {nome:name, dia:day, mes:month, ano:year, idade:age, cidade:city, bairro:district, celular:cellphone, email:emailuser, senha:password}
        const novaLista = usuarios.concat(novoItem)
        setUsers(novaLista)
        setName ('')
        setDay ('')
        setMonth ('')
        setYear ('')
        setAge ('')
        setCity ('')
        setDistrict ('')
        setCellphone ('')
        setEmail ('')
        setPassword ('')
    }

    const usuariosCadastrados =[
        {
            nome: "Sérgio Hiroshi Honda",
            dia: 19,
            mes: 11,
            ano: 2001,
            idade: 19,
            cidade: "Rio de Janeiro",
            bairro: "Tijuca",
            celular: 966763672,
            email: "sergiohonda@poli.ufrj.br",
            senha: "123456789"
            
        },
        {
            nome: "Karina",
            sobrenome: "Duarte",
            dia: 13,
            mes: 3,
            ano: 1995,
            idade: 26,
            cidade: "Rio de Janeiro",
            bairro: "Grajaú",
            celular: 996451713,
            email: "karinaduarte@gmail.com",
            senha: "987654321"
        }
    ]

    const [usuarios, setUsers] = useState(usuariosCadastrados);

    return(
        <div className="principal">
            <Header/>
            <div className="listaPrincipal">
                <div className="titulo">
                    <h2>Área de cadastro:</h2>
                </div>
                <div>
                    <div className="bloco-cadastro">
                        <div className="dados-cadastro">
                            <h3>Nome:</h3>
                            <h3>Dia:</h3>
                            <h3>Mês:</h3>
                            <h3>Ano:</h3>
                            <h3>Idade:</h3>
                            <h3>Cidade:</h3>
                            <h3>Bairro:</h3>
                            <h3>Celular:</h3>
                            <h3>Email:</h3>
                            <h3>Senha:</h3>
                        </div>
                        <div className="inputs">
                            <input value={name} onChange={(e)=>setName(e.currentTarget.value)}/>   
                            <input value={day} onChange={(e)=>setDay(e.currentTarget.value)}/>
                            <input value={month} onChange={(e)=>setMonth(e.currentTarget.value)}/>
                            <input value={year} onChange={(e)=>setYear(e.currentTarget.value)}/>
                            <input value={age} onChange={(e)=>setAge(e.currentTarget.value)}/>
                            <input value={city} onChange={(e)=>setCity(e.currentTarget.value)}/>
                            <input value={district} onChange={(e)=>setDistrict(e.currentTarget.value)}/>
                            <input value={cellphone} onChange={(e)=>setCellphone(e.currentTarget.value)}/>
                            <input value={emailuser} onChange={(e)=>setEmail(e.currentTarget.value)}/>
                            <input value={password} onChange={(e)=>setPassword(e.currentTarget.value)}/>
                        </div>
                    </div>
                    <button onClick={addUser} className="botao-cadastro">Cadastrar</button>
                </div>                
            </div>
        </div>
    )
}