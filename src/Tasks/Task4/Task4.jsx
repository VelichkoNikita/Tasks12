import React, { useEffect, useState } from "react";
import { SlideImg, ButtonRight, ButtonLeft, SlideWrapper, SlideText } from "../../StyledCStyles/styles";
import { Row } from "../../StyledCStyles/grid";

const gallery = [
    {
        count: `1/4`,
        text: `Какой-то текст 1`,
        photo: "https://i.ibb.co/T2szqWT/Communication-2x.jpg"
    },
    {
        count: `2/4`,
        text: `Какой-то текст 2`,
        photo: "https://i.ibb.co/s6dxVL3/Endless-Aisle-2x.jpg"
    },
    {
        count: `3/4`,
        text: `Какой-то текст 3`,
        photo: "https://i.ibb.co/80gQ9xC/Sales-Assist-2x.jpg"
    }, {
        count: `4/4`,
        text: `Какой-то текст 4`,
        photo: "https://i.ibb.co/pJpVkkq/Staff-Empowerment-2x.jpg"
    }
]

const Task4 = (props) => {
    const [currentPosition, setCurrentPosition] = useState(0)
    const [selected, setSelected] = useState("https://i.ibb.co/T2szqWT/Communication-2x.jpg")
    const [selectedText, setSelectedText] = useState("Для этого перейди в раздел Заявки. По номеру договора найди нужную заявку. Выбери нужный договор.")
    const [selectedCount, setSelectedCount] = useState("1/4")

    let next = () => {
        if (currentPosition >= 0 && currentPosition < 3) {
            setCurrentPosition(p => p + 1)
        }
    }
    let preview = () => {
        if (currentPosition > 0 && currentPosition <= 3) {
            setCurrentPosition(p => p - 1)
        }
    }

    useEffect(() => setSelected(gallery[currentPosition].photo), [currentPosition])
    useEffect(() => setSelectedText(gallery[currentPosition].text), [currentPosition])
    useEffect(() => setSelectedCount(gallery[currentPosition].count), [currentPosition])
    //авто-переключение
    useEffect(() => {
        let rotationInterval = setInterval(() => {
            if (currentPosition >= 0 && currentPosition < 3) {
                setCurrentPosition(currentPosition + 1)
            } else {
                setCurrentPosition(0)
            }
        }, 2000)
        return () => {
            clearInterval(rotationInterval);
        }
    }, [currentPosition])


    return (
        <Row
            bgcolor={"silver"}
            justify_content={"center"}>
            <div>
                <Row
                    mt={3}
                    align_items={"center"}
                >
                    <ButtonLeft
                        onClick={preview}
                    />
                    <SlideWrapper>
                        <SlideImg src={selected}>
                        </SlideImg>
                        <SlideText>
                            {selectedText}
                        </SlideText>
                    </SlideWrapper>
                    <ButtonRight
                        borderRadius={"4px"}
                        onClick={next} />
                </Row>
                <Row justify_content={"center"}><p><strong>{selectedCount}</strong></p></Row>
            </div>
        </Row>
    )
}


export default Task4;
