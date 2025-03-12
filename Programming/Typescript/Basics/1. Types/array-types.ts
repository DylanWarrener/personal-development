let hobbies = ['Sports', 'Cooking'];

hobbies.push('Reading');
hobbies.push('Travelling');

// Doesn't work as the array only accepts the inferred value of `string`.
//hobbies.push(25);
//hobbies.push(false);

let skills: (string | number)[] = [];

skills.push('Javascript');
skills.push(23);

// Doesn't work as the array only accepts the explicit type of `string` or `number`.
//skills.push({ name: 'test' });
//skills.push(false);