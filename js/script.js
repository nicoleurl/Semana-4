

$(document).ready(function(){
  var quotes = ["Illustrate your favorite tarot card", "Draw a tree house", "Re-make your favorite painting with a twist", "Illustrate a quote you like", "A drawing of your city","A portrat of your favorite person","An Illustration of your favorite place", "Draw yourself as a superhero"]
  var backgroundColors = ['#6495ED', '#FF7F50', '#00CED1', '#00BFFF', '#FFD700', '#CD5C5C', '#F0E68C', '#ADD8E6', '#E0FFFF', '#90EE90', '#20B2AA', '#87CEFA', '#B0C4DE','#FFA500','#BC8F8F','#2E8B57','#FFF5EE','#C0C0C0'];
  var rand = quotes[Math.floor( Math.random() * quotes.length )];
  var index;
  $('blockquote').text(rand);  
  $('.quote').click(function(){
    index = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    $('body').css('background-color', index);
    $('blockquote').text(quotes[Math.floor( Math.random() * quotes.length )]);
  });
  $('.tweet').click(function(){
    $('.tweet a').attr('href','https://twitter.com/intent/tweet?text='+encodeURIComponent(rand));
  });
});