import * as actionTypes from './actionTypes'
import Axios from 'axios'

const clientUrl = 'http://192.168.0.117:1337/client'
const clientsUrl = 'http://192.168.0.117:1337/clients'

export const createClientSuccess = (client) => {
    return {
        type: actionTypes.CREATE_CLIENT_SUCCESS,
        client
    }
};

export const createClient = (client) => {
    return (dispatch) => {
        return Axios.post(clientUrl, client)
            .then(response => {
                dispatch(createClientSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};


export const fetchClientsSuccess = (clients) => {
    return {
        type: actionTypes.FETCH_CLIENTS_SUCCESS,
        clients
    }
};

export const fetchClients = (company) => {
    return (dispatch) => {
        return Axios.post(apiUrl,company)
            .then(response => {
                dispatch(fetchClientsSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};