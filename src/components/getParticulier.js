import React, { Component } from 'react';
import axios from 'axios';
import "./getParticulier"

export default class ListTousParticulier extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8080'+this.props.location.pathname)   
            .then(response => {
                console.log('i am a response', response)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    liste() {
        return <div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr id="eto">                                                                                               
                            {/* <th>ID</th> */}
                            <th>NOM</th>
                            <th>TELEPHONE</th>
                            <th>EMAIL</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                                return <tr key={obj._id}>
                                    {/* <td>{obj._id}</td> */}
                                    <td>{obj.nom}</td>
                                    <td>{obj.prenom}</td>
                                    <td>{obj.email}</td>
                                    {/* <td>{telephone}</td>  */}
                                    {console.log(obj)}
                                </tr>

                            })) : ('')
                        }
                    </tbody>
                </table>
            </div>
        </div>
    }
    render() {
        return (
            <div>
                {this.liste()}
            </div>
        );
    }
}