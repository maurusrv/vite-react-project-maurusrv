import React from 'react'


class ClassComponent extends React.Component {
  // Version 1
  // constructor (props) {
  //   super(props)

  //   this.state = {
  //     count: 0,   
  //   }


  //   this.onClickPlus = this.onClickPlus.bind(this)
  // }

  // onClickPlus() {
  //   // may access kay this context
  //   this.setState({
  //     count: this.state.count + 1,
  //   })
  // }

  // Version 2
  state = {
    count: 0,
    anotherState: null,
  }

  componentDidMount() { // Usually for loading data, fetching
    console.log('CC: componentDidMount')
  }

  componentDidUpdate(prevState, prevProps) { // Usually for side-effect after state change
    console.log('CC: componentDidUpdate')
    const { count, anotherState } = this.state

    if (prevState.count !== count) {
      console.log('CC: Do your logic for count')
    } else if (prevState.anotheState !== anotherState) {
      console.log('CC: Do your logic for anotherState')
    }
  }

  componentWillUnmount() {
    console.log('CC: componentWillUnmount')    
  }

  onClickPlus = () => {
    // walang this context, hindi accessible si this
    this.setState({
      count: this.state.count + 1,
    })
  }


  render () {
    const { count } = this.state

    console.log('CC: Render')

    return (
      <div className="border-2 flex gap-10 justify-center items-center">
      <div className="flex-1">CC: {count}</div>
      <button className="flex-1" onClick={this.onClickPlus}>+</button>      
    </div>
    )
  }
}

export default ClassComponent
