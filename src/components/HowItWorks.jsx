import React from 'react';

class HowItWorks extends React.Component {
    render() {
        return (
            <section className="content hide-mobile">
                <h2 className="vertical-space">¿Cómo funciona el concurso?</h2>
                <p className="lateral-margin">Este año tendremos 2 categorías web y una Android</p>
                <p className="lateral-margin">
                    Un aproximado de 10 personas competirán en cada categoría (Junior, Senior y Mobile), 
                    donde primero tendrán que superar una ronda clasificatoria,
                    para luego decidir quien será campeón/a en la gran final, siendo nuestros/as
                    <i>Thoughtworkers </i> las personas encargadas de seleccionar al ganador/a.
                    <br/><br/>
                    Tu misión es emular el diseño que te daremos como una imagen. No podrás previsualizar tus resultados, 
                    ni utilizar plugins o librerías, ni salirte del editor durante toda la duración de la competencia.
                    <br/><br/>
                    Cada participante acorde a su categoría será invitado/a al escenario, con laptops configuradas previamente. 
                    Cada laptop tendrá un monitor conectado de cara a la audiencia - de tal manera que todos puedan ver tu 
                    progreso -
                    <br/><br/>
                    Cuando se acaben los 12 minutos, guarda tu resultado y deja que votemos por los/las ganadores/as. Simple, ¿verdad?.
                </p>
            </section>
        );
    }
}

export default HowItWorks;
