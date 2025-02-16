import {useForm, UseFormRegisterReturn} from "react-hook-form"
import {useLocalStorage} from 'usehooks-ts'
import {useNavigate} from "react-router-dom";


export type Rating = {
    name: string;
    year: number;
    winery: string;
    body: number;
    fruity: number;
    acidity: number;
    bubbles: number;
    tannins: number;
    finish: number;
    score: number;
}

function RatingGroup(props: {
    register: UseFormRegisterReturn<string>,
    labelLow: string,
    labelHigh: string,
    min: number,
    max: number,
    title: string
}): JSX.Element {
    return <div className={"flex flex-col w-full pt-4 justify-center items-stretch align-middle"}>
        <p className={"text-lg text-rose-900"}>{props.title}</p>
        <div className="flex justify-between align-middle items-center text-rose-900">
            <div className="w-1/6">
                <p className="">{props.labelLow}</p>
            </div>
            <input id="rose-radio-1" type="range" step={1} min={props.min} max={props.max} {...props.register}
                   className="w-3/6 h-4 bg-rose-600 text-rose-600 border-gray-300 focus:ring-rose-500 dark:focus:ring-rose-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

            <div className="w-1/6">
                <p className="">{props.labelHigh}</p>
            </div>
        </div>
    </div>
}

export function NewRating() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Rating>({
        defaultValues: {
            name: '',
            year: undefined,
            winery: '',
            body: 5,
            fruity: 5,
            acidity: 5,
            bubbles: 5,
            tannins: 5,
            finish: 5,
            score: undefined,
        }
    });

    const [ratings, setRatings] = useLocalStorage("ratings", [] as Rating[]);
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        setRatings([...ratings, data]);
        navigate('/home');
    })


    return (
        <div className="flex justify-center align-middle w-full py-4">
            <form className="flex px-8 w-full md:w-1/2 flex-col gap-2" onSubmit={onSubmit}>
                <input
                    className="border-[1px] px-2 py-1 border-rose-900 rounded focus:ring-rose-600 focus:ring-1  focus-visible:outline-none" {...register("name", {required: "Please enter a name"})}
                    placeholder="Name"/>
                {errors?.name && <p className="text-rose-900">{errors.name.message}</p>}
                <input
                    type="number"
                    className="border-[1px] px-2 py-1 border-rose-900 rounded focus:ring-rose-600 focus:ring-1  focus-visible:outline-none" {...register("year", {required: "Please enter a year"})}
                    placeholder="Year"/>
                {errors?.name && <p className="text-rose-900">{errors.name.message}</p>}
                <div className={"flex flex-col divide-rose-900 gap-4 divide-y"}>
                    <RatingGroup register={register("body")} labelLow={"Light"} labelHigh={"Full"} min={1} max={10}
                                 title={"Body"}/>
                    <RatingGroup register={register("fruity")} labelLow={"Dry"} labelHigh={"Fruity"} min={1} max={10}
                                 title={"Fruitiness"}/>
                    <RatingGroup register={register("acidity")} labelLow={"Low"} labelHigh={"Tart"} min={1} max={10}
                                 title={"Acidity"}/>
                    <RatingGroup register={register("bubbles")} labelLow={"Flat"} labelHigh={"Fizzy"} min={1} max={10}
                                 title={"Bubbles"}/>
                    <RatingGroup register={register("tannins")} labelLow={"Sweet"} labelHigh={"Bitter"} min={1} max={10}
                                 title={"Tannins"}/>
                    <RatingGroup register={register("finish")} labelLow={"Smooth"} labelHigh={"Spicy"} min={1} max={10}
                                 title={"Finish"}/>
                    <div className={"w-full py-6"}>
                        <input
                            type="number"
                            min="0"
                            max="100"
                            step="1"
                            className="w-full border-[1px] px-2 py-1 border-rose-900 rounded focus:ring-rose-600 focus:ring-1  focus-visible:outline-none" {...register("score", {required: "Please enter a score"})}
                            placeholder="Score"/>

                    </div>
                </div>
                <button type="submit"
                        className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800">
                    Add
                </button>
                <button type="button"
                        onClick={() => {
                            navigate('/home')
                        }}
                        className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800">
                    cancel
                </button>

            </form>
        </div>
    )
}