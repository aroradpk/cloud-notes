import React , {useContext} from 'react'
import {AlertContext} from '../context/notes/NoteContext';

const Alert = () => {
    const context = useContext(AlertContext);
  const {alert} = context;   
    const capitalize = (word) => {
        if (word === "danger"){
            word = "error"
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div>
            {alert && <div className={`alert alert-${alert.type} alert-dismissable fade show`} role="alert">
               <strong>{capitalize(alert.type)}</strong>: {alert.msg}
            </div>}
        </div>
    )
}

export default Alert