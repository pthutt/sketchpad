var $container = $('<div></div>')
var $row = $('<div></div>')
var $grid = $('<div></div>')


$(document).ready(function(){
	$('body').prepend($container);
	$($container).css('background-color', 'blue')
	.css('margin', '30px auto');
	$($container).height('400px').width('400px');
	$('div').addClass('contain');
	addRow(16);
});

function addRow(number) {
	var total = 0
	while (total < number) {
		total = total + 1;
		$('.contain').append('<div></div>');
		$('.contain div').last().addClass('row' + total);
		$('.row' + total).height('6.25%').width('100%');
			function addColumn(x) {
				var column = 0
				while (column < x) {
					column = column + 1;
					$('.row' + total).append('<div></div>');
					$('.row' + total + ' div').last().addClass('grid' + total + column);
					$('.grid' + total + column).css('display', 'inline-block')
						.height('25px').width('25px')
						.css('box-shadow', '0 0 0 1px black');
				}
			}
		addColumn(16);
	}
}

