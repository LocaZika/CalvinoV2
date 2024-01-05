export const removeSpaces = (text: string): string => text?.replace(/\s/gm, '');
export const convertTelNumber = (text: string): string => text?.replace(/[\()\s]/g, '');
export const isString = (text: unknown): boolean => {
  if ( !text || typeof text !== 'string' ){
    return false;
  }
  return true;
}