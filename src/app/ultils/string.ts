export const removeSpaces = (text: string): string => text?.replace(/\s/gm, '');
export const convertTelNumber = (text: string): string => text?.replace(/[\()\s]/g, '');
