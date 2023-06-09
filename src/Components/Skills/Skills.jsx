import { CodeIcon } from '@heroicons/react/solid'
import style from '../Skills/Skills.module.css';

function Skills () {
    return (
        <section id='skills'>
            <div>

            <div className={style.div2}>
               <CodeIcon className={style.icono}/>
               <h1> Habilidades </h1>
            </div>
            </div>
        </section>
    )
};

export default Skills;