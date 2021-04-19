import React from 'react'
import './App.css';
import RaidForm from './components/raid-form/RaidForm'
import Popup from './components/popup/Popup'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      goldenFleetRaiderForm: null,
      showPopup: false
    }
  }

  submitForm = formState => {
    this.setState({ 
      goldenFleetRaiderForm: formState
    })

    this.closePopup()
  }

  onTakePartClick = () => {
    const body = document.getElementById('body')
    body.classList.add('stopBody')

    this.setState({showPopup: true})
  }
 
  closePopup = () => {
    const body = document.getElementById('body')
    body.classList.remove('stopBody')

    this.setState({showPopup: false})
  }

  render(){
    return(
      <div className='App'>
        <button className='btn' type="button" onClick={this.onTakePartClick}>
          Take part
        </button>

        {this.state.showPopup &&
          <Popup
            closePopup={this.closePopup}
          >
            <RaidForm submitForm={this.submitForm}/>
          </Popup>
        }
      </div>
    )
  }
  
}

export default App;
