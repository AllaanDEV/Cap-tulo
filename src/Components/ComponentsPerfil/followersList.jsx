import { useLocation, useParams } from "react-router";
import { Container } from "../ComponentesFeed/container";
import { Div } from "../ComponentesFeed/div";
import { LeftArrow } from "../svgCode";
import { useContext, useEffect } from "react";
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
    followers,
    filterFollowers,
  } = useContext(AppContext);

  const { userUP, user, allFollowers, getFollowBack} = useRequisicoes({});

  useEffect(() => {
    userUP();
    // allFollowers()
  }, []);

  const profile = usersList.find((perfil) => perfil.id === paramsId);
  // const profileFilter= profile.filter((perfil))

  console.log("profile", profile);

  return (
    <Container className="border border-border">
      <section className="bg-primary h-screen  pt-12 flex flex-col gap-3">
        <div className=" flex gap-5 items-center px-2">
          <button
            className="text-2xl transition hover:translate-x-[10px] duration-200 cursor-pointer "
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
              className={`hover:font-medium w-full py-4 ${styleButtonFollowersList === "followers" && "bg-gray/30"}`}
              onClick={() => {
                setStyleButtonFollowersList("followers");
              }}
            >
              Seguidores
            </button>
            <button
              className={`hover:font-medium w-full py-4 ${styleButtonFollowersList === "following" && "bg-gray/30"}`}
              onClick={() => {
                setStyleButtonFollowersList("following");
              }}
            >
              Seguindo
            </button>
          </div>
          <Lines></Lines>
        </div>

        {profile?.followersArray?.length > 0 &&
        styleButtonFollowersList === "followers" ? (
          <ul className="w-full flex items-start flex-col gap-5">
            {profile.followersArray.map((follower) => {
              const usersData = usersList.find(
                (perfil) => perfil.id === follower.userId,
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
                  className="flex justify-between w-full px-10"
                >
                  <UsersInfo
                    users={usersData}
                    followerUserId={follower.userId}
                  ></UsersInfo>

                  {follower.userId !== user.id && (
                    <ButtonFlow
                      userId={usersData.id}
                      followBack={followBack}
                      className="px-10"
                    ></ButtonFlow>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          styleButtonFollowersList === "following" && (
            <ul className="w-full flex items-start flex-col gap-5">
              {filterFollowers(paramsId).map((following, index) => {

                return (
                  <li key={index} className="flex justify-between w-full px-10">
                    <UsersInfo
                      following={following}
                      followerUserId={following.userId}
                    ></UsersInfo>
                    {following.userId === user.id && (
                      <ButtonFlow
                        userId={following.following}
                        className="px-10"
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
