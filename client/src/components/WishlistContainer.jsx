import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addWishlist, addToDb} from '../redux'
import { Input } from 'semantic-ui-react'

class WishlistContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"",
            wishes: [""],
            wish: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }


    handleRemove(e) {
        let filteredWishes = this.state.wishes.filter((wish) => wish != e.target.value)
        this.setState({
            wishes: filteredWishes
        })
    }

    handleClick(e){
        this.setState({
            wishes: [...this.state.wishes, this.state.wish],
            wish:""
        })
    }

    handleChange(value, type, i){
        if(type==="name")
        {
            this.setState({
                name: value
            })
        }
        else
        {
            this.setState({
                wishes:this.state.wishes.map((wish, j)=>{
                    if(i===j)
                    {
                        return value;
                    }
                    else
                    {
                        return wish    
                    }
                })
            })
        }
    }

    render() {
        return (
            <div style={{display: "flex", flexDirection:"column"}}>
                        <Input placeholder="Name" onChange={(e)=>{this.handleChange(e.target.value, "name")}}/>
                        {
                            this.state.wishes.map((wish, i)=>{
                                return(
                                    <Input value={wish} key={i} placeholder="Wish" onChange={(e)=>{this.handleChange(e.target.value, "wish", i)}}/>
                                )
                            })
                        }
                        <button onClick={this.handleClick}>
                            Add
                        </button>
                        <button onClick={() => this.props.addWishlist(this.state.name, this.state.wishes)}>Save</button>
                        <button onClick={() => this.props.addToDb(this.state.name, this.state.wishes)}>Submit</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        wishes: state.wishes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addWishlist: (name, wishes) => dispatch(addWishlist(name, wishes)),
        addToDb: (name, wishes) => dispatch(addToDb(name, wishes))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WishlistContainer)