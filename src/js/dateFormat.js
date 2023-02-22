import { format } from "date-fns";

const Helpers = (() => {
  const formatDateForecast = (date) => format(date, "EEEE K aaa");

  const formatDate = (date) =>
    format(date, "EEEE, MMMM dd.LL HH:mm").split(" ");

  const getLocalDate = (timezoneOffset) => {
    const now = new Date();
    const nowUTC = new Date(
      now.getTime() + now.getTimezoneOffset() * 60 * 1000
    );

    const timeZoneDifference = timezoneOffset * 1000;
    const localDate = new Date(nowUTC.getTime() + timeZoneDifference);

    return localDate;
  };

  return { getLocalDate, formatDate, formatDateForecast };
})();

export default Helpers;
