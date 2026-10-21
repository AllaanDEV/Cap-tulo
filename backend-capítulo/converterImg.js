import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pastaImagens = path.join(__dirname, "imagens");

const arquivos = fs
  .readdirSync(pastaImagens)
  .filter((arquivo) => /\.(png|jpe?g|webp|gif)$/i.test(arquivo))
  .sort();

const ids = Array.from(
  { length: 30 },
  (_, index) => `172900000${String(index + 1).padStart(4, "0")}`,
);

const imagensPorUsuario = Object.fromEntries(
  ids.map((id, index) => [
    id,
    arquivos.length > 0 ? arquivos[index % arquivos.length] : null,
  ]),
);

console.log(
  "const imagensPorUsuario = " +
    JSON.stringify(imagensPorUsuario, null, 2) +
    ";",
);