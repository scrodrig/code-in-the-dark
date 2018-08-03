import React from 'react'

class Contact extends React.Component {
  render () {
    return (
      <div style={{ marginTop: "40px" }}>
        <section className="inscription-links">
          <a href="https://info.thoughtworks.com/CodeintheDark2017-Concursante.html" className="btn-default btn-lg" target="_blank" rel="noopener noreferrer">Quiero participar!</a>
          <a href="https://info.thoughtworks.com/CodeintheDark2017-Asistente.html" className="btn-default btn-lg" target="_blank" rel="noopener noreferrer">Quiero asistir</a>
        </section>
        <section className="section">
          <p>
            ¿Preguntas?, escríbenos a <a href="mailto:code-in-the-dark@thoughtworks.com">vzapata@thoughtworks.com</a>
          </p>
          <p>
            Para saber más acerca de otros eventos oficiales, visita <a href="http://codeinthedark.com/" target="_blank" rel="noopener noreferrer">Code in the Dark</a>
          </p>
        </section>
      </div>
    )
  }
}

export default Contact
