import "../App.css";


function SobreMi() {
  return (
    <div className="contenedor_SobreMi">
        <section className="SobreMi">
            <div className="cajaInfo_SobreMi">
                <h3 className="titulo_SobreMi">Sobre Mi</h3>
                <p>Bienvenidos a mi portfolio. Soy Didier, estudiante de Ingenieria <br/>en Sistemas de Información en la Universidad Tecnológica Nacional</p>
            </div>
            <div className="cajaLenguajes_SobreMi">
                <h3 className="titulo_SobreMi">Lenguajes que manejo: </h3>
                <p>C, C++, Haskell, Prolog, HTML, CSS, JS, React </p>
            </div>
        </section>
    </div>
  );
}

export default SobreMi;