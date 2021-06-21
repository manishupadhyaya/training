import React, {Component} from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class NavBar extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            activeItem: this.props.location.pathname.slice(1)
        }
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render()
    {
        console.log(this.state.activeItem)
        const {activeItem} = this.state
        return(
            <div>
                <Menu pointing>
                    <Menu.Item as={NavLink} to='/home'
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                    >
                    Enter Your WishList
                    </Menu.Item>

                    <Menu.Item as={NavLink} to='/recentlyAdded'
                    name='recentlyAdded'
                    active={activeItem === 'recentlyAdded'}
                    onClick={this.handleItemClick}
                    >
                    Recently Added
                    </Menu.Item>

                    <Menu.Item as={NavLink} to='/showAll'
                    name='showAll'
                    active={activeItem === 'showAll'}
                    onClick={this.handleItemClick}
                    >
                    Show All
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default withRouter((props)=><NavBar {...props}/>)