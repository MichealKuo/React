import React, { useState } from 'react'

function FormFC() {
  // [得到狀態, 設定狀態] = useState(初始值)
  // state(物件值)初始值 "不要寫" 以下幾種：null, {} , 沒寫
  // 要把物件值中的屬性描述寫出來
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })

  return (
    <>
      <h2>FormFC 函式型元件</h2>
      username:
      <input
        type="text"
        value={loginData.username}
        onChange={(event) => {
          setLoginData({
            ...loginData,
            //因為FC狀態不一定是物件 所以要先展開 才不會輸入username password  被覆蓋

            username: event.target.value,
          })
        }}
      />
      password:
      <input
        type="text"
        value={loginData.password}
        onChange={(event) => {
          setLoginData({
            ...loginData,
            //因為FC狀態不一定是物件 所以要先展開 才不會輸入username password  被覆蓋
            password: event.target.value,
          })
        }}
      />
    </>
  )
}

export default FormFC