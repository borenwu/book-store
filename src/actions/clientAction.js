import * as actionTypes from './actionTypes'
import Axios from 'axios'

const clientUrl = 'http://192.168.1.104:1337/client'
const clientsUrl = 'http://192.168.1.104:1337/clients'


// create client
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

// list clients
export const fetchClientsSuccess = (clients) => {
    return {
        type: actionTypes.FETCH_CLIENTS_SUCCESS,
        clients
    }
};

export const fetchClients = (company) => {
    return (dispatch) => {
        return Axios.post(clientsUrl,company)
            .then(response => {
                dispatch(fetchClientsSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

// update client
export const fetchClientsSuccess = (clients) => {
    return {
        type: actionTypes.FETCH_CLIENTS_SUCCESS,
        clients
    }
};

export const fetchClients = (company) => {
    return (dispatch) => {
        return Axios.post(clientsUrl,company)
            .then(response => {
                dispatch(fetchClientsSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};