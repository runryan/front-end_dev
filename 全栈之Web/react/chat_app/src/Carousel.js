import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

class Carousel extends React.Component {
  render() {
    return (
      <div>
        <Button type='default'>jaja</Button>
        <Button type='primary'>jaja</Button>
      </div>
    )
  }
}

export default Carousel

Carousel.propTypes = {
  content: PropTypes.string
}

Carousel.defaultProps = {
  content: '默认值：我是轮播图'
}
