import { useContext, useEffect, useState } from "react";
import { Div } from "../ComponentesFeed/div";
import { Info } from "../ComponentesFeed/info";
import { Check, Circle, Less, More, Pencil } from "../svgCode";
import AppContext from "../context";
import { useParams } from "react-router";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

export function ReadingPace() {
  const {
    ebookSaved,
    goal,
    setGoal,
    progressAllEbooks,
    usersList,       setGoalUser
  } = useContext(AppContext);

  const { user, postNumberGet, userUP, saveGoal } = useRequisicoes({});
  const { id: paramsId } = useParams();


  const [goalDraft, setGoalDraft] = useState(0);

  const [definitionGoal, setDefinitionGoal] = useState(false);
  const [savingGoal, setSavingGoal] = useState(false);

  const read = ebookSaved.filter(
    (ebook) => ebook.progress === 100
  );

  const validation = goal?.number > 0;

  const limitNumber = (signal) => {
    setGoalDraft((prev) => {
      if (signal) {
        return prev + 1;
      }

      return Math.max(0, prev - 1);
    });
  };


  const openGoalEditor = () => {
    setGoalDraft(goal?.number || 0);
    setDefinitionGoal(true);
  };


  const cancelGoalEditor = () => {
    setGoalDraft(goal?.number || 0);
    setDefinitionGoal(false);
  };


const postNumber = async () => {
  if (savingGoal) return;

  setSavingGoal(true);

  try {
    const response = await saveGoal(paramsId, goalDraft);

    if (!response.ok) {
      throw new Error("Erro ao salvar a meta de leitura.");
    }

    const data = await response.json();

    // Atualiza a meta do perfil atual
    setGoal(data);

    // Atualiza também a meta do usuário logado,
    // mas somente se a meta salva for dele
    if (data.userId === user.id) {
      setGoalUser(data);
    }

    setDefinitionGoal(false);

    return data;
  } catch (error) {
    console.error(error);

    alert(
      "Não foi possível salvar a meta de leitura. Tente novamente mais tarde."
    );
  } finally {
    setSavingGoal(false);
  }
}

  useEffect(() => {
    postNumberGet(paramsId);
    userUP();
  }, [paramsId]);

  const userProfile = usersList.find(
    (u) => u.id === paramsId
  );

  return (
    <Div className="flex items-start">
      <div className="flex gap-1 items-center">
        <div className="text-wine">
          <Circle />
        </div>

        <span className="font-fraunce text-xl">
          Ritmo de Leitura
        </span>
      </div>

      {definitionGoal ? (
        <Info className="rounded-2xl">
          <div className="p-3 sm:p-4 w-full">
            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-col items-start w-full">
                <span>
                  Meta de leitura para {new Date().getFullYear()}
                </span>

                {read.length === 0 ? (
                  <span className="text-gray text-sm">
                    Quantos livros você quer ler este ano?
                  </span>
                ) : (
                  <span className="text-gray text-sm">
                    Quantos livros você quer ler este ano?
                    Você já leu {read.length}.
                  </span>
                )}
              </div>

              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="border rounded-full border-wine w-20 sm:w-30 bg-primary sm:px-5 py-1 flex items-center justify-evenly sm:justify-between gap-1 text-gray">
                    <button
                      type="button"
                      onClick={() => limitNumber(false)}
                      disabled={goalDraft <= 0 || savingGoal}
                      className="hover:text-wine cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <Less />
                    </button>

                    <span className="font-fraunce text-xl text-gray">
                      {goalDraft}
                    </span>

                    <button
                      type="button"
                      onClick={() => limitNumber(true)}
                      disabled={savingGoal}
                      className="hover:text-wine cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <More />
                    </button>
                  </div>

                  <span className="text-gray hidden sm:block">
                    livros
                  </span>
                </div>

                <div className="flex items-center sm:gap-2 gap-0">
                  <button
                    type="button"
                    className="px-4 py-1 rounded-2xl text-gray cursor-pointer hover:bg-gray/30 transition duration-400"
                    onClick={cancelGoalEditor}
                    disabled={savingGoal}
                  >
                    Cancelar
                  </button>

                  <button
                    type="button"
                    className="px-4 py-4 sm:py-1 rounded-2xl bg-wine/90 text-white cursor-pointer hover:bg-wine flex gap-2 items-center transition duration-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={postNumber}
                    disabled={savingGoal}
                  >
                    <Check />

                    <span className="hidden sm:block">
                      {savingGoal ? "Salvando..." : "Salvar"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Info>
      ) : (
        <Info className="flex flex-col p-2 sm:p-5 rounded-2xl">
          <div className="w-full flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="flex items-start">
                {progressAllEbooks === 100 ? (
                  <span className="text-lg">
                    {paramsId !== user.id
                      ? `${userProfile?.name} bateu sua meta! 🎉`
                      : "Meta concluída com sucesso!!! 🥳🎉"}
                  </span>
                ) : user.id !== paramsId ? (
                  <p className="text-gray text-xs sm:text-lg">
                    {userProfile?.name} está concluindo
                    <span className="pl-1">
                      {ebookSaved?.length}
                    </span>

                    <span className="text-gray pl-1">
                      de {validation ? goal?.number : 0} livros em{" "}
                      {new Date().getFullYear()}
                    </span>
                  </p>
                ) : goal?.number > 0 ? (
                  <span className="text-gray text-lg">
                    <strong className="font-fraunce text-2xl mr-1">
                      {ebookSaved?.length}
                    </strong>

                    de {goal.number} em{" "}
                    {new Date().getFullYear()}
                  </span>
                ) : (
                  <span className="text-md sm:text-lg">
                    {user.id === paramsId
                      ? "Que tal fazer uma meta?"
                      : `${userProfile?.name} ainda não possui uma meta`}
                  </span>
                )}
              </div>

              {user.id === paramsId && (
                <button
                  type="button"
                  onClick={openGoalEditor}
                  className="flex gap-2 py-4 sm:py-2 px-4 bg-primary hover:bg-gray/40 rounded-2xl items-center transition duration-400 cursor-pointer"
                >
                  <Pencil />

                  <span className="hidden sm:block">
                    {progressAllEbooks === 100
                      ? "Dobrar a meta!"
                      : progressAllEbooks < 100 &&
                          ebookSaved.length > 0
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
                    progressAllEbooks === 100
                      ? "bg-green-700"
                      : "bg-wine"
                  }`}
                  style={{
                    width: `${progressAllEbooks}%`,
                  }}
                />
              </div>
            </div>

            <div className="w-full flex justify-end">
              <span className="text-wine w-fit">
                {validation
                  ? progressAllEbooks.toFixed(0)
                  : 0}
                %
              </span>
            </div>
          </div>
        </Info>
      )}
    </Div>
  );
}
