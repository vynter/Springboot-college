import axios from "axios";
import React from "react";
import './Table.css';
import { Component } from "react";
class Table extends Component{
    state={
    data:[]
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8080/get')
        .then(response=>{
            this.setState({data:response.data});
        })
        .catch(error =>{
            console.log(error);
        });
    }
    render(){
        return(
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>model</th>
                        <th>year</th>
                        <th>tyres</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.model}</td>
                            <td>{user.year}</td>
                            <td>{user.tyres}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        );
    }
}
export default Table;