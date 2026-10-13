(() => {
  'use strict';

  // Original wallpaper supplied by Yozora Studio.
  const wallpaper = { src: './assets/halloween-wallpaper.png', filename: 'yozora-porun-halloween-wallpaper.png' };
  if (!wallpaper.src) return;

  const image = document.getElementById('wallpaper-image');
  const status = document.getElementById('wallpaper-status');
  const dialog = document.getElementById('wallpaper-dialog');
  const preview = document.getElementById('wallpaper-preview');
  const url = new URL(wallpaper.src, window.location.href);
  if (url.origin !== window.location.origin) return;

  image.onload = () => {
    image.hidden = false;
    document.getElementById('wallpaper-placeholder').hidden = true;
    status.textContent = '無料ダウンロードできます。';
    document.getElementById('wallpaper-caption').textContent =
      '共通1種類 · ' + image.naturalWidth + ' × ' + image.naturalHeight + ' px';
    const download = document.getElementById('wallpaper-download');
    download.href = url.href;
    download.download = wallpaper.filename;
    document.getElementById('wallpaper-large').src = url.href;
    document.getElementById('wallpaper-actions').hidden = false;
    // Download remains available on browsers without native dialog support.
    if (typeof dialog.showModal !== 'function') preview.hidden = true;
  };
  image.onerror = () => {
    status.textContent = '壁紙を読み込めませんでした。時間をおいて再度お試しください。';
  };
  preview.addEventListener('click', () => dialog.showModal());
  dialog.addEventListener('close', () => preview.focus());
  image.src = url.href;
})();
