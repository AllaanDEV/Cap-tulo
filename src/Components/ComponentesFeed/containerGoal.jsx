import { useContext } from "react";
import { Circle } from "../svgCode";
import { Info } from "./info";
import AppContext from "../context";
import { Progress } from "../ComponentsPerfil/progress";
import { Link } from "react-router";
import { useRequisicoes } from "../context/hooks/useRequisicoes";

export function ContainerGoal() {
  const { goal, ebookSaved, progressAllEbooks } = useContext(AppContext);

  const { user } = useRequisicoes({});

  const difference =
    goal?.number <= ebookSaved?.length ? 0 : goal?.number - ebookSaved?.length;

  const textDiference =
    difference <= 5
      ? "só mais"
      : difference <= 10
        ? "apenas"
        : difference <= 20 && "cerca";

  return (
    <Info className="flex flex-col gap-1 bg-primary rounded-lg p-3 items-start">
      <div className="flex gap-1 items-center text-wine">
        <Circle></Circle>
        <p>Meta de leitura {new Date().getFullYear()}</p>
      </div>
      {goal?.number > 0 ? (
        <>
          <p className="text-gray text-sm">
            {ebookSaved.length} de {goal.number} livros
          </p>
          <Progress
            goal={progressAllEbooks.toFixed()}
            className="w-full"
          ></Progress>
          <span className="text-gray text-xs">
            {difference === 0 && "Parabêns!🎉"}

            {difference !== 0 &&
              ` Faltam ${textDiference} ${difference} livros para a conclusão
                ${difference <= 5 && "🎉"}`}
          </span>
        </>
      ) : (
        <Link
          className="text-gray hover:bg-gray/30 py-1 px-3 rounded-2xl flex items-center  transition duration-400"
          to={`/perfil/${user?.id}`}
        >
          Faça uma meta!
        </Link>
      )}
    </Info>
  );
}
