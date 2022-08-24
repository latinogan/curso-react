/** 
 * Ejemplo de componente de tipo clase que dispone de los metodos
 * de ciclo de vida
*/


import React,{ Component} from' react'
import PropType from 'prop-types'

class LifeCycleExample extends Component{

    constructor(props){
        super(props)
        console.log(" Constructor: Cuando se instancia el componente")
    }
    componentWillMount(){
        console.log("WILLMOUNT: antes del montaje del componente")

    }
    componentDidMount() {
        console.log("DIDMOUNT : justo al del montaje del componente antes de renderizarlo")

    }
    componentWillReceiveProps(nextProps){
        console.log("WillReceiveProps: si va a recibir nuevas props")
    }
    shouldComponentUpdate(nextProps,nextState){
        /**sirve para controlar si el componente debe o no actualizarse
         * un return TRUE o FALSE
         */
    }
                  I
    componentWillUpdate(nextProps,nextState){
        console.log("willUpdate: justo antes de actualizarse")
    }
    componentDidUpdate(prevProps,prevState){
        console.log("DidUpdate : justo despues de actualizarse")
    }
    componentWillUnmount(){
        console.log(" willunmount : justo antes de desaparecer")
    }
render() {
    return (
       <div>
       </div>
    )
}
}
LifeCycleExample.propTypes={
}