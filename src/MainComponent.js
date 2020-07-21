import React, { Component } from 'react'
import Header from './Components/Header'
import MainContainer from './Components/maincontainer/MainContainer'
import Footer from "./Components/footer/Footer"
import EmpList from './Components/Employeelist/EmpList'
class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state={
            page:"MainContainer"
        }
    }
    
    changePage(pageName){
        this.setState({page:pageName})
    }


    renderPage(){
        console.log(this.state.page)
        if(this.state.page==="MainPage") return <MainContainer/>
        else if(this.state.page==='EmployeeList') return <EmpList />

    }

    render(){
        return(
            <div>
            <Header navbar={this.changePage.bind(this)}  />
            {this.renderPage()}
            <Footer/>
            </div>  
        )
    }

}
export default  MainComponent;