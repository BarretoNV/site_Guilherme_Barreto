import React from "react";
import './style.css';

import gif1 from './images/gif1.gif';
import gif3 from './images/gif3.gif';
import gif5 from './images/gif5.gif';
import gif6 from './images/gif6.gif';
import gif7 from './images/gif7.gif';
import dgif2 from './images/Dgif2.gif';
import dgif3 from './images/Dgif3.gif';

import logoAurea from './images/LogoAurea.png';
import logoJMV from './images/logo-jmvglobal.png';
import logoEmporio from './images/logoEmporio2.png';
import colagemAurea from './images/colagemAurea.png';

import htmlLogo from './images/html5-logo-4.png';
import cssLogo from './images/css-3-logo-4.png';
import jsLogo from './images/jslogo.png';
import nodejsLogo from './images/nodejslogo.png';
import reactLogo from './images/reactlogo.png';
import discordjsLogo from './images/discord-js.png';
import cLogo from './images/C_Logo.png';
import aureaBOT from './images/AureaBot.png';

import petroIfLogo from './images/Petroif.png';
import aureaLogo from './images/Logos-Aurea.png';
import fotoAurea from './images/fotoaurea.JPG';
import bDesign from './images/BarretoDesign.jpg';

import corelLogo from './images/corel_draw.jpg';
import illustratorLogo from './images/adobe-Illustrator-logo-2.png';
import photoshopLogo from './images/photoshop-logo-2.png';
import premiereLogo from './images/adobe-premiere-pro-logo-2.png';
import canvaLogo from './images/canva-logo-2.png';


