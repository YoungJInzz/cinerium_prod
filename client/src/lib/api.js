import axios from "axios";

export const getInit = () => axios.get("http://127.0.0.1:8080/ticket/screens");

export const getScreenInfo = (payload) =>
  axios.get(
    `http://127.0.0.1:8080/ticket/screens/info?movieId=${payload.movieId}&cinemaId=${payload.cinemaId}&date=${payload.date}&timeTableId=${payload.timeTableId}&group=${payload.group}`
  );

export const getSeats = (timeTableId) =>
  axios.get(`http://127.0.0.1:8080/ticket/seats?timeTableId=${timeTableId}`);
