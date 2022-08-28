import React from 'react';
import Child from "../pure/child";

const Father = () => {
    function showMessage ( text) {
        alert(`Message reseived ${text}`)

    }
    return (
        <div>
            <Child name="roger" send={showMessage}></Child>
        </div>
    );
}

export default Father;
