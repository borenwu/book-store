import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/common/HomePage'
import About from './components/common/AboutPage'
import Book from './components/book/BookPage'
import Company from './components/company/CompanyPage'
import Client from './components/client/ClientPage'
import ClientDetailsPage from './components/client/ClientDetailsPage'
import App from './components/App'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/about" component={About}></Route>
        <Route path="/books" component={Book}></Route>
        <Route path="/company" component={Company}></Route>
        <Route path="/clients" component={Client}></Route>
        <Route path="/clients/:id" component={ClientDetailsPage}></Route>
    </Route>
);