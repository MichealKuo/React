import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'
import ChildC from './ChildC'

function Parent() {
  const [parentData, setParentData] = useState('Parent Data')

  // 為了要給 ChildB 設定資料到 Parent
  const [data, setData] = useState('')

  return (
    <>
    {/* ChildA 單向資料流 和 C */}
      <ChildA parentData={parentData} />
      {/* ChildB要使用callback 才可以拿資料 */}
      <ChildB setData={setData} />
      <p>由ChildB來的資料：{data}</p>
      <ChildC data={data} />
      {/* A+B=C 誕生 */}
    </>
  )
}

export default Parent
