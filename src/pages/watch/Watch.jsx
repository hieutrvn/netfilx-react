import "./watch.scss"
import { AiOutlineArrowLeft } from 'react-icons/ai'
import videoBg from "../../assets/trailer.mp4"

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <AiOutlineArrowLeft />
                Home
            </div>
            <video className="video" autoPlay progress controls
                src={videoBg} />
        </div>
    )
}

export default Watch