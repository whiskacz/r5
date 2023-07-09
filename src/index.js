import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
import Alert from './components/Alert'


const R5App = () =>{

return (
    <div>
        <Alert message={"successful login"}/>
        <Alert message={"Automatic log out"} delay={true} />

    </div>
)
}


const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)
root.render(<R5App />)