import navStyle from '../styles/navbar.module.css';
import Image from 'next/image';
import logo from "../../public/images_icons/logo.png";
import homeIcon from "../../public/images_icons/Vector.svg";
import team from "../../public/images_icons/briefcase.svg";
import account from "../../public/images_icons/usersquare.svg";
import coin from "../../public/images_icons/coin.png";
import bell from "../../public/images_icons/Notifications.png";

export default function Nav() {
    return (
        <>
            <nav className={navStyle.nav}>
                <div className={navStyle.nav_left}>


                    <div className="">
<Image className={navStyle.logo} src={logo} />
                    </div>

                    <ul>

                        <li className={navStyle.active}>
                            Home
                            <span>
                                <Image src={homeIcon}/>
                            </span>
                        </li>

                        <li>
                            My Team
                            <span>
                            <Image src={team} />
                            </span>
                        </li>

                        <li>
                            Account
                            <span>
                                <Image src={account}/>
                            </span>
                        </li>
                    </ul>

                </div>

                <div className={navStyle.nav_right}>
                    <span>
                        <Image src={bell} />
                    </span>

                    <div className={navStyle.coins}>
                        <Image src={coin} />
                        12
                    </div>
                </div>

            </nav>



        </>
    )
}
