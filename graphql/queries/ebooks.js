import { gql } from "@apollo/client";

export const GET_EBOOKS = gql`
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
