import React  , {useState} from 'react';
import PropTypes from 'prop-types'





function ComponenteB(estado) {
    const [conectado, setConectado] = useState(estado);
  return (
    <div>
       <h3> 
        {conectado === false ? 'Contacto no disponible' : 'Contacto En linea'}
        <button onClick={() => setConectado(!conectado)}>{conectado === false ? 'Conectado' : 'Desconectado'}</button>
        </h3>
      
    </div>
  )
}

ComponenteB.propTypes = {
    estado: PropTypes.bool,

}

export default ComponenteB



 