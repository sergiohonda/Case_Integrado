import "./styles.css"
import { GiCookie } from 'react-icons/gi'
import { FaBoxOpen } from "react-icons/fa"
import { HiHome } from "react-icons/hi"
import { AiFillPhone } from 'react-icons/ai'
import { BiLogIn } from 'react-icons/bi'
import { NavLink } from "react-router-dom"

export default function Header(){

    const onPageStyle={
        boxshadow: '2px 2px 2px #000000',
    }

    return(
        <header>
            <h1>Casa do Biscoito <GiCookie/></h1>
            <div className="menu">
                <NavLink to='/' activeStyle={onPageStyle}><button><HiHome/> Inicial</button></NavLink>
                <NavLink to='/' activeStyle={onPageStyle}><button><GiCookie/> Biscoitos</button></NavLink>
                <NavLink to='/encomendas' activeStyle={onPageStyle}><button><p><FaBoxOpen/> Encomendas</p></button></NavLink>
                <NavLink to='/' activeStyle={onPageStyle}><button><AiFillPhone/> Contato</button></NavLink>
                <NavLink to='/' activeStyle={onPageStyle}><button><BiLogIn/> Login</button></NavLink>
            </div>
        </header>
    )
}