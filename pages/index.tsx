import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>Fat Burgers | Main Page</title>
                <meta name="title" content="Fat Burgers" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <h1 className={`${styles.title} font-effect-fire-animation`}>Главная</h1>
                <div className={styles.mainImage}>
                    <Image src="/fatburger.png" width={400} height={300} alt="fatburger" />
                </div>
                <p className={styles.text}>
                    Что такое идеальный бургер? Лист свежего салата, мягкие булочки, сочное мясо. О
                    других составляющих начинки можно поспорить, ведь это дело вкуса.
                </p>
                <p className={styles.text}>
                    Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество обслуживания,
                    правильная атмосфера заведения.
                </p>
                <Link href="burgers" className={styles.btn}>
                    Все бургеры
                </Link>
            </div>
        </>
    );
}
