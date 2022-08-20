class Team {
	constructor() {
			this.members = new Set();
	}

	add(name) {
		const user = {name: name};
		// this.members.add(member);

		//! почему не добавляются новые member в комманду?
		this.members.forEach(member => {
			if (member.name === user.name) {   
				throw new Error('Игрок с таким именем уже существует');
			} else {
				this.members.add(user);
			}
		});
	}

	addAll(...users) {
		//! не будет работать корректно, т.к. каждый отдельный объект - это не один и тот же объект (даже с одинаковыми именами). поэтому каждый раз будет добавляться в Set коллекцию, как уникальный. Подскажите, как этого избежать?
		users.forEach(item => {
			const member = {name: item};
			this.members.add(member);
		}); 
	}

	toArray() {
		return Array.from(this.members);
	}
}

const team = new Team();
team.add('1');
team.add('2');
team.add('3');
console.log(team);

team.addAll('5', '6', '7', '5');
console.log(team);

console.log(team.toArray());