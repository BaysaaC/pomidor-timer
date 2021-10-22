import React from 'react'

export default function Cyphers({ value }) {
    return (
        <span>
            {String(value).padStart(2, "0")}
        </span>
    )
}
