import { useLocation, useParams } from "react-router";
import { useContext, useEffect } from "react";
import { Container } from "../ComponentesFeed/container";
import { LeftArrow } from "../svgCode";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import AppContext from "../context";
import { Lines } from "../ComponentsForm/lines";
import { UsersInfo } from "../ComponentesFeed/usersInfo";
import { ButtonFlow } from "./buttonFlow";

export function FollowersList() {
  const { id: paramsId } = useParams();
  const location = useLocation();
  const {
    usersList,
    setListFollowersPerfil,
    styleButtonFollowersList,
    setStyleButtonFollowersList,
    filterFollowers, seguindoProfileId
  } = useContext(AppContext);

  const { userUP, user, getFollowBack} = useRequisicoes({});

  useEffect(() => {
    userUP();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // allFollowers()
  }, []);

  // Comparação frouxa: o id da URL (string) e o id da lista (número)
  // podem ter tipos diferentes — com === estrito o perfil não era
  // encontrado e a lista de seguidores aparecia vazia após navegar.
  const profile = usersList.find((perfil) => perfil.id == paramsId);
  // const profileFilter= profile.filter((perfil))

  // const seguindoProfileId = followers.filter((f) => f.following === paramsId);

  return (
    <Container className="border border-border">
      <section className="bg-primary h-screen flex flex-col gap-3 w-[95vw] sm:w-[90vw] lg:w-[60vw] xl:w-[40vw]">
        <div className=" flex gap-5 items-center px-4 pt-2">
          <button
            className="text-2xl transition hover:translate-x-[-10px] duration-200 cursor-pointer "
            onClick={() => setListFollowersPerfil(false)}
          >
            <LeftArrow></LeftArrow>
          </button>

          <div className="text-2xl flex flex-col">
            <span>{profile?.name}</span>
            <span className="text-gray text-sm">@{profile?.userName}</span>
          </div>
        </div>

        <div>
          <div className="w-full flex justify-evenly text-center transition-all duration-300">
            <button
              className={`hover:font-light w-full py-4 ${styleButtonFollowersList === "followers" && "bg-gray/30"}`}
              onClick={() => {
                setStyleButtonFollowersList("followers");
              }}
            >
              Seguidores
            </button>
            <button
              className={`hover:font-light w-full py-4 ${styleButtonFollowersList === "following" && "bg-gray/30"}`}
              onClick={() => {
                setStyleButtonFollowersList("following");
              }}
            >
              Seguindo
            </button>
          </div>
          <Lines></Lines>
        </div>

        {seguindoProfileId(paramsId)?.length > 0 &&
        styleButtonFollowersList === "followers" ? (
          <ul className="w-full flex items-start flex-col gap-5 px-2">
            {seguindoProfileId(paramsId).map((follower) => {

              const usersData = usersList.find(
                (perfil) => perfil.id == follower.userId,
              );

              const followBack = getFollowBack(follower.userId);
              if (
                usersData?.id === user.id &&
                location.pathName === `/perfil/${user.id}`
              ) {
                return;
              }

              return (
                <li
                  key={follower.id}
                  className="flex justify-between w-full sm:px-10 gap-2"
                >
                  <UsersInfo
                    users={usersData}
                    followerUserId={follower.userId}
                  ></UsersInfo>

                  {follower.userId !== user.id && (
                    <ButtonFlow
                      userId={usersData.id}
                      followBack={followBack}
                      className="sm:px-10 px-4"
                    ></ButtonFlow>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          styleButtonFollowersList === "following" && (
            <ul className="w-full flex items-start flex-col gap-5 px-2">
              {filterFollowers(paramsId).map((following, index) => {
                              // console.log("FOLLOWINGF", following)
                return (
                  <li
                    key={index}
                    className="flex text-xs justify-between w-full sm:px-10 gap-2"
                  >
                    <UsersInfo
                      following={following}
                      followerUserId={following.userId}
                    ></UsersInfo>
                    {following.userId === user.id && (
                      <ButtonFlow
                        userId={following.following}
                        className="sm:px-10 px-4"
                      ></ButtonFlow>
                    )}
                  </li>
                );
              })}
            </ul>
          )
        )}
      </section>
    </Container>
  );
}
