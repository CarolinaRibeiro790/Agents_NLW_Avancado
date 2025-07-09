import { useParams, Navigate } from "react-router-dom";

type RppmParams = {
    roomId: string
}

export function Room(){
    const params = useParams();

    if(!params.roomId){
        return <Navigate to="/"/>
    }

    return <div>Room Details {JSON.stringify(params)}</div>
}