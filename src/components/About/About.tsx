import React from 'react'
import AboutCss from './About.module.css'
import me from '../../img/me.png'
import stack from '../../img/stack.png'

const About = () => {
    return(
       <>
        <section className={AboutCss.section}>
            <div className={AboutCss.section__wrapper}>
                <div className={AboutCss.text}>
                    <span>Hi! My name is David and I'm a Frontend Developer <br />
                        This is my full-stack project - Merch Magazine <br />
                        You can check the code on my GitHub page: <br />
                        Back: <a href="https://github.com/DavidAmanov/server">https://github.com/DavidAmanov/server</a> <br />
                        Front: <a href="https://github.com/DavidAmanov/template">https://github.com/DavidAmanov/template</a> <br />
                        Also you can contact me on this mail: DavidAmanovIs@gmail.com
                    </span>
                    <div className={AboutCss.stack}>
                        <span>Technology stack:</span>
                        <img src={stack} alt="stack" className={AboutCss.pictures__stack}/>
                    </div>
                </div>
                <div className={AboutCss.pictures}>
                    <img src={me} alt="me"  className={AboutCss.pictures__me}/>
                </div>
            </div>
            
        </section>
       </>
    )
}

export default About