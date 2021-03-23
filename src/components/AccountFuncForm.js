import {  useState , useContext} from 'react'
import { Form } from 'semantic-ui-react'
import { AccountContext } from '../providers/AccountProvider'

const AccountFuncForm = (props) => {
    // state = { username: this.props.username, membershipLevel: this.props.membershipLevel }
    const {username, membershipLevel, updateAccount} = useContext(AccountContext)
    const [user, setUser] = useState({username, membershipLevel})

    // we need to setState here 
    const handleChange = (e, { name, value }) => {
        setUser({
            ...user,
            [name]: value
        })
    }
    
    const handleSubmit = (e) =>{
        updateAccount({...user})
    }
    return (
        <>
        <h1>{props.header}</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Input
                label='New UserName'
                value={user.username}
                type='text'
                name='username'
                onChange={handleChange}
            />
            <Form.Select
                value={user.membershipLevel}
                name='membershipLevel'
                label='Membership Level'
                options={membershipOptions}
                onChange={handleChange}
            />
            <Form.Button>add</Form.Button>
        </Form>
        </>

    )
}


const membershipOptions = [
    { key: 'b', text: "Bronze", value: "Bronze" },
    { key: 's', text: "Silver", value: "Silver" },
    { key: 'g', text: "Gold", value: "Gold" },
]

export default AccountFuncForm
