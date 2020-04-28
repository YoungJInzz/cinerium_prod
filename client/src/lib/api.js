import axios from "axios";

export const getInit = () => axios.get("http://127.0.0.1:8080/ticket/screens");

export const getScreenInfo = (movieId, cinemaId, date, timeTableId, group) =>
  axios.get(
    `http://127.0.0.1:8080/ticket/screens/info?movieId=${movieId}&cinemaId=${cinemaId}&date=${date}&timeTableId=${timeTableId}&group=${group}`
  );

export const getSeats = (timeTableId) =>
  axios.get(`http://127.0.0.1:8080/ticket/seats?timeTableId=${timeTableId}`);
