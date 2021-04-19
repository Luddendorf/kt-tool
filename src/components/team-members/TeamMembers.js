import React from 'react'
import styles from './teamMembersStyle'
import Button from '../button/Button'

const TeamMembers = ({members, handleTeamChange}) => {

    const onMemberNameChange = e => {
        const apdatedMembers = members
        const input = e.target
        apdatedMembers[e.target.id] = input.value

        handleTeamChange(apdatedMembers)
    }   

    const renderMembers = () => {
        return members.map((member, index) => {
            return(
                <input
                    key={index}
                    style={styles.teamMember}
                    type="text"
                    placeholder="Member's name"
                    id={index}
                    value={member}
                    onChange={onMemberNameChange}
                />
            )
        })
    }

    const onAddMemberCick = () => {
        if(members.length >= 10){
            return
        }

        const apdatedMembers = members
        apdatedMembers.push('')
        handleTeamChange(apdatedMembers)
    }

    const onRemoveMemberCick = () => {
        if(members.length <= 1){
            return
        }

        const apdatedMembers = members
        apdatedMembers.pop()
        handleTeamChange(apdatedMembers)
    }

    return(
        <div style={styles.teamMembers}>
            <div >Team members:</div>
            <div style={styles.addingBoard}>
                <div>
                    {renderMembers()}
                </div>
                <div style={styles.buttonBlock}>
                    <Button
                        text="+"
                        style={styles.btnBlue}
                        onClick={onAddMemberCick}
                        disabled={members.length >= 10}
                    />
                    <Button
                        text="-"
                        style={styles.btnBlue}
                        onClick={onRemoveMemberCick}
                        disabled={members.length <= 1}
                    />                        
                </div>
            </div>
        </div>
    )
}

export default TeamMembers