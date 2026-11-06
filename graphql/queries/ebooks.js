import { gql } from "@apollo/client";

export const GET_ALL_EBOOKS = gql`
  query GetEbooks($q: String, $page: Int) {
    ebooks(q: $q, page: $page) {
      id
      etag
      searchInfo {
        textSnippet
      }
      volumeInfo {
        title
        authors
        language
        publishedDate
        description
        pageCount
        imageLinks {
          thumbnail
        }
      }
    }
  }
`;

export const GET_GIFS = gql`
  query GetGifs($busca: String, $offset: Int) {
    gifs(busca: $busca, offset: $offset) {
      id
      title
      images {
        original {
          url
        }
      }
    }
  }
`;

export const GET_EMOJIS = gql`
  query GetEmojis {
    emojis {
      character
      unicodeName
      group
    }
  }
`;

export const GET_SEARCH_EMOJIS = gql`
  query GetSearchEmojis($search: String!) {
   searchEmojis(search: $search) {
      character
      unicodeName
      group
    }
  }
`;
  