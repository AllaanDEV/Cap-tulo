import { gql } from "graphql-tag";

const typeDefs = gql`
  scalar JSON

  # Google Books
  type ImageLinks {
    smallThumbnail: String
    thumbnail: String
  }

  type SearchInfo {
    textSnippet: String
  }

  type VolumeInfo {
    title: String
    subtitle: String
    authors: [String]
    description: String
    categories: [String]
    language: String
    pageCount: Int
    publishedDate: String
    publisher: String
    imageLinks: ImageLinks
  }

  type Ebook {
    id: ID
    etag: String
    kind: String
    selfLink: String
    searchInfo: SearchInfo
    volumeInfo: VolumeInfo
  }

  # Feedback de livros
  type FeedbackEbook {
    ebook: FeedbackEbookWrapper
    stars: Int
  }

  type FeedbackEbookWrapper {
    ebook: Ebook
  }

  # Usuários
  type User {
    id: ID
    name: String
    email: String
    userName: String
    followersArray: [String]
    followersNumber: Int
  }

  type Comment {
    userIndex: Int
    text: String
  }

  type PostModified {
    content: String
    ebook: JSON
    starsEbook: Int
  }

  type PostInicial {
    id: ID
    author: String
    authorId: ID
    userName: String
    content: String
    createdAt: String
    likes: Int
    comments: [Comment]
    midia: JSON
    postModified: PostModified
    type: String
  }

  #GIFs

  type Original {
    url: String
  }

  type Images {
    original: Original
  }

  type Gif {
    id: ID
    title: String
    images: Images
  }


#Emojis
type Emojis{
  character: String
  unicodeName: String
  group: String
}

  type Query {
    # Google Books
    ebooks(q: String = "fiction", page: Int = 0): [Ebook]

    # Giphy
    gifs(busca: String, offset: Int = 0): [Gif]

    # Emojis
    emojis: [Emojis]
    searchEmojis(search: String!): [Emojis]
    emojisByCategory(categorie: String!): [Emojis]

    # Dados locais
    allFeedbackEbooks: [FeedbackEbook]
    allPostsIniciais: [PostInicial]
    allUsers: [User]

  }
`;

export default typeDefs;
