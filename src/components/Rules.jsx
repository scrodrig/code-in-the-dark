import React from 'react';

class Rules extends React.Component {
    render() {
        return (
            <section className="content">
                <div className="vertical-center">
                    <h2 className="vertical-space">Las Reglas</h2>
                    <ul>
                        <li>12 minutos</li>
                        <li>HTML/CSS - XML</li>
                        <li>Un diseño</li>
                        <li>Sin previsualizaciones</li>
                        <li>Un/a campeón/a</li>
                    </ul>
                    <h2 className="vertical-space">Premios</h2>
                    <ul>
                        <li>Categoría Senior: Kindle + Curso de Udemy</li>
                        <li>Categoría Junior: Cursos de  Udemy</li>
                        <li>Categoría Android: Kindle</li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Rules;
