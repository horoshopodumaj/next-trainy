import Image from "next/image";
import { FC } from "react";
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
export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:5000/items");
    const data = await res.json();

    const paths = data.map((burger: IProps) => {
        return {
            params: { id: burger.id },
        };
    });
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context: any) => {
    const id = context.params.id;
    const res = await fetch(`http://localhost:5000/items/${id}`);
    const data = await res.json();
    return {
        props: { burger: data },
    };
};

//@ts-ignore
const Details: FC<IProps> = ({ burger }) => {
    return (
        <div className={styles.singleBurger}>
            <h1>{burger.name}</h1>
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
                <p>{burger.desc}</p>
            </div>
        </div>
    );
};

export default Details;
