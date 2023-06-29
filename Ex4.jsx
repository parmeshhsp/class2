import React from 'react'

class Ex4 extends React.Component {
    constructor(props) {
        super(props);
        //states
        this.state = {
            x: 123,
            y: 34,
            title: 'Welcome to string Ex',
            view: false,
            colors: ['red', 'green', 'blue'],
            user: {
                name: 'Raju',
                email: 'raju!@gmail.com',
                age: 50
            }
        }
    }

    render() {
        return (
        <div>
                <h3>States in class Component</h3>
                <h4>x ={this.state.x} </h4>
                <h4>x ={this.state.y} </h4>

                <h4> {this.state.title} </h4>
                <h4> {this.state.view ? "say True" : "say False"} </h4>
                <hr />

                <ol>
                    {
                        this.state.colors.map((item, index) => {
                            return (
                                <li key={index}> {item}</li>
                            )
                        })
                    }
                </ol>
                <hr />
                <h3>user name ={this.state.user.name}</h3>
                <h3>user name ={this.state.user.email}</h3>
                <h3>user name ={ this.state.user.age}</h3>
        </div>
        )
    }
}

export default Ex4