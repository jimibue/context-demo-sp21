import React, {useState, useEffect} from 'react'

//Setup the initial context
export const AccountContext = React.createContext();

// export a consumer
export const AccountConsumer = AccountContext.Consumer 

const AccountProvider = (props)=> {
    const [account, setAccount] = useState(null)
    const [initialLoadInProgress, setInitialLoadInProgress] = useState(true)

    useEffect(()=>{
        console.log('AccountProvider mounted')

        setTimeout(()=>{
            console.log('getting Data')
            getData()
            
        },2000)
    },[])

    const getData = () => {
       setAccount({
            username:'FooManFUnC',
            dateJoined:'12/12/21',
            membershipLevel:'Silver',
        })
        setInitialLoadInProgress(false)
    }

 
        return(
            <AccountContext.Provider value={{...account, updateAccount: setAccount, initialLoadInProgress}}>
                {props.children }
            </AccountContext.Provider>
        )
}

export default AccountProvider

//createContext() return a provider and a consumer