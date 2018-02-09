import React from 'react';

const ClientDetails = ({client}) => {
    return (
        <div className="media">
            <div className="media-body">
                <h4 className="media-heading">{}</h4>
                <ul>
                    <li><stron>Client: </stron> {client.client_name}</li>
                    <li><stron>desc: </stron> {client.desc}</li>
                    <li><stron>receivable: </stron> {client.receivable}</li>
                    <br/>
                    {/*<button className="btn btn-primary" onClick={e => addToCart(book)}>Buy</button>*/}
                </ul>
            </div>
        </div>
    );
};


export default ClientDetails;