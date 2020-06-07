import React, { ReactElement } from 'react'

export default function ErrorMessage(): ReactElement {
    return (
        <div className="w-100 mt-5 text-center">
            <h4 className="font-weight-bold text-danger">
                There was an error communicating with the server.
            </h4>
            <p>Please ensure the server app is running on port 4000 and try again</p>
        </div>
    )
}
