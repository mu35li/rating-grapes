import {useNavigate} from "react-router-dom";
import {useLocalStorage} from "usehooks-ts";
import {Rating} from "./NewRating.tsx";
import {RatingCard} from "./RatingCard.tsx";

export function Home() {
    const navigate = useNavigate();
    const [ratings] = useLocalStorage("ratings", [] as Rating[]);

    return (
        <div className="flex flex-col justify-center align-middle w-full py-2">
            <div className="w-full p-4">
                <button type="button"
                        onClick={() => {
                            navigate('/new')
                        }}
                        className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800">
                    Add Rating
                </button>
            </div>
            <div className="w-full sticky top-[10%] z-10 p-4">
                <button type="button"
                        onClick={() => {
                            navigate('/new')
                        }}
                        className="absolute right-4 rounded-full size-12 font-normal text-2xl pt-0.5 top-[80vh] text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300  dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800">
                    +
                </button>
            </div>
            <div className="flex flex-col w-full gap-2">
            {ratings.map((rating, index) => {
                return (
                    <RatingCard key={index} rating={rating} />
                )
            })}
            </div>

        </div>
    )
}