import './Main.css'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


import { MdEmail } from "react-icons/md";
import { TbBrandAngular } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiCsharp } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

import Fym from '../../assets/images/ProjectsCover/photop.png'
import Cdi from '../../assets/images/ProjectsCover/CDI.png'
import Hgame from '../../assets/images/ProjectsCover/ha.jfif'

function Main(){

    const handleEmailClick = () => {
        const email = "dantecontatodev@gmail.com";
        navigator.clipboard.writeText(email)
            .then(() => {
                alert('Email copiado para a área de transferência!');
            })
            .catch((err) => {
                console.error('Erro ao copiar o email: ', err);
            });
    };


    return (
    <div id='f-m'>
        <section className='ie'>
            <div className='degrade'>
                <header>
                    <div className='bt'>
                        <div>
                            <a href='https://www.linkedin.com/in/victor-henrique-5ab953296'><FaLinkedin size={40}/></a>
                        </div>
                        <div>
                            <a href='https://github.com/Dantedevil10'><FaGithub size={40}/></a>
                        </div>     
                    </div>
                </header>
                <div className='tt'>
                    <h1> I'm a Software Developer <br /></h1>
                    <h1>and Freelance Worker</h1><br />
                    <p>My name is Victor, but you can also call me Dante, which is my professional name. <br/>
                    I am a software developer, including web and apps for Android or PC.<br/>
                    I also work as a freelancer and strive to do good work.
                    And I also like developing games.</p>
                </div>
                <div className='email'>
                    <span><MdEmail size={35}/></span>
                    <p onClick={handleEmailClick}>dantecontatodev@gmail.com</p>Click To Copy! 
                </div>
            </div>
        </section>
        <div className='aa'>
            <div className='o'>
                <h1>Projects &</h1>
                <h1>Experience</h1>
            </div>
            <div className='ee'>
                <div className='it'>
                    <img src={Fym} width={480} alt="dsad" />
                    <div>
                        <h1>Fym Project - Music Stream</h1>
                        <p>That's My Personal Stream Music Website</p>
                        <p>It is not Published For Copyright Reasons, You Can <br />
                        See More ScreenShots on my github
                        </p>
                    </div>
                </div>
                <div className='it'>
                    <img src={Hgame} width={480} alt="dsad" />
                    <div>
                        <h1>The Decrypt Game - Web Game</h1>
                        <p>That's My Personal Web Game</p>
                        <p>I Create a Simple Game With React Where The Player Have to 
                            Decrypt a Message to win | If You Want to Play <a href="https://thedecryptgame.netlify.app/">Here's The Game</a>
                        </p>
                    </div>
                </div>
                <div className='it'>
                    <img src={Cdi} width={480} alt="dsad" />
                    <div>
                        <h1>CDI</h1>
                        <p>A Simple Project Of Games To My University</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='ab'>
            <div className='ob'>
                <h1>What I Work With</h1>
            </div>
            <div className='te'>
                <p>I work with a wide range of technologies, but my main focus is on developing applications for the web. <br />
                 I also work with mobile and desktop applications. Additionally, I offer freelance services,
                 so if you need someone to bring your ideas to life through code, feel free to contact me. <br />
                 It will be a pleasure to assist you.In the past, I have also worked with Photoshop and video editing using Sony Vegas,
                 although I have moved away from these areas more recently
                </p>
            </div>
        </div>
        <div className='jo'>
            <div className="oc">
                <h1>Technologies I Have Worked With</h1>
            </div><br />
            <div className='ic'>
                <ul className='tc'>
                    <li><TbBrandAngular size={58}/><p>Angular</p></li>
                    <li><RiJavascriptLine size={58}/><p>JavaScript</p></li>
                    <li><FaReact size={58}/><p>ReactJS</p></li>
                    <li><TbBrandTypescript size={58}/><p>Typescript</p></li>
                    <li><FaNodeJs size={58}/><p>NodeJS</p></li>
                    <li><FaJava size={58}/><p>Java</p></li>
                    <li><SiCsharp size={58}/><p>C Sharp</p></li>
                    <li><SiMongodb size={58}/><p>MongoDB</p></li>
                    <li><BiLogoPostgresql size={58}/><p>PostGreSQL</p></li>
                </ul>
            </div>
        </div>

        <footer>
            <div></div>
            <p>Thanks For Access<br/><br />
            Copyright © 2024 DanteDev</p>
        </footer>
    </div>
    )
}
export default Main