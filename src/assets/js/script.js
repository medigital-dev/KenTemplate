$('.list-group-item').click(function(e) {
    e.preventDefault();
    $('#featured_post h5').text($(this).find('h5').text());
    $('#featured_post h6').text($(this).find('span#category').text());
    $('#featured_post p').text($(this).find('p').text());
    $('#featured_post #date').text($(this).find('span#date').text());
    $('#featured_post #author').text($(this).find('span#author').text());
    $('#featured_post img').attr('src', $(this).find('img').attr('src'));
    document.location.href = '#recent-blog';
  });