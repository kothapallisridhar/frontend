import React from 'react'

// function Greet() {
//     return (
//         <h1>Hello Sridhar</h1>
//     )
// }

export const Greet = ({name, children}) => {
    return(
        <div>
            <h2>Hello {name}</h2>
            {children}
        </div>)
}

//export default Greet