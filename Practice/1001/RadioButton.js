import React from 'react'

function RadioButton(props) {
  const { value, checkedValue, setCheckedValue } = props

  return (
    <>
      <input
        type="radio"
        value={value}
        checked={checkedValue === value}
        onChange={(e) => {
          setCheckedValue(e.target.value)
        }}
      />
      <label>{value}</label>
    </>
  )
}

export default RadioButton