import React from "react";
import { connect } from "react-redux";
import { selectMovie, selectTheater, selectScreen } from "../modules/booking";
import Booking from "../components/booking";

const BookingConatainer = ({
  movie,
  theater,
  screen,
  region,
  regiontheater,
  movielist,
  theaterlist,
  screeninfo,
  selectMovie,
  selectTheater,
  selectScreen
}) => {
  return (
    <Booking
      movie={movie}
      theater={theater}
      screen={screen}
      region={region}
      regiontheater={regiontheater}
      movielist={movielist}
      theaterlist={theaterlist}
      screeninfo={screeninfo}
      selectMovie={selectMovie}
      selectTheater={selectTheater}
      selectScreen={selectScreen}
    />
  );
};

export default connect(
  ({ booking }) => ({
    movie: booking.movie,
    theater: booking.theater,
    screen: booking.screen,
    region: booking.region,
    regiontheater: booking.regiontheater,
    movielist: booking.movielist,
    theaterlist: booking.theaterlist,
    screenlnfo: booking.screenlist
  }),
  {
    selectMovie,
    selectTheater,
    selectScreen
  }
)(BookingConatainer);
