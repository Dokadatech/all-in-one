import React, { useState, useContext, createContext } from "react";
import moment from "moment";
const GlobalStates = createContext();

const GlobalProvider = ({ children }) => {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [workLocation, setWorkLocation] = useState("");
  const [isWithinRange, setIsWithinRange] = useState(false);
  const [days, setDays] = useState();
  const [announcements, setAnnouncements] = useState(null);
  const [payRate, setPayRate] = useState(null);
  const [dayTo, setDayTo] = useState(moment().format("MMMM Do, YYYY"));
  const [dayFrom, setDayFrom] = useState(moment().format("MMMM Do, YYYY"));
  const [clockedInTime, setClockedInTime] = useState(null);
  const [clockedOutTime, setClockedOutTime] = useState(null);
  const [requests, setRequests] = useState();
  const [reqReason, setReqReason] = useState();
  const [isApproved, setApproved] = useState(false);
  const [reqDenied, setReqDenied] = useState();
  const [date, setDate] = useState(moment().format("MMMM Do, YYYY"));
  const [sickDays, setSickDays] = useState("05");
  const [vacayDays, setVacayDays] = useState("10");
  const [ClockedIn, setClockedIn] = useState(false);
  return (
    <GlobalStates.Provider
      value={{
        isClockedIn,
        setIsClockedIn,
        workLocation,
        setWorkLocation,
        isWithinRange,
        setIsWithinRange,
        days,
        setDays,
        announcements,
        setAnnouncements,
        payRate,
        setPayRate,
        dayTo,
        setDayTo,
        dayFrom,
        setDayFrom,
        clockedInTime,
        setClockedInTime,
        clockedOutTime,
        setClockedOutTime,
        requests,
        setRequests,
        reqReason,
        setReqReason,
        isApproved,
        setApproved,
        reqDenied,
        setReqDenied,
        date,
        setDate,
        sickDays,
        setSickDays,
        vacayDays,
        setVacayDays,
        ClockedIn,
        setClockedIn,
      }}
    >
      {children}
    </GlobalStates.Provider>
  );
};

export { GlobalStates, GlobalProvider };
