import React,{Component} from 'react'
import axios from './axios-orders'
import Form from './forms'


class Users extends Component{

constructor(props){
    super(props)
    axios.get("/users.json")
    .then(response=>{
        this.setState({
            users:response.data
        })
    })

    

}

    state = {
    users : [{
        username:'rahul'
    }],
    showSpinner:false
}

   


    submitUserHandler = (newuser)=>{
        this.setState({
            showSpinner:true
        })
        const user = newuser
        

        axios.post("/users.json",user)
        .then(user=>{
            this.setState({
                showSpinner:false,
                users:[...this.state.users,user]
            })

            console.log(user)



        })

        .catch(error=>{
            this.setState({
                showSpinner:false
            })

        })
    }

    
    
    render() {

      


       
        
return (
            <div>

                <Form submit = {this.submitUserHandler} spinner = {this.state.showSpinner}/>
                
                
                
            </div>
        )
    }
}

export default Users