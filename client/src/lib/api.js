import axios from "axios";

export const getInit = () => axios.get("http://127.0.0.1:8080/ticket/screens");

export const getScreenInfo = (payload) => {
  console.log(payload);
  return axios.get(
    `http://127.0.0.1:8080/ticket/screens/info?movieId=${
      payload.movieId === undefined ? "" : payload.movieId
    }&cinemaId=${payload.cinemaId === undefined ? "" : payload.cinemaId}&date=${
      payload.date === undefined || payload.date === "" ? "" : payload.date
    }&group=${payload.group}`
  );
};
export const getSeats = (timeTableId) =>
  axios.get(`http://127.0.0.1:8080/ticket/seats?timeTableId=${timeTableId}`);
