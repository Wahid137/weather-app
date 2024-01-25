import moment from "moment/moment";

const TimeFormate = (timezone) => {
  var timestamp = timezone;
  var momentObj = moment.unix(timestamp);
  var formattedTime = momentObj.format("HH:mm");

  return formattedTime;
};

export default TimeFormate;
