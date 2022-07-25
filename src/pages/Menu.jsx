import react from 'react';
import user16white from "../imagens/user-16-white.png"
import paw16 from "../imagens/paw-16.png"
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
                        <li><a href="../perfil/perfil.html" className="colocarsub link rounded">Página inicial</a></li>
                        <li><a href="/" className="colocarsub link rounded">Amigos</a></li>
                        <li><a href="/" className="colocarsub link rounded">Fotos</a></li>
                        <li><a href="/" className="colocarsub link rounded">Eventos</a></li>
                    </ul>
                </div>
            </li>
            <hr/>
            <li className="mb-1">
                <button className="adocaoAnimais mudacor btn btn-toggle align-items-center rounded" onmouseover="corPatinha()" onmouseout="corPatinha2()"
                    data-bs-toggle="collapse"
                    data-bs-target="#dashboard-collapse" aria-expanded="true">

                    <h5><img className="pawOrange" src={paw16} alt="Patinha laranja"/><img
                            style={{display:'none'}} className="pawWhite" src={paw16}
                            alt="Patinha branca"/> <b>Adoção de animais</b>
                    </h5>
                </button>
                <div className="collapse show dashboard-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1">
                        <li><a href="/" className="colocarsub link rounded">Adote um animal</a></li>
                        <li><a href="/" className="colocarsub link rounded">Anuncie</a></li>

                    </ul>
                </div>
            </li>
            <hr/>
            <li className="mb-1">
                <button className="feedNoticias mudacor btn align-items-center rounded" onmouseover="corFeed()" onmouseout="corFeed2()">
                    <h5><img className="newsOrange" src={newspaper16white} alt="Jornal laranja"/><img
                            style={{display:'none'}} className="newsWhite" src={newspaper16white}
                            alt="Jornal branco"/>
                        <a className="link-feed" href="feed.html"><b>Feed de notícias</b></a>
                    </h5>
                </button>

            </li>
            <li className="border-top my-3"></li>
        </ul>
    </div>
    )
    }

export default Menu