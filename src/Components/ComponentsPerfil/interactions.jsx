import { useContext, useEffect } from "react";
import AppContext from "../context";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { Post } from "../ComponentesFeed/post";
import { useParams } from "react-router";

export function Interactions() {
  const { likesCommentList, publication, like, setLike } =
    useContext(AppContext);

  const { id: paramsId } = useParams();

  const { getLikesComments} = useRequisicoes({
    setLike,
    like,
  });

  useEffect(() => {
    getLikesComments();
    // likesGet();
  }, []);

  const interactions = [];

  publication.forEach((post) => {
    post.comments.forEach((comment) => {
      if (comment.authorId === paramsId) {
        interactions.push({
          postId: post.id,
          createdAt: comment.createdAt,
        });
      }
    });
  });

  like.forEach((interaction) => {
    if (interaction.userId === paramsId && interaction.validation === true) {
      interactions.push({
        postId: interaction.postId,
        createdAt: interaction.createdAt,
      });
    }
  });

  likesCommentList.forEach((interaction) => {
    if (interaction.userId === paramsId) {
      interactions.push({
        postId: interaction.postId,
        createdAt: interaction.createdAt,
      });
    }
  });

  interactions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const postIds = [
    ...new Set(interactions.map((interaction) => interaction.postId)),
  ];

  const listFullFilter = postIds
    .map((postId) => publication.find((post) => post.id === postId))
    .filter(Boolean);

  return (
    <>
      {listFullFilter.length > 0 && (
        <ul
        className="flex flex-col gap-5">
          {listFullFilter.map((post) => (
            <li key={post.id}>
              <Post post={post} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
