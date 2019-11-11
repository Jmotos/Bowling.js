const chai = require('chai'),
	itParam = require('mocha-param'),
	should = chai.should(),
	Game = require('../src/game');

describe('Unit test battery of Game', () => {
	it('Initialize game with 0 points', () => {
		let game = new Game(),
			score = game.score();

		score.should.be.eql(0);
	});
});
