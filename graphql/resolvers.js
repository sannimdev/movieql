// 요건 나중에 Database로 빼야겠지?
const nicolas = {
    name: 'Nicolas',
    age: 18,
    gender: 'female',
};
// Query를 resolve(해결)한다.
// Rest API에서는 URL이 있엇다면 GraphQL에서는 Resolver가 있다.
const resolvers = {
    Query: {
        person: () => nicolas,
    },
};

export default resolvers;
