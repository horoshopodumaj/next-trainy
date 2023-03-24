import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";
import styles from "../../styles/Burgers.module.css";

type IProps = {
    name: string;
    image: string;
    desc: string;
    price: number;
    id: string;
};

interface IBurgers {
    burgers: IProps[];
}

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:5000/items");
    const data = await res.json();

    return {
        props: { burgers: data },
    };
};

const Burgers: FC<IBurgers> = ({ burgers }) => {
    return (
        <div>
            <h1>Наши бургеры</h1>
            {burgers.map((burger) => {
                return (
                    <Link
                        className={styles.burgerCard}
                        href={`burgers/${burger.id}`}
                        key={burger.id}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={`${burger.image}`}
                                alt={`${burger.name}`}
                                width={200}
                                height={200}
                                layout="responsive"
                                objectFit="cover"
                            />
                        </div>
                        <div>
                            <h3>{burger.name}</h3>
                            <p>{burger.desc}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default Burgers;
