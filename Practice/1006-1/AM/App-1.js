import React, { useState, useEffect, useRef } from 'react'
import $ from 'jquery'

// 參考這裡的步驟說明：
// https://github.com/eyesofkids/mfee19-react/issues/9
function App() {
  const [data, setData] = useState(123)
  const buttonRef = useRef()

  // didMount+didUpdate
  //與狀態更動要互動的整合
  useEffect(() => {
    //jquery的程式碼需要寫在這裡，確保dom元素已經出現在網頁上
    //移除原本的事件
    $(buttonRef.current).off('click')
    $(buttonRef.current).on('click', () => alert('data is ' + data))
  }, [data])

  return (
    <>
      <button ref={buttonRef}>JQUERY按我</button>
      <button
        onClick={() => {
          setData('聯電快漲')
        }}
      >
        更動狀態為999
      </button>
      <button
        onClick={() => {
          setData(888)
        }}
      >
        更動狀態為888
      </button>
    </>
  )
}

export default App
