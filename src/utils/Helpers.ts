const removeSpecialCharacters = (string: string) =>
  string.replace(/[^a-z0-9]/g, "");

const removeAccents = (string: string) => {
  return string
    .toLowerCase()
    .replace(new RegExp("[ÁÀÂÃ]", "gi"), "a")
    .replace(new RegExp("[ÉÈÊ]", "gi"), "e")
    .replace(new RegExp("[ÍÌÎ]", "gi"), "i")
    .replace(new RegExp("[ÓÒÔÕ]", "gi"), "o")
    .replace(new RegExp("[ÚÙÛ]", "gi"), "u")
    .replace(new RegExp("[Ç]", "gi"), "c");
};

export const normalizeString = (string: string) => {
  return removeSpecialCharacters(removeAccents(string));
};

export const formatDate = (date: string) => {
  const newDate = new Date(date);
  const day = newDate.getDate().toString().padStart(2, "0");
  const mounth = (newDate.getMonth() + 1).toString().padStart(2, "0");
  const year = newDate.getFullYear();
  return `${day}/${mounth}/${year}`;
};

export const getDateYear = (date: string) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  return String(year);
};

export const formatePercentage = (floatNumber: number) => {
  return `${Math.trunc(floatNumber * 10)}%`;
};
