const progress = document.getElementById('progress');
const form = document.getElementById('form');
const fileInput = document.getElementById('file');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('file', fileInput.files[0]);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.action);

  xhr.upload.addEventListener('progress', function(e) {
    if (e.lengthComputable) {
      const totalSize = e.total;
      const loadedSize = e.loaded;
      const percentage = loadedSize / totalSize;

      progress.value = percentage;
    }
  });

  xhr.send(formData);
});