import React from 'react'
import PropTypes from 'prop-types'

function Child(props) {
  console.log(props)
  return (
    <>
      {/* 子女元件透過props得到父母的元件*/}
      <h1>{props.name}</h1>
      <p>{props.text}</p>
    </>
  )
}
// 單向資料流 從父母得到資料

//預設
Child.defaultProps = {
  name: '陳小花',
  text: 'Hello',
}
Child.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Child
