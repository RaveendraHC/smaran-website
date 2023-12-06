function showMore(button) {
    var cardContent = button.parentElement;
    var moreText = cardContent.querySelector('.more-text');
  
    if (moreText.style.display === 'none' || moreText.style.display === '') {
      moreText.style.display = 'block';
      button.textContent = 'Show less';
    } else {
      moreText.style.display = 'none';
      button.textContent = 'Show more';
    }
  }
