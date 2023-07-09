import React, { useState, useEffect } from "react"


const Alert = ({message, delay }) => {

    const[showAlert, setShowAlert] = useState(true)


    const changingClass = (e) => {
        e.target.parentElement.classList.add("hide")
    

    setTimeout(() => {
        setShowAlert(false)
    }, 1000);
    }

     useEffect(() => {
         delay && setTimeout(() => {setShowAlert(false)}, 5000)
 })



    return(
        showAlert && 
        <div className="container">
            <div>{message}</div>
            <button onClick={changingClass}>X</button>
        </div>
    )
}

export default Alert