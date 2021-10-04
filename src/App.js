import React, { useState } from 'react'

function App(props) {
  // 使用物件值作為狀態值，儲存所有欄位的值
  const [fields, setFields] = useState({
    username: '',
    email: '',
    password: '',
  })
  // 專門用來處理每個欄位的輸入用

  const handleFieldChange = (e) => {
    //1.從原來的狀態物件拷貝新物件
    //2.在拷貝的新物件上處理
    const updatedFields = {
      ...fields,
      [e.target.name]: e.target.value,
      //計算屬性值
    }

    //3.設回原狀態物件
    setFields(updatedFields)
  }

  // 在 表單完成驗証 之後，才會觸發
  const handleSubmit = (e) => {
    // 阻擋form的預設送出行為 網頁會出現信箱密碼在網址就是錯誤提示
    e.preventDefault()

    // 利用FormData Api 得到各欄位的值 or 利用狀態值
    // FormData 利用的是表單元素的 name
    const formData = new FormData(e.target)
    console.log(formData.get('username'))
    console.log(formData.get('email'))
    console.log(formData.get('password'))

    // ex. 用fetch api/axios送到伺服器
  }

  return (
    <>
      <h1>HTML5表單驗証</h1>
      <form onSubmit={handleSubmit}>
        <label>帳號</label>
        <input
          type="text"
          name="username"
          value={fields.username}
          onChange={handleFieldChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={handleFieldChange}
          required
        />
        <label>密碼</label>
        <input
          type="text"
          name="password"
          value={fields.password}
          onChange={handleFieldChange}
          required
          minLength="5"
        />
        {/* <h2>利用FormData獲取checkbox</h2>
        <input type="checkbox" value="西瓜" name="likeList" />
        <label>西瓜</label>
        <input type="checkbox" value="芒果" name="likeList" />
        <label>芒果</label> */}
        <button type="submit">提交</button>
      </form>
    </>
  )
}

export default App
