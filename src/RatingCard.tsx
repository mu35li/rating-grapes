import {Rating} from "./NewRating.tsx";

type Props = {
    rating: Rating;
}

const percentageClass = (rating: number) => {
    const widthClasses= ["w-[10%]", "w-[20%]", "w-[30%]", "w-[40%]", "w-[50%]", "w-[60%]", "w-[70%]", "w-[80%]", "w-[90%]", "w-full"];
    return widthClasses[rating];
}


function RatingCategory(props: { rating: number, title: string, labelLow: string, labelHigh: string }) {
    return <li className="flex flex-col">
        <h3>{props.title}</h3>
        <div className="flex  justify-center items-center space-x-3 p-2 text-center">
            <div className="flex text-black text-xs w-1/6">
                {props.labelLow}
            </div>
            <div className="w-3/6 bg-gray-200 h-3 rounded-md">
                <div
                    className={`${percentageClass(props.rating)} bg-rose-900 h-3 rounded-md`}></div>
            </div>
            <div className="text-black text-xs w-1/6">
                {props.labelHigh}
            </div>
        </div>
    </li>;
}

export function RatingCard({rating}: Props) {
    return (

        <div className="flex w-full flex-col p-2 gap-2">
            <div
                className="container max-w-sm mx-auto items-center text-center bg-white rounded drop-shadow-lg px-5 md:px-0 py-5">
                <div className="pt-8 font-bold text-2xl tracking-wide">{rating.name}</div>
                <div className="flex mt-4 justify-center">
                    <div
                        className="flex items-center inline-block py-3 px-2.5 space-x-2 leading-none text-center whitespace-nowrap align-baseline text-sm bg-gray-200 text-dark rounded-full">
                        <div
                            className="items-center font-bold">{rating.score} {rating.score > 1 || rating.score == 0 ? "Points" : "Point"}</div>
                    </div>
                </div>
                <div className="pt-6 flex items-center justify-center">
                    <ul className="flex flex-col w-full">
                        <RatingCategory rating={rating.body} title={'Body'} labelLow={"Light"} labelHigh={"Full"}/>
                        <RatingCategory rating={rating.fruity} title={'Fruitiness'} labelLow={"Sweet"} labelHigh={"Dry"}/>
                        <RatingCategory rating={rating.acidity} title={'Acidity'} labelLow={"Low"} labelHigh={"Tart"}/>
                        <RatingCategory rating={rating.bubbles} title={'Bubbles'} labelLow={"Flat"} labelHigh={"Fizzy"}/>
                        <RatingCategory rating={rating.tannins} title={'Tannins'} labelLow={"Sweet"} labelHigh={"Bitter"}/>
                        <RatingCategory rating={rating.finish} title={'Finish'} labelLow={"Smooth"} labelHigh={"Spicy"}/>
                    </ul>
                </div>
            </div>
        </div>
    )
}