import Image from "next/image";
import Logo from '@/assets/logo.svg';
import Arrow from "@/assets/arrow-down.svg";

export function Header(){
    return (
        <header className="w-full h-20 bg-primary-orange">
            <div>
                <div>
                    <div>
                    <Image
                        src={Logo}
                        alt="logo"></Image>
                        <ul>
                            <li>
                                <button>
                                    <span>Para você</span>
                                    <Image src={Arrow} alt="Arrow dropdown"></Image>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}