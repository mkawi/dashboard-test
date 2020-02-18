$('.dropdown-toggle').on('show.bs.modal', function(e) {
	$('.modal-content #main').remove();
	$(this).find('.modal-content').load($(e.relatedTarget).attr('href') + ' #main');
});
