import React from 'react'
import { AppWrapper, TextWrapper, ImgWrapper } from '../../StyledCStyles/styles'

const Task3 = (props) => {
    return (
        <AppWrapper left={props.left} right={props.right}>
            <ImgWrapper
                order={props.orderL}
                order_sm={1}>
                <img src={props.img} style={{ maxHeight: "400px", maxWidth: "100%" }} />
            </ImgWrapper>
            <TextWrapper
                order={props.orderR}
                order_sm={2}>
                {props.text}
            </TextWrapper>
        </AppWrapper>
    )
}

export default Task3