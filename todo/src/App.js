import React, { Component } from 'react'
import DrawerMenu from './components/menu'

import NavBar from './components/navbar'
class App extends Component {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <DrawerMenu />
      </div>
    )
  }
}
export default App