function Home() {

    return (

        <div className="main">

            <div className="body">

                <div className="header">

                    <div className="startHeader">

                        <a href="#/" className="logo">Guilherme Barreto v0.1</a>
                        <ul>
                            <li><a href="https://github.com/BarretoNV" target="_blank" rel="noreferrer">github</a></li>
                            <li><a href="https://www.linkedin.com/in/guibarreto" target="_blank" rel="noreferrer">linkedin</a></li>
                            <li><a href="https://www.instagram.com/gbarretodesign/?hl=pt-br" target="_blank" rel="noreferrer">instagram de design</a></li>
                            <li><a href="https://www.instagram.com/barretonvilas/?hl=pt-br" target="_blank" rel="noreferrer">instagram</a></li>
                            <li><a href="https://aureaej.com/" target="_blank" rel="noreferrer" id="aureabutton">Aurea</a></li>
                        </ul>
                        
                    </div>

                    <div className="greetings">
                        <h1>Prazer em te ver aqui!</h1>
                        <h2> Sou desenvolvedor, designer e fotógrafo amador, atualmente estou cursando Engenharia de Computação no Instituto Federal Fluminense </h2>
                    </div> 

                </div>

                <div className="devXP">
                    <img src={gif3} alt="logo"/>
                    <h1> Minha experiência em desenvolvimento </h1>
                    <div className="timelineXP">
                        <h3>2010</h3>
                        <h4>Logo aos 9 anos fiz um curso básico de robótica, que foi um ponto chave no meu amor por tecnologia</h4>
                        <h3>2015</h3>
                        <h4>Inicio meu ensino médio concomitante ao curso técnido de Petróleo e Gás no IFF - Campus Cabo Frio</h4>
                        <h3>2016</h3>
                        <h4>Nas matérias de Automação e Instrumentação & Controle começo a aprender lógica para programação de máquinas</h4>
                        <h3>2017</h3>
                        <h4>Formado como técnico em Petróleo e Gás</h4>
                        <h3>2018</h3>
                        <h4>Começo a faculdade de Engenharia de Computação, no IFF - Campus Campos Centro</h4>
                        <h3>2019</h3>
                        <h4>Passo no processo seletivo da Aurea Soluções e Projetos, Empresa Júnior do meu Campus, como desenvolvedor da equipe de computação</h4>
                    </div>
                    <img src={gif6} alt="logo"/>
                    <div className="projectsXP">

                        <h1>Projetos que fiz parte</h1>
                        <h2>Em breve demonstrações dos projetos!</h2>

                        <div className="rowXP">

                            <div className="singleProject">
                                <img src={logoAurea} alt="logo"/>
                                <b> Meu primeiro projeto de desenvolvimento web</b>
                                <p>Feito direto com html, css e javascript, foi a primeira renovação no site da Aurea EJ. Foi meu primeiro desenvolvimento em equipe e aprendi muito! </p>
                            </div>

                            <div className="singleProject">
                                <img src={logoJMV} alt="logo"/>
                                <b> Site institucional da JMV Global</b>
                                <p> Site feito em wordpress, um projeto rápido que deixou o cliente satisfeito! </p>
                            </div>

                            <div className="singleProject">
                                <img src={logoEmporio} alt="logo"/>
                                <b> E-commerce feito em react.js </b>
                                <p> Um site de vendas feito em react.js, participei da equipe e tive foco no front-end do projeto. </p>
                            </div>

                            <div className="singleProject">
                                <img src={colagemAurea} alt="logo"/>
                                <b> Novo site da Aurea </b>
                                <p> Foi a última renovação feita no site da Aurea, onde fiz novamente parte da equipe, agora usando react.js, um site leve e completo para uma empresa referência </p>
                            </div>

                            
                            <div className="singleProject">
                                <img src={aureaBOT} alt="logo"/>
                                <b> Bot do servidor oficial da Aurea </b>
                                <p> Bot feito por mim em javascript para mostrar o quadro de metas da Aurea, pegando as informações a partir de uma planilha xlsx </p>
                            </div>

                        </div>

                    </div>

                    <div className="devTechXP">
                        <img src={dgif3} alt="logo"/>
                        <h1>Tecnologias que trabalhei e uso atualmente</h1>
                        <div className="rowTechXP">

                            <div className="singleTechnology">
                                <img src={htmlLogo} alt="logo"/>
                                <b> HTML 5 </b>
                            </div>

                            <div className="singleTechnology">
                                <img src={cssLogo} alt="logo"/>
                                <b> CSS 3 </b>
                            </div>

                            <div className="singleTechnology">
                                <img src={jsLogo} alt="logo"/>
                                <b> Javascript </b>
                            </div>

                            <div className="singleTechnology">
                                <img src={nodejsLogo} alt="logo"/>
                                <b> Node.js </b>
                            </div>

                            <div className="singleTechnology">
                                <img src={reactLogo} alt="logo"/>
                                <b> React.js </b>
                            </div>

                            <div className="singleTechnology">
                                <img src={discordjsLogo} alt="logo"/>
                                <b> Discord.js </b>
                            </div>

                            <div className="singleTechnology">
                                <img src={cLogo} alt="logo"/>
                                <b> C </b>
                            </div>
                        
                        </div>
                        <img src={dgif2} alt="logo"/>
                    </div>

                </div>

                <div className="designXP">
                    <img src={gif7} alt="logo"/>
                    <h1> Minha experiência em design e Fotografia </h1>
                    <div className="timelineXP">
                        <h3>2008</h3>
                        <h4>Começo a brincar com o Paint sendo minha primeira experiência com arte</h4>
                        <h3>2016</h3>
                        <h4>Faço  um curso de Fotografia e Edição de Imagem</h4>
                        <h3>2017</h3>
                        <h4>Inicio um curso de e Photoshop, Corel Draw e Adobe Premiere no NPI Brasil </h4>
                        <h3>2019</h3>
                        <h4>Além de desenvolvedor na Aurea, também entro como assessor de comunicação</h4>
                        <h3>2021</h3>
                        <h4>Com um novo organograma, sou eleito Coordenador de Endomarketing da Aurea</h4>
                    </div>
                    <img src={gif5} alt="logo"/>

                    <div className="worksXP">
                        <h1> Trabalhos que envolveram design </h1>
                        
                        <div className="rowXP">

                            <div className="singleProject">
                                <img src={petroIfLogo} alt="logo"/>
                                <b> PetroIF 2017 </b>
                                <p> Fiz parte da equipe de divulgação do PetroIF 2017, evento de Petróleo e Gás que acontece todo o ano no IFF - Campus Cabo Frio, gerenciando redes sociais e posts </p>
                            </div>

                            <div className="singleProject">
                                <img src={aureaLogo} alt="logo"/>
                                <b> Instagram da Aurea </b>
                                <p> Desde o momento que entrei para a Empresa, fiz parte da equipe que gere a identidade visual nas redes sociais da mesma, além de outros projetos envolvendo design </p>
                            </div>

                            <div className="singleProject">
                                <img src={bDesign} alt="logo"/>
                                <b> Barreto Design </b>
                                <p> Pequeno projeto de criação de logomarcas fictícias para treinar minhas habilidades com photoshop e corel draw. </p>
                            </div>

                            <div className="singleProject">
                                <img src={fotoAurea} alt="logo"/>
                                <b> Fotos da equipe da Aurea </b>
                                <p> Em 2019 houve uma renovação do banco de imagens dos membros da Aurea, com mais de 150 imagens que serviram como ilustrações para as mídias da empresa </p>
                            </div>

                        </div>

                    </div>

                    <div className="desProgXP">
                        <img src={dgif3} alt="logo"/>
                        <h1>Programas que trabalhei e uso atualmente</h1>
                        <div className="rowProgXP">

                            <div className="singleProgram">
                                <img src={corelLogo} alt="logo"/>
                                <b> Corel Draw </b>
                            </div>

                            <div className="singleProgram">
                                <img src={illustratorLogo} alt="logo"/>
                                <b> Adobe Illustrator </b>
                            </div>

                            <div className="singleProgram">
                                <img src={photoshopLogo} alt="logo"/>
                                <b> Adobe Photoshop </b>
                            </div>

                            <div className="singleProgram">
                                <img src={premiereLogo} alt="logo"/>
                                <b> Adobe Premiere </b>
                            </div>

                            <div className="singleProgram">
                                <img src={canvaLogo} alt="logo"/>
                                <b> Canva Pro </b>
                            </div>
                        
                        </div>
                        <img src={dgif2} alt="logo"/>
                    </div>
                </div>

                <div className="footer">
                    <h1>Quer entrar em contato comigo?</h1>

                    <div className="forms">
                        <p>Enquanto não há um formulário de e-mail, entre em contato usando seu meio favorito.</p>
                        <h2>Meu e-mail: barretonovaes.vilas@gmail.com</h2>
                        <img src={gif1} alt="logo"/>
                        <h3>Em construção...</h3>
                    </div>


                    <div className="startHeader">

                        <a href="#/" className="logo">Guilherme Barreto v0.1</a>
                        <ul>
                            <li><a href="https://github.com/BarretoNV" target="_blank" rel="noreferrer">github</a></li>
                            <li><a href="https://www.linkedin.com/in/guibarreto" target="_blank" rel="noreferrer">linkedin</a></li>
                            <li><a href="https://www.instagram.com/gbarretodesign/?hl=pt-br" target="_blank" rel="noreferrer">instagram de design</a></li>
                            <li><a href="https://www.instagram.com/barretonvilas/?hl=pt-br" target="_blank" rel="noreferrer">instagram</a></li>
                            <li><a href="https://aureaej.com/" target="_blank" id="aureabutton" rel="noreferrer">Aurea</a></li>
                            <li><a href="/" id="backTop">Voltar para o topo</a></li>
                        </ul>

                    </div>

                    <h4>Feito com React.js por Guilherme Barreto - 07/2021</h4>

                </div>
            </div>

        </div>


    )

}

export default Home;