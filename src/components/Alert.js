import React from 'react'

function Alert(props) {

    const capitlize = (word) => {
        let newword = word.toLowerCase();
        return newword.charAt(0).toUpperCase() + newword.slice(1);
    }
    return (
        <div style={{height:'65px'}}>
            {props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{capitlize(props.alert.type)}</strong>: {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert