import React, {Component} from 'react'
import Store from '../redux/store'
import NavBar from './NavBar'
class RecentlyAddedContainer extends Component{
    constructor(props)
    {
        super(props)
        this.state = Store.getState().wishlist
    }
    render()
    {
        return(
            <div>
                <NavBar/>
                <div>
                    Name is: {this.state.name}
                </div> 
                <ul>
                    {this.state.wishes.map((wish, i)=>{
                        return <li key={i}>{wish}</li>
                    })}
                </ul>               
            </div>
        )
    }
}

export default RecentlyAddedContainer