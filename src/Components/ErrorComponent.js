import { useRouteError} from "react-router-dom"

const ErrorComponent=()=>{
    const error=useRouteError();
    return(
        <div>
            <h1>OOPS!!!!</h1>
            <h2> Something Went Wrong</h2>
            <h2>{error.status}:{error.statusText}</h2>
        </div>
    )
}

export default ErrorComponent