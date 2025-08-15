function generateReport(tasks) {
  const report = `Báo cáo tiến độ công việc:\n`;
  tasks.forEach(task => {
    report += `- ${task.name}: ${task.status}\n`;
  });
  return report;
}

module.exports = { generateReport };