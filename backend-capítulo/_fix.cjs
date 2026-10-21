const fs = require("fs");
const p = "c:/Users/Medeiros/Desktop/backend-capítulo/server.js";
const L = fs.readFileSync(p, "utf8").split("\n");
const start = 1665; // linha 1666 (0-based)
const end = 1700; // até linha 1700 exclusiva (0-based), i.e. linhas 1666-1700
const novo = [
  "// Associação dinâmica: todos os usuários pré-definidos consomem TODO o banco",
  '// de imagens disponível na pasta "imagens", distribuídas em ordem (com ciclo',
  "// quando houver mais usuários do que imagens). Nada é hardcoded aqui — se uma",
  "// nova imagem for adicionada à pasta, ela passa a ser usada automaticamente.",
  "const arquivosImagens = fs.existsSync(pastaImagens)",
  "  ? fs",
  "      .readdirSync(pastaImagens)",
  "      .filter((arquivo) => /\\.(jpe?g|png|gif|webp|bmp|svg)$/i.test(arquivo))",
  "  : [];",
  "",
  "const idsUsuariosPredefinidos = Array.from({ length: 30 }, (_, i) =>",
  "  String(1729000000001 + i),",
  ");",
  "",
  "const imagensPorUsuario = Object.fromEntries(",
  "  idsUsuariosPredefinidos.map((id, i) => [",
  "    id,",
  "    arquivosImagens.length > 0",
  "      ? arquivosImagens[i % arquivosImagens.length]",
  "      : null,",
  "  ]),",
  ");",
];
L.splice(start, end - start, ...novo);
fs.writeFileSync(p, L.join("\n"), "utf8");
console.log("bloco substituído");
