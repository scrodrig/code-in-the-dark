import React, {Component} from 'react';

class HowItWorks extends React.Component {
    render() {
        return (
            <section className="vertical-space-hiw">
                <h2>¿Cómo funciona el concurso?</h2>
                <p className="lateral-margin">
                    Un aproximado de 20 personas desarrolladoras competirán en 2 categorías (Junior &amp; Senior), donde primero tendrán que superar una ronda clasificatoria,
                    para luego decidir quien será campeón/a en la gran final, siendo nuestros/as
                    <i>Thoughtworkers </i>
                     las personas encargadas de seleccionar al ganador/a.
                    <br/><br/>
                    Tu misión es emular el diseño que te daremos como una imagen. No podrás previsualizar tus resultados, ni utilizar plugins o librerías, ni salirte del editor durante toda la duración de la competencia.
                    <br/><br/>
                    Cada participante acorde a su categoría será invitado/a al escenario, con laptops configuradas previamente (si deseas puedes traer tu equipo y configurarlo antes del concurso). Cada laptop tendrá un monitor conectado de cara a la audiencia - de tal manera que todos puedan ver tu progreso -
                    <br/><br/>
                    Cuando se acaben los 20 minutos, guarda tu resultado y deja que votemos por los/las ganadores/as. Simple, ¿verdad?.
                </p>
            </section>
        );
    }
}

export default HowItWorks;
