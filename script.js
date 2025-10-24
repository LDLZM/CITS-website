// 自动更新年份
document.getElementById('year').textContent = new Date().getFullYear();

// 简单的表单提交提示
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('表单已提交（示例）');
  this.reset();
});
