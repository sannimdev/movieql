export const people = [
    {
        id: 0,
        name: 'Nicolas',
        age: 18,
        gender: 'female',
    },
    {
        id: 1,
        name: 'Leanne Graham',
        age: 31,
        gender: 'male',
    },
    {
        id: 2,
        name: 'Ervin Howell',
        age: 55,
        gender: 'male',
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        age: 53,
        gender: 'male',
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        age: 60,
        gender: 'female',
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        age: 8,
        gender: 'female',
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        age: 54,
        gender: 'male',
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        age: 77,
        gender: 'male',
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        age: 2,
        gender: 'female',
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        age: 80,
        gender: 'male',
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        age: 23,
        gender: 'male',
    },
];

export const getById = (id) => {
    const filteredPeople = people.filter((person) => id === person.id);
    return filteredPeople[0];
};
