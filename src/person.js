import React,{Component} from 'react'


class Person extends Component{
    render() {

        const {name,age} = this.props;



        return (
            <div>

                <h1>{name}</h1>
                <h3>{age}</h3>

                <input  type="text"   onChange={this.props.changed} value={name} /> 

                
            </div>
        )
    }
}

export default Person;