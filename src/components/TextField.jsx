import React from 'react'

function TextField({name,type,placeholder,register}) {
  return (
    <input
        {...register(name)}
        className="input"
        type={type}
        placeholder={placeholder}
        name={name}
      />
  )
}

export default TextField