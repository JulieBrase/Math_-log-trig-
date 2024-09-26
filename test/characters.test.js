import Daemon from "../src/Daemon";
import Magician from "../src/Magician";

test('Атака мага без дурмана', () => {
	const ivan = new Magician('Ivan');
	ivan.attack = 100;
	const result = ivan.attack;
	expect(result(2)).toEqual(90);
});

test("Атака демона под дурманом", () => {
	const maxim = new Daemon("Maxim");
	maxim.attack = 100;
	maxim.stoned = true;
	const result = maxim.attack;
	expect(result(2)).toEqual(85);
});