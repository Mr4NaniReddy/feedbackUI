$(document).ready(function() {
    let typeOfRating = '';

    $('.ratings-container').on('click', '.rating', function() {
      typeOfRating = $(this).find('p').text();
    });


      $('#send').on('click', function() {
        if (typeOfRating === ''){
          alert('Please select any one rating');
        }
        else{
          $('#panel').html(`
          <img src="https://cdn-icons-png.flaticon.com/128/2107/2107845.png" alt="" height="30"><br>
          <strong>Thank You!</strong>
          <br>
          <strong>Feedback: ${typeOfRating}</strong>
          <p>We'll use your feedback to improve our customer support</p>
        `);
        }
    });
    
  


  

  });

  