import { Div } from "./div";
import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { configuration, Like } from "../svgCode";
import { Lines } from "../ComponentsForm/lines";
import { Share } from "../svgCode";
import { Comment } from "../svgCode";
import { memo } from "react";

import { save } from "../svgCode";
// import daenerys from "../../assets/dragoes-daenerys.webp";
import { Info } from "./info";
import { ButtonPost } from "./buttonPost";

import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { CommentsList } from "./commentsList";

import { ImgPerfil } from "../ComponentsPerfil/imgPerfil";
import { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../context";
import { Link, useNavigate, useParams } from "react-router";
import { EbookCitation } from "./ebookCitation";
import { ContainerEbooks } from "../ComponentsPerfil/containerEbooks";
import { EbookProgress } from "../ComponentsPerfil/ebookProgress";
import { UsersInfo } from "./usersInfo";
import { DialogPostFocus } from "./dialogPostFocus";
import { ContainerButtonsPost } from "./containerButtonsPost";

const Save = save;
const Icon = configuration;

export const Post = memo(function Post({ post }) {
  const { id: paramsId } = useParams();
  const navigate = useNavigate();

  const {
    setPostId,
    editValue,
    styleCardActive,
    ebookSaved,
    followers,
    setPostFocus,
    dataPostFocus,
    setDataPostFocus,
  } = useContext(AppContext);

  // const [like, setLike] = useState([]);
  // const [liked, setLiked] = useState(false);
  // const [liking, setLiking] = useState(false);
  // const likeLock = useRef(false);

  const [postComment, setPostComment] = useState(!post);
  setPostId(post);

  const {
    postDelete,
    LikeButton,
    nameIcon,
    user,

    fetchProfile,
    likesGet,

    arrayFeedbacksEbooks,
  } = useRequisicoes({
    post,
  });

  const openComments = () => {
    setPostComment(!postComment);
  };

  useEffect(() => {
    fetchProfile();
    likesGet();
  }, [paramsId]);

  // const handleLike = async () => {
  //   if (likeLock.current) return;

  //   likeLock.current = true;
  //   setLiking(true);

  //   try {
  //     await LikeButton();

  //     setLiked((prev) => !prev);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     likeLock.current = false;
  //     setLiking(false);
  //   }
  // };

  // const photo = (photoValueFeed ? photoValueFeed : []).find(
  //   (photo) => photo.userId == post.authorId,
  // );

  // useEffect(() => {
  //   const likes = like?.find(
  //     (p) => p.postId === post.id && p.userId === user.id,
  //   );

  //   setLiked(likes?.validation ?? false);
  // }, [like, post.id, user.id]);

  useEffect(() => {
    if (post.type === "feedback") {
      arrayFeedbacksEbooks();
    }
  }, [post.type]);

  console.log("VAP", post);

  return (
    <>
      <Div className="w-max-[50vw]">
        <section
          className="flex flex-col gap-2"
          onClick={() => {
            setPostFocus((prev) => !prev);
            setDataPostFocus(post);
            // navigate(`/feed/${post.authorId}/${post.id}`));
          }}
        >
          <div className="flex gap-3 justify-between">
            <UsersInfo post={post}></UsersInfo>
            <details className="flex flex-col items-end relative">
              <summary className="list-none marker:hidden">
                <Icon></Icon>
              </summary>
              <div className="bg-bermuda absolute left-2.5 px-2 rounded-sm">
                {post.authorId === user.id ? (
                  <button className="hover:text-wine" onClick={postDelete}>
                    Deletar
                  </button>
                ) : null}
              </div>
            </details>
          </div>

          <p
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="text"
          />

          {post.midia !== "listNull" && (
            <Info className="rounded-xs">
              {post?.midia?.type === "gif" ? (
                <img
                  src={post.midia.images?.original?.url}
                  alt={post.midia.title}
                  className="w-full object-contain sm:max-h-[35vw]"
                />
              ) : Array.isArray(post.midia) ? (
                <div>
                  {post.midia.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt="Imagem do post"
                      className="w-full sm:max-h-[35vw] object-cover"
                    />
                  ))}
                </div>
              ) : null}
            </Info>
          )}

          {post.type === "citation" ? (
            <EbookCitation
              text={post.postModified?.content}
              title={post.postModified?.ebook?.ebook?.volumeInfo?.title}
              authors={post.postModified?.ebook?.ebook?.volumeInfo?.authors}
            ></EbookCitation>
          ) : post.type === "feedback" ? (
            <ContainerEbooks
              title={post.postModified?.ebook?.ebook?.volumeInfo?.title}
              subtitle={post.postModified?.ebook?.ebook?.volumeInfo?.subtitle}
              thumbnail={
                post.postModified?.ebook?.ebook?.volumeInfo?.imageLinks
                  ?.thumbnail
              }
              starsNumber={post.postModified?.starsEbook}
            ></ContainerEbooks>
          ) : (
            post.type === "resenha" && (
              <EbookProgress book={post.postModified.ebook}></EbookProgress>
            )
          )}

          {/* <img src={daenerys}></img> */}
        </section>

        <Lines className="mt-2"></Lines>

        <ContainerButtonsPost
          post={post}
          openComments={openComments}
        ></ContainerButtonsPost>

        {postComment && <CommentsList post={post}></CommentsList>}
      </Div>
      <DialogPostFocus></DialogPostFocus>
    </>
  );
});
