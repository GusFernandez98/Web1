import style from './NavBar.module.css';

function NavBar () {
    return(
    <header className={style.header}>
        <div className={style.nav}>
            <a className={style.aPrincipal}>
                <a className={style.myName} href='about'>Gustavo 👩‍💻</a>
            </a>
            <nav className={style.nav2}>
            <a>
                <a className={style.a2} href='skills'>Habilidades</a>
            </a>
            <a>
                <a className={style.a3} href='project'>Proyectos</a>
            </a>
            <a>
                <a  className={style.a4} href='contact'>Contacto</a>
            </a>
            </nav>
        </div>
    </header>
    )
};

export default NavBar;