import Link from "next/link";
import React from "react";
import { SiBurgerking } from "react-icons/si";

type Props = {};

const Header = (props: Props) => {
    return (
        <header>
            <div>
                <SiBurgerking />
            </div>
            <nav>
                <Link href="/">Домой</Link>
                <Link href="about">О нас</Link>
                <Link href="reviews">Отзывы</Link>
                <Link href="burgers">Бургеры</Link>
            </nav>
        </header>
    );
};

export default Header;
