document.addEventListener('DOMContentLoaded', function() {
  // 自动更新年份
  document.getElementById('year').textContent = new Date().getFullYear();

  // 初始化 EmailJS
  emailjs.init('[你的 Public Key]'); // 👈 替换为你的 Public Key

  const sendBtn = document.getElementById('sendBtn');
  sendBtn.addEventListener('click', function() {
    const data = {
      from_name: document.getElementById('from_name').value,
      reply_to: document.getElementById('reply_to').value,
      title: document.getElementById('title').value || '无主题',
      message: document.getElementById('message').value,
    };

    // 检查输入是否为空
    if (!data.from_name || !data.reply_to || !data.message) {
      alert('请填写姓名、邮箱和消息内容！');
      return;
    }

    emailjs.send('[你的 Service ID]', '[你的 Template ID]', data)
      .then(() => {
        alert('✅ 邮件发送成功！');
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
});
