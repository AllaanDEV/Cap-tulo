import { useContext, useEffect, useEffectEvent, useState } from "react";
import { Div } from "../ComponentesFeed/div";
import { Info } from "../ComponentesFeed/info";
import { Check, Circle, Less, More, Pencil } from "../svgCode";
import AppContext from "../context";
import { useParams } from "react-router";
import { useRequisicoes } from "../context/hooks/useRequisicoes";
import { SideBar } from "../ComponentesFeed/sideBar";

export function ReadingPace() {
  const { ebookSaved, goal, setGoal, progressAllEbooks, usersList } =
    useContext(AppContext);
  const { user, postNumberGet, userUP } = useRequisicoes({});
  const { id: paramsId } = useParams();

  const [goalNumber, setGoalNumber] = useState(0);

  // 1. CORRIGIDO: Inicializado como objeto para casar com `prev.number`
  const limitNumber = (signal) => {
    setGoal((prev) => {
      // Garante segurança caso `prev` venha nulo/undefined
      const currentNumber = prev?.number || 0;

      if (signal) {
        return {
          ...prev,
          number: currentNumber + 1,
        };
      }

      if (currentNumber <= 0) {
        return prev;
      }

      return {
        ...prev,
        number: currentNumber - 1,
      };
    });
  };

  const read = ebookSaved.filter((ebook) => ebook.progress === 100);
  const [definitionGoal, setDefinitionGoal] = useState(false);

  const postNumber = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/goalNumber/${paramsId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            number: goal.number,
          }),
        },
      );

      const data = await response.json();
      setGoal(data);
      return data;
    } catch (error) {
      console.error(error);
      alert(
        "Não foi possível realizar a meta de leitura, tente novamente mais tarde",
      );
    }
  };

  // useEffect(() => {
  //   const postNumberGet = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:3000/goalNumber/${paramsId}`,
  //       );

  //       const data = await response.json();

  //       if (data) {
  //         setGoal(data);
  //       }
  //       return data;
  //     } catch (error) {
  //       console.error(error);
  //       alert(
  //         "Não foi possível realizar a busca da meta, tente novamente mais tarde",
  //       );
  //     }
  //   };
  //   postNumberGet();
  // }, [paramsId]);

  useEffect(() => {
    postNumberGet(paramsId);
    userUP();
  }, [paramsId]);

  const userProfile = usersList.find((u) => u.id === paramsId);

  const validation = goal?.number > 0;

  // const progressAllEbooks = validation
  //   ? Math.min(
  //       (ebookSaved.reduce((acc, ebook) => acc + ebook.progress / 100, 0) /
  //         goal.number) *
  //         100,
  //       100,
  //     )
  //   : 0;

  return (
    <Div className="flex items-start">
      <div className="flex gap-1 items-center">
        <div className="text-wine">
          <Circle></Circle>
        </div>
        <span className="font-fraunce text-xl ">Ritmo de Leitura</span>
      </div>

      {definitionGoal ? (
        <Info className="rounded-2xl">
          <div className="p-4 w-full">
            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-col items-start w-full">
                <span>Meta de leitura para {new Date().getFullYear()}</span>
                {read.length === 0 ? (
                  <span className="text-gray text-sm">
                    Quantos livros você quer ler este ano?
                  </span>
                ) : (
                  <span className="text-gray text-sm">
                    Quantos livros você quer ler este ano? Você já leu
                    {read.length}
                  </span>
                )}
              </div>

              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="border rounded-full border-wine w-30 bg-primary px-5 py-1 flex items-center justify-between gap-1 text-gray ">
                    <button
                      onClick={() => limitNumber(false)}
                      className="hover:text-wine cursor-pointer"
                    >
                      <Less></Less>
                    </button>

                    <span className="font-fraunce text-xl text-black">
                      {validation ? goal?.number : goalNumber}
                    </span>

                    <button
                      onClick={() => limitNumber(true)}
                      className="hover:text-wine cursor-pointer"
                    >
                      <More></More>
                    </button>
                  </div>
                  <span className="text-gray">livros</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="px-4 py-1 rounded-2xl text-gray cursor-pointer hover:bg-gray/30 transition duration-400"
                    onClick={() => setDefinitionGoal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="px-4 py-1 rounded-2xl bg-wine/90 text-white cursor-pointer hover:bg-wine flex gap-2 items-center transition duration-400"
                    onClick={() => {
                      setDefinitionGoal(false);
                      postNumber();
                    }}
                  >
                    <Check></Check> Salvar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Info>
      ) : (
        <Info className="flex flex-col p-5 rounded-2xl">
          <div className="w-full flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="flex items-start">
                {progressAllEbooks === 100 ? (
                  <span className="text-lg">
                    {paramsId !== user.id
                      ? `${userProfile.name} bateu sua meta!🎉`
                      : "concluida com sucesso, parabêns!!!🥳🎉🎉"}{" "}
                    Meta
                  </span>
                ) : goal?.number > 0 ? (
                  <p className="text-gray text-lg">{userProfile.name} está
                    concluindo
                    <span className=" pl-1">{ebookSaved?.length}</span>
                    <span className="text-gray pl-1">
                      de {validation ? goal?.number : 0} livros em{" "}
                      {new Date().getFullYear()}
                    </span>
                  </p>
                ) : (
                  <p
                    className="
                  text-lg"
                  >
                   {user.id === paramsId ? " Que tal fazer uma meta?" : `${userProfile.name} ainda não possui uma meta`}
                  </p>
                )}
              </div>
              {user.id === paramsId && (
                <button
                  onClick={() => setDefinitionGoal(true)}
                  className="flex gap-2 py-2 px-4 bg-primary hover:bg-gray/40 rounded-full items-center transition duration-400 cursor-pointer"
                >
                  <Pencil></Pencil>
                  <span>
                    {progressAllEbooks === 100
                      ? "Dobrar a meta!"
                      : progressAllEbooks < 100 && ebookSaved.length > 0
                        ? "Redefinir meta"
                        : "Definir meta"}
                  </span>
                </button>
              )}
            </div>

            <div className="w-full rounded-2xl bg-gray/30">
              <div className="w-full rounded-2xl bg-gray/30">
                <div
                  className={`py-1 rounded-2xl transition-all duration-700 ${
                    progressAllEbooks === 100 ? "bg-green-700" : "bg-wine"
                  }`}
                  style={{
                    width: `${progressAllEbooks}%`,
                  }}
                />
              </div>
            </div>
            <div className="w-full flex justify-end ">
              <span className="text-wine w-fit">
                {validation ? progressAllEbooks.toFixed(0) : 0}%
              </span>
            </div>
          </div>
        </Info>
      )}
    </Div>
  );
}
