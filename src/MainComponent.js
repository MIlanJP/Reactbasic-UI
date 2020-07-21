import React, { Component } from 'react'
import Header from './Components/Header'
import MainContainer from './Components/maincontainer/MainContainer'
import Footer from "./Components/footer/Footer"
import EmpList from './Components/Employeelist/EmpList'
import {Route} from 'react-router-dom'
class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state={
            page:"MainPage"
        }
    }
    
    changePage(pageName){
        this.setState({page:pageName})
    }


    renderPage(){
        console.log(this.state.page)
        if(this.state.page==="MainPage") return <Route exact path='/MainPage'
         component={MainContainer}  />
        else if(this.state.page==='EmployeeList') return <Route exact path='/EmpList'
         component={EmpList}  />

    }

    render(){
        return(
            <div>
            <Header navbar={this.changePage.bind(this)}  />
            <Route exact path='/' component={MainContainer}  />
            <Route exact path='/MainPage' component={MainContainer}  />
            <Route exact path='/EmpList'   component={EmpList}  />
            <Footer/>
            </div>  
        )
    }

}
export default  MainComponent;