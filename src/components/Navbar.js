import React from "react";
import { NavLink, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";

// old way first, without useContext hook
import { AccountConsumer } from '../providers/AccountProvider'

const Navbar = () => (
    <AccountConsumer>
        {(value) => (
            <Menu>
            <NavLink to="/">
            <Menu.Item>
                 Home
            </Menu.Item>
            </NavLink>
            { !value.initialLoadInProgress && <NavLink to="/account/profile">
               <Menu.Item>
               { value.username}
                </Menu.Item>
                </NavLink>
                }
            </Menu>
        )}
    </AccountConsumer>
)

export default Navbar;

// higher order
{/* <AccountConsumer>
    {
        (value)=> (
            <div>
                jsx here
                {value.whateverkeuysaronit}
            </div>
        )
    }
</AccountConsumer> */}

