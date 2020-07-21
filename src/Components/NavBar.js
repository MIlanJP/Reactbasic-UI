import React, { Component } from 'react'
import MainContainer from './maincontainer/MainContainer'

class NavBar extends Component{
    constructor(props){
        super(props)
        this.state={
            navbar:['EmployeeList','MainPage','AddEMP']
        }
    }

  onChangeButton(newPage){
      this.props.navbar(newPage);
  }

    render(){

        let listOfNavBar=[]
        for(let content of this.state.navbar){
            console.log(content)
            listOfNavBar.push(<button onClick={this.onChangeButton.bind(this,content)}  className='NavBar-content'>{content}</button>)
        }

        return (
            <div className="NavBar"  >
            {listOfNavBar}
            </div>
        )
    }
}

export default NavBar;