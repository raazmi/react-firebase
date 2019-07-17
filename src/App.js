import React, { Component } from 'react';
import Items from './components/Items';
import database from './common/database';

class App extends Component {
  state={
    notes: '',
    currentData: ''
  }

  handleChange=(e)=>{
    this.setState({
      currentData: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    if(this.state.currentData.length){
      database.ref('notes').push(this.state.currentData);
      this.setState({
        currentData: ''
      });
    }
  }

  handleDelete(item){
    database.ref(`notes/${item}`).remove();
  }

  componentWillMount() {
    database.ref('notes').on('value', (data) =>{ 
      const obj = data.val();
      this.setState({
        notes: obj
      })
    })
  }
  
  render() {
    return (
      <div className="wrapper">
        <form action="#" className="input-form" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.currentData}  placeholder="Add a task..."/>
          <button type="submit">Add Task</button>
        </form>
        {this.state.notes !== null ? <Items notes={this.state.notes} delteItem={this.handleDelete}/> : <p className="items-text">There is no item here</p>}
      </div>
    )
  }
}


export default App;
