import useSWR from "swr";

const NEXT_PUBLIC_HOST: string | undefined = process.env.NEXT_PUBLIC_HOST;

const fetcher = (url: string) => fetch(url, {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})
.then(res => res.json());

type TUseApi = {
  data: any,
  isLoading: boolean,
  error: any,
}

export default function useApi(api: string) {
  const {data, error, isLoading}: TUseApi = useSWR(NEXT_PUBLIC_HOST + api, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {data, isLoading, error}
}
