import React, { useContext } from 'react'
import { AccountContext } from '../providers/AccountProvider'
import Account from './Account'
import AccountFuncForm from './AccountFuncForm'
import MyLoader from './MyLoader'

const AccountProfile = (props)=>{
    const {initialLoadInProgress} = useContext(AccountContext)
    if (initialLoadInProgress) return <MyLoader />
    return(
        
        <div>
            <p>AccountProfile</p>
                  <Account />
                  <AccountFuncForm header={'Functional form'} />
        </div>
    )
}

export default AccountProfile