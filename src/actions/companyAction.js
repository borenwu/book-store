import * as actionTypes from './actionTypes'
import Axios from 'axios'

const apiUrl = 'http://192.168.1.104:1337/company'

export const createCompanySuccess = (company) => {
    return {
        type: actionTypes.CREATE_COMPANY_SUCCESS,
        company
    }
};

export const createCompany = (company) => {
    return (dispatch) => {
        return Axios.post(apiUrl, company)
            .then(response => {
                dispatch(createCompanySuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};


export const fetchCompaniesSuccess = (companies) => {
    return {
        type: actionTypes.FETCH_COMPANIES_SUCCESS,
        companies
    }
};

export const fetchCompanies = () => {
    return (dispatch) => {
        return Axios.get(apiUrl)
            .then(response => {
                dispatch(fetchCompaniesSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};