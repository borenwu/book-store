import React from 'react'
import { connect } from 'react-redux';
import * as clientActions from '../../actions/clientAction';
import ClientDetails from './ClientDetails'


class ClientDetailsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.fetchClientById(this.props.params.id);
    }

    // addToCart(book){
    //     const item = {
    //         title: book.title,
    //         price: book.price
    //     };
    //     this.props.addToCart(item);
    // }

    render() {
        return (
            <div>
                <h1>Client Details Page</h1>
                <ClientDetails client={this.props.client} />
            </div>
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