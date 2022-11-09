import "./navbar.scss"
import { AiOutlineCaretDown, AiFillBell, AiOutlineSearch } from "react-icons/ai"
import { useEffect, useState } from "react"

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    const handleScroll = () => {
        if (window.scrollY >= 60) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }
    window.addEventListener('scroll', handleScroll)

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/1920px-Netflix_2014_logo.svg.png"
                        alt="" />

                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <AiOutlineSearch className="nav-icon" />
                    <span>KID</span>
                    <AiFillBell className="nav-icon" />
                    <img src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t1.6435-9/132035618_3319738928251984_2816937091825747869_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=K9kiGlJ3oF4AX-qYfZM&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBwhvXGP5hj5VhN-tngDoojx3cU85lMqlFhkBOta5eSAQ&oe=638D65CB"
                        alt="" />
                    <div className="profile">
                        <AiOutlineCaretDown className="nav-icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar