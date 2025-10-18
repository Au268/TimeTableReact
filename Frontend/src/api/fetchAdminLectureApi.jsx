import { useEffect } from 'react';

const fetchLectures = async (setLect, setRoom, day) => {
  if (!day) return;
  try {
    const response = await fetch("http://localhost:8082/timetable/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ day }),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const result = await response.json();
    setLect(result.data.lect || []);
    setRoom(result.data.room || []);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

export default fetchLectures;
