import React, { Component } from 'react'



 class EmpList extends Component{


    state={
        newEmp:{},
      employeedetails:  [{
            name: 'Christina Woods',
            email: 'ChristinaWoods@company.com',
            Status: 'Active',
            Role: 'User',
            LastLogin: '2 Days ago',
            Permission: 'Invalid',
            Others: '...'
        },
    
        {
            name: 'Joshea Fox',
            email: 'JoshyaFox@company.com',
            Status: 'Inactive',
            Role: 'Admin',
            LastLogin: '3 Days ago',
            Permission: 'Valid',
            Others: '...'
        },
    
        {
            name: 'Katherine White',
            email: 'KatherineWhite@company.com',
            Status: 'Active',
            Role: 'Admin',
            LastLogin: '3 Days ago',
            Permission: 'Invalid',
            Others: '...'
        },
    
        {
            name: 'Mary Carlson',
            email: 'MaryCarlson@company.com',
            Status: 'Inactive',
            Role: 'Admin',
            LastLogin: '1 Day ago',
            Permission: 'Valid',
            Others: '...'
        },
    
        {
            name: 'Nicole  Larson',
            email: 'Nicolelarsonn@company.com',
            Status: 'Active',
            Role: 'User',
            LastLogin: '1 Day ago',
            Permission: 'Valid',
            Others: '...'
        },
    
        {
            name: 'Raymond Pattersonn',
            email: 'RaymondPatter@company.com',
            Status: 'Inactive',
            Role: 'User',
            LastLogin: '2 Days ago',
            Permission: 'Valid',
            Others: '...'
        },
    
        {
            name: 'Roger Carpenter',
            email: 'RogerCarpenter@company.com',
            Status: 'Active',
            Role: 'User',
            LastLogin: '2 Days ago',
            Permission: 'Valid',
            Others: '...'
        },
        {
            name: 'Christina Woods',
            email: 'ChristinaWoods@company.com',
            Status: 'Active',
            Role: 'User',
            LastLogin: '2 Days ago',
            Permission: 'Invalid',
            Others: '...'
        },
    
        {
            name: 'Joshea Fox',
            email: 'JoshyaFox@company.com',
            Status: 'Inactive',
            Role: 'Admin',
            LastLogin: '3 Days ago',
            Permission: 'Valid',
            Others: '...'
        },
    
        {
            name: 'Katherine White',
            email: 'KatherineWhite@company.com',
            Status: 'Active',
            Role: 'Admin',
            LastLogin: '3 Days ago',
            Permission: 'Invalid',
            Others: '...'
        },
    
        {
            name: 'Mary Carlson',
            email: 'MaryCarlson@company.com',
            Status: 'Inactive',
            Role: 'Admin',
            LastLogin: '1 Day ago',
            Permission: 'Valid',
            Others: '...'
        }],
        header:['Name','Email','Status','Role','Last Login','Permission']
    }

    addEmployee=(newEmp)=>{
        this.state.employeedetails.push(newEmp);
    }

     render(){
        let header=this.state.header.map(header=>{
            return <div className='EmpList-header' >{header}</div>
        })
        let data=this.state.employeedetails.map(row=>{
          return   <div className='EmpList-row'>
           { Object.values(row).map(text=>{
               return <div  className='EmpList-row-content' >{text}</div>
           })}
            </div>
           
        })
        return(
             <div className='EmpList-table' >
             <div className='Emp-table-header-row'>
            {header}
            </div>
            <div className='Emp-table-rows' >
            {data}             
            </div>
             </div>
         )
     }
 }

 export default EmpList;