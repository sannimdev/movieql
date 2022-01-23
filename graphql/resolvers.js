import { people } from './db';
// 요건 나중에 Database로 빼야겠지?
// Query를 resolve(해결)한다.
// Rest API에서는 URL이 있엇다면 GraphQL에서는 Resolver가 있다.
const resolvers = {
    Query: {
        people: () => people,
        // person: () => getById() ,
    },
};

export default resolvers;
