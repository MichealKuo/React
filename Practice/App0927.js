import { useState } from 'react'

function App() {
  // [得到狀態, 設定狀態] = useState(初始值)  *初始值一定要給 數字就給數字 字串給字串
  const [total, setTotal] = useState(0) 
  
  return (
    <>
     {/* react 用法  h1和button在同一階層的虛擬dom元素 所以須包覆在 封閉的標籤裡 <> </> */}
      <h1>{total}</h1>
      <button
        onClick={() => {
          //React 框架 total在這位置是常數無法透過更改值  只能透過setTotal增加
          setTotal(total + 1)   
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -
      </button>
    </>
  )
}

export default App