const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4 && xhr.status === 200) {

    const response = JSON.parse(xhr.responseText);
    const title = response.data.title;
    const answers = response.data.answers;

    pollTitle.textContent = title;

    for (let i = 0; i < answers.length; i++) {
      pollAnswers.insertAdjacentHTML('beforeEnd', 
        `<button class="poll__answer">${answers[i]}</button> `);
    }
    const pollAnswer = document.querySelectorAll('.poll__answer');
    pollAnswer.forEach(pollAnswer => {
      pollAnswer.addEventListener('click', (e) => {
        alert('Спасибо, ваш голос засчитан!');
        location.reload();
      });
    });
  }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();