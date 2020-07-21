import React, { Component } from 'react'
import CompanyName from './CompanyName'
import NavBar from './NavBar'
import LoginButton from './LoginButton'
class Header extends Component{


    changePage(newPage){
        this.props.navbar(newPage)
    }

    render(){
    return(
        <header>
        <div className="Header-Layout-CompanyName" >
        <CompanyName/>
        </div>
        <div className="Header-Layout-NavBar">
        <NavBar navbar={this.changePage.bind(this)}  />
        </div>
        <div className="Header-Layout-LoginButton" >
        <LoginButton />
        </div>
        </header>
    )
    }
}
export default Header;