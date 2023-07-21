import { useNavigate } from "react-router-dom";

export const Settings=()=>{

    const navigate = useNavigate();
const openPersonalDetailsPage=()=>{
    navigate('/RegisterPersonalDetails',{replace:true});
}
const openAccountDetailsPage=()=>{
    navigate('/ChangeAccountDetails',{replace:true});
}
    return (
        <>
        <button onClick={openPersonalDetailsPage}>openPersonalDPage</button>
        <button onClick={openAccountDetailsPage}>openAccountDetailsPage</button>
        </>
    )
}