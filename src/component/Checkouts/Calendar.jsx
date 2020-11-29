import React, { useState } from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { DateRangePickerCalendar, START_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import moment from "moment";
export default function DateRangePickerCalendarExample(props) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focus, setFocus] = useState(START_DATE);
  let valid = 0; // used to check if the user clicked in valid start date
  const handleFocusChange = (newFocus) => {
    if (!(valid > 1)) {
      // if users chose valid date
      setFocus(newFocus || START_DATE); // change the focus
    }
  };

  function setstart(sdate) {
    const today = moment();
    valid = today.diff(sdate, "days") + 1;
    if (valid > 1) {
      // if valid is greater than 1 it means that the user chose date thats has past
      alert("Can not choose past dates"); // pop error message
    } else {
      // if the user had enter valid date
      setStartDate(sdate); // set the start date
      props.onDateChange(sdate, endDate); // invoke ondate change function
    }
  }

  function setend(edate) {
    const today = moment();
    valid = today.diff(edate, "days") + 1;
    if (valid > 1) {
      // if valid is greater than 1 it means that the user chose date thats has past
      alert("Can not choose past dates"); // pop error message
    } else {
      // if the user had enter valid date
      setEndDate(edate);
      props.onDateChange(startDate, edate);
    }
  }

  return (
    <div>
      <p>
        Selected start date:{" "}
        {startDate
          ? format(startDate, "dd MMM yyyy", { locale: enGB })
          : "none"}
        .
      </p>
      <p>
        Selected end date:{" "}
        {endDate ? format(endDate, "dd MMM yyyy", { locale: enGB }) : "none"}.
      </p>
      <p>
        Currently selecting: <strong>{focus}</strong>
      </p>
      <DateRangePickerCalendar
        startDate={startDate}
        endDate={endDate}
        focus={focus}
        onStartDateChange={setstart}
        onEndDateChange={setend}
        onFocusChange={handleFocusChange}
        locale={enGB}
      />
    </div>
  );
}
