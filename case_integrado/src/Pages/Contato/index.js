import React from 'react';
import Header from '../../Components/Header';
import {BsFillPersonFill} from 'react-icons/bs';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { AiFillHome } from 'react-icons/ai';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import "./styles.css";

export default function Contato(){
    return(
        <div className="principal">
            <Header/>
            <div className="listaPrincipal">
                <div className="titulo">
                    <h2>Contato:</h2>
                </div>
                <ul className="contatos">
                    <h2> <strong> <BsFillPersonFill/> Proprietária:</strong> Karina Duarte</h2>
                    <h2> <strong> <RiContactsBook2Fill/> Contato:</strong> (21) 996451713</h2>
                    <h2> <strong> <AiFillHome/> Endereço:</strong> Rua Manhuaçu, 500 - Vargem Grande</h2>
                    <h2> <strong> <FaInstagram/> Instagram:</strong> @karina_biscoitos</h2>
                    <h2> <strong> <FaFacebook/> Facebook:</strong> Biscoitos da Karina</h2>
                    <h2> <strong> <FaTwitter/> Twitter:</strong> @karina_biscoitos</h2>
                </ul>
            </div>
        </div>
    )
}