import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './screens/Home'
import AboutUs from './screens/AboutUs'
import ProductCategory from './screens/ProductCategory'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/home' component={Home}></Route>
        <Route path='/about' component={AboutUs}></Route>
        <Route path='/pcategory' component={ProductCategory}></Route>
      </BrowserRouter>
    )
  }
}

export default Router
