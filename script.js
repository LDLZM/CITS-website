// 自动更新年份
document.getElementById('year').textContent = new Date().getFullYear();

// 引入 EmailJS SDK
(function() {
  const script = document.createElement('script');
  script.src = 'https://cdn.emailjs.com/sdk/3.11.0/email.min.js';
  script.onload = initEmailJS;
  document.body.appendChild(script);
})();

function initEmailJS() {
  // 初始化 EmailJS
  emailjs.init('0n1OxRmrNjXfPudNW'); // 👈 替换为你的 Public Key

  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.sendForm('你的Service ID', '你的Template ID', this)
      .then(() => {
        alert('✅ 邮件发送成功！');
        form.reset();
      })
      .catch(err => {
        console.error('发送失败:', err);
        alert('❌ 邮件发送失败，请稍后再试。');
      });
  });
}
