const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}



var sec_to_time = function (seconds) {
  var hh;
  var mm;
  var ss;

  if (seconds == null || seconds <= 0) {
    return "00:00:00";
  }
  hh = seconds / 3600 | 0;
  seconds = parseInt(seconds) - hh * 3600;
  if (parseInt(hh) < 10) {
    hh = "0" + hh;
  }

  mm = seconds / 60 | 0;

  ss = parseInt(seconds) - mm * 60;
  if (parseInt(mm) < 10) {
    mm = "0" + mm;
  }
  if (ss < 10) {
    ss = "0" + ss;
  }
  return hh + ":" + mm + ":" + ss;  
}


module.exports = {
  formatTime: formatTime,
  sec_to_time: sec_to_time
}

