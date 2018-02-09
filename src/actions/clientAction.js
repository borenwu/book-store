import * as actionTypes from './actionTypes'
import Axios from 'axios'
import qs from 'qs'

// const clientUrl = 'http://192.168.1.104:1337/client'
// const clientsUrl = 'http://192.168.1.104:1337/clients'

// const clientUrl = 'http://192.168.0.117:1337/client'
// const clientsUrl = 'http://192.168.0.117:1337/clients'

const clientUrl = 'http://192.168.0.100:1337/client'
const clientsUrl = 'http://192.168.0.100:1337/clients'


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
        // console.log(company)
        return Axios.post(clientsUrl, company)
            .then(response => {
                dispatch(fetchClientsSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

// update client bty id
export const updateClientByIdSuccess = (client) => {
    return {
        type: actionTypes.UPDATE_CLIENT_BY_ID_SUCCESS,
        client
    }
};

export const updateClientById = (clientId,newclient) => {
    return (dispatch) => {
        return Axios.put(`${clientUrl}/${clientId}`, newclient)
            .then(response => {
                dispatch(updateClientByIdSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

// fetch client by id
export const fetchClientByIdSuccess = (client) => {
    return {
        type: actionTypes.FETCH_CLIENT_BY_ID_SUCCESS,
        client
    }
};

export const fetchClientById = (clientId) => {
    return (dispatch) => {
        return Axios.get(`${clientUrl}/${clientId}`)
            .then(response => {
                dispatch(fetchClientByIdSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};