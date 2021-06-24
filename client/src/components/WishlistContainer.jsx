import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addWishlist, addToDb, updateToDb} from '../redux'
import { Input, Modal, Image, Header, Button } from 'semantic-ui-react'
import axios from 'axios'

class WishlistContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"",
            wishes: [""],
            wish: "",
            modalOpened: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    checkNameInDb = () =>{
        const {name} = this.state
        axios.post('/checkName',{name})
        .then((res)=>{
            console.log("Check res", res)
            if(res.data.flag === 1)
            {
                this.setState({
                    modalOpened: true
                })
            }
            else
            {
                this.setState({
                    modalOpened: false
                })
            }
            if(this.state.modalOpened===false)
            {
                this.props.addToDb(this.state.name, this.state.wishes)
                this.clearState()
            }
        })
    }

    handleRemove(i) {
        const removeWish = this.state.wishes[i]
        let filteredWishes = this.state.wishes.filter((wish) => wish != removeWish)
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

    clearState = () =>{
        this.setState({
            name:"",
            wishes: [""],
            modalOpened:false
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
                        <Input placeholder="Name" value={this.state.name} onChange={(e)=>{this.handleChange(e.target.value, "name")}}/>
                        {
                            this.state.wishes.map((wish, i)=>{
                                return(
                                    <div key={`a${i}`}>
                                        <Input value={wish} key={i} placeholder="Wish" onChange={(e)=>{this.handleChange(e.target.value, "wish", i)}}/>
                                        <Button key={`button${i}`} onClick={()=>{this.handleRemove(i)}}>Remove</Button>
                                    </div>
                                )
                            })
                        }
                        <Button onClick={this.handleClick}>
                            Add
                        </Button>
                        <Button onClick={() => {
                            this.props.addWishlist(this.state.name, this.state.wishes)
                            this.clearState()
                        }}>Save</Button>
                        <Button onClick={() => {
                            this.checkNameInDb()
                        }}>Submit</Button>
                        {this.state.modalOpened?
                        (<div>
                            <Modal onClose={() => this.setState({
                                   modalOpened: false
                                })}
                                   onOpen={() => this.setState({
                                   modalOpened: true
                                })}
                                  open={this.state.modalOpened}
                            >
                                <Modal.Header>Select a Photo</Modal.Header>
                                <Modal.Content >
                                    <Modal.Description>
                                    <Header>Name Already exists in the database</Header>
                                    <p>
                                        We've found the following name already in the database. Do you want to append the wish to the wishes array.
                                    </p>
                                    <p>Is it okay to Confirm?</p>
                                    </Modal.Description>
                                </Modal.Content>
                                <Modal.Actions>
                                    <Button color='black' onClick={() => this.setState({
                                   modalOpened: false
                                })}>
                                    Nope
                                    </Button>
                                    <Button
                                    content="Yep"
                                    labelPosition='right'
                                    icon='checkmark'
                                    onClick={() => {
                                        this.setState({
                                        modalOpened: false
                                     })
                                        this.props.updateToDb(this.state.name, this.state.wishes)
                                        this.clearState()
                                    }}
                                    positive
                                    />
                                </Modal.Actions>
                            </Modal>
                        </div>
                        )
                        :
                        null
                        }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('mstp',state)
    return {
        name: state.wishlist.name,
        wishes: state.wishlist.wishes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addWishlist: (name, wishes) => dispatch(addWishlist(name, wishes)),
        addToDb: (name, wishes) => dispatch(addToDb(name, wishes)),
        updateToDb: (name, wishes) => dispatch(updateToDb(name, wishes))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WishlistContainer)