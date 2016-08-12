import React from 'react'
import {Link} from 'react-router'

require('vendor/vendor.scss');

export class App extends React.Component {
  render() {
    return (
      <div>
        React Example
        <div>
        <Link to='/counter'>counter page</Link>
          <button className='btn'> counter page</button>
        <Link to='/about/name' style={{marginLeft:30}}>hi</Link>
          <button className='btn'> say hello</button>
        </div>
        {this.props.children}
      </div>
    )
  }
}
