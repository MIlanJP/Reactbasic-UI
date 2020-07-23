import React, { Component } from 'react'
import EmpList from './EmpList'
class AddEmployees extends Component {

constructor(props){
    super(props)
    this.state={
        emp:{
 
        },
        name:"Hey"
    }
    this.updateState=this.updateState.bind(this)
    this.addEmployeeOnSubmit=this.addEmployeeOnSubmit.bind(this)
}

updateState(evt){
    let newemp={...this.state.emp}
    newemp[evt.target.name]=evt.target.value
this.setState({emp:newemp})
}


addEmployeeOnSubmit(){
       const Emp=this.state.emp;
    console.log("printing from add emp")
   this.props.addEmployee(Emp)

}

    render() {
        return(
            <div className="AddEmployees">
            <input className="AddEmployees-input" onChange={this.updateState}  name="name" type="text" placeholder="Name"  value={this.state.emp.name}  />
            <input className="AddEmployees-input" onChange={this.updateState} name="email" type="text" placeholder="Email" value={this.state.emp.email} />
            <input className="AddEmployees-input" onChange={this.updateState} name="status" type="text" placeholder="Status"  value={this.state.emp.status}/>
            <input className="AddEmployees-input" onChange={this.updateState} name="role" type="text" placeholder="Role"  value={this.state.emp.role}/>
            <input className="AddEmployees-input" onChange={this.updateState} name="lastlogin" type="text" placeholder="Last Login" value={this.state.emp.lastlogin} />
            <input className="AddEmployees-input" onChange={this.updateState} name="permission" type="text" placeholder="Permission"   value={this.state.emp.permission} />
            <button onClick={this.addEmployeeOnSubmit}>Add Employee</button>
            </div>
        )
    }
}

export default AddEmployees;