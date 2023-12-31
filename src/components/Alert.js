import React from 'react'

export default function Alert(props) {
    const capatalize = (word) =>{
        const txt= word.toLowerCase();
        return txt.charAt(0).toUpperCase() + txt.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capatalize(props.alert.type)}</strong>: {props.alert.message}
  </div>
  )
}
