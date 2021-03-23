import { Component } from 'react'
import { Form } from 'semantic-ui-react'

class AccountClassForm extends Component {
    state = { username: 'asdf', membershipLevel: 'Silver' }



    // we need to setState here 
    handleChange = (e, { name, value }) => {
        console.log(e)
        console.log(name)
        console.log(value)

        this.setState({
            [name]: value
        })

        // This works, but there is a better way to do it.
        // if (name === 'username') {
        //     this.setState({
        //         username: value
        //     })
        // } else {

        //     this.setState({
        //         membershipLevel: value
        //     })
        // }
    }

    handleSubmit = (e) =>{
        console.log('submitted')
        console.log(this.state)
    }

    render() {
        return (
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

        )
    }
}

const membershipOptions = [
    { key: 'b', text: "Bronze", value: "Bronze" },
    { key: 's', text: "Silver", value: "Silver" },
    { key: 'g', text: "Gold", value: "Gold" },
]

export default AccountClassForm
