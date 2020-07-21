import React, { Component } from 'react'
import Box from './Box'
class Layout2 extends Component {

    constructor(props){
        super(props)
        this.state = {
            details:[{
                subscription:"Free",
                title:null,
                price:"$0",
                usersIncluded:"10 users included",
                storage:'2 GB of storage',
                access:" Help center access",
                support:" Email Support ",
                click:"Sign up for free"
            },

            {
                subscription:"Pro",
                title:'Most Popular',
                price:"$15",
                usersIncluded:"20 users included",
                storage:'10 GB of storage',
                access:" Help center access",
                support:"Priority Email Support ",
                click:'get started'
            },
            {
                subscription:"Enterprise",
                title:null,
                price:"$30",
                usersIncluded:"50 users included",
                storage:'30 GB of storage',
                access:" Help center access",
                support:"Phone & Email Support ",
                click:'contact us'
            }
        ]
        }
    }

    render(){
        let subscriptions=this.state.details.map(detail=>{
           return  <Box   details={detail}/>
        })

        return(
            <div className="Layout2" >
            <div className="Layout2-Box">
            {subscriptions}
            </div>
            </div>
        )
    }
}
export default Layout2;