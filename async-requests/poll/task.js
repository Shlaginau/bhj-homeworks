const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    const responseData = JSON.parse(xhr.responseText);
    displayPollTitle(responseData.data.title);
    displayPollAnswers(responseData.data.answers);
  }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');  
xhr.send();
  
function displayPollTitle(title) {
  const pollTitle = document.getElementById('poll__title');
  pollTitle.textContent = title;
} 

function displayPollAnswers(answers) {
  const pollAnswers = document.getElementById('poll__answers');
  pollAnswers.innerHTML = '';

  for (const answer in answers) {
    const button = document.createElement('button');
    button.classList.add('poll__answer');
    button.textContent = answers[answer];
    button.addEventListener('click', () => {
      alert('Спасибо, ваш голос засчитан!');
    });

    pollAnswers.appendChild(button);
  }
}