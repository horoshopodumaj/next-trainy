import Head from "next/head";
import React, { FC } from "react";

interface IReviews {
    id: number;
    body: string;
}

interface IProps {
    reviews: IReviews[];
}

const Reviews: FC<IProps> = ({ reviews }) => {
    return (
        <>
            <Head>
                <title>Fat Burgers | Main Page</title>
                <meta name="title" content="Fat Burgers" />
            </Head>
            <div>
                <h1>Отзывы клиентов</h1>
                <div className="reviews">
                    {reviews &&
                        reviews.slice(0, 20).map((review) => {
                            return (
                                <div key={review.id} className="review">
                                    {review.id} {`${review.body.slice(0, 90)}...`}
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export async function getServerSideProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await response.json();

    return {
        props: {
            reviews: data.slice(0, 20),
        },
    };
}

export default Reviews;
