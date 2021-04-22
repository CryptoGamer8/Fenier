import { useParams } from "react-router";

function Test(){
    let {id} = useParams();
    return <div>
        {id}
    </div>
}

export default Test;