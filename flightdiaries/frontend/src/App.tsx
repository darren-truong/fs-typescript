import { useEffect, useState } from "react";
import type { DiaryEntry } from "./types.ts";
import diaryService from "./diaryService.ts";

function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState("");
  const [visibility, setVisibility] = useState("");

  useEffect(() => {
    diaryService.getAll().then((data) => setDiaries(data));
  }, []);

  if (!diaries) {
    return null;
  }

  const handleDiaryCreation = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const diaryToAdd = {
      date,
      weather,
      visibility,
    };
    const newDiary = await diaryService.create(
      diaryToAdd as Omit<DiaryEntry, "id">,
    );
    setDiaries(diaries.concat(newDiary));
    setWeather("");
    setVisibility("");
    setDate("");
  };

  return (
    <div>
      <form onSubmit={handleDiaryCreation}>
        <input
          value={date}
          placeholder="date"
          onChange={(event) => setDate(event.target.value)}
        />
        <input
          value={weather}
          placeholder="weather"
          onChange={(event) => setWeather(event.target.value)}
        />
        <input
          value={visibility}
          placeholder="visibility"
          onChange={(event) => setVisibility(event.target.value)}
        />
        <button type="submit">submit</button>
      </form>
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
