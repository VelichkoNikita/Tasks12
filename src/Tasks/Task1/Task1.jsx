import React from 'react'
import '../Task1/Task1.scss'
import Logo1 from '../../Images/1Task/12Storeez.svg'
import Logo2 from '../../Images/1Task/FinnFlare.svg'
import Logo3 from '../../Images/1Task/FrenchConnection.svg'
import Logo4 from '../../Images/1Task/KarenMillen.svg'
import Logo5 from '../../Images/1Task/MintVelvet.svg'
import Logo6 from '../../Images/1Task/Nike.svg'

const Task1 = (props) => {
    return (
            <div className="Row">
                <img src={Logo1} />
                <img src={Logo2} />
                <img src={Logo3} />
                <img src={Logo4} />
                <img src={Logo5} />
                <img src={Logo6} />
            </div>
    )
}

export default Task1