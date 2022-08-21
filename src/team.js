export default class Team {
	constructor() {
			this.members = new Set();
	}

	add(name) {
		this.members.forEach((member) => {
			if (member === name) {
				throw new Error('Игрок с таким именем уже существует');
			}
		});

		this.members.add(name);
	}

	addAll(...names) {
		names.forEach((name) => {
			this.members.add(name);
		});
	}

	toArray() {
		return Array.from(this.members);
	}
}
