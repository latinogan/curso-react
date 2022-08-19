import React ,{useEffect} from 'react';

const AllCycles = () => {
    useEffect(() => {
        console.log("componente creado")

        const intervaliD =setInterval( () =>{
            document.title= `${new Date()}`
            console.log("actualizacion del componente")

        },1000);
        return () => {
            console.log("Componente va a desparecer")
            document.title= "tiempo detenido"

            clearInterval(intervaliD);
        };
    }, []);
    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
