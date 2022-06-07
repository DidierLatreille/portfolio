import "../App.css";
import perfil from'../assets/fotoDL.png';
import github from '../assets/icons8-github.svg';
import linkedin from '../assets/icons8-linkedin.svg';
import instragram from '../assets/icons8-instagram.svg';

function Banner() {
  return (
    <>  
        <section className="Banner">
              <img alt="" className='ImgPerfil' src={perfil} />
              <h2 className="TituloBanner">Front-End Developer</h2>
              <div class="standRedes">
                <img src={linkedin} alt="linkedin" class="linksRedes"/>
                <img src={github} alt="github" class="linksRedes"/>
                <a href="https://www.instagram.com/didierlatreille/"><img src={instragram} alt="instagram" class="linksRedes"/></a>
              </div>
        </section>
    </>
  );
}

export default Banner;