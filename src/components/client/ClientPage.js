import React from 'react'
import { connect } from 'react-redux';
import * as clientActions from '../../actions/clientAction';
import { Link } from 'react-router';


class ClientPage extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchClients();
    }


    submitClient(e){
        e.preventDefault()
        let company_name = this.refs.company_name.value
        let client_name = this.refs.client_name.value
        const client = {
            company_name:company_name,
            client_name:client_name
        }
        this.props.createClient(client);
    }

    render(){
        return(
            <div>
                <h3>Clients</h3>
                <ul>
                    {this.props.clients.map((c,i)=> <Link to={`/client/${c.id}`}>{c.client_name}</Link>)}
                </ul>

                <div>
                    <h3>Clients Form</h3>
                    <form onSubmit={this.submitClient.bind(this)}>
                        <label htmlFor="">company-name</label>
                        <input type="text" name="company_name" ref='company_name'/>
                        <label htmlFor="">client-name</label>
                        <input type="text" name="client_name" ref='client_name'/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {
        clients:state.clients
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createClient: client => dispatch(clientActions.createClient(client)),
        fetchClients: company => dispatch(clientActions.fetchClients(company))
    }
}

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(ClientPage);