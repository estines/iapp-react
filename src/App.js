import React, { Component } from 'react'
import './App.css';
import { Button, Card, List, Input } from 'antd'
const Search = Input.Search

const container = { display: 'flex', justifyContent: 'center', alignItem: 'center', marginTop: '30px' }

class App extends Component {
  state = {
    text: '',
    itemList: []
  }

  onAdd = value => {
    this.setState({
      text: '',
      itemList: [...this.state.itemList, value]
    })
  }

  onAddChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  onClear = () => {
    this.setState({
      text: '',
      itemList: []
    })
  }

  render() {
    return (
      <div style={container}>
        <Card style={{ width: 400 }}>
          <h1>Todo List</h1>
          <div style={{ display: 'inline-block' }}>
            <Search
              placeholder="input search text"
              value={this.state.text}
              onChange={this.onAddChange}
              onSearch={this.onAdd}
              enterButton="Add"
              addonAfter={<Button type="danger" onClick={() => this.onClear()}>Clear All</Button>}
            />
          </div>
          <List
            style={{ marginTop: 30 }}
            bordered
            dataSource={this.state.itemList}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </Card>
      </div>
    )
  }
}

export default App
