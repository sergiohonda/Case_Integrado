import React from 'react';
import Header from '../../Components/Header';
import Biscoitos1 from '../../Assets/biscoitos1.jpg';
import Biscoitos2 from '../../Assets/biscoitos2.png';
import Biscoitos3 from '../../Assets/biscoitos3.jpg';
import Biscoitos4 from '../../Assets/biscoitos4.jpg';
import "./styles.css";

export default function Home(){
    return(
        <div className="principal">
            <Header/>
            <div className="imagens">
                <div className='box-imagens'>
                    <img src={Biscoitos1} />
                    <img src={Biscoitos2} />
                </div>
                <div className='box-imagens'>
                    <img src={Biscoitos3} />
                    <img src={Biscoitos4} />
                </div>
            </div>
        </div>
    )
}