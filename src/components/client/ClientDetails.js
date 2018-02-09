import React from 'react';

class ClientDetails extends React.Component {
    constructor(context, props) {
        super(context, props)
    }

    // componentDidMount() {
    //     console.log(this.props.client)
    // }

    render() {
        return (
            <div className="media">
                <div className="media-body">
                    <li>{this.props.client.company.company_name}</li>
                    <li>{this.props.client.client_name}</li>
                    <li>{this.props.client.desc}</li>
                </div>
            </div>
        )
    }
}
// const ClientDetails = ({client}) => {
//     console.log(client)
//
//     return (
//         <div className="media">
//             <div className="media-body">
//
//             </div>
//         </div>
//     );
// };


export default ClientDetails;