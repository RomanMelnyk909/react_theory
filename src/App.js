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

  render() {
    const divStyle = {
    textAlign: 'center'
  } 

  const cars = this.state.cars

  return (
    
    <div  style= {divStyle}>
      <h1>{this.state.pageTitle}</h1>

      <Car name= {cars[0].name} year = {cars[0].year} /> 
      <Car name= {cars[1].name} year = {cars[1].year} /> 
      <Car name= {cars[2].name} year = {cars[2].year} /> 
      

    </div>
    
  );
  }
}

export default App;
