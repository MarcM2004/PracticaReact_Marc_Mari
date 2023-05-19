import { useState } from 'react'
import {Register} from "./components/Register"
import { Login } from './components/Login'
import { MainMenu } from './components/MainMenu'
import './App.css'

export function App() {
  // Define state variables for view and menu
  const [view, setView] = useState("register")
  const [menu,setMenu] = useState(false)
 

  function changeView(ev)
  {
    //This function is triggered when the view is changed. It checks the value of the view state variable and toggles it between "login" and "register". It then sets the menu state to false.
    view =="login" ? setView("register") : setView("login")
    setMenu(false)
  }
  

  function goMenu() {
    //This function is triggered when the "Go to the shop" button is clicked. It sets the menu state to true.
    setMenu(true)
  }


  function checkView() {
    if (menu==true)
    {
      return <MainMenu />
    }
    return view == "login" ? <Login/> : <Register/>
    //This function checks the value of the menu state. If menu is true, it renders the MainMenu component. Otherwise, it renders either the Login or Register component based on the view state.
  }

  if (menu==false)
  {
    return (
      <>
        <div className="appContainer">
          {checkView()}
        </div>
        <button onClick={changeView}>Change View</button>
        <button onClick={goMenu}>Go to the shop</button>
      </>
    )
  }
  else
  {
    return (
      <>
        <div className="appContainer">
          {checkView()}
        </div>
      </>
    )
  }
      
}