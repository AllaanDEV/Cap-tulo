import { Div } from "./div";
import { Configuration } from "../svgCode";
import { Lines } from "../ComponentsForm/lines";
import { memo } from "react";

import { Info } from "./info";

import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { CommentsList } from "./commentsList";

import { useContext, useEffect, useState } from "react";
import AppContext from "../context";
import { useLocation, useNavigate, useParams } from "react-router";
import { EbookCitation } from "./ebookCitation";
import { UsersInfo } from "./usersInfo";
import { DialogPostFocus } from "./dialogPostFocus";
import { ContainerButtonsPost } from "./containerButtonsPost";
import { PostModifiedContainer } from "./postModifiedContainer";
import { CarouselImages } from "./carolselImages";

const Icon = Configuration;

export const Post = memo(function Post({ post }) {
  const { id: paramsId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { setPostFocus, setLike, setDataPostFocus } = useContext(AppContext);

  const [postComment, setPostComment] = useState(!post);

  const {
    postDelete,
    user,

    arrayFeedbacksEbooks,
  } = useRequisicoes({
    post,
    setLike,
  });

  const openComments = () => {
    setPostComment(!postComment);
  };

  // Dados globais (perfil e likes) são carregados uma única vez no layout,
  // não a cada post — evita dezenas de requisições idênticas por navegação.
  useEffect(() => {
    if (post?.type === "feedback") {
      arrayFeedbacksEbooks();
    }
  }, [post?.type]);

  const validationsPostFocus = () => {
    if (window.innerWidth >= 640) {
      setPostFocus((prev) => !prev);
    } else if (window.innerWidth < 640) {
      navigate(`/feed/${user.id}/${post.id}`);
    }
  };

  const showComments =
    postComment || location.pathname === `/feed/${user.id}/${post.id}`;

  const [keepComments, setKeepComments] = useState(showComments);

  useEffect(() => {
    if (showComments) {
      setKeepComments(true);
      return;
    }
    const timer = setTimeout(() => {
      setKeepComments(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [showComments]);

  return (
    <>
      <Div className=" animate-[expandPost_450ms_cubic-bezier(0.22,1,0.36,1)_both]">
        <section className="flex flex-col gap-2">
          <div className="flex gap-3 justify-between">
            <UsersInfo post={post} />

            {user.id === post.authorId && (
              <details className="flex flex-col items-end relative">
                <summary className="list-none marker:hidden">
                  <Icon></Icon>
                </summary>
                <div className="bg-bermuda absolute right-2 px-2 rounded-sm bg-border">
                  {post?.authorId === user.id ? (
                    <button
                      className="hover:text-wine"
                      onClick={() => postDelete(post, paramsId)}
                    >
                      Deletar
                    </button>
                  ) : null}
                </div>
              </details>
            )}
          </div>

          <p
            dangerouslySetInnerHTML={{ __html: post?.content }}
            className="text"
            onClick={() => {
              validationsPostFocus();
              setDataPostFocus(post);
            }}
          />

          {post?.midia !== "listNull" && (
            <Info
              className="rounded-xl cursor-pointer text-center"
              onClick={() => {
                validationsPostFocus();
                setDataPostFocus(post);
              }}
            >
              {post?.midia?.type === "gif" ? (
                <img
                  src={post?.midia?.images?.original?.url}
                  alt={post?.midia?.title}
                  className="w-full object-contain sm:max-h-[35vw] "
                />
              ) : Array.isArray(post?.midia) ? (
                <CarouselImages images={post.midia} />
              ) : null}
            </Info>
          )}

          {post?.type === "citation" ? (
            <EbookCitation
              text={post?.postModified?.content}
              title={post?.postModified?.ebook?.ebook?.volumeInfo?.title}
              authors={post?.postModified?.ebook?.ebook?.volumeInfo?.authors}
              onClick={() => {
                validationsPostFocus();
                setDataPostFocus(post);
              }}
              className="cursor-pointer"
            ></EbookCitation>
          ) : post?.type === "feedback" ? (
            <PostModifiedContainer
              title={post.postModified?.ebook?.ebook?.volumeInfo?.title}
              subtitle={post.postModified?.ebook?.ebook?.volumeInfo?.subtitle}
              thumbnail={
                post.postModified?.ebook?.ebook?.volumeInfo?.imageLinks
                  ?.thumbnail
              }
              starsNumber={post.postModified?.starsEbook}
              type={post?.type}
              onClick={() => {
                validationsPostFocus();
                setDataPostFocus(post);
              }}
              className="cursor-pointer"
            ></PostModifiedContainer>
          ) : (
            post?.type === "resenha" && (
              <PostModifiedContainer
                book={post?.postModified?.ebook}
                onClick={() => {
                  validationsPostFocus();
                  setDataPostFocus(post);
                }}
                className="cursor-pointer"
                type={post?.type}
              ></PostModifiedContainer>
            )
          )}
        </section>

        <Lines className="mt-2"></Lines>

        <ContainerButtonsPost
          post={post}
          openComments={openComments}
        ></ContainerButtonsPost>

        <div
          className={`min-h-0  grid transition-[grid-template-rows] duration-150 ease-out ${
            showComments ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            {keepComments && <CommentsList post={post} />}
          </div>
        </div>
      </Div>
      {window.innerWidth >= 640 && <DialogPostFocus></DialogPostFocus>}
    </>
  );
});
