Page({
  data: {
    time: '00:00:00',
    btnText: "开始",
    // 定时器的编号
    stopwatchNumber: "",
    seconds: 1,
    btnBg: "lightgreen",
    showbtnReset: true
  },

  // 开始计时，或停止计时
  startTime: function() {
    var context = this;

    if (context.data.btnText == "开始" || context.data.btnText == "继续") {
      context.data.stopwatchNumber = setInterval(function() {
        var sec = context.data.seconds++;
        var format = require("../../utils/util.js");

        context.setData({
          time: format.sec_to_time(sec)
        })

      }, 1000);
      context.setData({
        btnText: "停止",
        btnBg: "red",
        showbtnReset: false
      })

    } else {
      clearInterval(context.data.stopwatchNumber);

      context.setData({
        btnText: "继续",
        btnBg: "lightgreen"
      })
    }
  },
  // 重置
  reset: function() {
    clearInterval(this.data.stopwatchNumber);
    this.setData({
      btnText: "开始",
      time: "00:00:00",
      seconds: 1,
      btnBg: "lightgreen",
      showbtnReset: true
    })
  },

  onHide: function() {
    clearInterval(this.stopwatchNumber);
  },
})