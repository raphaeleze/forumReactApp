
import { toast } from 'react-toastify';

export function notify(text, type, duration = 5000) {
    const options = {
        autoClose: duration,
        type: type //toast.TYPE.INFO
    }
    toast(text, options);
}