import { useCallback, useRef, useState } from "react";

type HttpResponse<V> = Promise<V>;
type RequestCallback<T extends unknown[], V> = (...args: T) => HttpResponse<V>;

export const useRequest = <T extends unknown[], V, E = Error>(request: RequestCallback<T, V>) => {
    const [response, setResponse] = useState<V | null>(null);
    const [error, setError] = useState<E | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const requestRef = useRef<RequestCallback<T, V>>(request);

    const makeRequest = useCallback((...args: T) => {
        setIsLoading(true);
        requestRef.current(...args)
            .then(setResponse)
            .catch(err => setError(err as E))
            .finally(() => setIsLoading(false));
    }, []);

    return { response, error, isLoading, makeRequest };
};
