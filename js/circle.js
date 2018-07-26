
(function($) {




 
  $('.first.circle').circleProgress({
    size: 170
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(stepValue.toFixed(2).substr(2));
  });

  
 $('.second.circle').circleProgress({
    size: 170
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(stepValue.toFixed(2).substr(2));
  });

  
  $('.third.circle').circleProgress({
    size: 170
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(stepValue.toFixed(2).substr(2));
  });

 

 $('.forth.circle').circleProgress({
    size: 170
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(stepValue.toFixed(2).substr(2));
  });
  
})(jQuery);
