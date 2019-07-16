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
      <div>
        <form action="#" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.currentData} />
          <button type="submit">Add</button>
        </form>
        {this.state.notes !== null ? <Items notes={this.state.notes} delteItem={this.handleDelete}/> : <p>There is no item here</p>}
      </div>
    )
  }
}


export default App;
