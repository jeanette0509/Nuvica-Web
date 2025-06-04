document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('phq9-form');
  const submitBtn = document.getElementById('submitBtn');
  const totalQuestions = 4;

  
  form.addEventListener('change', () => {
    let answered = 0;

    for (let i = 1; i <= totalQuestions; i++) {
      const radios = form[`q${i}`];
      if ([...radios].some(r => r.checked)) {
        answered++;
      }
    }

    submitBtn.disabled = answered !== totalQuestions;
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    for (let i = 1; i <= totalQuestions; i++) {
      const radios = form[`q${i}`];
      if (![...radios].some(r => r.checked)) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      alert('Jawaban kamu telah dikirim.');
      window.location.href = 'resultTest.html'; 
    } else {
      alert('Harap jawab semua pertanyaan terlebih dahulu.');
    }
  });
});
