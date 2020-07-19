import React, { Component } from 'react'

class NavBar extends Component{
    constructor(props){
        super(props)
        this.state={
            navbar:['features','enterprises','support']
        }
    }

    render(){

        let listOfNavBar=[]
        for(let content of this.state.navbar){
            listOfNavBar.push(<a className='NavBar-content'>{content}</a>)
        }

        return (
            <div className="NavBar"  >
            {listOfNavBar}
            </div>
        )
    }
}

export default NavBar;