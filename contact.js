document.querySelectorAll('.email-copy-button').forEach(button => {
  button.addEventListener('click', async () => {
    const status = button.closest('.email-copy').querySelector('.email-copy-status');
    try {
      if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText('yozorastudio24@gmail.com');
      status.textContent = 'コピーしました。お使いのメールサービスの宛先に貼り付けてください。';
    } catch {
      status.textContent = 'コピーできませんでした。上のメールアドレスを選択してコピーしてください。';
    }
  });
});
