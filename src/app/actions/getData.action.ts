type TApi = string;
export default async function getData(api: TApi) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}${api}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  if (!res.ok) {
    console.log(res);
    
    throw new Error('Error fetching from server!');
  }
  return res.json();
}
