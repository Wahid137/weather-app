const timeFormate = () => {
    var timestamp = 1706229679;

    // Convert Unix timestamp to moment object
    var momentObj = moment.unix(timestamp);

    // Format the date and time as per your requirements
    var formattedTime = momentObj.format(" HH:mm");
    console.log(formattedTime);
}