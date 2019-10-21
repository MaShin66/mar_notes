import gql from "graphql-tag";
// 재사용하기 위한 곳

export const NOTE_FRAGMENT = gql`
  fragment NoteParts on Note {
    id
    title
    content
  }
`;