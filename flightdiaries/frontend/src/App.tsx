import { useEffect, useState } from "react";
import type { DiaryEntry } from "./types.ts";
import diaryService from "./diaryService.ts";

function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    diaryService.getAll().then((data) => setDiaries(data));
  }, []);

  if (!diaries) {
    return null;
  }

  console.log(diaries);

  return (
    <div>
      {diaries.map((diary) => (
        <>
          <div>Diary ID: {diary.id}</div>
          <div>Diary Date: {diary.date}</div>
          <div>Diary Weather: {diary.weather}</div>
          <div>Diary Visibility: {diary.visibility}</div>
          <br />
        </>
      ))}
    </div>
  );
}

export default App;
