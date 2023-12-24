import useSWR from "swr";

const host: string | undefined = process.env.NEXT_PUBLIC_HOST;

const headers = (method: string, data?: {}) => {
  const header: HeadersInit = {
    method,
    'content-type': 'application/json',
    body: JSON.stringify(data),
  };
  return header;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function useApi(api: string) {
  const {data, error, isLoading} = useSWR(host + api, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  return {data, isLoading, error}
}
