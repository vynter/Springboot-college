import React, { Component } from "react";
import axios from "axios";
import "./Create.css";
import "./Table.css";

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
         id: "",
            name: "",
          model: "",
           year: "",
          tyres: "",
         fuelData: [], // Array to store fuel data fetched from the server
        };
    }

    componentDidMount() {
        // Fetch fuel data from server when component mounts
        axios.get("http://localhost:8080/get").then((response) => {
            this.setState({ fuelData: response.data });
        });
    }

    handleidChange = (event) => {
        this.setState({ id: event.target.value });
    };
    handlename = (event) => {
        this.setState({ name: event.target.value });
    };
    handlemodel = (event) => {
        this.setState({ model: event.target.value });
    };
    handleyear = (event) => {
        this.setState({year: event.target.value });
    };
    handletyres= (event) => {
        this.setState({ tyres: event.target.value });
    };
  

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
         id: this.state.id,
            name: this.state.name,
          model: this.state.model,
           year: this.state.year,
          tyres: this.state.tyres,
        };
        console.log(data);
        axios.post("http://localhost:8080/add", data).then((response) => {
            // Add new fuel data to the state and clear the form
            this.setState({
                fuelData: [...this.state.fuelData, response.data],
             id: "",
                name: "",
              model: "",
               year: "",
              tyres: "",
            });
        });
    };

    handleUpdate = (id, data) => {
        // Send PUT request to update fuel data with the given ID
        axios.put(`http://localhost:8080/updateVehicle/${id}`, data).then((response) => {
            // Update the state to reflect the updated fuel data
            const updatedFuelData = this.state.fuelData.map((Vehicle) => {
                if (Vehicle.id === response.data.id) {
                    return response.data;
                } else {
                    return Vehicle;
                }
            });
            this.setState({ fuelData: updatedFuelData });
        });
    };

    handleDelete = (id) => {
        // Send DELETE request to remove fuel data with the given ID
        axios.delete(`http://localhost:8080/del/${id}`).then((response) => {
            // Update the state to remove the deleted fuel data
            const updatedFuelData = this.state.fuelData.filter(
                (Vehicle) => Vehicle.id !== id
            );
            this.setState({ fuelData: updatedFuelData });
        });
    };

    handleEdit = (data) => {
        this.setState({
            id: data.id,
         id: data.id,
            name: data.name,
          model: data.model,
           year: data.year,
          tyres: data.tyres,
            isEdit: true,
        });
        console.log(this.state.id);
    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    };


    handleUpdate = (event) => {
        event.preventDefault();
        const data = {
         id: this.state.id,
            name: this.state.name,
          model: this.state.model,
           year: this.state.year,
           tyres: this.state.tyres,
        };
        const id = this.state.id;
        axios
            .put(`http://localhost:8080/updateVehicle/${id}`, data)
            .then((res) => {
                console.log(res.data);
                this.setState({
                 id: "",
                    name: "",
                  model: "",
                   year: "",
                   tyres:"",
                });
                this.props.history.push("/");
            })
            .catch((err) => console.log(err));
    };






    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit} className="fuel">
                    <label className="login-label">Id</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.id}
                        onChange={this.handleidChange}
                    />
                    <br /><br />
                    <label className="login-label">Name</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.name}
                        onChange={this.handlename}
                    />
                    <br /><br />

                    <label className="login-label">Model</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.model}
                        onChange={this.handlemodel}
                    />
                    <br /><br />

                    <label className="login-label">Year</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.year}
                        onChange={this.handleyear}
                    />
                    <br /><br />

                    <label className="login-label">Tyres</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.tyres}
                        onChange={this.handletyres}
                    />
                    <br /><br />

                    <button className="submitt" type="submit" id="asd">
                        Submit
                    </button>
                    <br /><br />
                </form>

                <table className="output">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>Tyres</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.fuelData.map((data) => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.model}</td>
                                <td>{data.year}</td>
                                <td>{data.tyres}</td>
                                <td>
                                    <button onClick={() => this.handleEdit(data)}>Edit</button>
                                </td>

                                <td>
                                    <button
                                        onClick={() => this.handleDelete(data.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br></br><br></br><br></br><br></br>
                <form onSubmit={this.handleUpdate}>
                    <input type="hidden" name="id" value={this.state.id} />
                    <label>ID:</label>
                    <input
                        type="number"
                        name="id"
                        value={this.state.id}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Model:</label>
                    <input
                        type="text"
                        name="model"
                        value={this.state.model}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Year</label>
                    <input
                        type="number"
                        name="year"
                        value={this.state.year}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Tyres</label>
                    <input
                        type="number"
                        name="tyres"
                        value={this.state.tyres}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <button type="submit">Save</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>        </div>

        );
    }
}
export default Create;