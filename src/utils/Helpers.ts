import {
  LANGUAGE,
  SOURCE_VIMEO_PREFIX,
  SOURCE_YOUTUBE_PREFIX,
} from "../mocks/defaults";
import { Video } from "../typings/movies";

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

export const formatStringToUrl = (string: string) => {
  return removeAccents(string)
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/[\s]/g, "-");
};

export const formatIframeSource = (videoData: Video) => {
  const { site, key } = videoData;
  const sourcePrefix = /Youtube/gi.test(site)
    ? SOURCE_YOUTUBE_PREFIX
    : /Vimeo/gi.test(site)
    ? SOURCE_VIMEO_PREFIX
    : "";
  const iframeSource = `${sourcePrefix}/${key}`;
  return sourcePrefix ? iframeSource : false;
};

export const formatDuration = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const restMinutes = minutes % 60;
  const textHours = hours.toString();
  const textMinutes = restMinutes.toString().padStart(2, "0");

  return `${textHours}h ${textMinutes}min`;
};

export const formatPrice = (value: number) => {
  return value.toLocaleString(LANGUAGE, {
    style: "currency",
    currency: "BRL",
  });
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

export const formatPercentage = (floatNumber: number) => {
  return `${Math.trunc(floatNumber * 10)}%`;
};
