import { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { AccountConsumer } from '../providers/AccountProvider'

class AccountClassForm extends Component {
    state = { username: this.props.username, membershipLevel: this.props.membershipLevel }



    // we need to setState here 
    handleChange = (e, { name, value }) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) =>{
        this.props.updateAccount({...this.state})
    }

    render() {
        return (
            <>
            <h1>{this.props.header}</h1>
            <Form onSubmit={this.handleSubmit}>
                <Form.Input
                    label='New UserName'
                    value={this.state.username}
                    type='text'
                    name='username'
                    onChange={this.handleChange}
                />
                <Form.Select
                    value={this.state.membershipLevel}
                    name='membershipLevel'
                    label='Membership Level'
                    options={membershipOptions}
                    onChange={this.handleChange}
                />
                <Form.Button>add</Form.Button>
            </Form>
            </>

        )
    }
}


const ConnectedAccountClassForm = (props)=>{
    console.log('props ', props)
    return (
    <AccountConsumer>
        {(value)=>(
            <AccountClassForm {...props} updateAccount={value.updateAccount} username={value.username} membershipLevel={value.membershipLevel}/>
         )}
      </AccountConsumer>
    )
}


const membershipOptions = [
    { key: 'b', text: "Bronze", value: "Bronze" },
    { key: 's', text: "Silver", value: "Silver" },
    { key: 'g', text: "Gold", value: "Gold" },
]

export default ConnectedAccountClassForm
