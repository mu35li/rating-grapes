import {useForm} from "react-hook-form"
import { useLocalStorage } from 'usehooks-ts'


type FormValues = {
    username: string;
}

export function Welcome() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const [, setUsername] = useLocalStorage("username", '');

    const onSubmit = handleSubmit((data) => {
        setUsername(data.username);

    })

    return (
        <div className="flex justify-center align-middle w-full py-2">
            <form className="flex flex-col gap-2" onSubmit={onSubmit}>
                <input
                    className="border-[1px] px-2 py-1 border-rose-900 rounded focus:ring-rose-600 focus:ring-1  focus-visible:outline-none" {...register("username", {required: "Please enter a name"})}
                    placeholder="Name"/>
                {errors?.username && <p className="text-rose-900">{errors.username.message}</p>}
                <button type="submit"
                        className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800">
                    Save
                </button>

            </form>
        </div>
    )
}