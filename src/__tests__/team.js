import Team from '../team';

test('test for add method', () => {
	const team = new Team();
	team.add('swordsman');
	expect(team.toArray()).toEqual(['swordsman']);
});

test('test for add method with error', () => {
	const team = new Team();
	team.add('swordsman');
	expect(() => team.add('swordsman')).toThrow();
});

test('test for addAll method', () => {
	const team = new Team();
	team.addAll('swordsman', 'deamon', 'bowman', 'deamon');
	expect(team.toArray()).toEqual(['swordsman', 'deamon', 'bowman']);
});
