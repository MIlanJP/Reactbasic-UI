import React, { Component } from 'react'
 
class Footer extends Component {

    constructor(props){
        super(props)
        this.state={
            Company:['Team','History','Contact us','Locations'],
            Features:['Cool stuff',"Random feature","Developer Stuff",'Another one'],
            Resources:['Resource','Resource name','Another resource','Final resource'],
            Legal:["Privacy Policy","Terms of use"]
        }
    }

   

    render(){
        let company=[]
        let feature=[]
        let resource=[]
        let legal=[]
        this.state.Company.forEach(content=>{
            console.log(content)
            company.push( <div className='conmpany-content'>{content}</div>)
         } )  

        this.state.Features.forEach(content=>{
            console.log(content)
            feature.push( <div className='feature-content' >{content}</div>)
        })
        this.state.Resources.forEach(content=>{
            console.log(content)
            resource.push(  <div  className='resource-content' >{content}</div>)
        })
        this.state.Legal.forEach(content=>{
            console.log(content)
            legal.push( <div  className='legal-content' >{content}</div>)
        })

        return(
            <div className="Footer">
                <div className='Footer-content' >
                <div className='Footer-content-box'>
                Company
                {company}
                </div>
                <div className='Footer-content-box'>
                Feature
                {feature}
                </div>
                  <div className='Footer-content-box'>
                  Resources
                  {resource}
                </div>
                 <div className='Footer-content-box'>
                 Legal
                 {legal}
                </div>
                </div>
            </div>
        )
    }
}
export default Footer;