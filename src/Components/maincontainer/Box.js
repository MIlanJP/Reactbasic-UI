import React, { Component } from 'react'

class Box extends Component {
    render(){
        return(
            <div className='Box'>
            <div className={`Box-Top-Portion Box-Top-Portion-${this.props.details.subscription}`}>
            {this.props.details.subscription}<br/>
           <div className={`Subscription-tagline Subscription-tagline-${this.props.details.subscription}`}>
           {this.props.details.title}{this.props.details.subscription==='Pro'&& <i class="far fa-star"></i>}
           </div>
            </div>
            <div className='Box--AmountSection'>
            {this.props.details.price} <span>/mo</span> 
            </div>
            <div className='Box-Description'>
                {this.props.details.usersIncluded}<br/>
                {this.props.details.storage}<br/>
                {this.props.details.access}<br/>
                {this.props.details.support}<br/>
            </div>
            <div className='Box-Subscription'>
            <button>
            {this.props.details.click}            
            </button>   
            </div>
            </div>
        )
    }
}
export default Box;