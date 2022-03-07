import React from "react"
import axios from "axios" 
// import base_url dari file config.js
import { base_url } from "../config.js";

export default class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            role: "admin",
            message: "",
            isLogged: false
        }
    }
    // arrow function -> untuk menjalankan fungsi login
    Login = event => {
        event.preventDefault()
        let sendData = {
            username: this.state.username,
            password: this.state.password,
            role: this.state.role
        }
 
        let url = base_url + "/auth"
 
        axios.post(url, sendData)
        .then(res => {
            this.setState({logged: res.data.logged})
            if (this.state.logged) {
                let user = res.data.data
                let token = res.data.token
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                this.props.history.push("/")
            } else {
                this.setState({message: res.data.message})
            }
        })
        .catch(error => console.log(error))
    }

    
render(){
        return(
            <div className="container d-flex h-100 justify-content-center align-items-center">
                <div className="col-sm-6 card my-5">
                    <div className="card-header bg-primary text-white text-center">
                        <h4>Laundry</h4>
                    </div>
                    <div className="card-body">
                        { !this.state.logged ? 
                        (
                            <div></div>
                        ) : null }
                        <form onSubmit={ev => this.Login(ev)}>
                            {/* username */}
                            <input type="text" className="form-control mb-1" placeholder="username" value={this.state.username}
                            onChange={ev => this.setState({username: ev.target.value})} />
 
                            {/* password */}
                            <input type="password" className="form-control mb-1" placeholder="password" value={this.state.password}
                            onChange={ev => this.setState({password: ev.target.value})}
                                autoComplete="false" />
                            
                            <div className="form-group">
                                                <label>Role</label>
                                                <select className="form-control" value={ this.state.role } onChange={ ev => this.setState({ role: ev.target.value }) }>
                                                    <option value="admin">Admin</option>
                                                    <option value="kasir">Kasir</option>
                                                </select>
                                            </div><br/>
                            <button type="submit" className="btn btn-primary btn-user btn-block"><h8>Login</h8></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

