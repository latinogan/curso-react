import React from 'react'
import PropTypes from 'prop-types'
import  { contacto } from "../../models/ejerciciocontacto"
import ComponenteB from './componenteB'


function ComponenteA( {contacto}) {
  return (
    <div>
    <h1>
     Nombre : {contacto.nombre}
     </h1>
    <h2>
      Apellido : {contacto.apellido}
    </h2>
    <h3>
      Email : {contacto.email}
    </h3>
    <h3>
    <ComponenteB estado={true} />
    </h3>
      
    </div>
  )
}

ComponenteA.propTypes = {
  contacto: PropTypes.instanceOf(contacto),

}

export default ComponenteA


