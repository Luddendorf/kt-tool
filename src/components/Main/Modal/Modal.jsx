import { Component } from "react";
import Add from "./Add/Add";
import Btns from "./Btns/Btns";
import Captain from "./Captain/Captain";
import Visible from "./Visible/Visible";

class Modal extends Component {

    state = {
        captainName: '',
        boatName: '',
        isVisible: false,
        radio: null,
        value: '',
        members: []
    }

    changeCaptainName = (e) => {
        this.setState({captainName: e.target.value});
    }

    changeBoatName = (e) => {
        this.setState({boatName: e.target.value});
    }

    changeCheckBox = (e) => {
        e.target.checked ?
            this.setState({isVisible: e.target.checked}):
            this.setState({
                isVisible: e.target.checked,
                radio: null
            })
    }

    changeRadio = (e) => {
        this.setState({radio: e.target.dataset.text});
    }

    addMembers = (data) => {
        this.setState({members: data});
    }

    changeValue = (e) => {
        this.setState({value: e.target.value})
    }

    deleteSeaman = (e) => {
        const value = e.target.previousElementSibling.textContent;
        this.setState({members: this.state.members.filter(el => el !== value)})
    }

    addSeaman = () => {
        if(this.state.value.trim().length >= 3 && this.state.members.length < 5){
            this.setState({
                members: [...this.state.members, this.state.value],
                value: '',
            });
        }
    }

    clearModal = () => {
        this.setState({
            captainName: '',
            boatName: '',
            isVisible: false,
            radio: null,
            members: []
        })
    }

    checkAllInformation = (
            captainName,
            boatName,
            isVisible,
            radio,
            members
    ) => {
        this.props.getAllInformation({ 
            captainName,
            boatName,
            isVisible,
            radio,
            members
        })
    }

    render (){
        const { isClose } = this.props;
        const { isVisible, members, captainName, boatName, value } = this.state;
        return (
            <div onClick={isClose} className='modal'>
                <div className="modal__container">
                    <i className="fas fa-times"></i>
                    <Captain changeCaptainName={this.changeCaptainName} changeBoatName={this.changeBoatName} captainName={captainName} boatName={boatName} />
                    <Visible changeCheckBox={this.changeCheckBox} isVisible={isVisible} changeRadio={this.changeRadio}/>
                    <Add changeValue={this.changeValue} deleteSeaman={this.deleteSeaman} value={value} addSeaman={this.addSeaman} members={members}/>
                    <Btns clearModal={this.clearModal} checkAllInformation={this.checkAllInformation} state={this.state}/>
                </div>
            </div>    
        );
    }
}

export default Modal;