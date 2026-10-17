import { useContext, useEffect } from "react";
import { Circle } from "../svgCode";
import { Info } from "./info";
import AppContext from "../context";
import { Progress } from "../ComponentsPerfil/progress";
import { Link } from "react-router";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

export function ContainerGoal() {
  const { ebookSaved, progressAllEbooks, goalUser, editRequisicao } =
    useContext(AppContext);

  const { user, goalUserLogged } = useRequisicoes({});

  // Busca somente a meta do usuário logado e recarrega quando
  // qualquer requisição de atualização acontece (ex.: salvar livro
  // ou alterar a meta em outra página), evitando exibir 0 desatualizado.
  useEffect(() => {
    if (!user?.id) return;

    goalUserLogged(user.id);
  }, [user?.id, editRequisicao, goalUserLogged]);

  const booksRead =
    ebookSaved?.filter((ebook) => ebook.progress === 100).length ?? 0;

  // Evita exibir temporariamente a meta de outro usuário
  const goalNumber = goalUser?.userId === user?.id ? goalUser.number : 0;

  const difference = Math.max(0, goalNumber - booksRead);

  const textDifference =
    difference <= 5
      ? "mais"
      : difference <= 10
        ? "apenas"
        : difference <= 20
          ? "cerca de"
          : "";

  return (
    <Info className="flex flex-col gap-1 bg-primary rounded-lg p-3 items-start">
      <div className="flex gap-1 items-center text-wine">
        <Circle />
        <p>Meta de leitura {new Date().getFullYear()}</p>
      </div>

      {goalNumber > 0 ? (
        <>
          <p className="text-gray text-sm">
            {booksRead} de {goalNumber} livros
          </p>

          <Progress goal={progressAllEbooks.toFixed()} className="w-full" />

          <span className="text-gray text-xs">
            {difference === 0 ? (
              "Parabéns! Você atingiu sua meta! 🎉"
            ) : (
              <>
                Faltam {textDifference && `${textDifference} `}
                {difference} {difference === 1 ? "livro" : "livros"} para
                concluir sua meta
                {difference <= 5 && " 🎉"}
              </>
            )}
          </span>
        </>
      ) : (
        <Link
          className="text-gray hover:bg-gray/30 py-1 px-3 rounded-2xl flex items-center transition duration-400"
          to={`/perfil/${user?.id}`}
        >
          Faça uma meta!
        </Link>
      )}
    </Info>
  );
}
