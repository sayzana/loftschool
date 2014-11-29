$(document).ready(function() {

	$('.tabs-control-link').on('click', function(e) {
		e.preventDefault();

		var item = $(this).closest('.sidebar_menu-item'),
		    contentItem = $('.menu-item'),
		    itemPosition = item.index();
		
		contentItem.eq(itemPosition)
		    .add(item)
		    .addClass('menu-item-active')
		    .siblings()
		    .removeClass('menu-item-active');
	});

});