import React from 'react'
import { useEffect, useState } from 'react';
import { Button_Primary } from '../../StyledCStyles/styles'
import { Row, Col } from '../../StyledCStyles/grid'
import Task12Inputs from './Task12Inputs'

const Task12 = (props) => {
    const [modalActive, setModalActive] = useState(false)
    const [success, setSuccess] = useState(false)
    const openModalVid = () => {
        setModalActive(prev => !prev)
    }

    return <>
        <Row justify_content={"center"} pb={7}>
            <div>
                <Col>
                    <div>
                        <Button_Primary
                            onClick={() => {
                                openModalVid(true)
                            }}>
                            Элемент
                        </Button_Primary>
                        {success && <h1>Успех</h1>}
                    </div>
                </Col>
                <Task12Inputs modalActive={modalActive} setModalActive={setModalActive}
                    setSuccess={setSuccess} success={success} windowText={"Форма"} />
            </div>
        </Row>
    </>
}

export default Task12