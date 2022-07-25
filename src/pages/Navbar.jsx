import react from 'react';
import myprojectpng from "../imagens/My project.png"
import menu4 from "../imagens/menu-4-32.png"
import "./Feed.css"




const Navbar = () =>{
    return(
        <div className="row">
        <div className="col-sm-12">
            <nav className=" navbar mynavbar"><button onclick="mostrarNavbar()" className="botaoMenu"><img className="menu"
                        src={menu4} alt="Menu branco"/></button><img className="logo"
                    src={myprojectpng} alt="Silhueta de gato branco"/>
            </nav>
        </div>
    </div>

    )
}

export default Navbar
