
import { useAlert } from "./AlertContext";

export const Alert = () => {
    const { visible } = useAlert();
    if (!visible) {
        return null;
    }
    return (
        <div className={'alert alert-danger'}>important message</div>
    );
}