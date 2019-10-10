import React from 'react'




export const Champion = ( {champion, reset }) => {
    return (
        <div className="jumbotron">
            <h1> Well Done { champion }</h1>
            <button className="btn btn-primary rounded-pill" onClick={ reset }>Start New Tournament</button>

        </div>
    )
}
