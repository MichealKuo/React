import React from 'react'

class CounterCC extends React.Component {
  constructor() {
    super()
    // 定義狀態的初始值 super 呼叫parent
    this.state = {
      total: 0,
    }
  }

  render() {
    return (
      <>
        <h1
          onClick={() => {
            this.setState({
              //設定狀態setState 然後給一個物件值 total: this.state.total + 1,
              total: this.state.total + 1,
            })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default CounterCC
