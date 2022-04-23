import { useState, FormEvent, useEffect } from "react";
import { Search } from "./styles";
import { SEARCH_MIN_LENGTH } from "../../mocks/defaults";
import normalizeString from "../../utils/Helpers";

const SearchBar = () => {
  const [term, setTerm] = useState<string>("");

  const handlerInput = (event: FormEvent<HTMLInputElement>) => {
    setTerm(event.currentTarget.value);
  };

  useEffect(() => {
    const termNormalized = normalizeString(term);
    const isValidTerm =
      Boolean(termNormalized) && termNormalized.length >= SEARCH_MIN_LENGTH;
    if (isValidTerm) console.log(termNormalized);
  }, [term]);

  return (
    <Search>
      <input
        className="input"
        type="text"
        onChange={handlerInput}
        placeholder="Busque um filme por nome, ano ou gênero..."
      />
    </Search>
  );
};

export default SearchBar;
