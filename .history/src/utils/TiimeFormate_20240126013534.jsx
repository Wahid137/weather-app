import moment from "moment/moment";

const TimeFormate = (timezone) => {
  var timestamp = timezone;

  // Convert Unix timestamp to moment object
  var momentObj = moment.unix(timestamp);

  // Format the date and time as per your requirements
  var formattedTime = momentObj.format("HH:mm");
  return formattedTime;
};

export default TimeFormate;

/* import moment = require("moment/moment");

const timeFormate = (timezone) => {
    var timestamp = timezone;

    // Convert Unix timestamp to moment object
    var momentObj = moment.unix(timestamp);

    // Format the date and time as per your requirements
    var formattedTime = momentObj.format("HH:mm");
    return formattedTime
}

export timeFormate; */
