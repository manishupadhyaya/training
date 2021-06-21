import React, {Component} from 'react'
import WishlistContainer from './WishlistContainer'
import NavBar from './NavBar'
import 'semantic-ui-css/semantic.min.css';
class Home extends Component{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <div>
                <NavBar/>
                <WishlistContainer />
            </div>
        )
    }
}

export default Home