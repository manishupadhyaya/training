import React, {Component} from 'react'
import Store from '../redux/store'
import NavBar from './NavBar'
import {Container} from 'semantic-ui-react'
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
                {(this.state.wishes.length!==0)?
                (
                    <Container>
                    <div>
                        <div>
                            Name is: {this.state.name}
                        </div> 
                        <ul>
                            Wishes are:<br/>
                            {this.state.wishes.map((wish, i)=>{
                                return <li key={i}>{wish}</li>
                            })}
                        </ul>
                    </div>
                    </Container>
                ):
                null}               
            </div>
        )
    }
}

export default RecentlyAddedContainer