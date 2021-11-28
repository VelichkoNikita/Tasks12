import React from 'react'
import { Row, Col } from '../../StyledCStyles/grid'


const Task2 = (props) => {
    return (
        <Row direction_sm bgcolor={"silver"} justify_content={"center"} align_items={"center"}>
            <Col
                col={7} //чтобы col-ширина блока картинки была больше, как в макете
                sm={12}
                order={props.orderL}
                order_sm={1}>
                <img src={props.img} style={{ maxHeight: "400px", maxWidth: "100%" }} />
            </Col>
            <Col
                col={5} //чтобы col-ширина блока картинки была больше, как в макете
                sm={12}
                padding_sm={3}
                order={props.orderR}
                order_sm={2}>
                {props.text}
            </Col>
        </Row>
    )
}

export default Task2