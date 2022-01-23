import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
    typeDefs: 'graphql/schema.graphql',
    resolvers,
});

// 서버 기본 포트는 4000
server.start(() => console.log('GraphQL Server Running'));
