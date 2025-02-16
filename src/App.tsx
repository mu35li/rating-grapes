import {useLocalStorage} from 'usehooks-ts'
import {Navigate, Outlet} from "react-router-dom";

function App() {
    const [username ] = useLocalStorage("username", null);
    return (
        <div
            className="flex flex-grow flex-col bg-stone-200 justify-center align-middle text-center w-full min-h-screen">
            <div className={"p-6"}>
                <h1 className="text-3xl text-rose-900 font-light">
                    Rating Grapes
                </h1>
            </div>
            {!username ? (
                <Navigate to={'/welcome'}/>
            ) : (
                <Navigate to={'/home'} />
            )
            }
            <Outlet/>
        </div>
    )
}

export default App
