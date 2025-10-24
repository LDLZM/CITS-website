// 自动更新年份
document.getElementById('year').textContent = new Date().getFullYear();

// 加载 EmailJS SDK
(function() {
  const script = document.createElement('script');
  script.src = 'https://cdn.emailjs.com/sdk/3.11.0/email.min.js';
  script.onload = initEmailJS;
  document.body.appendChild(script);
})();

function initEmailJS() {
  // 初始化 EmailJS
  emailjs.init('0n1OxRmrNjXfPudNW'); // 👈 替换为你的 Public Key

  const sendBtn = document.getElementById('sendBtn');
  sendBtn.addEventListener('click', function() {
    const data = {
      from_name: document.getElementById('from_name').value,
      reply_to: document.getElementById('reply_to').value,
      title: document.getElementById('title').value || '无主题',
      message: document.getElementById('message').value,
    };

    // 发送邮件
    emailjs.send('service_xvmeefg', 'template_miiss9e', data)
      .then(() => {
        alert('✅ 邮件发送成功！');
        // 清空输入框
        document.getElementById('from_name').value = '';
        document.getElementById('reply_to').value = '';
        document.getElementById('title').value = '';
        document.getElementById('message').value = '';
      })
      .catch((err) => {
        console.error('❌ 邮件发送失败：', err);
        alert('邮件发送失败，请稍后再试。');
      });
  });
}
