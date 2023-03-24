import React, { FC } from "react";
import styles from "../../styles/Burgers.module.css";

type Props = {
    name: string;
    image: string;
    desc: string;
    price: number;
    id: string;
};

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:5000/items");
    const data = await res.json();

    return {
        props: { burgers: data },
    };
};

const Burgers: FC<Props[]> = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Наши бургеры</h1>
        </div>
    );
};

export default Burgers;
