import dotenv from 'dotenv';

if (process.env.NODE_ENV == 'production') {
  dotenv.config({path: './.env.production'});
}else{
  dotenv.config({path: './.env.development'});
}
export default async function getData(api: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}${api}`, {
    method: 'GET',
    mode: "cors",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Error fetching from server!');
  }
  console.log(process.env.NEXT_PUBLIC_HOST);
  
  return res.json();
}
