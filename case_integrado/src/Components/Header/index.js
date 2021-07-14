import "./styles.css"

export default function Header(){
    return(
        <header>
            <h1>Casa do Biscoito</h1>
            <div className="menu">
                <button>Inicial</button>
                <button>Biscoitos</button>
                <button><p className="selected">Encomendas</p></button>
                <button>Contato</button>
                <button>Login</button>
            </div>
        </header>
    )
}