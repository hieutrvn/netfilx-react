import "./featured.scss"
import { BsFillPlayFill } from "react-icons/bs"
import { AiOutlineInfoCircle } from "react-icons/ai"


const Featured = ({ type }) => {
    return (
        <div className="featured">

            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movie" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}

            <img
                src="https://www.gamespot.com/a/uploads/scale_landscape/1562/15626911/4045709-chainsawman_16x9.jpg"
                alt="" />

            <div className="info">
                <img src="https://1.bp.blogspot.com/-v-d1DKBrJKQ/YSt-T0CPhcI/AAAAAAAAKPc/lxPpKMxSDtsteYclwBGYPjczMVgu5JWLgCPcBGAsYHg/w919/chainsaw-man-poster-denji-0-4k-uhdpaper.com-533.1_b-thumbnail.jpg" alt="" />
                <span className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam doloribus, ea odio magnam aperiam labore quo totam distinctio, provident explicabo, impedit error! Rem quasi omnis enim possimus laudantium molestiae. Rerum!</span>
                <div className="buttons">
                    <button className="play">
                        <BsFillPlayFill />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <AiOutlineInfoCircle />
                        <span>Info</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Featured