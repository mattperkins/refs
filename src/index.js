import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  state = {
    a: ''
  };
  
  update = () => {
    this.setState({
      a: this.a.value,
      b: this.refs.b.value,
      c: this.c.refs.input.value
    })
  }

  render() {
    return (
      <div>
        <input
          // alternate way to connect refs
          ref={ node => this.a = node} 
          type="text"
          onChange={this.update} 
        /> {this.state.a}
<hr />
        <input 
          ref="b" 
          type="text"
          onChange={this.update} 
        /> {this.state.b}
<hr />
      <Input 
          ref={component => this.c = component}
          update={this.update} 
        />{this.state.c}
      </div>
    );
  }
}

class Input extends React.Component {
  render() {
    return (
      <div>
      <input 
        ref="input" 
        type="text" 
        onChange={this.props.update} />
      </div>
    )
  }
}


render(<App />, document.getElementById('root'));
