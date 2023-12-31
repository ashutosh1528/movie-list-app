import { UseQueryOptions, useQuery } from "@tanstack/react-query"
import axios from "axios"

type QueryConfig<TTransformResponse> = Omit<UseQueryOptions<TTransformResponse>, 'queryKey' | 'queryFn'>

export const useQueryUtility = <TPayload = unknown, TResponse = unknown, TTransformResponse = TResponse >({ url, payload, queryConfig, tranformFunction }: { url: string, payload: TPayload, queryConfig: QueryConfig<TTransformResponse>, tranformFunction: (data: TResponse) => TTransformResponse }) => {
  const queryFunction = async () => {
    const x = await axios<TResponse>({
      method: 'GET',
      baseURL: 'https://api.themoviedb.org/3',
      url,
      params: {
        ...(typeof payload === 'object' ? payload: {}),
        'api_key': '2dca580c2a14b55200e784d157207b4d',
      }
    });
    if (x.status === 200) {
      if (typeof tranformFunction === 'function') {
        return Promise.resolve(tranformFunction(x.data));  
      }
      // I dont like this !
      return Promise.resolve(x.data as unknown as TTransformResponse);
    }
    return Promise.reject(x.data);
  }

  return useQuery<TTransformResponse>({
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
    ...queryConfig,
    queryKey: [url],
    queryFn: queryFunction,
  })
}