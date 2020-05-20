import React, { useEffect } from "react";
import { connect } from "react-redux";
import { initState } from "../modules/booking";
import Test from "../components/test";

const TestContainer = ({ initState }) => {
  return <Test initState={initState} />;
};

export default connect(({ booking, loading }) => ({}), {
  initState,
})(TestContainer);
