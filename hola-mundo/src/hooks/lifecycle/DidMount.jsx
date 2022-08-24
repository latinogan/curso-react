/**
 * ejemplo de uso metodo
 * de cyclo de vida en componente clase y el hook de cyclo de vida del componente funcional
 */

/** rcc  */
import React, { Component ,useEffect } from 'react';

export class DidMount extends Component {
    componentDidMount (){
        console.log("comportamiento antes del que el componente sea añadido al DOM (renderice)")
    }
    render() {
        return (
            <div>
                   <h1>DidMount</h1>
            </div>
        );
    }
}



export const DidMountHook= () => {
    useEffect(() => {
        console.log("comportamiento antes del que el componente sea añadido al DOM (renderice)")
    
    }, [])
    
    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}









