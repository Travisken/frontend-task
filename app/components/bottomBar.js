import navStyle from "../styles/bottomBar.module.css";
import Image from "next/image";
import homeIcon from "../../public/images_icons/Vector.svg";
import team from "../../public/images_icons/briefcase.svg";
import account from "../../public/images_icons/usersquare.svg";

export default function BottomBar(){

    return(
        <>
          <div className={navStyle.nav}>
                <div className={navStyle.nav_left}>

                    <ul>

                        <li className={navStyle.active}>
                           
                            <span>
                                <Image src={homeIcon}/>
                            </span>
                        </li>

                        <li>
                            <span>
                            <Image src={team} />
                            </span>
                        </li>

                        <li>
                            <span>
                                <Image src={account}/>
                            </span>
                        </li>
                    </ul>

                </div>

            </div>
        </>
    )

}