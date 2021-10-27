import React, {useState, createRef} from "react";
import "./style.scss";

function Header() {

    const [isChecked,setIsChecked] = useState(false);
    const menuMobile = createRef();

    function showMenuMobile() {

        if (isChecked)
            menuMobile.current.style.display = 'none'
        else
            menuMobile.current.style.display = 'flex'
        
    }

    return (
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

        <div className="sandwich" >

            <input type="checkbox" id="checkbox" onClick={ () => {

                setIsChecked(!isChecked);
                showMenuMobile()

            }} />

            <label htmlFor="checkbox" >

                <span></span>
                <span></span>
                <span></span>

            </label>

        </div>

        <div className='menu-mobile' ref = {menuMobile} >

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
    )
} export default Header