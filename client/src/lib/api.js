import axios from "axios";

export const getInit = () => axios.get("http://127.0.0.1:8005/ticket/screens");

export const getScreenInfo = (payload) => {
  console.log(payload);
  return axios.get(
    `http://127.0.0.1:8005/ticket/screens/info?movieId=${
      payload.movieId === undefined ? "" : payload.movieId
    }&cinemaId=${payload.cinemaId === undefined ? "" : payload.cinemaId}&date=${
      payload.date === undefined || payload.date === "" ? "" : payload.date
    }&group=${payload.group}`
  );
};
export const getSeats = (timeTableId) =>
  axios.get(`http://127.0.0.1:8005/ticket/seats?timeTableId=${timeTableId}`);

export const changeTicketState = (payload) => {
  console.log(payload);
  return axios.patch("http://127.0.0.1:8005/ticket/ticketstate", {
    state: payload.state,
    tickets: payload.ticketId === undefined ? "" : payload.ticketId,
    ticketTokens: payload.ticketTokens,
  });
};

export const getPoint = (payload) => {
  return axios.get(`http://127.0.0.1:8005/ticket/user/service?accountid=admin`);
};
