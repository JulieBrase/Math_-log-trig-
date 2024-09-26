import Character from '../src/Character';

export default class Daemon extends Character {
	constructor(name) {
		super(name);
		this.type = 'Daemon';
	}
}