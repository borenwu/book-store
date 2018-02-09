import React from 'react'
import {connect} from 'react-redux';
import * as clientActions from '../../actions/clientAction';
import ClientDetails from './ClientDetails'


class ClientDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        // this.props.fetchClientById(this.props.params.id);
    }

    componentWillMount() {
        // console.log(this.props.params.id)
        this.props.fetchClientById(this.props.params.id);

    }

    // componentDidUpdate(){
    //     this.props.fetchClientById(this.props.params.id);
    // }

    // addToCart(book){
    //     const item = {
    //         title: book.title,
    //         price: book.price
    //     };
    //     this.props.addToCart(item);
    // }

    render() {
        // console.log('client detail page props======>')
        // console.log(this.props.client)

        return (
            this.props.client.id == this.props.params.id ?
                <div>
                    <h1>Client Details Page</h1>
                    <ClientDetails client={this.props.client}/>
                </div>
                : <div> Loading ... </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        client: state.client
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchClientById: clientId => dispatch(clientActions.fetchClientById(clientId)),
        // addToCart: item => dispatch(bookActions.addToCart(item))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetailsPage);