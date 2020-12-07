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
    pageTitle: 'React components',
    showCars: false
  }

  toogleCarsHandler = () => {
    const oldTitle = this.state.pageTitle

    this.setState({
      showCars: !this.state.showCars 
    })
    
  }

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({
      cars: cars
    })
  }
  deleteHendler(index){
    const cars = this.state.cars.concat()
    cars.splice(index, 1)
    this.setState({cars})

  }

  render() {
    const divStyle = {
    textAlign: 'center'
  } 

  let cars = null;

  if (this.state.showCars) {
       cars = this.state.cars.map((car, index) => {
      return (
        <Car
        key={index}
        name={car.name}
        year={car.year}
        onDelete={this.deleteHendler.bind(this, index)}
        onChangeName={event => this.onChangeName(event.target.value, index)}
        />
      )
    }) 
  }


  return (
    
    <div  style= {divStyle}>
      <h1>{this.state.pageTitle}</h1>

     

      <button 
      onClick={this.toogleCarsHandler}
      >Toogle Cars</button>

      { cars }

      

    </div>
    
  );
  }
}

export default App;
