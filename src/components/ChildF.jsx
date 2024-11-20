import React, {useContext} from 'react'
import {StockContext, UserContext} from '../App'

const ChildF = () => {
    const stockData = useContext(StockContext)
    const userData = useContext(UserContext)
  return (
    <>
        {/* <StockContext.Consumer>
            {
                ({conoilStock, conoilStockPrice}) => {
                    return (
                        <UserContext.Consumer>
                            {
                                ({user}) => {
                                    return (
                                        <>
                                            <p>Used Context API to pass data Between ChildD , ChildF to ChildF</p>
                                            <h3>ChildF - {conoilStock} : {conoilStockPrice}</h3>

                                            <h3>User: {user.name}</h3>
                                            <h3>Logged: {user.isLoggedIn}</h3>
                                        </>
                                    )
                                }
                            }
                        </UserContext.Consumer>
                    )
                }
            }
        </StockContext.Consumer> */}

        <p>Used Context API to pass data Between ChildD , ChildF to ChildF efficiently</p>
        <h3>ChildC - {stockData.conoilStock} : {stockData.conoilStockPrice }</h3>
        <h3>User: {userData.user.name}</h3>
        <h3>Logged: {userData.user.isLoggedIn}</h3>
    </>
  )
}

export default ChildF