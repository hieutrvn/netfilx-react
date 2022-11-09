import "./listItem.scss"
import { BsFillPlayFill, BsHandThumbsDown, BsHandThumbsUp, BsPlus } from "react-icons/bs"
import { useState } from "react"

const ListItem = ({ index }) => {

    const [isHovered, setIsHovered] = useState(false)
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"


    return (
        <div className="listItem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src="https://www.animenewsnetwork.com/thumbnails/crop1200x630gPH/youtube/jk7QSGwupPA.jpg"
                alt=""
            />
            {isHovered && (
                <>
                    <video src={trailer} autoPlay loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <BsFillPlayFill className="icon" />
                            <BsPlus className="icon" />
                            <BsHandThumbsUp className="icon" />
                            <BsHandThumbsDown className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 4 mins</span>
                            <span className="limit">+16</span>
                            <span>2022</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ab libero cum, commodi nam, ipsam corporis ipsa facilis
                            ex doloremque velit.
                        </div>
                        <div className="genre">Action</div>
                    </div>
                </>
            )}
        </div>

    )
}

export default ListItem