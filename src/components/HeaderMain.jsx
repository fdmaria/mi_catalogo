import { IoMdMenu } from "react-icons/io";
import { IoBagHandle } from "react-icons/io5";
import "./HeaderMain.scss"

function HeaderMain() {
    return ( 
        <div className="header-main" >
            <a><i className="icon"><IoBagHandle /> </i></a>
            <a><i className="icon"><IoMdMenu /></i> </a>                                 
        </div>
    )
}
export default HeaderMain