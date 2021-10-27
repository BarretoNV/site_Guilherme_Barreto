import React from 'react'
import './style.scss';
import Header from '../../components/header/index.js';
import IMAGES from './images/images.js';
import GIFS from './images/gifs.js';

function Home() {


    return (

        <div className="main">

            <div className="body">

                <Header />

                <div className="devXP">
                    <img src={GIFS.gif3} alt="logo"/>
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
                    <img src={GIFS.gif6} alt="logo"/>
                    <div className="projectsXP">

                        <h1>Projetos que fiz parte</h1>
                        <h2>Em breve demonstrações dos projetos!</h2>

                        <div className="rowXP">

                            <div className="singleProject">
                                <img src={IMAGES.logoAurea} alt="logo"/>
                                <b> Meu primeiro projeto de desenvolvimento web</b>
                                <p>Feito direto com html, css e javascript, foi a primeira renovação no site da Aurea EJ. Foi meu primeiro desenvolvimento em equipe e aprendi muito! </p>
                            </div>

                            <div className="singleProject">
                                <img src={IMAGES.logoJMV} alt="logo"/>
                                <b> Site institucional da JMV Global</b>
                                <p> Site feito em wordpress, um projeto rápido que deixou o cliente satisfeito! </p>
                            </div>

                            <div className="singleProject">
                                <img src={IMAGES.logoEmporio} alt="logo"/>
                                <b> E-commerce feito em react.js </b>
                                <p> Um site de vendas feito em react.js, participei da equipe e tive foco no front-end do projeto. </p>
                            </div>

                            <div className="singleProject">
                                <img src={IMAGES.colagemAurea} alt="logo"/>
                                <b> Novo site da Aurea </b>
                                <p> Foi a última renovação feita no site da Aurea, onde fiz novamente parte da equipe, agora usando react.js, um site leve e completo para uma empresa referência </p>
                            </div>

                            
                            <div className="singleProject">
                                <img src={IMAGES.aureaBOT} alt="logo"/>
                                <b> Bot do servidor oficial da Aurea </b>
                                <p> Bot feito por mim em javascript para mostrar o quadro de metas da Aurea, pegando as informações a partir de uma planilha xlsx </p>
                            </div>

                        </div>

                    </div>

                    <div className="devTechXP">
                        <img src={GIFS.dgif3} alt="logo"/>
                        <h1>Tecnologias que trabalhei e uso atualmente</h1>
                        <div className="rowTechXP">

                            <div className="singleTechnology">
                                <img src={IMAGES.htmlLogo} alt="logo"/>
                                <b> HTML 5 </b>
                            </div>

                            <div className="singleTechnology">
                                <img src={IMAGES.cssLogo} alt="logo"/>
                                <b> CSS 3 </b>
                            </div>

                            <div className="singleTechnology">
                                <img src={IMAGES.jsLogo} alt="logo"/>
                                <b> Javascript </b>
                            </div>

                            <div className="singleTechnology">
                                <img src={IMAGES.nodejsLogo} alt="logo"/>
                                <b> Node.js </b>
                            </div>

                            <div className="singleTechnology">
                                <img src={IMAGES.reactLogo} alt="logo"/>
                                <b> React.js </b>
                            </div>

                            <div className="singleTechnology">
                                <img src={IMAGES.discordjsLogo} alt="logo"/>
                                <b> Discord.js </b>
                            </div>

                            <div className="singleTechnology">
                                <img src={IMAGES.cLogo} alt="logo"/>
                                <b> C </b>
                            </div>
                        
                        </div>
                        <img src={GIFS.dgif2} alt="logo"/>
                    </div>

                </div>

                <div className="designXP">
                    <img src={GIFS.gif7} alt="logo"/>
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
                    <img src={GIFS.gif5} alt="logo"/>

                    <div className="worksXP">
                        <h1> Trabalhos que envolveram design ou fotografia </h1>
                        
                        <div className="rowXP">

                            <div className="singleProject">
                                <img src={IMAGES.petroIfLogo} alt="logo"/>
                                <b> PetroIF 2017 </b>
                                <p> Fiz parte da equipe de divulgação do PetroIF 2017, evento de Petróleo e Gás que acontece todo o ano no IFF - Campus Cabo Frio, gerenciando redes sociais e posts </p>
                            </div>

                            <div className="singleProject">
                                <img src={IMAGES.aureaLogo} alt="logo"/>
                                <b> Instagram da Aurea </b>
                                <p> Desde o momento que entrei para a Empresa, fiz parte da equipe que gere a identidade visual nas redes sociais da mesma, além de outros projetos envolvendo design </p>
                            </div>

                            <div className="singleProject">
                                <img src={IMAGES.bDesign} alt="logo"/>
                                <b> Barreto Design </b>
                                <p> Pequeno projeto de criação de logomarcas fictícias para treinar minhas habilidades com photoshop e corel draw. </p>
                            </div>

                            <div className="singleProject">
                                <img src={IMAGES.fotoAurea} alt="logo"/>
                                <b> Fotos da equipe da Aurea </b>
                                <p> Em 2019 houve uma renovação do banco de imagens dos membros da Aurea, com mais de 150 imagens que serviram como ilustrações para as mídias da empresa </p>
                            </div>

                        </div>

                    </div>

                    <div className="desProgXP">
                        <img src={GIFS.dgif3} alt="logo"/>
                        <h1>Programas que trabalhei e uso atualmente</h1>
                        <div className="rowProgXP">

                            <div className="singleProgram">
                                <img src={IMAGES.corelLogo} alt="logo"/>
                                <b> Corel Draw </b>
                            </div>

                            <div className="singleProgram">
                                <img src={IMAGES.illustratorLogo} alt="logo"/>
                                <b> Adobe Illustrator </b>
                            </div>

                            <div className="singleProgram">
                                <img src={IMAGES.photoshopLogo} alt="logo"/>
                                <b> Adobe Photoshop </b>
                            </div>

                            <div className="singleProgram">
                                <img src={IMAGES.premiereLogo} alt="logo"/>
                                <b> Adobe Premiere </b>
                            </div>

                            <div className="singleProgram">
                                <img src={IMAGES.canvaLogo} alt="logo"/>
                                <b> Canva Pro </b>
                            </div>
                        
                        </div>
                        <img src={GIFS.dgif2} alt="logo"/>
                    </div>
                </div>

                <div className="footer">
                    <h1>Quer entrar em contato comigo?</h1>

                    <div className="forms">
                        <p>Enquanto não há um formulário de e-mail, entre em contato usando seu meio favorito.</p>
                        <h2>Meu e-mail: barretonovaes.vilas@gmail.com</h2>
                        <img src={GIFS.gif1} alt="logo"/>
                        <h3>Em construção...</h3>
                    </div>


                    <div className="startHeader">

                        <a href="#/" className="logo">Guilherme Barreto v0.1</a>
                        <ul>
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