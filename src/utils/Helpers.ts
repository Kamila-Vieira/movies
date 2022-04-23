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

const normalizeString = (string: string) => {
  return removeSpecialCharacters(removeAccents(string));
};

export default normalizeString;
