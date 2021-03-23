import React from 'react'

//Setup the initial context
export const AccountContext = React.createContext();

// export a consumer
export const AccountConsumer = AccountContext.Consumer 

class AccountProvider extends React.Component{
   
    state = {
        username:'FooMan',
        dateJoined:'12/12/21',
        membershipLevel:'Silver',
        updateAccount: (account) => this.updateAccount(account)
    }

    updateAccount = (account) =>{
        console.log(account)
        this.setState({
            ...account
        })
    }

    render(){
        return(
            <AccountContext.Provider value={this.state}>
                {this.props.children}
            </AccountContext.Provider>
        )
    }
}

export default AccountProvider

//createContext() return a provider and a consumer