import React, {Component}  from 'react';
import './App.css';
import Car from './Car/Car'
// function App() {
//   const divStyle = {
//     textAlign: 'center'
//   }
//   return (
    
//     <div  style= {divStyle}>
//       <h1>Hello React</h1>
//     </div>
    
//   );
// }


class App extends Component {

  state = { 
    cars: [
      {name: 'Ford', year : '2018'},
      {name: 'Audi', year : '2020'},
      {name: 'Mazda', year : '2010'}
    ],
    pageTitle: 'React components'
  }

  changeTitleHandler = (newTitle) => {
    const oldTitle = this.state.pageTitle

    this.setState({
      pageTitle: newTitle
    })
    
  }

  handleInput = (event) => {
    this.setState({
      pageTitle : event.target.value
    })
  }

  render() {
    const divStyle = {
    textAlign: 'center'
  } 


  return (
    
    <div  style= {divStyle}>
      <h1>{this.state.pageTitle}</h1>

      <input type="text" onChange = {this.handleInput} />

      <button 
      onClick={this.changeTitleHandler.bind(this, 'Changed!')}
      >Change title</button>

      { this.state.cars.map((car, index) => {
        return (
          <Car
          key={index}
          name={car.name}
          year={car.year}
          onChangeTitle={() => this.changeTitleHandler(car.name)}
          />
        )
      }) }

      

    </div>
    
  );
  }
}

export default App;
