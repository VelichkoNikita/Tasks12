import React from 'react'
import { useEffect, useState } from 'react';
import { Input, CloseButton, ModalBase, ModalP } from '../../StyledCStyles/styles'
import { Row, Col } from '../../StyledCStyles/grid'

const Task12Inputs = ({ modalActive, setModalActive, windowText, success, setSuccess }) => {
    const [email, setEmail] = useState('')
    const [fio, setFio] = useState('')
    const [age, setAge] = useState('')
    //текст ошибок
    const [emailError, setEmailError] = useState(null)
    const [fioError, setFioError] = useState(null)
    const [ageError, setAgeError] = useState(null)
    //доступность кнопки "отправить"
    const [formValid, setFormValid] = useState(true)
    //цвета
    const [inputColor1, setInputColor1] = useState("white")
    const [inputColor2, setInputColor2] = useState("white")
    const [inputColor3, setInputColor3] = useState("white")
    //успех интпутов
    const [inputSucess1, setInputSucess1] = useState(false)
    const [inputSucess2, setInputSucess2] = useState(false)
    const [inputSucess3, setInputSucess3] = useState(false)


    //если все 3 инпуты заполнены, то кнопка "отправить" доступна
    useEffect(() => {
        if (fio && age && email) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [fio, age, email])
    //если успех 3-х инпутов
    useEffect(() => {
        if (inputSucess1 && inputSucess2 && inputSucess3) {
            setModalActive(prev => !prev)
            setSuccess(prev => !prev)
        } else { console.log('Неуспех') }
    }, [inputSucess1, inputSucess2, inputSucess3])

    useEffect(() => {
        if (emailError === null) { setInputColor1("white") } else { setInputColor1("red") }
        if (fioError === null) { setInputColor2("white") } else { setInputColor2("red") }
        if (ageError === null) { setInputColor3("white") } else { setInputColor3("red") }
    }, [emailError, fioError, ageError])

    //валидация
    const emailHandler = (e) => {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(email).toLocaleLowerCase())) {
            setEmailError("Некорректный email")
        } else {
            setEmailError(null)
            setInputSucess1(true)
        }
    }

    const ageHandler = (e) => {
        if (age > 150 || age < 0) {
            setAgeError('Возраст должен быть от 0 до 30')
        } else {
            setAgeError(null)
            setInputSucess2(true)
        }
    }

    const fioHandler = (e) => {
        if (fio.length < 3) {
            setFioError('ФИО должно содержать более 2-х символов');

        } else {
            setFioError(null)
            setInputSucess3(true)
        }

    }

    const Check = (e) => {
        emailHandler();
        ageHandler();
        fioHandler();
        e.preventDefault()
    }

    return (
        <>
            {modalActive ? (
                <ModalBase onClick={() => setModalActive(prev => !prev)} >
                    <Col
                        border={"1px solid white"}
                        padding={1}
                        max_width={"550px"}
                        background={"#FBFCFF"}
                        border_radius={"6px"}
                        onClick={e => e.stopPropagation()}
                    >
                        <Row align_items={"center"}>
                            <Col col={1}>
                                <CloseButton onClick={() => setModalActive(prev => !prev)}
                                >
                                    <svg width="16" height="16" viewBox="0 0 23 23" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.1999 11.4984L22.4336 3.28264C22.7942 2.92202 22.9967 2.43292 22.9967 1.92292C22.9967 1.41293 22.7942 0.92383 22.4336 0.563212C22.073 0.202593 21.584 0 21.0741 0C20.5642 0 20.0751 0.202593 19.7146 0.563212L11.5 8.79809L3.28544 0.563212C2.92487 0.202593 2.43584 -3.79973e-09 1.92592 0C1.416 3.79973e-09 0.926966 0.202593 0.566399 0.563212C0.205832 0.92383 0.00326783 1.41293 0.00326783 1.92292C0.00326782 2.43292 0.205832 2.92202 0.566399 3.28264L8.80011 11.4984L0.566399 19.7141C0.386927 19.8921 0.244476 20.1039 0.147263 20.3373C0.0500504 20.5707 0 20.821 0 21.0738C0 21.3266 0.0500504 21.5769 0.147263 21.8103C0.244476 22.0437 0.386927 22.2555 0.566399 22.4335C0.744406 22.613 0.956187 22.7555 1.18953 22.8527C1.42286 22.9499 1.67314 23 1.92592 23C2.1787 23 2.42897 22.9499 2.66231 22.8527C2.89565 22.7555 3.10743 22.613 3.28544 22.4335L11.5 14.1986L19.7146 22.4335C19.8926 22.613 20.1043 22.7555 20.3377 22.8527C20.571 22.9499 20.8213 23 21.0741 23C21.3269 23 21.5771 22.9499 21.8105 22.8527C22.0438 22.7555 22.2556 22.613 22.4336 22.4335C22.6131 22.2555 22.7555 22.0437 22.8527 21.8103C22.95 21.5769 23 21.3266 23 21.0738C23 20.821 22.95 20.5707 22.8527 20.3373C22.7555 20.1039 22.6131 19.8921 22.4336 19.7141L14.1999 11.4984Z"
                                            fill="#3D3D4E" />
                                    </svg>
                                </CloseButton>
                            </Col>
                            <Col col={10}>
                                <ModalP> {windowText}</ModalP>
                            </Col>
                        </Row>
                        <Row justify_content={"center"}>
                            <div>
                                <h3>Заполните форму:</h3>
                                <form>
                                    <div>
                                        <Input style={{ background: inputColor1 }} name='email' type="email"
                                            onChange={e => setEmail(e.target.value)} value={email} placeholder={'Email'}></Input>
                                    </div>
                                    <div>
                                        <Input style={{ background: inputColor2 }} name='fio' type='text' minLength="3"
                                            onChange={e => setFio(e.target.value)} value={fio} placeholder={'ФИО'}></Input>
                                    </div>
                                    <div>
                                        <Input style={{ background: inputColor3 }} name='age' type='number' min="0" max="30"
                                            onChange={e => setAge(e.target.value)} value={age} placeholder={'Возраст'}></Input>
                                    </div>
                                    <button
                                        disabled={formValid}
                                        type='submit'
                                        onClick={(e) => Check(e)}>
                                        Отправить
                                    </button>
                                </form>
                            </div>
                        </Row>
                    </Col>
                </ModalBase>
            ) : null
            }
        </>
    )
}

export default Task12Inputs







