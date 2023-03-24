import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";

type Props = {};

const NotFoundPage: FC = (props: Props) => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 5000);
    }, []);
    return (
        <div className="not-found">
            <h1>Ой...</h1>
            <h2>Такой страницы здесь нет!</h2>
            <p>
                Переход на <Link href="/">главную страницу</Link> через 5 секунд{" "}
            </p>
        </div>
    );
};

export default NotFoundPage;
