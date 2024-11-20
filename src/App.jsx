import Helloworld from "./components/helloworld"
import LearnReact from "./components/LearnReact"
import LearnJSX from "./components/LearnJSX"
import LearnProps from "./components/LearnProps"
import LearnPropsDestructure from "./components/LearnPropsDestructure"
import LearnEvents from "./components/LearnEvents"
import LearnLiftingState from "./components/LearnLiftingState"
import LearnUseState from "./components/LearnUseState"
import CounterApp from "./components/CounterApp"
import LearnUseEffect from "./components/LearnUseEffect"
import LearnUseMemo from "./components/LearnUseMemo.JSX"
import ChildA from "./components/ChildA"
import ChildD from "./components/ChildD"
import { createContext, useState } from "react"
import LearnUseRef from "./components/LearnUseRef"
import LearnCustomHooks from "./components/LearnCustomHooks"
import LearnConditionalRendering from "./components/LearnConditionalRendering"
import LearnMap from "./components/LearnMap"
import LearnInlineCSS from "./components/LearnInlineCSS"
import LearnInternalAndExternalCSS from "./components/LearnInternalAndExternalCSS"
import LearnForms from "./components/LearnForms"


// Context API
// create context
const StockContext = createContext()
const UserContext = createContext()


function App() {

  let price = 200
  let dangotePrice = 2000

  let mtnStock = 'MTNN'

  let conoilStock = 'CONOIL'
  let conoilStockPrice = 1000

  const [user, setUser] = useState({name: 'Maxwell', isLoggedIn: 'Yes'})

  // lifting state
  // get data from child component
  const getStock = (data) => {
    console.log(data)
  }

  // For Context API
  // To create context API you need three things:
  // Create, Provider and Consumer


  

  return (
    <>
      <h1>App Component</h1>
      {/* <Helloworld/>
      <LearnReact/> */}
      {/* <LearnJSX/> */}
      <LearnProps stock="Tesla" price={price} />
      <hr />

      {/* Props Destructuring */}
      <h2>Learn Props Destructure</h2>
      <LearnPropsDestructure stock="Dangote" price={dangotePrice} />
      <hr />

      <h2>Learn Events</h2>
      <LearnEvents/>
      <hr />

      <h2>Learn Lifting State</h2>
      <LearnLiftingState getMyStock={getStock} />
      <hr />

      <h2>Learn Use State</h2>
      <LearnUseState/>
      <hr />

      <h2>Counter App</h2>
      <CounterApp/>
      <hr />

      <h2>Learn UseEffect</h2>
      <LearnUseEffect/>
      <hr />

      <h2>Learn Use Memo</h2>
      <LearnUseMemo/>
      <hr />

      <h2>Prop Drilling</h2>
      <ChildA stock={mtnStock}/>
      <hr />

      <h2>Context API</h2>
      <StockContext.Provider value={{conoilStock, conoilStockPrice}}>
        <UserContext.Provider value={{user, setUser}}>
        <ChildD/>
        </UserContext.Provider>
      </StockContext.Provider>
      <hr />

      <h2>Learn UseRef</h2>
      <LearnUseRef/>
      <hr />

      <h2>Custom Hooks</h2>
      <LearnCustomHooks/>
      <hr />

      <h2>Learn Conditional Rendering</h2>
      <LearnConditionalRendering/>
      <hr />

      <h2>Learn Map Function</h2>
      <LearnMap/>
      <hr />

      <h2>Learn Inline CSS in React</h2>
      <LearnInlineCSS/>
      <hr />

      <h2>Learn Internal and External CSS</h2>
      <LearnInternalAndExternalCSS/>
      <hr />

      <h2>Learn Forms</h2>
      <LearnForms/>









    </>
  )
}

export default App
export {StockContext, UserContext}
