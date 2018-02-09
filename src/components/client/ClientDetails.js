import React from 'react';

const ClientDetails = ({client}) => {
    let json = JSON.stringify(client)
    console.log(json['company'])

    return (
        <div className="media">
            <div className="media-body">

            </div>
        </div>
    );
};


export default ClientDetails;