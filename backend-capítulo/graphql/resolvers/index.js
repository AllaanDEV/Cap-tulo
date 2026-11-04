import { feedbackEbooks, postsIniciais, users} from "../../dataBase/index.js";
import { GraphQLScalarType, Kind } from "graphql";
import ebookResolvers from "./resolverEbook.js";


const JSONScalar = new GraphQLScalarType({
  name: "JSON",

  serialize: (value) => value,

  parseValue: (value) => value,

  parseLiteral: (ast) => {
    switch (ast.kind) {
      case Kind.STRING:
      case Kind.BOOLEAN:
        return ast.value;

      case Kind.INT:
      case Kind.FLOAT:
        return Number(ast.value);

      case Kind.OBJECT:
        return Object.fromEntries(
          ast.fields.map((field) => [
            field.name.value,
            JSONScalar.parseLiteral(field.value),
          ]),
        );

      case Kind.LIST:
        return ast.values.map((value) =>
          JSONScalar.parseLiteral(value),
        );

      case Kind.NULL:
        return null;

      default:
        return null;
    }
  },
});

const resolvers = {
  JSON: JSONScalar,

  Query: {
    ...ebookResolvers.Query,
    allFeedbackEbooks: () => feedbackEbooks,
    allPostsIniciais: () => postsIniciais,
    allUsers: () => users,
  },
};

export default resolvers;

