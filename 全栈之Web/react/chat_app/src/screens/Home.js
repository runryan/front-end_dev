import React, { Component } from 'react'
import logo from '../logo.svg'
import Carousel from '../Carousel'
import { HashRouter, Route, Link } from 'react-router-dom'
import AboutUs from './AboutUs'
import ProductCategory from './ProductCategory'

class Home extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <ul>
            <li>
              <Link to='/about'> 关于我们</Link>
            </li>
            <li>
              <Link to='./pcategory'> 商品分类</Link>
            </li>
          </ul>
          <Route path='/about' component={AboutUs}></Route>
          <Route path='/pcategory' component={ProductCategory}></Route>
        </HashRouter>

        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code> src/App.js </code> and save to reload.
          </p>
          <a 
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'>
            Learn React
          </a>
        </header>
        <Carousel />
      </div>
    )
  }
}

export default Home
