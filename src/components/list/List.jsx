import "./list.scss"
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import ListItem from "../listItem/ListItem"
import { useRef, useState } from "react"

const List = () => {

    const [isMoved, setIsMoved] = useState(false)
    const [sliderNumber, setSliderNumber] = useState(0)
    const listRef = useRef()

    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === "left" && sliderNumber > 0) {
            setSliderNumber(sliderNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (direction === "right" && sliderNumber < 5) {
            setSliderNumber(sliderNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }

    }

    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <BsChevronLeft className="sliderArrow left"
                    onClick={() => handleClick("left")}
                    style={{ display: !isMoved && "none" }}
                />
                <div className="container" ref={listRef}>
                    <ListItem index={0} />
                    <ListItem index={1} />
                    <ListItem index={2} />
                    <ListItem index={3} />
                    <ListItem index={4} />
                    <ListItem index={5} />
                    <ListItem index={6} />
                    <ListItem index={7} />
                    <ListItem index={8} />
                    <ListItem index={9} />
                </div>
                <BsChevronRight className="sliderArrow right" onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}

export default List