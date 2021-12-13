import React from 'react'

import {capitalizeFirstLetter} from '../../helpers/capitalize'

import './style.css'

const UserSelection = ({city, timeframe}) => {
        return (
            <div className="userSelectionContainer">
                <p className="userSelectionTitle">{city && `${capitalizeFirstLetter(city)}, ${timeframe}`}</p>
            </div>
        )
}

export default UserSelection
