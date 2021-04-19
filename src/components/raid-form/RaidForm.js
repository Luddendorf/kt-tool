import React from 'react'
import styles from './raidFormStyle'
import Input from '../input/Input'
import Checkbox from '../checkbox/Checkbox'
import RadioGroup from '../radio-buttons/RadioGroup'
import TeamMembers from '../team-members/TeamMembers'
import Button from '../button/Button'

class RaidForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            captainName: '',
            captainInputError: '',
            shipName: '',
            shipsInputError: '',
            iFollowCodex: false,
            areYouSure: null,
            teamMembers: [''],
            formError:''
        }
    }

    onCaptainNameChange = e => {
        const captainName = e.target.value
        this.setState({
            captainName
        })

        const captainNameRE = /^[a-z]+$/i
        if(!captainNameRE.test(captainName)){
            this.setState({
                captainInputError:'Name should contain only letters' 
            })
        }else{
            this.setState({captainInputError:''})
        }

    }

    onShipNameChange = e => {
        const shipName = e.target.value
        this.setState({
            shipName
        })

        const shipNameRE = /^[a-z]+$/i
        if(!shipNameRE.test(shipName)){
            this.setState({
                shipsInputError:'Name should contain only letters or numbers' 
            })
        }else{
            this.setState({shipsInputError:''})
        }
    }

    onIFollowCodexChange = e => {
        this.setState({
            iFollowCodex: e.target.checked
        })
    }

    onAreYouSureChange = e => {
        this.setState({areYouSure: e.target.value})
    }

    onTeamMembersChange = teamMembers => {
        this.setState({
            teamMembers
        })
    }

    onClearClick = () => {
        this.setState({
            captainName: '',
            captainInputError: '',
            shipName: '',
            shipsInputError: '',
            iFollowCodex: false,
            areYouSure: false,
            teamMembers: ['']
        })
    }

    onSendClick = () => {
        if(
            !/^[a-z]+$/i.test(this.state.captainName) ||
            !/^[a-zA-Z0-9]+$/.test(this.state.shipName) ||
            (this.state.iFollowCodex && this.state.areYouSure===null)
        ){
            this.setState({
                formError: 'Some fields are incorrent'
            })
            return
        }

        const teamMembers = this.state.teamMembers
        teamMembers.forEach(member => {
            if(member === ''){
                this.setState({
                    formError: 'Some fields are incorrent'
                })
                return
            }
        })

        const formState = {
            captainName: this.state.captainName,
            shipName: this.state.shipName,
            isFollowingCodex: this.state.iFollowCodex,
            areYouSure: this.state.areYouSure,
            teamMembers: this.state.teamMembers
        }

        this.props.submitForm(formState)
    }   

    onFormFocus = () => {
        this.setState({formError:''})
    }

    render(){
        return(
            <form style={styles.form} onFocus={this.onFormFocus} onClick={e=>e.stopPropagation()}> 
                <div style={styles.title}>Take part in raid</div>
                <Input
                    value={this.state.captainName}
                    placeholder="Captain's name"
                    error={this.state.captainInputError}
                    onChange={this.onCaptainNameChange}
                />
                <Input
                    value={this.state.shipName}
                    placeholder="Ship's name"
                    error={this.state.shipsInputError}
                    onChange={this.onShipNameChange}
                />
                <Checkbox
                    checked={this.state.iFollowCodex}
                    label='I follow pirate codex'
                    name='codex'
                    onChange={this.onIFollowCodexChange}
                />
                { this.state.iFollowCodex && <RadioGroup onChange={this.onAreYouSureChange}/>}
                <TeamMembers
                    handleTeamChange={this.onTeamMembersChange}
                    members={this.state.teamMembers}
                />
                {this.state.formError && <div style={styles.formError}>{this.state.formError}</div>}
                <div style={styles.buttonBlock}>
                    <Button
                        text="Clear"
                        style={styles.btnBlack}
                        onClick={this.onClearClick}
                    />
                    <Button
                        text="Send"
                        style={styles.btnBlack}
                        onClick={this.onSendClick}
                    />
                </div>
            </form>
        )  
    } 
}

export default RaidForm
