import React, { Component } from 'react'

 class form extends Component {

    state = {
        body: "",
        gender:"",
        checked:false,
        country:"India"

        
    }


   

    handleCheckBox = (event)=>{
        this.setState({
            checked:event.target.checked
        })

    }

    handleChange = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }



    render() {
        return (
            <div>

                <input type="text" name="body" value = {this.state.body}  onChange = {this.handleChange}/>
                <div onChange = {this.handleChange}>
                    <input type="radio" name = "gender" value = "Male"/>MALE
                    <input type="radio" name = "gender" value = "Female"/>FEMALE

                </div>
                

                <input type="checkbox" checked={this.state.checked} onChange = {this.handleCheckBox}/>


                <select name = "country" value = {this.state.country} onChange={this.handleChange}>
                    <option value="INDIA">INDIA</option>
                    <option value="USA">USA</option>
                    <option value="AUSTRALIA">AUSTRALIA</option>
                </select>

                <div>
                    <li>{this.state.body}</li>
                    <li>{this.state.gender}</li>
                    <li>{this.state.country}</li>
                    <li>{this.state.checked ? "true":"false"}</li>

                </div>
            </div>
        )
    }
}

export default form
