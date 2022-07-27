import react from 'react';
import "./Feed.css"



const Amigos = () =>{
    return(
        <main className="col-sm-12 col-md-9 col-lg-7 flex-column-reverse area-postagens">

        {/* <!--Início postagens --> */}
    <div  className="chama-form" style={{display: 'block'}}>
        {/* <!--Início formulário de postagem --> */}
        <button  className="botaoformulario" Onclick="mostraformulario()">Poste sobre seu pet...</button>
        {/* <!--exibe a div do formulário--> */}
    </div>
    <div  className="form-postagem" style={{display: 'none'}}>
        <h2>Nova postagem:</h2>
        <div>
            <input  className="titulo" type="text" required aria-label="Escrever título da postagem" />
            <span className="floating-label">&nbsp;Título &nbsp;</span>
        </div>
        <div>
            <input  className="conteudo" type="text" onfocus="this.value=''" required
                aria-label="Escrever conteúdo da postagem" />
            <span className="floating-label">&nbsp;Conteúdo &nbsp;</span>
        </div>
        <div  className="divImagemPostar">
            <label  className="imagemPostLabel" for="imagem">
                <p>Inserir imagem</p>
            </label>
            <input  className="imagem" type="file" required aria-label="Selecionar imagem para postagem"
                accept="image/gif, image/png, image/jpeg, image/bmp, image/webp" />
            {/* <!--posta o formulário--> */}

        </div>
        <button Onclick="postar()">Postar</button>
    </div>
    {/* <!--Final formulário de postagem --> */}




    <div className="postagem">
        {/* <!--Abertura da postagem 1--> */}

        <h2>AMIGOS!</h2>
        
    </div>
    {/* <!--final da postagem 1--> */}

    <div className="postagem">
        {/* <!--Abertura da postagem 2--> */}
        <h2>ESTAMOS TRABALHANDO PARA TRAZER NOVIDADES</h2>
        <span className="data-postagem">postado em 27 de julho de 2022</span>
        <img width="620px" src=""/>
        <div className="conteudo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet massa mattis tellus
            egestas
            porta elementum mollis mi. Duis mattis at orci a sollicitudin. Nam consectetur massa in arcu
            ultricies pharetra. Nunc sed est orci. Suspendisse luctus vitae augue non viverra. Suspendisse
            sollicitudin molestie erat ut vulputate.
        </div>
    </div>
    {/* <!--final da postagem 2--> */}
</main>
    )
}


export default Amigos