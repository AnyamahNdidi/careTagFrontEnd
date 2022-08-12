import React,{createContext, useState, useEffect} from "react"
import { useSelector } from 'react-redux'

export const UserContext = createContext(null)

export const UseProvider = ({children})=>{
  const [user, setUser] = useState(null)
  const [selectedChat, setSelectedChat] = useState()
  const [chat, setChat] = useState()
  const [toggle, setToggle] = useState(true)
  
  const [overView, setOverView] = useState(true)
  const [allAgent, setAllAgent] = useState(false)
  const [addAgent, setAddAgent] = useState(false)
  const [active, setActive] = useState(false)
   const [customer, setCustomer] = useState(false)

   const [holdOrganization, setHoldOrganization] = useState("")
   
   

  const handleToggle = () =>{
      setToggle(!toggle)
  }

  const currentUser = useSelector((state)=> state?.persistedReducer?.user)

      const overViewButton =() =>{
     setOverView(true)
     setAllAgent(false)
     setAddAgent(false)
     setActive(false)
     setCustomer(false)
  }
    
  const allButton =() =>{
     setOverView(false)
     setAllAgent(true)
     setAddAgent(false)
     setActive(false)
     setCustomer(false)
  }
  const addBtton =() =>{
     setOverView(false)
     setAllAgent(false)
     setAddAgent(true)
     setActive(false)
     setCustomer(false)
  }
  const activeButton =() =>{
     setOverView(false)
     setAllAgent(false)
     setAddAgent(false)
     setActive(true)
     setCustomer(false)
  }
  const customerButton =() =>{
     setOverView(false)
     setAllAgent(false)
     setAddAgent(false)
     setActive(false)
     setCustomer(true)
  }
  useEffect(()=>{
     setUser(currentUser)
     
  },[])

  return (
    <UserContext.Provider value={{
      user, setUser, selectedChat, setSelectedChat, chat, setChat, toggle, setToggle, handleToggle,
      overView, setOverView, allAgent, setAllAgent, addAgent, setAddAgent, active, setActive, customer, setCustomer,
      overViewButton,allButton,addBtton,activeButton,customerButton,holdOrganization, setHoldOrganization
    }}>
    {children}
    </UserContext.Provider>
  )

}