
import styles from './Header.module.css' 

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#curiosidades">Curiosidades</a></li>
                    <li><a href="#habilidades">Habilidades</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
           
            <h1 class="h1">Madu</h1>
            <img src='/imagens/eu.jpeg' width="200" height="250" ></img>
            
        </header>
    );
}

export default Header;