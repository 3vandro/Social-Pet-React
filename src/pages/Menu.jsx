import react from 'react';
import user16white from "../imagens/user-16-white.png"
import paw16 from "../imagens/paw-16.png"
import { Link } from 'react-router-dom'
import newspaper16white from "../imagens/newspaper-16-white.png"



const Menu = () =>{
    return(
       
        <div className="col-md-3 p-3 mysidebar flex-shrink-0 bg-white" style={{display:'none'}}>

        <ul className="list-unstyled ps-0">
            <li className="mb-1">
                <button className="perfil mudacor btn btn-toggle align-items-center rounded collapsed" onmouseover="corPerfil()" onmouseout="corPerfil2()"
                    data-bs-toggle="collapse"
                    data-bs-target="#home-collapse" aria-expanded="true">
                    <h5><img className="userOrange" src={user16white} alt="Silhueta de usuário laranja"/><img
                            style={{display:'none'}} className="userWhite" src={user16white}
                            alt="Silhueta de usuário branca"/><b>
                            Perfil</b></h5>
                </button>

                <div className="collapse show home-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1">
                        <li><Link to="/PaginaInicial" as={Navigator} className="colocarsub link rounded">Página inicial</Link></li>
                        <li><Link to="/Amigos" as={Navigator} className="colocarsub link rounded">Amigos</Link></li>
                        <li><Link to="/Fotos" as={Navigator} className="colocarsub link rounded">Fotos</Link></li>
                        <li><Link to="/Eventos" as={Navigator} className="colocarsub link rounded">Eventos</Link></li>
                    </ul>
                </div>
            </li>
            <hr/>
            <li className="mb-1">
                <button className="adocaoAnimais mudacor btn btn-toggle align-items-center rounded" onmouseover="corPatinha()" onmouseout="corPatinha2()"
                    data-bs-toggle="collapse"
                    data-bs-target="#dashboard-collapse" aria-expanded="true" >
                    

                    <h5><img className="pawOrange" src={paw16} alt="Patinha laranja"/><img
                            style={{display:'none'}} className="pawWhite" src={paw16}
                            alt="Patinha branca"/> <b>Adoção de animais</b>
                    </h5>
                </button>
                <div className="collapse show dashboard-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1">
                        <li><Link to="/Adote" as={Navigator} className="colocarsub link rounded">Adote um animal</Link></li>
                        <li><Link to="/Anuncie" as={Navigator} className="colocarsub link rounded">Anuncie</Link></li>

                    </ul>
                </div>
            </li>
            <hr/>
            <li className="mb-1">
                <button className="feedNoticias mudacor btn align-items-center rounded" onmouseover="corFeed()" onmouseout="corFeed2()">
                    <h5><img className="newsOrange" src={newspaper16white} alt="Jornal laranja"/><img
                            style={{display:'none'}} className="newsWhite" src={newspaper16white}
                            alt="Jornal branco"/>
                        <Link to="/" as={Navigator} className="link-feed" ><b>Feed de notícias</b></Link>
                    </h5>
                </button>

            </li>
            <li className="border-top my-3"></li>
        </ul>
    </div>
    
    )
    }

export default Menu