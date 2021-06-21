import React, {Component, useEffect} from 'react'
import NavBar from './NavBar'
import {connect} from 'react-redux'
import {fetchDatas} from '../redux'

function ShowAllContainer({datas, fetchDatas}) {    
    useEffect(()=>{
        fetchDatas()
    }, [])
    console.log("Contaoneer data: ", datas)
    return (
        <div>
            <NavBar/>
            {datas?.loading?
                (<h2>Loading</h2>)
                :
                datas?.error?
                    (<h2>{datas?.error}</h2>)
                    :
                    (
                        <div>
                            <h2>Data:</h2>
                            {datas?.data.map((mainData)=>{
                                return(<div>
                                    <div>{mainData.name}</div>
                                    <ul>
                                    {
                                        mainData.wishes?.map(wish => <p>{wish}</p>)         
                                    }
                                    </ul>
                                </div>)
                            })}
                        </div>
                    )
            }
        </div>
    )
}

const mapStateToProps = (state) =>{
    // console.log(`Show all container > mapstatetoprops`, state)
    return {
        datas: state.showall
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchDatas: () => dispatch(fetchDatas())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowAllContainer)