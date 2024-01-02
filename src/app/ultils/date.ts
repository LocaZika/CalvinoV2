export const getYear = (): number => new Date().getFullYear();
export const getShortDate = () => {
  const dateObj: Date = new Date();
  const day: number = dateObj.getUTCDate();
  const month: number = dateObj.getUTCMonth();
  const year: number = dateObj.getUTCFullYear();
  const hour: number = dateObj.getUTCHours();
  const minute: number = dateObj.getUTCMinutes();
  return `${day}/${month}/${year} ${hour}:${minute}`;
}