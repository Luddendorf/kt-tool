import { Component } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './App.css';
import Modal from './components/Main/Modal/Modal';

class App extends Component{
  
  state = {
    isOpen: false,
    allInformation: []
  }

  openWindow = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  closeWindow = (e) => {
    if(e.target.className === 'modal' || e.target.tagName === "I")
      this.setState({ isOpen: !this.state.isOpen })
  }

  getAllInformation = (data) => {
    console.log(data);
    this.setState({ allInformation: [...this.state.allInformation, data]});
  }

  render(){
    const { isOpen } = this.state;
    return (
      <div className="app">
        { isOpen && <Modal isClose={this.closeWindow} getAllInformation={this.getAllInformation}/> }
        <Header isOpen={this.openWindow}/>
        <Main isOpen={this.openWindow}/>
        <Footer />
      </div>
    );
  }
}

export default App;
