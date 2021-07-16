const term = require('terminal-kit').terminal;
const cfonts = require('cfonts');
const fs = require('fs');

cfonts.say('Lambda|City', {
	font: '3d',              
	align: 'center',              
	colors: ['red'],             
});

const menu = [
	cfonts.render('Play', {
		font: 'block',              
		align: 'center',              
		colors: ['white']        
	}).string,
	cfonts.render('High Scores', {
		font: 'block',              
		align: 'center',              
		colors: ['white']        
	}).string,
	cfonts.render('Exit', {
		font: 'block',              
		align: 'center',              
		colors: ['white']          
	}).string
];

term.singleColumnMenu(menu, function(error, response) {
		response.selectedIndex
    if (response.selectedIndex === 0) { 
        const main = require('./main');
    } else if (response.selectedIndex === 1) {
		console.clear();
		let array = fs.readFileSync('message.txt').toString().split('\n');
		array = array.sort((a, b) => Number(b.split(' ')[2]) - Number(a.split(' ')[2]))
			.slice(0, 5).join('\r\n');
		cfonts.say(`${array}`,
			{
				font: 'block',
				align: 'center',
				colors: ['white']
			}
		);
		cfonts.say('Press esc to go back', {
			font: 'block',
			align: 'center',
			colors: ['red']
		  }
		);
		process.exit();
    } else {
        console.clear();
        process.exit();
    }
});