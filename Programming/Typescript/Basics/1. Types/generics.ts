let games: Array<string | number> = [];

skills.push('Javascript');
skills.push(23);

// Doesn't work as the array only accepts the explicit type of `string` or `number`.
//skills.push({ name: 'test' });
//skills.push(false);