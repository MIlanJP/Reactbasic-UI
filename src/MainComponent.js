import React, { Component } from 'react'
import Header from './Components/Header'
import MainContainer from './Components/maincontainer/MainContainer'
import Footer from "./Components/footer/Footer"
import EmpList from './Components/Employeelist/EmpList'
import {Route} from 'react-router-dom'
import AddEmployee from "./Components/Employeelist/AddEmp"
class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state={
            page:"MainPage",
            emp:{}
            }
        this.addEmp=this.addEmp.bind(this);

        }
    
        addEmp(emp){
            this.setState(Object.assign(this.state.emp,emp)) 
            console.log(this.state.emp)

        }

    changePage(pageName){
        this.setState({page:pageName})
    }

 
componentDidUpdate(){

}

    render(){
        return(
            <div>
            <Header navbar={this.changePage.bind(this)}  />
            <Route exact path='/' component={MainContainer}  />
            <Route  exact  path='/MainPage' component={MainContainer}  />
            <Route exact path='/EmployeeList'   component={()=> <EmpList newEmp={this.state.emp} />}  />
            <Route  exact path='/AddEMP' component={()=> <AddEmployee addEmployee={this.addEmp} />  }  />
            <Footer/>
            </div>  
        )
    }

}
export default  MainComponent;