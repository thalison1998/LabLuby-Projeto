import { useContext } from "react"
import { LoginSaveContext } from ".";




export const useLoginSave = () => {
    const context = useContext(LoginSaveContext);
    return context;
}