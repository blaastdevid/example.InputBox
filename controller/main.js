//
// example.InputBox -- read text input, show it on screen
//

var InputBox = require('ui').InputBox;
var TextView = require('ui').TextView;

var app = this;

// Capture key presses to the view and pass them on to the inputbox:
exports[':keypress'] = function(key) {
	 this.input.emit('keypress', key);
	 this.output.label('Write something..');
};

exports[':load'] = function() {
	var view = this;

	// In this example, the view's json definition is empty.
	// We'll create an InputBox and a TextView here:
	view.input = new InputBox({
		style: {
			'background-color': '#aaaaee',
			width: 'fill-parent',
			height: 20
		}
	});

	// Add the InputBox to the view:
	view.add(view.input);

	// Create a TextView:
	view.output = new TextView({
		style: {
			width: 'fill-parent',
			align: 'center'
		},
		label: 'Press enter to activate InputBox..'
	});

	// Add the TextView to the view:
	view.add(view.output);

	// When user has entered some text, InputBox will emit a 'submit' event.
	// Change the TextView's label and clear the InputBox:
	view.input.on('submit', function() {
		view.output.label(view.input.value() + ' - press enter again.');
		view.input.value('');
	});
};
