import React,{Component} from  'react'
import Spinner from './components/ui/Spinner/Spinner'




class Form extends Component{

    state={
        username:'',
        email:''
    }

    changeHandler = (e)=>{
        this.setState({

            [e.target.name]:e.target.value
            
        })
    }

    submitHandler =(event)=> {
        let user = {
            username:this.state.username,
            email:this.state.email
        }
        this.props.submit(user)
        event.preventDefault()
    }


    render() {

        let form = (
            <form>

                <input type="username" name="username"  onChange={this.changeHandler} value =  {this.state.username}></input>
        <input type="email" name="email" onChange={this.changeHandler} value = {this.state.email} ></input>
        <button onClick={this.submitHandler}>Submit</button>


                </form>
        )

        if(this.props.spinner){
            form = <Spinner/>
        }
        return (
            <div>

                {form}
                

        

                
            </div>
        )
    }
}

export default Form