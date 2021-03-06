import React from 'react'
import { connect } from 'react-redux';
import * as companyActions from '../../actions/companyAction';

class CompanyPage extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchCompanies();
    }


    submitCompany(e){
        e.preventDefault()
        let company_name = this.refs.company_name.value
        let secret = this.refs.secret.value
        const input = {
            company_name:company_name,
            secret:secret
        }
        this.props.createCompany(input);
    }

    render(){
        return(
            <div>
                <h3>Companies</h3>
                <ul>
                    {this.props.companies.map((c,i)=> <li key={i}>{c.company_name}</li>)}
                </ul>

                <div>
                    <h3>Companies Form</h3>
                    <form onSubmit={this.submitCompany.bind(this)}>
                        <input type="text" name="company_name" ref='company_name'/>
                        <input type="text" name="secret" ref='secret'/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {
        companies:state.companies
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createCompany: company => dispatch(companyActions.createCompany(company)),
        fetchCompanies: company => dispatch(companyActions.fetchCompanies(company))
    }
}

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(CompanyPage);