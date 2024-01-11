export const typeDefs = `
  type Query {
    events(genres: [String]): [Event]
  }

  type Event {
    id: ID
    title: String
    date: String
    thumbnail: String
    location: String
    genre: String
    website: String
    link: String
  }
`;
