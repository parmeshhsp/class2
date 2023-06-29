import React, { useState } from 'react'


const Ex3 = function(props) {
    // useState => react hook
    //const [state, handler] = useState(initial value)

    const [x, setX] = useState(123)
    const [title, setTitle] = useState("Welcome to react")
    const [view, setView] = useState(true)
    
    const [user, setUser] = useState({
        name: 'Raju',
        email: 'raju@gmail.com',
        age:24
    })

    const [colors,setColors] = useState(['red','blue','green'])
    return ( 
        <div>
            <h2>States in Functional component</h2>
            <h4> var x = [x]</h4>
            <h4>var title = {title}</h4>
            <hr />
            <h4> {view ? "say true" : "say False"}</h4>
            <hr />
            <h4>{user.name},{user.email} and {user.age} years</h4>
            <hr />

            <ol>
                {
                    colors.map((item, index) => {
                        return (
                            <li key={index} > {item}</li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Ex3
