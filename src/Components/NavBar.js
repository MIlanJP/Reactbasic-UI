import React, { Component } from 'react'
import {Link} from 'react-router-dom';
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
            listOfNavBar.push(<Link to={`/${content}`}  className='NavBar-content'>{content}</Link>)
            // listOfNavBar.push(<a href={`/${content}`}  className='NavBar-content'>{content}</a>)
        }

        return (
            <div className="NavBar"  >
            {listOfNavBar}
            </div>
        )
    }
}

export default NavBar;