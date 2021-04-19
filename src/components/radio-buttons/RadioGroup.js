import React from 'react'

const RadioGroup = ({onChange}) => {
    return(
        <div>
            <div>Are you sure?</div> 
            <label>
                <input
                    type='radio'
                    name='sureGroup'
                    value='yes'
                    onChange={onChange}
                />
                Yes
            </label>
            <label>
                <input
                    type='radio'
                    name='sureGroup'
                    value='not'
                    onChange={onChange}
                />
                Not
            </label>
        </div>
    )
}

export default RadioGroup