import axios from "axios";
import type { DiaryEntry } from "./types";

const baseUrl = "http://localhost:3000/api/diaries";

const getAll = () => {
  return axios
    .get<DiaryEntry[]>(baseUrl)
    .then((response) => response.data as DiaryEntry[]);
};

const create = (diary: Omit<DiaryEntry, "id">) => {
  return axios
    .post<DiaryEntry>(baseUrl, diary)
    .then((response) => response.data);
};

export default { getAll, create };
