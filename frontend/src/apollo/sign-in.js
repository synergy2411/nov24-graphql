import { gql } from "@apollo/client";

const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(data: { email: $email, password: $password }) {
      token
    }
  }
`;

export default SIGN_IN;
