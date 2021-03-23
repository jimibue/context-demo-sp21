import React from 'react'
import Account from './Account'
import AccountClassForm from './AccountClassForm'

const AccountProfile = (props)=>{
    return(
        
        <div>
            <p>AccountProfile</p>
            <Account />
            <AccountClassForm header={'Yo Here'}/>
        </div>
    )
}

export default AccountProfile