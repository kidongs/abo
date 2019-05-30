const clockContainer = document.querySelector('.js_clock'),
  clockTitle = document.querySelector('.clock'),
  calendar = document.querySelector('.calendar');

function getTime() {
  const date = new Date(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    currentDate = date.getDate(),
    currentYear = date.getFullYear();

  var day = date.getDay(),
    currentMonth = date.getMonth();

  switch (day) {
    case 0:
      day = "Sun";
      break;
    case 1:
      day = "Mon";
      break;
    case 2:
      day = "Tue";
      break;
    case 3:
      day = "Wed";
      break;
    case 4:
      day = "Thu";
      break;
    case 5:
      day = "Fri";
      break;
    case 6:
      day = "Sat";
      break;
  }

  switch (currentMonth) {
    case 0:
      currentMonth = "Jan";
      break;
    case 1:
      currentMonth = "Feb";
      break;
    case 2:
      currentMonth = "Mar";
      break;
    case 3:
      currentMonth = "Apr";
      break;
    case 4:
      currentMonth = "May";
      break;
    case 5:
      currentMonth = "Jun";
      break;
    case 6:
      currentMonth = "Jul";
      break;
    case 7:
      currentMonth = "Aug";
      break;
    case 8:
      currentMonth = "Sep";
      break;
    case 9:
      currentMonth = "Oct";
      break;
    case 10:
      currentMonth = "Nov";
      break;
    case 11:
      currentMonth = "Dec";
      break;
  }

  clockTitle.innerText = `${
    hour < 10 ? `0${hour}` : hour
  }:${
    minute < 10 ? `0${minute}` : minute
  }:${
    second < 10 ? `0${second}` : second
  } (${day})`;

  calendar.innerText = `${
    currentDate < 10 ? `0${currentDate}` : currentDate
  } ${currentMonth} ${currentYear}`;

}

function runit() {
  getTime();
  setInterval(getTime, 1000); //1000ms 마다 refresh
}

runit();
