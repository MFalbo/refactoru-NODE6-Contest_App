// console.log('main.js out of document on ready');
$(document).ready(function () {
	// console.log('in document on ready')
	$('.next').click(function(){
		$(this).closest('.cart').removeClass('visible').next('.cart').addClass('visible');
	});

	$('.voteBtn').click(function(){
		$(this).closest('.vid').addClass('winner').siblings('.vid').addClass('loser');
	});
})