    const topics = document.querySelectorAll('.topic');
    const doctorCards = document.querySelectorAll('.doctor-card');

    topics.forEach(topic => {
      topic.addEventListener('click', () => {
        topics.forEach(t => t.classList.remove('selected'));
        topic.classList.add('selected');

        const selectedTopic = topic.getAttribute('data-topic');

        doctorCards.forEach(card => {
          card.style.display = card.getAttribute('data-topic') === selectedTopic ? 'flex' : 'none';
        });
      });
    });

  function showDoctorsForTopic(topic) {
    const cards = document.querySelectorAll('.doctor-card');
    cards.forEach(card => {
      if (card.dataset.topic === topic) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }