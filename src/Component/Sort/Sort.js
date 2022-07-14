import React from 'react'
import data from "./data.json"




function Sort (){
    console.log(data)
    

    const allData = () =>{
    data.map((props) =>
    {
        return (props.nums = props.likes.length)
    })
    }

    const sortData = (value) =>
    {
        return (a,b) =>
        {
            if (a[value] > b[value])
            {
                return -1
            } else
            {
                return 0
            }
        }
    }
console.log(data.sort(sortData("nums")))
    

React.useEffect(() =>
{
    allData()
    console.log(data)
},[])
  return (
      <div>{
          data.map((props, i) => (
              <div>{props.defaultvalue }</div>
          ))
       }</div>
  )
}

export default Sort