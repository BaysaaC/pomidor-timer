import React from 'react'

export default function Button({ label, title, disabled = false, onClick }) {
    return (
        <button
            type="button"
            title={title || label}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </button>
    )
}
