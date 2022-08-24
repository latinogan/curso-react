/**
 * ejemplo de uso del metodo componente willunmount para componente clase
 * ejemplo de uso del hook para componente funcional
 * {cuando el componente va a desaparecer}
 */

import React, { Component , useEffect } from 'react';

export class WillUnMount extends Component {
    componentWillUnmount(){
        console.log("comportamiento antes de que el componente desaparesca")
    }
    render() {
        return (
            <div>
                <h1>willUnMount</h1>
            </div>
        );
    }
}



export const WillUnMountHook = () => {
    useEffect(() => {
     // aqui no ponemos nada
        return () => {
            console.log("comportamiento antes de que el componente desaparesca")
        };
    }, []);
    return (
        <div>
           <h1>willUnMount</h1>
            
        </div>
    );
}



