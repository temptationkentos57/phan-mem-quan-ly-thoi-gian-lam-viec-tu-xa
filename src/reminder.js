function setReminder(task, time) {
  setTimeout(() => {
    console.log(`Nhắc nhở: ${task.name} sắp đến hạn!`);
  }, time);
}

module.exports = { setReminder };