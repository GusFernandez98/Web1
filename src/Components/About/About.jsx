import style from './About.module.css';
import logo from '../../svgs/Pro.svg';

function About (){
    return(
        <section id='about'>
            <div className={style.div1}>
                <div className={style.div2}>
                    <h1 className={style.h1}> Hola! 👋
                    <br className={style.br1}/> Soy Gustavo Fernández
                    <br className={style.br2}/> 💻 Jr. Full Stack Web developer
                    </h1>
                    <p className={style.p1}>
                    
                    ·Me consideró una persona en constante crecimiento, comprometido en mejorar cada día lo que he aprendido en el bootcamp de programacion.
                    <br/>
                    ·Mi voluntad y determinación son mis mayores motores para superarme y alcanzar mis metas. Si bien reconozco que no soy el mejor en todo, mi humildad me impulsa a seguir aprendiendo y creciendo,
                    acepto los desafíos con entusiasmo y estoy dispuesto a asumir responsabilidades adicionales para ampliar mis conocimientos y habilidades.
                    Aprecio la retroalimentación constructiva y la utilizo como una oportunidad para mejorar y evolucionar.
                    Creo firmemente en la importancia de ser un buen compañero de equipo, promoviendo la colaboración y la creación de un ambiente de trabajo positivo.
                    Estoy comprometido en establecer relaciones basadas en el respeto, la empatía y el apoyo mutuo.
                    <br/>
                    ·Mi principal motivación es mi deseo de crecer como profesional y como persona.
                    Estoy decidido a enfrentar nuevos desafíos y a aprender de cada experiencia para alcanzar un nivel más alto de excelencia.
        
                    </p> 
                </div>    
                <div className={style.imagen}>
          <img
            alt="hero"
            src={logo}
          />
        </div>            
            </div>
        </section>
    )
};

export default About;