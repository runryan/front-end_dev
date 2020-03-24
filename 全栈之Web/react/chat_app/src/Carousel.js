import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Carousel extends React.Component {
  render() {
    return <div>{this.props.content}</div>
  }
}

export default Carousel

Carousel.propTypes = {
  content: PropTypes.string
}

Carousel.defaultProps = {
  content: '默认值：我是轮播图'
}
