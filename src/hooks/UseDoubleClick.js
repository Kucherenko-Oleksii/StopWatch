import {useCallback, useRef} from 'react';
export function useDoubleClick(callback) {
    const timer = useRef(null);
    const handler = useCallback((event) => {
        if(!timer.current) {
            timer.current = setTimeout(() => {
                timer.current = null;
            }, 1000);
        }
        else {
            clearTimeout(timer.current);
            timer.current = null;
            callback(event);
        }
    }, [callback]);
    return handler;
}