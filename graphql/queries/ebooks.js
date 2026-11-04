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

// export const GET_EBOOKS_USERS= gql`
// query GetEbooksUsers($id: ID){
//   ebooks(id: $id){

//   }
// }
// `