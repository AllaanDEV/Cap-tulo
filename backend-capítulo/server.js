import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import mime from "mime-types";

import { feedbackEbooks } from "./booksApi.js";
import booksRouter from "./booksApi.js";
import gifsRouter from "./gifsApi.js";
import emojisRouter from "./emojisApi.js";

import express from "express";
import cors from "cors";

import jwt from "jsonwebtoken";

import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(cors());
app.use(express.json());
app.use("/api/books", booksRouter);
app.use("/api/gifs", gifsRouter);
app.use("/api/emojis", emojisRouter);

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API do Capítulo",
      version: "1.0.0",
      description: "Documentação da API",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./server.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// 2. As suas rotas (GET, POST, etc.) ficam APÓS a linha do /api-docs
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// Banco de dados em memória (simulação)

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Retorna todos os posts
 *     description: Lista todos os posts cadastrados no sistema.
 *     responses:
 *       200:
 *         description: Lista de posts retornada com sucesso.
 */

let users = [
  {
    id: "1729000000001",
    name: "Gabriel Oliveira",
    email: "gabriel.oliveira@example.com",
    userName: "gabriel.oliveira",
    password: "Gabriel#7mQ29",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000002",
    name: "Gatinho Cósmico",
    email: "gatinho.cosmico@example.com",
    userName: "gatinhocosmico",
    password: "Cosmico@4Lp82",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000003",
    name: "Ana Clara Souza",
    email: "ana.clara@example.com",
    userName: "anaclara_",
    password: "AnaClara!9Rv31",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000004",
    name: "Café com Leite",
    email: "cafe.com.leite@example.com",
    userName: "cafecomleite",
    password: "CafeLeite#6Xk53",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000005",
    name: "Lucas Martins",
    email: "lucas.martins@example.com",
    userName: "lucas.martins07",
    password: "LucasM@8Tz41",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000006",
    name: "Lua de Saturno",
    email: "lua.saturno@example.com",
    userName: "luadesaturno",
    password: "Saturno!3Wn67",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000007",
    name: "Beatriz Costa",
    email: "beatriz.costa@example.com",
    userName: "bia.costaa",
    password: "Beatriz#5Jq92",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000008",
    name: "Pudim",
    email: "pudim@example.com",
    userName: "pudim.exe",
    password: "Pudim@7Nk24",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000009",
    name: "Pedro Henrique Lima",
    email: "pedro.lima@example.com",
    userName: "pedrohlima",
    password: "PedroH!2Yv86",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000010",
    name: "Fantasma Online",
    email: "fantasma.online@example.com",
    userName: "fantasmaonline",
    password: "Fantasma#4Br73",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000011",
    name: "Julia Ferreira",
    email: "julia.ferreira@example.com",
    userName: "julia.ferreira",
    password: "Julia@9Hx35",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000012",
    name: "Batata Cósmica",
    email: "batata.cosmica@example.com",
    userName: "batatacosmica",
    password: "Batata!6Mf81",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000013",
    name: "Matheus Santos",
    email: "matheus.santos@example.com",
    userName: "matheuss_17",
    password: "Matheus#3Qw57",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000014",
    name: "Nuvem Cinza",
    email: "nuvem.cinza@example.com",
    userName: "nuvemcinza",
    password: "Nuvem@8Dz42",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000015",
    name: "Larissa Almeida",
    email: "larissa.almeida@example.com",
    userName: "lari.almeida",
    password: "Larissa!5Pc96",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000016",
    name: "Pixel Perdido",
    email: "pixel.perdido@example.com",
    userName: "pixelperdido",
    password: "Pixel#2Vk74",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000017",
    name: "João Pedro Ribeiro",
    email: "joao.ribeiro@example.com",
    userName: "jpribeiro",
    password: "JoaoPedro@7Ls38",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000018",
    name: "Capivara Zen",
    email: "capivarazen@example.com",
    userName: "capivarazen",
    password: "Capivara!4Gn62",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000019",
    name: "Maria Eduarda Silva",
    email: "maria.eduarda@example.com",
    userName: "duda.silva",
    password: "Duda#8Rt15",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000020",
    name: "Erro 404",
    email: "erro404@example.com",
    userName: "erro404",
    password: "Erro404@6Zm29",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000021",
    name: "Rafael Carvalho",
    email: "rafael.carvalho@example.com",
    userName: "rafa.carvalho",
    password: "Rafael!3Bx87",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000022",
    name: "Morcego Noturno",
    email: "morcego.noturno@example.com",
    userName: "morcegonoturno",
    password: "Morcego#9Wk46",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000023",
    name: "Isabela Rodrigues",
    email: "isabela.rodrigues@example.com",
    userName: "isabela.rodrigues",
    password: "Isabela@2Fy71",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000024",
    name: "Biscoito Recheado",
    email: "biscoitorecheado@example.com",
    userName: "biscoitorecheado",
    password: "Biscoito!7Hp34",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000025",
    name: "Vitor Mendes",
    email: "vitor.mendes@example.com",
    userName: "vitin.mendes",
    password: "Vitor#5Nc82",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000026",
    name: "Robô de Estimação",
    email: "robo.estimacao@example.com",
    userName: "robozinho.exe",
    password: "Robo@4Jx69",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000027",
    name: "Manuela Gomes",
    email: "manuela.gomes@example.com",
    userName: "manu.gomes",
    password: "Manuela!8Kp23",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000028",
    name: "Sapo Filosófico",
    email: "sapo.filosofico@example.com",
    userName: "sapofilosofico",
    password: "Sapo#6Vz51",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000029",
    name: "Enzo Barros",
    email: "enzo.barros@example.com",
    userName: "enzobarros_",
    password: "Enzo@3Lm94",
    followersArray: [],
    followersNumber: 0,
  },
  {
    id: "1729000000030",
    name: "Wi-Fi do Vizinho",
    email: "wifi.vizinho@example.com",
    userName: "wifidovizinho",
    password: "WiFi!7Qx26",
    followersArray: [],
    followersNumber: 0,
  },
];

const postsIniciais = [
  {
    author: "Rafael Carvalho",
    authorId: "1729000000021",
    comments: [
      {
        userIndex: 2,
        text: "A melhor sensação é quando o livro finalmente chega! ??",
      },
      {
        userIndex: 7,
        text: "A edição parece bonita demais! Você já vai começar a ler?",
      },
      {
        userIndex: 14,
        text: "Mais um para a pilha de livros não lidos KKKKK ??",
      },
    ],
    content: "<p>Chegou agora essa maravilha aqui</p>",
    createdAt: "2026-10-17T14:01:00.822Z",
    id: "1792245660822",
    likes: 43,
    midia: [
      "data:image/jpeg;base64,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z0SEhSAJmTK7ueE6+iery42GptIMrYQAiSolcL9LyTYaz0lyMmkuRYAJMzrWvPvQVqpJZGgyAAW53OUzroFa0kZuWkWQCwCyuNNlNXTMgioALACuROoNrJm24AALAC55k60NUmRWaSgAAZ5yutzpOiWRBcCqAAGecO0tZ6lmbIkAqgAGOdmt2aToESJAC1KAGeWs72WOgqGJAAKoBjKukKsltqVMIAAaBykuti51IL0FjEuQANByyXoLNSDfTM0JZc5yANByyOpTWYOu8KhSTztWgWmOY6hd4g9EzQhWfLlrr1kkLWOY6lN5zZrtmLFEvn425dOu7JBjmOoXeUnWxbEKnkz36zjjO/RbTE4Suoa1kz6MyypYXn5r03dTlym/Rsb5Z546lnSZsvQSkss4Y6W7HDkduuyWziHXObnpvNllZ1Lzzm8b6aPJF7dqk04h2zizrFli51HHGOmufox1l48XXuVLOQd887do1myLM8s413uePpw6eXfojQl4h1zmdVgWSOOcp17Rnnrv5+9zbVjiWauHaVJqMxOOUa76qNLy4mt625Fq5nbLUWMHFzVWstdelnlQl6dua0Y6dMo1csWcZhYsL6OlcrLccs3ulGe9xSoynLnAK16i+bHTprXPjn18sa1E7pLQxeEwgNztuteVrpu5xy9PGWydOuRbCPPglyus9O6avHFz6Lx59OnJUve40lms2OHMawNejeVuU4dd+aejORb3yotZk8+RqdObv0ERqTnyejmljrsSlZuPPBdZejVCKli3gSXtrNLAnPjJXTM77olCUTkM67wi2TUcONWW9ujeYJZZUriDV2Sk1HmwqW99FAAjkLz46106aoh5ZdS53z9HQJUlqWb84vnVJrpvWtZz5buZ6XOfVZRFEo4ynntCydNdOfDV2xrU9CUWZtBrzl5c7RRGbUdNcl32u8iUlTV85fM0BUAjfTll176rKwBeA4KAAEmtSTt6FiEoOK442hSBYEDp33WTWQjkc+egUgdedyAl3velukSTkcZqA1nVwmm7mZsCWXXbe4sy5M8dgizpmyQtm8mQC6320zeF442ATclrKLNavIAC9d3nfO0goE1SRlbAAC66Z41YFADRJAAAu98c6lIUAApEABW9+dqKIoxdAErpzuQCrtwugJbHBpvQIS1ACrvHPVAJXB0vl69bYKgAU1rhqglik55s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",
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wCEAAQGBgkHCQkJCQkLCQoJCwsLCwsLCw0KDAsMCg0NDQ0ODg0NDQ0MEA8QDA0OEBAQEA4PEhISDxIRERIUEhQSEg4BBAUFCAYIBwgIBwkHCAcJCAgHBwgICgcIBwgHCgoJCAkJCAkKCQkJBwkJCQoKCwsKCgoICQgKCgoKCg8QDw8Pfv/CABEIA6EC4AMBIgACEQEDEQH/xADkAAABBAMBAQAAAAAAAAAAAAAAAQIDBAUGBwgJAQEBAQEAAAAAAAAAAAAAAAAAAQIDEAABAwQCAgIDAAMBAQAAAAABAAIDBAUQEQYgBxIIExQwQBUWFxhQEQACAgMBAQEAAgMBAAAAAAABEQAQIDBAAlASYLAhcJCAEgABAgIECgcGBAYCAwEAAAABAAIDERASITEEICIwQVFhcXKBEyMyQFCRsSRCUqHB0RRTgvAFM0NgYnOS4aLC8YATAAEDAgQGAgMBAQEAAAAAAAEAESExQRAgUWEwcYGRofCxwUDR4fFQYP/aAAgBAQAAAADzLW1W7DnslT1/Zso7XqLIs9U03FgF/ZsxksfJXx+t0yq2FuTyCVaclhzY0hhqSvkyN1Hvs2XOmct7curgIwBlZdb4LLDUme0N0rafHJtGXo6xksrs9PWcu1+qaUoAmT7Hr89LFa3WrMbC3JTXUvR0HwRK/Fvpy3ospMPfdmWSYff27rIIMQBrNS8/2qMVyVgbtW0rFZHcMtV1bDzSulsWcdrTARRX5ve9br4mhXRqQzWcjO5VikQgXWr9R3QdJzUY+xZkdJZZLd3PrypUARGiaZ5bmSO5ZzaG1t0rX83ueUg1XWJCRzbOIrSKBarpNkb1ClAxjUY7J5NyqyramK0Wt2Ycj1HluZjJbMzpLUsU9zderylVEAYJo/l5USDIbaJt7NG1vN7rlYNU05zpYpyo1UcOnWqE0rK7YXqEudkkG4jLyx18Tinrtd7X7MizzyultoWbe4dceDYYwGGi+YmMlZc2lTbWaTrGa3nKwarpI5RUQGOe90KCI5zIXKOa7IZpEXB5uaKrhcY6fpmopI581iclsBZubv1cASqgDNB8zo12Sh2UTbWaVq+a33KVtZ0GQeI16qrUka1ERBWq5s7GK7O22uwmYVuOwLHT9V57suJWy59pJZhbVreusDAImNaN0Pi8VKKObIq3cK2p6dmehZiprnPwVzGyyWHuoMVGjICSZS3NWiEu5p6YTMRpg8Zb3PZrOI2TC6/ndYsTpLMPuv6B1VEaAJXROf8AHo1ajQNup6fp+X3CZ2J0+JR8bbM1iRX4+FGwI1Z5C3eZDUZFb2FVw+ViZr+d3Tb8jrkmSweO2HHaZYe5733H771hojRAIYue8hYEbQN0o6RqDkVEc9BzWS3bbgSnXhjQfZFt5KCpRYt7Po3G3Y63TH4boJmnY3E0tiuLoNCkNkuyb91dgA0aMh53x8QSJRN8p8/08JXQK+MfJFJLPclYlWGtCE0z2PkYyqGT2NzMXLQz+w54qZTTsHTigt52bY8bTxU2Vvz731eIARqBDznkDAI3I3fKvPNPCZ9ZZIhZyOwqW3NhbXgCWcVyhDWS9nLDKyOuZ+LdK3OGWNolpXNe1vNVLdK9Ptbt96s2IBGAN5nySIBoR7JZ0XU4UmdXWWJCSZrLCsRypWaD7AOc1sLWZGV9/KarlOiV9f6PhdLxW6egbOj1sdq93mlM2u9an6J1ORKaCCNDlvKmRgAmwx6ZrlMV8bp0aiSSDWvCJZZ6Ar5FUbHCqZ/O18Tlcfe2zCy7pqWe3TJdOxeN2FmoaroWgwZzsGrVemdRCFGxANTlfMGRNVgGBnxEVGIBZkcrYppHrHCrH7TSwMr1WJykKMbnc5DTp9CyqYanu2B7DvGRta9bz2BxWBw2r8og23LQdJ6gAR1QBvJ+YjWLAoaHbVkNNAkshC5I5FeA25tWCwUkjpbSsjqxxx5vIY+pNuO/xUtJ7li+m7JcfhN3j5thcy3UtA5ludql1bqCIEdVBRvKuXoMSBQ53emayg5hlacTlTJVImIqFzb269hJbCvsvgqQMdG4R2Qy9+vmsxLunX8/Zrt3vHcYr77R1bTub53K6Z13paowREhiE5LzaMEY2M5zJcetGSw91eOsLcv16sTH29puJqWGeoTPaQMeCNdm7cLdg6vDse5bjdQy1fleX2Snq+q6VT2XinojpwMQCCAbx/n0QAyNnPUktvqi5BtVlaMnyT1HPls7PhNOqKqFpUGOdGixT73Sxmb2Hr13Z81dkW1MypjpMXitc1fXc5yT0B0sGjQhri8Y0KNABjOexst2K00Np0LKyNMhdiWRZMpntW1VjnPc5yPRoVwyfXMFpHZr+8bO3D5fKZvZY8TLUqYLE4zlWuZfWe9dGaAjBKjU4/z4Y1AG8/ZAy5I5jpWV4I1bbtOe9LGZyuD1OBHWHqA1qRxtXdpd35P327t+Ur5XF6c/o/QUkxmOxmvY3nWhYWx6E6MgAxBKhxnQRgsbmpzxy0S8oyaKJjGo67I6SSzl7dHTkbHPI5Qa2OF80G54nddR6X0zZYs87GVYNp2K1jta57rbr+q6PruU9HdHAEagJDxTQQBGNOY2FdTmsxxxSykddHTvne+e1Jk9OhfCkg4EjhS1K2xLJt209dymZh5PrezbHlt2y+hYS1lMJzHA6Zhtp9F70AMEAh4jo7WgQhy+29IYLb1ZWujKjbEzohVy2zZXmDFrsHSPjjYLcek3oHQzYuqZba8Vio8hXXLZ/kWQ1i5sep8x0eHoPctzABGARcZ01tVGkDDl7ppErtuSpWfKlNj32lJrNrI7bzCsyOGR8RGqsdbeM9o1fM3R+pZHcZaNrH0LVfL6HneW15ts4rpN3ee07m0AEajGecudyyLLLK53MwmsNqPutSrdSrCFuRJrT89sXN68+PhkmRYomk1hxF7YznmbYt/zm22qskpi4clpeyw4rGScH0HZdu7TuUIADEjZ5g5cNQBW1AnbZStNMlOy11RCxaSSWa3u3OqtuLGxvSNyq228G+oehcai6HsOazDopGa6/N6JvEDoNc4Nou55Ht24VQAGtIfL/LxBUEWgAs0yVpkkiSasxZ51Vchkc5plW2jYWMWXMa/VvAJ130nqfHup7Hntm2vQWP1TLZXRN+grYrD8D0zdcl27coq4ADUh8uczaAAY8BbI6skqj5YoI5bDx1+7ltapWmyMcmRuVNRktOVEPQPcPMnZc7sGds6+/A2rGa1LfH4rXtL4Thd2udw21KoAI1E8p84aAAY8AlSdteedK86MrufaVbGRymu0bCT2LVy0aLUnsOfGJtHUtZ7tnMhZxc17B4OTctF23c6Or804qm1T922kijYAI2Pyfz5oABjwAWy6sksqKMgc26pPay+pS2WyWZ7F7X8C+d8jmLHsfSsR33ZLmm6jmnJjrur0ey552C47xrZMvY7vtCCRtiAI/IeigABjwAJZ2QJYI1dXC5Is9ixgZXvsWbVivrLiQcmRpQ2exav3zesngdRxtVguoM33Y8nW4byrfMra7zsAAysAQ+QtIAADHgAEz0ge5BYQlsOfPXYr3TWJ5teglV6q+ZIYu4ab1bqWeXGO0OtZyeCwkljoGI4LpW/2rveNjagMrADfHWmAABjwABXKoARoPWZGzPBJZZcbVe+Z0jixK7Hd3wMfaNpWa9Xx2IxmEx21zb9y7zVNv0t7vWfGAysAN8bagAAGPABSRWOAFY1B0z5XNGiOZXmjS2Pke+1Xo+jqGhdQ3nHZ7Z8G247EYyxSk41xvbd3fkO9Z1GAysAHjHUwAAx4KrQcqPFkhUa8ncIKCpFWWZjrY+Z5BC30lsfIcZ2HC7TueZ1GrksVLZ5VU4pT3PdZbves2jASuwBPFetAABjwe1BXqAio50Ow2cGg1BR7UiZMkiyxySVwO69Y1jiu2v3PoWVx1Wjav6twXUtfn3Ldn2u/5lGOaJWaC+IsCAAGPBUBzlAdI9ZaW64nFINUVFAGogNfMwDdvVS6NwS9vnQ8vmYqdfG6fwvX4ru5bw5/oPKo1Wg2FrZPDmEAADHg8ag58ipJNNBYxNhwkkKj1AWSNrUBlyICX2lnsfonDbPSeiSSRml8y5Sk9jcd1e70FlAaiDHpVPDGLAADHgr2tJZHyWoiVxi7W1X8HXp0FcoCyxI1oJkaiA70N3JKOucI1bqG2TpkOVclxr8g7c9zSf0DmYmDWgNgb4OpgABjwciPS7GPWPIbXisTV2rD5DDtrtUAFsQkbAXI1o0H7964nrUcdoXIrWbk1PS8fLcyEW47rJ2fqmLRzcMxXsjRnlLSMGAAU1WaNsjcriIRZZposjjclbbThiAEcBOhVQS3m8C1J5vZ+1Vsbj6sOB1HnBoMF7MSM3XcO5e1MfrXJ8FCwe+rGMxvmTkoANbs3fYtQx2B1DOZXRMahkci4iwy2xEUQEFSaZSpEEu96UjXT9t9Ex4vGMhNd0TWOaT2srTk3bcPRPpB2B5LRxhNHerROZiPLfMwAqxZ7uHZosJTxGE0XmsEK5Gi11dEHWHOcAACzzw1GknUeauHJZ9vX8fhmT09Z1zkutbzjExku67v3b1Hc4br8WCgdYgbNfZh/KfP2oDKjbzbW2ZW0kOP0yvPtUOPqiI582Px0yqAABbfTY5nQ9MaAvePQlDAMt4zB6nwCKS/l8ZPuO7db9R2+Ha05uHylLNY/JYi5T8j6WxAr1zIMajJb88zkTJ7bh5rDkyeRs8z01zHLPOxiK5mZ6N0XrG28+878sjQEn9wW8HjMnSr8q4/hbN7MY2fbtz6z3PPco5RlMlzrtnLaU97c5Kfj/VGIFOM2mCpAxrXT7Lv+Y1fRc1ehx1Z0kWDqo6eRQAud69P7JfutjxvkHzmoJH3L0fgdcy8lPlGjc7mW66zum39U6rltD06vmNQ33QbuMzGx5HHeNNbApMD1T2LF8X49jKWcu+4+64VrmMp6J4AwrUVX2XCpIbD3j0L1HR8ja33bYdd4788taAZL7Ryug7Hndc51juHRrAzYty3bpXRM3hGRo10FzFT0beH8S4tErQgfUX1bifNvhrmdW3X9EfTHOOGsZoPyR1YEksyuUs9v9Fdg2vLVuP43d+wZWjqnI/CXLFBE2j2RpOb2/neuWOOc2nt4fY903bo2+5eiIlbSMhttVAwHiCrHWiAPUG14fefOPOqeax3o33vdlmVuP1H5d64sk1hyBnvoX3HNC2cdxHWuidbsUNK5X4j5g4Brds9LzdD0HDy6V52mfUTb+s9F3POVwj8t9A1HL9wQdq/iOpURAH/AEI9iReT/n7WjvTWdszt/EzRYKhjI5pZK9pJbXrz1psFx0VyLkXMs70uxrOtcm808wjAaxnpfbN9wNBuk+esW+KtP3fou5bZCEXAdcxfedyQl0jxHXs2YK7Wv99dM5P5k5jKhVuw2r8dizHI58zp53ZTqO79+6ZsVuwk8+l8i02pHjsHpOw+OJABs3qfNbG1lLSeM89knxS9R73sG3KFbyts1HYu1NH898VbH1jDb3x7SkitKyFZY4o7BVdLkss+SWW3WzEm49gzHSeiZLa79wlta5z/AJlp2iY+jc7n5286VEBmyekc3lLBjtS0HiET2Vd+9H7NsrwbBzTZdmjYHNvG3X8Hju42vK6Rxo9FtRVUniaS7FZntTI7Y06t2Gbden5Yy8tqdXM0PlmhaDhOa9u9F5rQuA+dtQVsW3d8322tLUtV4/pBcpb16C3zYVAQZFCgvLfIG+Uchkti4gkbGA63HVRZHNyGdmksPTZk7l6CxvQ+gukV4+wqLBxrjXL9HZ6n7Llq1jHeEfObI1Z6m6cuIwesaBya7Rrbr27quZwsc+RpsWLIoreReUOs6VkOlcXxLoUgB16KqhNK/Oz2pZqm2ydK9P5DN9H2FIGFdZpHI3Dcl8pan3D0BtVixWNT+XetU5Y959hmFx+q8v5K60u1+id1zlSSCWWsx9ew5vFPL+7blHpeoIVyNAyEdRCSW5mpbU+OzexZvuvZ8bvO3bVJAph0s23PbT5r5+6Z0jLusWK9fB+CfPVWK4ezdhx2N03zVTSPZsx6O2rM49CO/A2NlqVnC/NKNkR7W1po4gvx1AdcyF+ayptzO2b32Da6+65a/WlsYKlduyWFqYPVtneyu6zBDi/LHh9jJX+gu34SjxjiUqQbPn/Q2y7DrSLJBebWkt2WcC83TEjIkay5VjC4ysDrGYyck9W7uNf0h0budnAZrNZJ7rdLVrt29ZdDS1Bb9nER3UbS4p85K4SdN9JvwHkvCPWGXo/W+jbK+IY5kTRFg88+fo3zEUMaZGiwLtaMH5a9fmiXNZ7Ken/Qe1uxNXJ5C/PK3ULN3I5GWvWx2l5GfRrectOq6j8z9NRzMr7Rk5N5uI4o5+ldw3PYZWNa5arRCl594A2R6V4ml+OqhdpoFvO2pn4x2+u3f1j17ZbNHB258jendg9c2TJXbpXoYLWb2hZTa8jbg07508fhVbfX/Q/kXSFqMR28b11vfkERGwMRiaR5y0VznNpICvYhaqgZLYpJsHayG6Veo+nOrbDlEw+tXecYrIZizrHUdvyN17quB0rGVNgzd6d2u+CvMdQlsdP9ReDI6jZIjO9D2b0E5GKhHCCcR82K9ViqAABNCBb2i5gnVt3zFXsfdO2Z3MzS61zbivQduwu6ZS7fzl646vg9Q0qXfrSLPhPA3mqOKSXcvRvjtac8SJmehbX6DUjAigBOJebyRo2q0JZqqDmgWt0w9WwbpkIOt9B9K7Xby1mLjeY5NPn+m9AqahmczcjxuIwmOp7g+jhLWG+a/PWQQzz7rojGK1zF65tHoRqAEUAJwzzqK1Y4EBXNQADMZfAZ3DT7Ls9XplP1T26/k8hNy/nOD1XpPpG7Br+tbHfo4igpR2F+Ir6pxPwsjYYUkkloq5jmnRuid+aAEUAJwbz0+NiwtHDQAAFyGThx0ma3ld11iz7737L5K7jvNvKcv612jILV0TU802CTIR67uN/Ga1zH54YSyNICfbtQqPY5p0XpPemgBBEB594GETIxZUiAAAH5su2tf3vK5zE8k7T9B94ymVuYDhOa6llclOY7m/H8xtWxtxOodK21eReOfMElwQge/M68x7Vadm3LtqgETYgPPnBEK7UWVxXAAAC1nm0693oFHJcxx3dPoBvuXyWQj5Pb2nL25odf57yXBbpDRi6d0O9x35iYB1mQRkm6aXUR7Vabb3br71AhWMa7ztwKRkCE0yJVAAAAymUa2jsi4yjhndj989K2DJ5GHim057KS09V1XUvD/N/Tu6453qnKcO+bDXyWBqwdD0io1Gua276G6pi4nJFUrviSvynl9OOMmVz2VgAAC1AzMZOhYg2PR0SF3TfdHb85eyOA4tvmdr6jz3WvOPEsNJ1bp3Hei9T4DyKy51pK4lpkcYPYx3QtehZKMgJiMc3X4xZ3QTupgAADmi55sGarQa+A/afdfoDO2cZxXiG3ahyjXtP1lEUBHNksPfMVx8jIxzZI2u6LqSpIRxpKjATAxD5lgnkogAAAA/PUcviVyM+DxwZf0p6Jm0nReGcrREAAAB9lZrcVZVngarmTQjeo6QDkawljQGYFg6VjJ5KYAAAAE+bmnbSqtrVBSREQaAAAADrT3XW1VSeFqz38dAL0TVByQASMQazBsHPiHzVgHTwNAAAW3ekGV8c0AAAAAAAH2Xvz2JhcyeEd6H4bjK4u245qpAAAJFg2kk0DZZ6QD7dchAAJbVWIAAAAAAAAAJZ5Fy9Gsr1iTIexvFSAZaYIEAACLAoOsQNllqAE8teMAA2DKVdcgAAAAAAAAALM4s+Tw7ZmxpsvafOKoGTs1MdfnVgORGw4RB9qor5agEsuw4zDhaqgblkKur48AAAAAAAAB1qRXJu2nQPc1EuUlQbZyWv1pMnlIBXsRkWDLNpMa+wtMCxZ2rC68F+ig/ebdLWcWAAAAAAAACzzPc52065SVzHUpJlBJFx8ZlMtCORj42YeG5cxqSRIwAsSx1gngB29rj8VhgAAAAAAcA0ksPfYHWZ8Mjo3UFtOBslvDRmXvtGDhrJNekcjUarSRhLLBGFiuE3TKePxmuAAAAAAOsSSpHEJJI+yDd30R0TCmltwNlr1mmYuIMc4bXp07ELSdZaD5YB742BcqIu4euINF4zoDAAAAAFllklnGsa4SVwJs2t00CiXHCMs16aLamuTscDamNtWaEssj2YmaJAADIUEN+9B09B0LTa4BK5IkBXudK8LTgAAAGxxIRVpbCiMnhqsJFfmkUaVqGTVIBLCYaaFAADLYpD0D6MwPIeVafTAdaUFAcsziuWXAAAARlcIIltKIx8teux6mUsg0q070ja45ljGTVWgAGVxaHW+s09S0LT6IFmR6qgEkyjK6WJAAAAFgruIoXWFEYZneNCwqBNl2gQVJ50a2FFjSq0AAyFBDbMpXpwYamElhznOAWZQhiRZZgAAAICNsEE9gEYW8m/W4lDLyoJFRtTBXYgNqMAALVUM9KNTE1QsSSArwfKyMI0JZwAAAIn1UjrS2FBCarYptAvXFGQ1pLaQTRuhYlNgABbqEufBrcVUJLD1BXgsjGiNQW0oAAAsccaNpTTuBGXcYrQB+XWMqxyXIY5xSm2iAAFymXcu1WFbGx2pFAVwoADWhZeAAAObCkRTmkcA3JYzNbjgNPhct+0wqMW3ATI8qNogAC5DHplrY5jW1IlHgAOcACMCaYAAAcyGxTSo6dwDd633sljhvGMRI6a+FRIrTFmiRqR0wABchj02G2LWihroAAAKKCDRXzPAAACuxq1HySAL6W6Boml+n/OPn1o/KBUSG3E+xAxCpEATwouVxjM5lRtSvVjcAAAAAABLMoAABVaFR0sgJe6RfniynKNVjEyUxVbE58s8EQlFAH2qjVymNZl80NqV6I4AAAAABEc6yKAABUQKizSAlrOVcOmSgxkKpbuleONs08tVpFVQCSaqP2LXzb7TbGExlZXAAAAPEaDUeSyPBqPAKiDK8krhH5CjTyudyepYuAbavLURGSSugCOq0Cw2EdmsObVbw8MEbRwAAACggDFcqyyjB4BUSGBJpnCZrDVMlnMZjsvhq5HPfkqokUz2ARx1wdaZEyW5jy/3luMp6ZrTVAAAAAAGDwdI6N7nKFRlJCxK9qy57WmS9A6hmPKUA2W++FqRTABWhQWy9sUdnJYVmR99bXW1LzvxVwAAAAAANa5wPnI2q6WN+MrhalFsbB0zG63MVamixAuRsV2pBM4ApMCeZ7Iop7uKbP687zW0XyJpzwAAAAAAa1XgqqKOlh2DTowtSDLHR+vbP5prRt1fHIDrN6BqQSSDXFJgW5EZEkmSw7JfQXoPHax4/ieAAAAAADWqrgAUWZlKFoTykOc3LNdV43gGYbXRRpYyNdqQPeKpjwkuI2Jjn5bD15uheiurYnwFXeAAAAAADWh6h9Jbfxvyj7Y3TNfJOaLEORCaYr5fc5Np6FBovC4BALN2JEico8MeE1pjrHsP2M/DeBPOMm0+zfoC75U+Zzcc3zMAAAAAGtC39sd28hfM76Q+zdd+GcuLRUCwpCs2TtWsXiWMQB9ySJyMcg8MeLcfGJnfuo7i/wAe8dNsHr30PR+bWrzfVTzv4tAAAAACMCT7Q9N8g/M/6De6Nd+GVSMAHPUiBVQEQfamlihVEBXhjyS06NIs7915ONfH/GOt+xs1tHnvkv0h9QeY+GeRta752DL6P5P6H6V3uj439q868aesehxbb5g84O+0PT/InzM+gfuvXvkx62e/zp5b9m9a8JaPs/vTou5fKv2v3Hk/zn9e+qYvnfypnqDv/Pe7+I/P4K8DHklpWBmfurJxH44vc30T9bnfN3k/10m8WeXOK/Qn2L8UN6+w3mv5Y/WP0Bp/EfTuL8f+1fnp5Y+2CfIThf2g6l5G+ZX0B926/wDDn6m+mWfDTT+2+k/ALj3f9C4vD20+vF8nc69mbV50+U/uX358mfPf2d6F8eOQivAx5NMAZv7pycU+N6qbJ9z5vmz5L+6Vj5z+JfRv1k498c8190XfHL2d7A518WfeGoax6t+fOtfcmb5teMvs/wBT8j/Mn397wwPw27R9fXfM7xl768d6Yp7F+mrfhbhvvLY+cvin6jequP8Ayq+1Fv4fat9aPQniH51iuFMerrIBmfurJxb43Cmf+6k3zb8j/dOz86fEf0u9icw8Q7P6NPB3qj2Fz34pKA3of2ol+b3i77O9V8k/Mf337zwfwjZ9hO78U+Of0N+djnt9h/Tdvwy177zWvnV4m+n3rDkHhf6jx/OebZ5+SeUB40IVV6iGY+6svGfjlCejOOfcmf5u+Q/upa+dfiH6nepOJ/HoUPpX7F5/8TlNh9o9Z4n9DJfnB4s+zXWPJXzE99+9cJ8Hm+oPq835wcq87ufJ7C+mbfiHq/3bt/OzxJ9O/WfI/Dv0+T4l6MDWvUAjAUQy/wB1peNfHKE+rvzC+6Fj5v8AkD7qW/nb4f8Aoj7hwvw+xAH0q9kaD8SlX6992+eXjX7n2PnH4p+y/W/JfzB98++cL8HEn+0/UOSfGGImueyfpGnxF1L7t3fnf4h+nPrXkvzH+yK/NPx6DUVo9SMByIZb7rTcd+N8fffpv8ZPurY+cXjP7oZnw/8APbsP19t+X/CmL695i+insrQ/iQr/ALlbL4t8Hfbyf55eGvsr13yd8vve/vvEfBpp7N+mPzk8OBJe9i/SdPiPp/3bvfPHw/8ATj1tyn40fV/0dhvFHO9+8ucmAc4jGxukJPXP0zTB+DD2XrniD6cr5i+b/uL3Evnz5jdp+g/TU5B88dB+lnW8V80vPR7T+gNjxvkfXnN/D/tTNaF4c9bdfr+BPLRk/tP8bNYB22++e1x+ItX96nHvF/vDeMd4b5D7f9F5vmfiLhzQBRBGEgt9GokTHoNRpnpdcAzJhngRihO6skleVBRW1Heg+Z6f7y8CAOy2TkZhmAAAAA1oAAAAKIEbJlAAAAAUEAAGQPnaqhFB1n7Sef8AzX5i5mA7K5GefWkAaqgAA1oAAAAABAErgAAAAYwlUUEBFIVlGwNse8988d8LAFy9ua/qrgAAAAYxwAAAAAEbxQAAAAEQcD1a0AGNlEquagAA7L2bL9fcAAAAEUczmAAA4FBrY3DlAAAAAAAAAAjkYwbGAAC5uaSfAqAAAADIpFRVGgJKAIyJoSPAAAAAAAAABjZYAI0AAFzrn2cC4AEa8ABsbgUEAV4AkMQoIs4AAAAAAAAMjdLABGgAAudcWcE9QBEcABFA+UAAHqAJWjeAE4AAAAAAAARNdLABGgAAudcWME9wAIoCCx11sIB//9oACAECEAAAABYAALFg0znRlrTIk0AAKlgFrMsus5a1mlzZKFkotSFg1JLG0w2JYS6iCghYAiw1ZlZVgBZUakLm2AEsl1cyNAABqRLYAEsjWpMqoE0Qm4koABrMNS5jcFhSTUWTSAAWzC265NRSUArJQipZUumFNYUqAJaIBC2GWtYlVqQJQRqNZlARRldsyLVlgBWbYAAWZXVmYtAALmpQEoWSG4ohYALJQCKlJcmrAFhYAAEoCazFoAssACyUABpMGgBJNUAsAAE3MLQCRZasqRbAAS56Oa0AkaFIWyAAE1ZhoCWaixSJdMhYARpcUAAsA0kAABFAAFgVZFioSpZUWUqLALALKZtiwRQlCoCixALAsEpKAqSlsgAFgsRLZGgKgLASgWSgZtZaLAABYAWM6BlblorNlKgJqRQLJQlEm4qFioCVKAAJQVAAEq51mkqywsBcVqAAAAAWLAWRpAAAAGdLADTEulyAWAAWSqzqSmjEu5EoLAAAVcgaTMuoWAAJQBUBYsRRYAAACahKF1zJaWAAAAWJQus4GgAAAAWALcIaJQBYAAuVSiys2KWAAAAs1kS2EFJQAABpFSBYSxbJqAAWCxoDIakk1KrNsACyR0kWgyFSS2jNAM6LGVltoJAsZa1m51cgJbLCJa0CRYDOtZSygCwALQkWAxvWSwCU1kCVY1KkWCzOrAsXNJQAWEaRUqJQBc0LABqSFFQJSywXNAAGmQFgCaEUzQABbkBKBLayWpJNLLALKgEUCXTJakk1RKikqASgCpalkubU1nRnUlJrISgC2TWbYSrLCWolIBYA0AM56AM2jNXIAAtAligBKIzQWAFokXOdaoAGbibBKLBaMlzlvQAHPeJsDWQJdP/aAAgBAxAAAADOgAsCyxYW3GdRF2xRFFiwWVrFgFrObNazlrUsXOszRLcy2VpmFiXUkJ0TDayXNS9MXNKluSWAIsNplZVzQGs6Yu5lWbYAi5XVzI0Fli3InSZS2EoEsk3uZypVg1LJJ1SZtgAGsw3m5jcFS2zM3FmdIAEts52265TebbJbJQrMtCKllS6YKuZoqLAl0XmoQthlrWIaVAlAm5N5zQEUkl6M5zbprOsrLLFS3KoACSXdYzNaVAWC53mWoEoJIvTLRIazYFiyWagIsUlzG7CoazVyCoXNSyiaiazJqgFTUkpYUxaABpMS6AIy1QE6YmoABNzm1QCSWaaSpFqABLnpMS6BKzG5V1JG0yAFhNWYaBFm8aStTKXdxABYRozQCoCwTpcQAsCVKAATSBpqYWKhLKlRZSosJTWaik1c5tiwRRM7FIStRazBYsCwSkoCpKaskABrIsRLYWUKgLlS5oFkqyyZtsUrK2AlFZpKVM6BlbFLrnZqKiVZZloFuQJSJuLZFipKrNY3YLAWJQXWYsAAudZVNSzWSolXJpCwAsLEpUFiwi2S6SACWwAWZ0sEqXTEvSXABc0WIqpNF57mdJsxL0zm50AihZNRYat52SlszLuSoAssWLmgUiVrKxJobwAAsAJuSKWN8kmtGsgFlgAGss1S654HQWFgAABYSi3nIbqagBYAAuZpNIsuc1atyazYAAsWzfMi2GLLqWUAABW5GmIG8xEurmaQAG8DeLsEwG5nM3LbM3WQJTWZi9s5utAxBpmZ1bTFATOq1lzWXd2DOViyRveLz6a5gJaQzF06Azm3JFx03zQpZZY1kAVsM5tyDG+nOzWbFiVOmASaaxemdMFyDG94SrLrlqWWwAbzIdMxqSolssC3FCwAbmYmhqQJbKQtxUtQAbvMBUJSatzFrFlAAbuIBm1FRvTEatxMti5Apclhm0LJd3ma0zmZ1qzWN5Shc2BnQA3k2lznXPVs1jdmOmZZZrASgDZjpi6yjUsqI2yx0lwEtgDdAMY7AMtSsWsAlANaBDN0AGdEjnoAAbsrOWuTW9AAc7zbBKLC6srmXEdNgAcOnNsDWSUl6z//2gAIAQEAAQIA1M2oM7WKFesgeRT3OimpKWgozWRzMtscBuNX1ppYAaeRzTJSQy1NXK4u2UUXAQzfe2CppSmY3p0bm1Jp0SA0EwZCCaBhqGAmDjv6nNQXIkMPQTEempFWubPSvgQU6qBUVtZcbfd+L1FmN8fRnjx5VNrrqnqKOaohbO51RWTSexcVtzmxsaxjUWU889L6mIgkr0qHtDQFDTysgbgJqCGG5AXHBrWu5BbyYQzh9RPHLEiNYYpRcgHUKgGpm1gc90rJqep/OrKuOop6x7u7VQVjamZOqJXyHaJRbtsDGaTl9oBX1GOYNUincUFaKeZ5GAmBDDRpDHG2jB7azyl4LHvk9oquKr1hgkFyW6BQ4kFYnO3C5kk7XuEkjkOrYiEHxTSVMhc4uwce2qdwGtae2OVBOUg9lOWqmjr5IWynDQzAwBtNAXHCw4LddDnl+dlap86YpVcUVblCgZVVokOaSiCZHrSGdNc7ox3u/BIOxlronbGPWOT1Tk5SlOcFaY7u6lacBMTcBBBFBMxxxrRkgs7cwwUzAjpkcsUquQVAogBMqwIYBJ2T1A04bQxteyKAwQgqd4BQKeRhwlNU9BAWEXSWBusMTV66b0jxxla6EHtzMhEBNd+VBgrcalVxG6B0S1Kqwb3k51oMcAfcuW8g73oFBhWgAYXtTg1sycQ/2mc5wDcUh9qmiUafE1rDhowExA8YwepZ6FuNcuRidTG2ut34ENIEVpoerji3GFNUgrAW42imlNwEU5m97w4723GwGMKcMwye2/adPGwqmZNjpeOiw1kEPGIbJX0cxqKVpAQDThoaAuLjS11ILS0Ll2BjXr0jUxuTt0Egujb068VFe93v7+wLi0tLQEMblj0id7wzNOzRDgUU5RFoTlOCnJzlR22lpIpWqe5Mp/qdQyW+hNXY3xhBNywpq4sj01rpJjl56HqxkrLljexkD09fVqdhpY4dCnNKPRozBJt7jK5/t7UqITzUJzvbdnoKy7tmjUVqY1txde6mpp5WVMVZXski+8t9Qm4YOLFw661hzSOZD9ManFy6MT8BPyCQU0BMeHHL0Q5mWDLSXIjW90Sa5OY4OT3W5lFDPWsVJFNeKh0rg17yKeL8OC8U1+ealzqhtREtMXFg93Uo9HrmBI6FDBUaqFcukafgJ+QgSA5p0CJvsMhKe7LTgdXI4ppBM53sUZYooiJPvtNDd66WkjLjHxU8Z/wkTK2tDaS3yufUQyat8vr9fFgGOZ0PUjmCd1IanYiqaiW5LWI0/ATxkIJzEHZ2HkkkLTegwSi84gh9GSh1vgaiqBpa6WhV5mqHOVsoaeidTTQy2qbjsdhvUZgfI0Ucclt9mP4qmLWjkojWeYpwI7slndXyOZgFz0D9hl9yU0ooR69tktOxBPHkHG9r20CVbiWyQSwW+soaeClr5qpWmnpHVlbR2tllgtBiuAZTUdPXC1Wyqoqq1VVExW8tNXGGcVOfr+tzOhxzEnBbr16Q1j6mZ4Tx19RH9QY5oTXJr3SEenp6MX0PiKGNIjWl6lpxQByL5Kkw2enq6L6pILPV/h1FDZoGQxU7mXJUNJ9dzUtbJRNpLnQ1dLC223C5SMXEx1f35nnWusa9WsIcOjEcFFRp7QAfbpujp6xVSJCGGtAIMZiLStqhe6V8rp4FbKiK/m8VlXWUfHpaeO1UojYKhj2CnfHcJaF9PDNT1MNbQuhjpgolxMo9H9+Zn9Ic2TaOPXQTYnj29vZhDHx6KD/b2BjhZT1DaqQJrhhrmyfYZny+20UHe2wIIw2KukfbnOg4/Vvkt0oTDc5ONskjcL66zRGNzKqGaG5UvHH3Cmr2cSzrPr6Pbnmhd016kZY5rgnhg9vVjHkhzd7Do3sL8OQXpFBBFTmtD2oL29/ZoK9SiVrGkDSJkznuVJTWug5XQNpbTG1RvlVuZsy8jhsUamNSJ47pT8fF1kEvEuh6ydOZud2KIxphbhie2EpyK27MRDfbX1iD6jLTUhdd6sz9RgHX1hqcGhwCDbNbbpFCpqe2Q0DJoKakjawa9I2rdTS01O9TGQ1CuYtKpDaYeJDWQMyDAXMUVrrogtOGvBYNNAe5FFPTQQ0sdt0QDUWRKOo9K5zghgN9QNeoR6b9gqOJk95pIG19oo4YlCp6n/NNvsF7pK36HxSgxvbIydOMrL/U0c1rq7Y7iQd1OSHDHL8kEdCtacAWPYHYatEOLsHEZ9gvYOL2U0UpN0gWkD2OS4rQVka+unjhkuU9pjpYXSNYKGptFVQwR264wVVSKZPUlTKnhz7uoJIKymdxA/pILdcuOCgtZKBRYUCDjc07XPIDhgFrgC77feNkcr52QuPqW6bgHJw47C1q2FNu1thqH0LF6U0FRXfnyV8c8MrXfZ99fJVTOqP8zDdb3JTmpdRLhw67PQhw5f21vG2hSR6Y4rZRUTi0NeNID1EjX+3sxCpooZGytw5A70vb2Ly4lNatMdMGMtUVM2na9QU9XN+VUVnHbdHHS1FNJKpqt9XGTHW0NZHenSvmNDBxFvUI9Xrli0R+gO2Q5qicWgerThyOGIItMeGxQU9MAZFrbhpeweCXE4CbmI8qtDLIKmyphpFG2qibbH2WCJymhp31UjYHO/2ll4p57xHfzUKlho4+Kdz1J5PEYHQ/T9X1+nrrSB9kS5qacFjHYcE1wetggg+olcqtiKJJaiPUYC0ghkuZS8nga3jShVEYQ5vp7SQiKYxKZRxup6vjVxpuOXCup76JJKVQLiwI7aw5xPObiL0L3/nBfRexeBd/8p/kMtWnNIY7acGklP6MK9QAmNpVGqxBOYUU3G05HLQMuHHZhTXihssUMlMoXuTk1wH1zqFOTWsEjZIYrfVm+IijhYOLh47nD268gZPXfRrvcFzS1hRRawlzhmNb20h/207I3VgGHsLVs42nMCAy5cPrN8qZx8wNYKdNa+NMVUi6MRrZZ6+z1Vx3xRR08bFxgOHc5eue51rS1rXUHZJLX7IYnBxwEEMgMDCFWhqKKLPoNMKc00dHHDM9vbg91oRyihsUlEmqBUwuFHI5klU5skaCc31exzXqplvMlLLTOaOMop/6CE8c8Lv2hAbTkCQFI2IlFpamlpWwA6ItdcGtTi3D2A/ixwshrnJq30bJxbl9dDRS0LIlTqF9TUyyxiSaOBjHRTKGaWneyoVbJdJKGOJrVxkJw77Tlzou/cHApw1GdFNW07LXY3GI5IVcHooJqamyfbGyaaaRNAQGsFtsZbrnbBb4hHGBLPW0sZfLBVQ0Vf8AmXy4W18M0yqW3d9xbRxtTFxsY9C3tpy5sXfvCaiFtrkBhyC30amqN7noYagAhGI7lNr1AQRdoNcbU62G0OoDE0w30urILkbmK2aplfU3y11lBUNmc+c3WearomtTBx3pr0czqRzE/wADCiiggXYCd0acMIMj8ba4FpaGmrmd3ayVap6iyi1ut00L1eYjTzqalEdc+1U9bSxx2eeW50lZUz3mWiFKGpi472f2kXLv4g5q9EETgnMaBTSXvkDVsIEFjnvfIMDo0guHoG2tjWW99NNHJNJTxVlHNRNqIp3vraeKB1UrdBXm/wA9vVOGqNcdWiMv7FcrP8e+2sNJXt7hjW9BKJ/yJahbDhhoQY0Auc40MdwpbTWUEplqZqSR6c6S3T2Oe0PoGWykpILfUS3OtuVVbGxhQKwtR6P7Fcod+8YaHDXUdQg0AH2wVr11IW4OGhA+ocmRSlWqO505ls1a6Wevo6kPqA6sZVmole+WJoq7hWcjuYfaA1ARCx4PR/fkn7dEZCPQIreS0NDdaxvOnnYT8erUGlgQaXPlGLK/8a7UdqrmTOktEv5U0dRHGXyekNJO+auuNyr6uEWdDDDZgj1c3rfXf0a9fTX4sr8nIRxr1MYYQAMfbsPc/pwusLb5bLlQ2u7sno5mmjfUB8dYwr7ri+pnrqx5pRaQ0IKz4ONYIcMsF3P8AW95CCIAIeY5ZZCdeu/066e6PXilYxjYbjbaqnpqujnje+SOCpEicf8AIXWvrqggsohbAweqtOCtbzss9VGrof2b1nTW+vr6CFkTmtTg9BwJQQQyOoGij1cj1ZJaKt6lp7pYrlZ7fX0tx/IFU2cRzw1pvlc5wdK23C3BuArWM6OfVEFNVe/9xyA3DUHmQS6EZMgih/1tnDbjZ6O11lEtdvXB6sj6NXj6v2wyw11uvXHYa+juxrJqmOtdcrvc6mrJY2rZaxQJrdNZbm6II0ta1pOTVVft3j1CazYd7beaGFzaxzVUC4R+1XWSzMqHv12C3ogjIUVQR04nXhjh6yqVl449WWinvQ5HJeK28zTe2oWXFlqFGI0GcI4xJYHULaMRzOLPQM9C0t9Cqjg9ytP6Az62xmH09QGtYJBlrRH6GICcvqRNJMXvd+jWmhPbrNO250bhpNQXH7kS8yLTx9ddZqnjVTZX2kncbIGXM2MU6avGdipbddH3KlqpUScNDTJkiZeQJOxPvQ2u2cHunFP9Vk4pPxmqorBYbxZHMzTNEH1lhe8td9/3fd21rSa7eHDLRdKEoNLWrfj+7p5lWynImrT4eQSFjKZkULbqrCoAxviOaw8jrWXu4PcU6ZtR7GZr3r2RUx5y7s87pLjaOaU9dNSvoX2+ptslFWXWVogcxkclES1OdvIRkQP6QWO1ID0grySgtEU81qrnMla8JrXtq3Bl6qAqZk4YrqrCoEF4sVDR36rnke4p1OaRtHLT/RHFRxpyqFzN+j0cSVpyhr4eXs5q3mR5Z/slTdpUJGS0VhuNM+3fhfh/hfhihFvbba2lDQP1tKc31+tcebJ1C8d3gJwqBECpVJBcZKp4d9lE5iuo4+Ii13AJDW3s1s9DeLhcYa+lvtJcIr3R1dXcmu/ysVRUnlzkekhyV66JZM2sbX/nfm/m/l0VZKaxscP0/QaaKnFPHScnYBgYa3Bb6eutUFpg8eW3xda/Hr+MXPgt+4JIzGtFU9Rb654q2wlalF5NwgCcqctV2XHFG1cLTJr7PcZKx/JXW0cWrTFxZVkvLHcyrKGijpahvJXI9Huw63Po/oLSHANEbYorTaOFO4XcuJx2+O3iJ7n1purb2b+eQ1dUSgAz16HENLxjxvRWaOlZGHOt3+HrbTz7iY6FEcAvz21qheC2KrYW3qjbjVNU3dcaAQHDXMqK99xdyeg5FTRrjMcNfxKSntl/XLbdTXWCWc3yTJTnZ4bwJ3hCfwbefHVyoaqPdurTd+E0Vu4TJ4g/46PEB8Qf8em8N3nwncodk5C9VrRQBbb7DZ/FFi8eR0D3STxOobaKR8NVDfaG/wBB0Kgn43fayN6hDI7y6gguNLWxAh0jJpuOYYOMKJ9VIV6lvo6MM+pfSvwtVArycEuf08GkCuqeYQ8opqtqamLxBJROD/b29zIZr7WXs9GgM1mGn4/4ytXi6k45T0Ip62N6llscdM0KZVz7q7n46EKwXgT3GK3psd/VHC+n5FbWYLVZHtTFxxUzqk4ON3678fujHHpVGVxRLn9eG8vk8jT8sZLyWvq5AnMa3w9eIOa/723nY5x/vDucO8h3vybd3oAMbGADmz2vivAKegbT/QI2suEV0ZKeNKKX75qiunu83IKnqUFx+/OqrXI110jYwNr4S0KGaeMOtNbA7jqonz9Hum5BSXal5Bxy8k4aqp7k5xPUDwvYouP1tk8rS1EzsQyMfb6s8npL1Jdv9jbyCe8yXd9TJF+O2MRmIUxofwm21ll8a8XpGRtALNMbPHe6JzLZXQ3N1xqLjV1t3uPNbWepQDm8KVKGSPhdTGOqZcoGOe2REwPtdTaai1zSnLjypnGFcZ+PRZYrk979RU/4T4S30LWrxjzGt873X5C8i5q4rW3GkMipp2VbpYpJEG7D2gNAA+v8SlpKHjFHRcfjp5IyzDmtGqyK40NTG25u5C7kFbeqCbkFnLe0UFio2saU5mquLkFMwOMEeOM1NgdaUXZnhbYYbXTWHi1oOWm9u3Z7W2V6paK/8fwUHB3s52CfYqIueg4PppHOY0MaxjGxNcylL7Zx+jtdNS0tpt1E1sCYVoJqq4rpHUxVjJQ5tbNx2KjoeTeNKil10sFbDNGYnYcqlVtM+MtglnplxZcbZZupAhvll47Q/WenIUBZpq+6Pda3XqjJT0cAlDDkcAnLGxRqMepQcxkUOrRxmhtFSbRZIaMRNjaAmOW/aRXGGsFe6eWolqq3j9NbKaWhuPFr34ku3HNooC08gtN7hQRbKnidvIoEFPKuMGz1NjHQ4cCpFvBXI3FV4oF7WGPkt7w/G97QTkc69CyniaAxoCaIYmsXHeOU9ukistmbTiIM+vWwQ4v92uqIbtQ3iOrdWz2eis9vtcXr9PpV2nyNwTRXsmv4begnKqMrZxyGkp1V00Ee+OqkFhC+l0MMb0YTDI0waOHLlhVyjqqeioaSluNa1FPQHRqPQEFrWMYUEA8xRSP4/abTSVlVZoKZ7Vo405weCMlVsVyt3IHso+OcdoaGjYxvo5u79Q3y3FPTS5nFLkxOVWpxUrkda5NNLPUxcfHHYLAgW1rKl9wjqkao1Jq5KrDlzKTVnvDak3W8X8Y24sR6NR6BNEIag1qAqamiowrHQUMLHGkoFTCM+rk1rmSoGMjHqWzMvlLS8PtvCqe1GOMRhyLXCsPk21uUgCCK49cipFMLhNWVusV7rE3jisCCfbBa321trMf4rqT8X8XD1zY4C0AjgoNf0aT0CAgCYmp74YyJDxeipX0VPNR0b4Ex201BtWxhYQmjWpBVwQJq29qa4FxCqm+RaJOHqMeNap4a6U8xrSiNatcVmbxl3Gi1NuhvBvElxlu9PXS1huDKyF6lPPX7zsu9vben9GJ5yC19OAmNjAUDSGtomWKz09NJFLFTyMc16aGCsZG5hY6NAFpbLHXUtPIEU2VrmPJUjeY0D2rTg1cBqXyekxuVY1BxxArey3WzjBaC3GwtHLkFULyDhyZkg5Cd0jTzljYIGEhoqJQrQxxsNPaqOigiD2zRsTDE9rggZBOxqjUajKexwkZWRxybqqiGWNgZp7bpDyWn0MFWusop3nl90BKKLlG6gk49X8YUYwR64OSgqp3kNaLm5c4nH2OYRiNHpThjJ2hTSRCUMZKuG03GGU5iRUschif7MkZJ7PfVvgrI3Mc3L2PZVRh/23gUAaYm/TJTVkXkGiK3sqlh4nWyM5ZWYke1qCtEtudxvkQqfyfyPyfyPyDUmo/I/I/J/I5NyPkfJRgYcj037k4aelK2BE7fJ72aPUx4suPugMD04VFOJnVFTzaDmZ5JQXOtY2otlxY9pa7EjakXAUtRXtpoGtag57qxnlylJenIOil48pnVMykeEzNtmXHnALSGXn29vYnyOtIDD/1HrA8IConibUut8TjUHjy4zU074yx4QjrqH05JFxNXGnt8VzVvsc9BTzxyNc0qQ1Kq2zQ2wMaEXCX3qZPLtXsgkFcXr+aXDYLE1qIVsfEePgd39CvI5yCSnDLA5ud9II2CrqImSuiipJHKoVnNmrrfK1RuaWJ7byy48ZdBx291Fws9ERLG8QyRuD3zSVL5XqaK2MGJnuqIqq41nM7hh+GPJv3IQjgIp2TUccCJ6v6FeSclDDiT0Dye9C6WeNrGl7prZJupVufV1/Eb3FIDGWLXKqey3y8yWuXjdhhb6kXGlgqIqj3nmlkdI0yCgIJVUKkSzc55bJIinjSLtQwtCGHZtjeNDu/oV5KcMFb9ica1+ukfA2pqGx+lulEk5oai8VPEeX2a8xPjkjkDq2kfar9Hxqy2umjcxzk9tzt8F0F2Na6oamiR1NUROa2oZc5eU3O8XaN28lNauM0MoQw7G7RVcYb3k6+Tej+g/cx0JjgIrWh0Uz22h1zjmXC+cWi6MdE9jgbhaa3h1niifE8OY5yljvVplNJUU72PfNU1hqaOaJ1XDfJPJfJkOpTcWms2ginZ4fZ+ONHYOk6+TChhyOAg1w9P2QTFpYZPamqYZGz1FTVgO4VzmyXqOWKVkgMsd4oKKqjkY5jk81Zraa609HzKPksvKGV1bJZa2KV8/JZL3UoJjsEgLilA5bQRTsb4/c+Nx+2+ga9vp6Fvp5My47wwfwU1S6P7Hg0tvmuTYq2pBDTw3mNg5HBVRyNmY+ppqmKCpjmZKah9TW1ktXcq7m0VHX2e5f7TU1XFORUdeZ+b3KRzcMQRTXOJPCpKtz8HDsFU83GK+LkcnMf93/3T/d382PPHeQBz3/fz5Cf5C5heX0yccBug5OH64Q7FJUTRkQukLlLGJHFA8W5XxjmFLVNkZIya7U8VfT1zaqWrrLzU32uv/KecVdxTH2Csp+aXy9WHyafLnL+bbbkIrZcExNTjlwRTS2Zznn2BcSidhzjgOe5+Rg4b+0OwDTVEoY5ippLm3puz3ziHO6evjqfyKiu5Myk8ijyjcPK1f5Gk5tX38uwDsnBOBkOc7DVsnGkcaaoYigNYctaAPRwfloTsNQ/gY5rgAnyEMsklsnizRV/HPJtFz2q5xW8/n55y67+xO/2DLFOnN1pq9TnRDslRPempwC9nHDUej0/IO3EJrv4YpWlrRLHWyVLmfS+DAO/s+z22T+8YCCcEcNwQtRxXK3gYChdoYPVqOSnF2QNYCHX1fGR+rbKkXH/Ifnm4Prif6AEEFCi4u2tZ8e2K6VQOad7kAj+nTk7LV6nDEOu3yBPH6GsbTPj/ALmZColIwoH1LsUTbnKHdIHFuCf0ydAiTgIdvZOH6KBhT4pWf2t6Qy3AlBNd66XHYOc1q1mCYGSX72HXrkDBM3RoK3tDqxoZHQ1sWYm9LWxzHNqx/YAAgjiC4yYaQ5aZJLPreCoXbmevemeclNW9qbMLGskKaNdYzCXS1/SBHIVuEji6tH9YDWjIHrx2lngw4IppLh0KYBI/NInZ2tYlRjVOXOkc1oRcHdWLbnZaelMx7XGp/m16+vrhhQQWg1UlTXogJ+NoodCo30JdmkaSjjejiRVE5TV7pxGNYGQCnDLBljWp0boqiP8AjADdBhYW/X9X1gJoy5UtGUXuOCSh1ib9jswvWzgDeJVJKUxr1sL0EP1JqcUEHe5dmFHPGrXLwM8Kv1uq08fw+jW6DQNevp6fX9YYG9OPSzR9DgZOITOctTXsenILWJcfWGOY1gTUGkrR/TTtOeIgymkuFNOycdWt9fXXQM9BGG5b+4J5y5yaBk4idUM9cBbY4FyCOZE7JBQwHaTkf00wOfGlXJyWfld7vkrqrq0Y1rXr6+oGg309Sim/uci3Lk4IZOGGcCP16UzigjmRSBhTjhzgQ5gR/TG454bKZ54a6lmVX1YBjWta1po1h2Qf3RkHBJIAycxPs8N0pAMwPcekgcoBjRRxtoR/T7ZtlWbkat8hfUnLAgFv2yEBl5y137SC04egm9DmRWivvEq3gKJ3SQuUXU9CnfpIzCChmo6M6jo3DlvZJyz9z1rSe0JqHQoKcuL5i/pC8ZKeioCcb0WtBCKcf0HMYaMHFQMNCHQdAfYnGjkIfteGk4dhqHaZyJDOjSOhRUIKLgiQcu/VrFMC7Zy9jmANG+gW99z0Z+wZezBGx11IgyntNPZrzxt62tRPyVqNOcUE5NO9p37aZq1g4cA39I7u6MP6winAvOHoIdSm0dtsFHxC4XGUV1NgGE5OCUUE7BW08/oC9TiBn1fX9ZBTiT+ve973vaGGua79jkDh6b2I4DbK+71XK5W8bsnkywluGneDh6BQwVvDz1a04GHYopN7LiSnkfztP7HdHph6FUrbTcXMaxsk/L7neX53GcOxImFNKcMOJ6tQRywuxQt1oxOY9FD+QoYCH7D0emdSvSR9TeDWPdDQywOGNQZfhyjw0Jxw4nqwOOGNbC8NFHTuiEv5lRUyOKH7gtayUMtd7ZJaepyS5MQ6NZCytrGqKl+g1IqHHG4DtHBTcMTndD1AecNICBtdZUVb5jI4oofwb6jAWw7BDexwXFxLEMhURmfqhnZdjcPagtszcFRJyCdgpuGnq/o3DloqNrgUFSxweN3ePH8LfxeqopGj+U9QQS5A+wOSnLeGIYITxPQa3HBRcKoeM1PLZpd7KjLkwPwVrs47wEGrRRULnPOIJeNXNrJIqyr5PXD+Y4HRq9fVwQQK3CyQ5jRARQbRQ0tDW8Ur6SlrX1xmrqk9AmuanYKem9ndGNIRTkUxFHEa8Y1sakVyfyCp/mOB0C3veAtlU13f0Yt79o1QU9gvV8tb3bLvarm3kKItTsFOTDg5JywFbLidMw7DV4+r3Q7u9ZNIP5jnfYLey5SSdGHBVNDEYJqSOqoXxuZVzE61ooKNNDsFPTFveurMlOwFGmSTYauKh9tsnivl/hCoph/MenBfG9P8eKXwb5i4Jw2x0Hx9pfBVZ4slVO2umQ6MGCqOvjkD7TfG3f8ANvnKpHI9Yl7OwUQAUO7BjVLJw7ko8Wjxfd+Dcm5ygrDJYqUBedaTHGONcz4R/EekM3D69fIgr48XNX9BrpOzE5NJaAyQVrK11ZUV2+wYyPR6BFDuBndhc3HlhVUaCtBopKTy7evO/Ir6oYfEXj35Gf0ePMfIjHxwxf01PPYYaS9aW973vIaI2racd7yOzQOtjTMeVZK+qKCp5LR4w/8APdN8b/LPBrDxnxx4gXk3xb/5v5DaAOK+ILh4ftHhzkPgCrpOGcJpvjhS/HTmPhziHBrX8due+C6Sj498frp4c4548rvjvzPw0t+OsfIjHxwxflwSxD44f+b/APzhzXiQXEuC1/gTlcK4/QWz480fghni+38T4z8dovD3MPAT7Rw74/W/wzdPC/kDx41uuF+FLxwmyczvHg/nnif9TFvpZQzHl3oF4y8ggr5Gu4t5MhcvNXOv+zVdX4n8R11Vya/+K76vLPjmGfw/ypcptvG/JKubvAHGl8j63hFxBezy3xheOMfIfHxwxfUYfCnME8cqol4koPkRysZ+Ot+UjX+ZuLefMc35Qz5J8c5AvNlqXhfxjrzLf9+O7lV0nkniGB3YetmUePLaPSwuix8jFaVT4+R2PDHEQPKlYrRI0leULL8eMc9UcnF/kHz/AM3+LPKs/nvnHLbEYsfIxq8bY+Q+Pjfi9oy+KuVAr5CcZXx9svLr8MFfHTDlyZUEkBXyQYB4AkXlJcQslHSuPJpQPCZXyMtOAih1A62dR48tLWbEocfI1WtU+Pkfj4729eQaWPjNJQDzF/2XzFyD47452h1K4rx+IL5G48a4+Q2Pjfi9J5DvEnK15V41HDz6oQwV8dMOXKG0rKbHyPx8fceUV4Bo09V3kaHzHD8if/SPkTzBgIrWAz1AQ6WlR48sI58S8JtjYcfI5WxU2PkfjwHKvLdMt73v47Y5ygd7stk478d7txuLz/G5fI3HjPHyGW/jeVeUceDuWJzbX438z8nQKDfjvEnLlTYFS4+R+Pj5jyePj7UIjmdHk/wWlRY8r4IA4FxqzGDHyOVuVLj5H4+OV1V3oLrbenx1xzhDAHinh6+SFXZlBj5HY8Y4+QuPjdi7o4hl8fcmXkC8yyY9YB4AKK5YoVR4+R+Pj3jyavGF5BXnviWSgjkd97xalFjyqE5eIuGc3lsxp8fI5U8toqV8heOMp+AchpaleTPEdx8UU3ja0+Crmz46Y5shhh49VL5A8X43bIWr5H0q8X4+QoXxvxdU7Px+5avkRyfINOvAGCuWKJUWPkeF8e8eSg13iXyCrrar98dW/Hi3fHvn9Z030ct+2I4+G+Dt+93oKv460vx14lxjylWcH8PNq/zvLPAb/YfDvlWKeV3L/JvJuSeOfL1g8ismkl5J5R595T4rxXx3bP8AZ7lfOUeMceJPLlvvdZcOc+Y/FXl2Ov5depeK2fln/Q+XXyp8d+P6g+S5PJnMeG4t1daOW8ivGQrBR8Erj5bHl7yBQcItTfM3/auecotlu4l5D/7fX+Y+XW+33Hi3yFofLzvJd887818pHtveCPX1wD+f+d+b+X+U6p/IdL9v2e/tilvk/Iekd4lu63rWtayyZ9Qt/kud1Ce5NFo8Lcm4hT0/keo6BU6aVAHO/ef5XILf8G97/Q7GlveZMeMqcLzHxvxd4355y3oFTpuGwA9Ch+o/0N/gcd7Gda1nWCG5Ac5U8/FvkRWfIvnnlLqFCgSRUF373EO/jaPX1/g1r16nu4NyVrX6Qo0EFAGj97039mta1rWiQfb2/wDgDHsSCf1BNAW6dM/gcAFta1r9Rw7o1b3/AGEt/eE3NMW9yt9ygem99AOzjv8A+C4pv7wm5p0f0a7vwD+kd5EP/hOw394TcwJyH735PX//2gAIAQIRAQIAs9Ih0C1ZHK8xDmbGT5yMBseC7xmli9hwMXCab+aN47SFHRi+UPlCzBiRg9x4nDb5jyo/LH0DaS+GcAT8pUNZt6lxL6A6B/AjynmUB+e+o8g+gNy+a/pn+Fnco/oLA8K+QKUHyn8EbFRocQ1jBajQ+ENJhoUe8/YMEPy/XzXFmPjevhD5q2jmew5CHsFfqhzPjdjhHUuk9AyNjQMT0vA/MfyTghicn9cfwIQ9Zo4jQu40bHxjgsVS4DrGowHQ8UYOp7lgIT2MHaT543r87jPPGL//2gAIAQMRAQIAowjc9Ih0C1ZFncBbzENmG/VjA04IdI2EYDEwWbBo0o6FKGKJR29gxcRGL0myb9RR29Io03vEMWCNreqFHb5io2wYAfXCQn+qMWaoUiIcGuI2M0NjiVPcYLMEOBCtjYxCIOAGGjHyieoOReqb3+o+YYJDgMEIs7zgIaE/P5/NrvIsE4N2Daj6lQ1CehH+zYt3+eJUNb2PlG0jUOYbBFi8FxmLUMBgIcBBwqPY9YiFHU8Rb52YIaS4BTwWxERU43xDM5qk/wBaB0DMRvQPkojsUcO14qhxieoqNebOKjjB6jgaGkYLA2RgtCdM72MlZj0ClBieswWPkCKDSq9UKW5CHULE/NjM0K9Rx8K1AUMzQgJoBbxS0CEnN238E6GYCaFnrNGvUGInuhQxA6TqZCsYeeowa/cFjB2eUwDAwUMRDB1Cl+fyosRbYoA0YIlsJ/TdGDM2bE9UcvMI1OxgIZ+686TBQJMOAoQn86UNH6goZGGxZsgWKMb0IQx4JIDQdYx9DAZDYZ5y9WNHnH1R4SLND1h61iPFwQ8QhoRfsE6lBwHWIREl5xOTg4DrGs6hRw8wnhek6HBZsQCEU7EWYoT1pGoQ4ebNerE9QT1apKhPVLgEJbwNeoKEMENs2YIYJ6o8IiIr0PNqClPzEsVDSyMGoavUBGgkGOGfkkEngBybZj0KlZHmH1kY9bo2L/Xk7fXrzuODBiyN+NxnniM83//aAAgBAQIDPwKmbdxxbeak+INvquwdslkbpLSbVq1q0KYOxTAQaXVlWdPRjzsRaqw+i1qf7uRb+71PMjS1A6fP/pEX97yxzzvVPzthxusJ1yWRucChbtVr2/GxwV4OtZLd6EnjW0oSQMQyzIeJhSMxeg76hSzsrDaD8lLaNB++YspJuUs9l8jneqdTLuclN0/+lML0VUHNFtx5a0HCfcNGg5iwUyBKmc9l8s71T+VM6D4BpU+62Ylqk3Rn8rlneqdy9ca3xC3M6VISz+VyzvVO5Y1o8Q9czZzU3Z/K5Z3qjy9ca3xD1zNVitpnnMrlncjmPVBBCjb4jfvx9ZUMa/NCUgiU4aU4Gch91WN0lMNPI5vKO7O5PP659qCah4JfikpugElamie3K9FV/mO5C9E9gSG1RFrBoIOxEaN6n2fmiy8ZnKO7O5I3/bxK3EvxGQxl2lTuCe8y8hcmwhJpm86Ub0RoAR/YKOpNdoTWpmtbV+yFLbmMo7s7kjf9vFr91NW3SqylY1VBOcybOS/+ranG2c1rJUtKKKc65EXuTmaZppsIQJsR0oUTpyjuzuSN/wBvEpYl+6maLVJVjb/0tVin+5JzUHb6TrWgLV5qarfvUpKwILZiZR3Z2xuaIU/B54k6/DTVbPSbtyAtJmdam6as32ozqhAaa23FrnYq1gVlytl5qqJfslW+tNexVKbXbs7Y396vA7J9zlW2tlTISF5/cl+9SmSskK8DTedatu0KehXCmUlJSBVVsytd6ldpRFEl0jQpGi127O9jn9PA8nul6IAAFyEhPVJHcqjgdaNrRxctSndqmp24l3mibTRYp2KrOiakv+lVnqdfsVo20drdnexz+ngUz3XWiztCY1hMddNA2NUrFPfJZZ1GxSsxK79ylRadgHzUrVO+malYptmphs9akZeW5Wu3Z3sc/AqgUh3Oa9Ubafmix0llT0qd1Ni7R20yc/kq27GySNRVQN3/ACQmHC46F2s7azn4DJTM/dFqsn3TSr6daucL5qvVlfp2KWJIfOnK3hSbizCsO+SrB3+NymF2s7lM3Hv4oLlWk1t2lTu7nW3LKlyxXPs0KrdmA69VcXJWjWrX+Smu1ncpu7vxRQRK90Xn5LyFg7lMyVSTVaSpkbSg0N224gC2KSBTXZo3BFoKtf5+SsVjs7lt3eA6Aqu0lSyfhv7kBMnQplThkq1fIKymdLmo6E7Sp0WUDFmSF9qLDnctu7udurPBtyqZXvG7YrN9vcrDtoFQjWpuG8K1WUyUkdSOY2pw2qd96sWmmw53LHD4CBdepmZ0WokbXd1k7zVY4kgnOdJnzTmuALpXzKMXTb8kW2OvxZ0NOhBSKsVk1OjJOd6wcPgMlO09kfNZVY6rBq7mDKV9iMpysAU3OONNWXT3ro7Ai5WbqLEXHUqoyQbL0BLJ2TTTcp0WKwU5J353L/SPAdanu1a1r2KRPcq5aNQBUobgFp145okp4jpVZ2FA+9tltuQqhovGlEmRvosVgpyeedLYv6QnIrYtiGpBBNTe8+fohyHzKtPcpif+IQcDNVKu9SJzmViSVlF1OTnet/SPAp7l/wBbFae5ZDTqsVtiyR/iVM5zLxp8sTIzvW8h4JacYooooDbmJTadKv3rJMlVxaox8vGvxMjmc71p3DwTKOKUUToKIvoq2DMSVzXbpqYKtxZ01sSq8KeL2sTqxvOd653LwS04+1DN3qKWdvRmZo+65GdtFoCMhi2bzidWOed65/jGRyxaqIRorKqZ7FWlbbJOFilf5qeJaqzsTqxzzvXP3+LyWTyxZyWxS2UFfemSkMSwlW4nVtzvXRN/jFiquxJiisi1STToQQNGqjJFGhW4nVtzvWxN/hc87YraLqLsY0hZbVJXqZVuJ1bc71sTf4x6KyalR6L5Kd+JPFysS04nVtzvWROLxibQr1KxVbKbycW1XUAUSCrGi04nVt3Z3rH8XfhLvUxV1UTVWmzmFLlRavRSPKm7ZROi1X4nVs3Z3LfxHvtne6rxtsV9FYSRhlXKQvVktaqmiyxWcse1X4mQzdncp3EfGJKu0O1iiaD0Yatmp3Ka+VE276JTOkX4tqvxMhm4Zy5Wu3nvzzcPmovw/NOh2OEk5/ZCLbxLuNk5Y1jm6lOmYtRZ2UW8lZKa+aOmirROm5ZSvxMhu4Z207+8TQxJNCKtySQN6JRGmSn3HRO/GqRG7bMZr9hT2LQrqZ4lyyuSvp6atMbkWCWpFFBCVgkUUUUUUaCottidDsd3yfdrRNVDK/bjdIwOx2u0JslJSE8W5W8lfQIsQ1rmhBljRJaM9ljcMzWCbrWySbrQ+JHWiEYzpJ0OaHgMhtH/ALW40iWHTaN+ZtVm/FuWVyKt8qOsdwrpxMC4keSqurKdPzU5jVmet5DMlqFxTXpupNTU3Uhe3JT2324pHfREhODu0JVfrPGqmepdIwO15mbt1AlTcrTuVvlR1jjqCbDsZZpVm/Es5q/aV++atmj5I+qv2knE613LNubcU8J2IHYlfsm1FuS6/M1e6Ny5/DjynDPLMSCtOLcrTwq3yok5x2KZnsUgpTKESYVQTKrNraEHTkJyVaexAzGpB1xTW30DRag66jrn58akNSHwofCh8KGpCd0kDahmLRuzzn9kTUVfEmN0ApmoJjtAT4dotUsaqQdRXSNDhpzEjvplRcrTwq3yotcreVGS7cuijA6HLIedVy6kcB+qqtd/k4K/96FlxTt+qqYSJab1lwxtP0UpNHvFBgkNCkSdcvlR1sTfmijizonr8k197vkoP5qaOy+acnjQn6k/UnDQiinJyrmZzhN1qL7X2JsISGITTLKbjyPRm43b8ebirMW5Wu4fsrTyokXLKoySuka2roPqpQqot/YUoX6VVYQ6y0fJVq2gAfRVS8myZRiRa5sAu5KcVmySLpOHu+ia4TuU6Mt/FmYmE1pOlVUT8weSeP6iqTM7lVpLVMzkFDiQa0mzlaJJtWVUXKCVCUJQ9ZUPWVD1lCRIcpE7M86Jcp9spjNCksrHmujeRjVSCNBQjNnpHaokabFYrFI4k1a7h+oVp5UdpW5oUDVRasp2/M9W7f8AWiqqzYjt30UgN6txD01Uak5FOTk5OTlEkbFlO4jmybk6Ja6xMbommt0YltE8brMcwXhw57Qg4WGeJYrKNOqmbd1Fp3fVZXlR2lacdzHBrRejEBJ0GWNar9+Zfg9YN0qO7WsIOtPbBdXUwFM0CrtoEOM+elqYNKh61D1qHrUP4lC+JQviUORkdCmTtM80Yrg0JkPRahjW5hji6faGYME32aQg9oI00zpmCKZFSMqJ2GjtLKO7GfXLgdK6Uz94D6IwwQL6xmjWtN+Lac019dx/dqhj3Qgdiqwnga/sp4snTRVZSRRoKJzRVS06c1VQxJ2KRrDTmep5lSxpE4slWkdaID5Cdyy3cI9MaHoOUsueoFBz3HQUyWTbi9vcfSklHUpaMWBg4cC+9QBdMonsM80+PY66ZONbn9arXKXaQFwVmZlQW4lZyrwzzzE7FUYG41606qZg6xTeF2t661+76YswRrTi8t1LoomuTCfknRG126SbEZ1tA9cXJicLvSjpDsF6bDsAQ1FMe2S6Ld3ydrvJSuCnRLPSbRMK8sRbeMYMfN1q++PNSsokVVMqLTuWSd6y4vLHc59ZuqSMNsjrON1cXdQ1rD5nai+0CSdDN89KY6TtOr97VXhnZ3ivfdROwKVt7lK0qd2bnjVjKixWJkS9q+CafCvacUw9oTXace2eumdFpUm73yWVF4hnuqiUVbN33XmrJTunNSru1D52Isk0aRb3edGpS3oNVZVb85MKWJM0WYgdeF0RrNGTjdIyWluNk7kNKlcZqdlF6yWcZX8zjofbb70+SfrT57EUU7WjbyTsXqX8vWitdptG8I6kTcOaEv8ABt+0qu4nu07FKiVpvKkO4TQWVJFykpY1dpGxdG9wxejiDbYcaQlrpqmepWmibW7yrDxOoGv9hBNCB00BBBDE6l28etAAquuTND/NMFtaaMTYNXdtClRXdsCton3DUi60oBAZi2tjdIwHkaLaJAnUi8zOI2qyV9tb6UZDd5WT+p1AvQTSgKAgghidVz+o73KmTd6tVbuUs11bsax7dzvOj50WBuu04oIfO8CbaMhi6sc6NYWxbEaswNK2UX2LYtiNFiyG8/p3qamaLVkhTtUu+VmOGzGlG4hJTpruJxfnRWEI6l1beedsWSzn9O92T10TfuVZSzcszKmRxphVXnFqOa7UUHZQuoqtq6XY802q1s7QuqZnslnP6d1nTJTUzKm12dGalRbjyib54syi1xM7G2S2UVojtlmYyhvTarGaZZvYti6JoMpzXTyslLusqJKakrzTZPMaVK5OdoT0XIqraq2ampY0i07cYxntHwzPJS5KZJ25nrG787kM397kKcnHmqzqnmg2Jk3Jhk4oOcaik5aAtaldmZKePNzRvxujitPmqkPis8xmBO2jrGZ3IZvPeZKWJJqk7HLX2WJlWfmh+lCHFM7i1AxJqdppkc/JV4h2Y5ithj4RmZ2iya61mdyYe892nmMlVbUHtBxrJqbqmhSm0FNdyU3VjiTUs7JBjTrUyduYnYMxYutbnbIe8/TvcjTk0dCdhQeARi1guifM3K2y1VlVGLpUkMa3F6NlfYjFcSczXiSuyXHyE8xk1dRmusbuOd/l8/p3mSmKJ0WUWp0MgE2KsBbfih6qlVcfUi2/GtxZgQxzzVR0/wDFw8xmOkZFOlkjLZausG4522Hz+nd5Y1ikpikwyGk2IO041UzGYBTmWhN0lN1putFykFMDEm92/MiI+rraczULpaWyWXyOdth7j9O+6KNeIYTrbkIgmDizCMM7MwFlVgrbSobReE3QjEC6M1HKdAazNSitJs/+hTLt+Ykg206lD1qENKhKFrUJQtahqHqUPUmakzUm6kI1WWgd90qsFLFMA7E2Li1gqhkaRSG3lTsai6lkso2pgVZ0wiy9MRj7u6ZHhVpzDoRsKESWvFrDaqljk1BOcnJ77z37qp6vCK1GmguTkBpQxCwzBkpWOTD7wTPiTB7yadKZElV8D6l3EPCJKakm/CpXWInwma6N1U7MXqv1Dw3ZQe/ZJG3MynFdyVd7naycXqzvH9m6NeYmQujgt3Y2Sf7NkpmevHm9qkyXCPLGsl3+WZs8GHRFpFo7J1ZiemfgduNfi2eDVnhutSz0/B7B4NVIOpTM9Buz0jnrJd5sHg/Sw3SvhCty0+KdLEazWUPiUPWmMu8Fyqt1cVPNS8TPSAjQopUQp2nxO3wYNc/JnYpf0078tF2gUW+I2+DOFarsUQ3vR0vTRpnRb4jIgm1B87BbO9VCRq8ELRvTta2+KSVQzRdlHT/blngFnjX2/tywUErZNPhWkSBu/s2zNtdVA5rYgO0mQbmp+Fuq7fJFhIOgy/tdpLnaJSTYfZvT36ZKsUIbRK9VSHznXNv9rCYnciG1Rrpki2ysi/8AtaxdFv0olHWiiVYP7Wtt0FVnE66fkg0DbYpeASU/F6pumtEqS/R4BMp5CciEdSl4jNgcOdJNyiOvEt6gQ+26smsHVtAU+fgBiQ6ZIHxCaME25THeRTLw+Q1KFKTSSd3/AGqnZsR0mizwHIIvkaQRJWy1eDFjXtHvynm5ZDrk2qXDViz8BNrQj8aGlyYwEqfiXSwnDSpeCzeBOS/zTogm51UJ9Xqn1thsmi0lpEiLO9wMKA9ok7SyVqgaXvPyWCj3Sd5UDB4AdDhhprATUGM6UWN0WqyagX9I5ywUaHHe5YKxjj0IsB9KPkp5qqgbqDDMwoJvCgakwCrDYBO93e5EEictGtYDGc1kTBWsLrAbwsE/IYsF/IZ5LA4LHPdAZJoncsHcHNh4Ixs/e0inKCrPYDrFIbhRlpAJpfhLxDZeU/AyGvllCdndyLRYUYkGG43loo9nZ/sHoaC6HEaTY02c6OricDvSiWdOtFH4kTp771sPjb60+yxdw9cTKCNkrFCYAIxqnzWDMGQTEOoCXqnYREdEde6idgtJX4VlZ38x9+wal1kLhPePZoPAKOoZ/sHoaMmNvFHVxOB3p4f1kPib60ywWLy9VWNNqwt4BmwA7ZqK8zfFbyBTNMZ3IBMwN0NrCTWBJmomEGrDaXeibg2W/LifJu6h2Gua4PDaolaJp/5zf+J+66GI6HOtVMp0R8ItlUbrd9lg2DgdPhMjs/ZWCYQJwY7neX2UZlsNwibLiiwycJEaE7CyWtc1pHxG/cne9GHJqhe9Eed1iweBAiPbWrNFhJUXCzJgs0uNwUIDrHuJ2WLomGJBcTVvaUXmq0TJ0BRX2xHCHsvKwTBm1o0V0vJfw7CbIcRxOqtL6KCey9zfmo2DCsOsZrF45U+zQeEUezs/2D0NFkbeKOricDvRYNGyY0V0N2i6Sg/mv+Sg/mRPl9lA/MifL7LAsHrNEV7og0WET20YBhRqtixQ74TIfRYLDaXOiRABeZj7KAHygFxbrdQyI8Ne/o2n3pTUEgHpXOB1SWCt91zt5WCsBlBb6qJHiOZCZO07gmC2M6sdTbAsEH9EeZ+6hOaTByHatBT6/R1TWnKW1PflRzUHwi9YIz+nW4rVgrx/LqbWp2BvkbWnsupix5Of1bD5lYDgDK0Rtcm6ds+S/h8Rwa7BQyemxYNEuBYdbT9FEwTK7bPiGjf3HrGcTfWn2SNuHrixMHiNbObHGRbv1U9bC4D6qPCqQ2uk2YFwpjYM+GIbqswVhf5nyCL3FxtLjPzQYBFjCbja1p0Ko0u0NE/JOwiI6I43n5IwcJh6nGqdxoGEsL2iURtvFsRaZiwhOwmBN9rmmU9dAiQntcarSLTsWBsc2BCsFwMrJ76BVdO6RTajo0somQ2AUZUJuwlGHHhOHxD50jB8IcG9l2UOdHs0Hho9nb/sHoaLI3Kjq4nC70V21fiINV3ah2ctFJZGiNN4caC/CoUtBrcguzAB/wAnfTEdWfCJm2UxspwfBJw4UE2Ez0WqHGeGOYWVrAb6cH/h8Wv0NaLFE5/JCf8AJs4k3CIbYjLnUB+DOOlkiKA6UeKJ/APrR0uEuGhmSKOkweE7/H0QeC0iYK/CxnN902t3dw6xnE31p9kjbvqMXrGcQ9aeuh8H1WWziHqrBR1kLhNH4iPM9mHlHfooqYLGP+NEns4m+tPQ4TEGgmY5rqH8dHs8bgKkg1oEZhJHvDSunYYcJtUG8m9fg5seJsJnZeFgwE8o7JI4XFMQ2aANQXWQ+JvrT1sPho9mg8NHs7f9g9DRZG5UdW/hd6Ufho7Sey7JdzpqRWxRdEv3igMbFwh11w5Xo4RFfEPvH5aMTrn8FPWxeN3qpObvCso6yFwH1o9m/WaPZY3CunjQ4fxG3cgwBouFgonFin/N3rR7JD/V60TZDiajLz7hls4m+tPskbd9Ri9YziHrT1sLgPqstnEPVWCjLhbjRKC93xO9KIboDxFdUZpK/hmnCH/v9K/hTf6hMtc/ssE/N+R+ywT835H7KHhEYPhOrCrutXUv46PZ43AceJEeyqxxk4aNtPWwuE0ezQeGj2dv+weho/ncqOrfwu9KfxODt+JmS7lR+Iwd40tyhyUzJfgcBZAHaeJH/wBsXr38FPXReN3qrRvVg3UdZC4T60eznjNHssbhU8Jn8LT86cEa5w/BgkE6vssGbdgYH/H7JjbBg5H6h9k38g/8v+kMMhdH0VW0Gdad3cMtnE31p9kjbvqMRuEue54myG0+a61vGPVWUdbC4D6rLbxD1Vg3UZcLcaPZv1GitgkbdPG6l/HR7PG4HYj47qsNtYrTGfyb91gX8OZXdDB1TyiSnlzWshNaCQNdPWwuE0eyweGj2Zv+weho/ncqMh/C70p6GPUPZi2c9FMv4iWyyG9Zy/8Aq6fCHS7MPJH1xevfwU9dG/2O9VaFYN1HWQuE+tHs54zR7LG4V7QRrYflTUjxR/me6ZbOJvrT7JG3fXE/C4GZ9pzS48wstnEPVWCjrYXCfVZTd49VYN1GXB3GjIiw9RredHSMcz4gQjCe5jr2mWL1L+Kj2eNwO9MQYPBbZlPE3HfRlQW6JErLZxD1Vgo6yFwmj2WDw0ezD/Y30NH87lRkP4T6UyM9S/EwGP03O3ihuDQokX3qtUc1PF693DT10b/Y71VoVg3CjLg8J9aPZzxmj2aNwrocJhO0TkedJZF6Ydl9+/umWziHrT7LG4frT+JjCfYZa77Krg8XgKy2cQ9VYKOthcJ9VIg6lWYw62ih7xDiNEw2YMtqJ0J2BR2ucCAbHT1FBwBFoNAwvLYasT5OWFQ/6RPDasJd/RfzElElWjuEJgv0lNrOqWtmZbl1MTio6iNwO9MQPhwyLi0UOiNZEaJ1LDuKc+IwNaTlCk1oLtEiKPZYPDR7MP8AY360fzuVGQ/hPpiVIhgm6JdxCibmQR7uU7fjde7hp66N/sd60ZI3CjLg8J9aPZzxmj2aNw0DCYYaf5jLDt20NitLHiYKtnCiS2O+6wj44fz+ya3KjRbBfKz5qCXhsBsmMsn8W3PzsUYva6JJjQQdtLYrHMdc4SR92M2W1H3ow5KFgjKjOZ0lD8LGt91RHlkR5axljr5khN1jzTdY81+MquY9oczWb06A8sfKY1GaZUECKapb2SdIQN1q1rB8GnKT3/C36p+EvMR95+SfguQ/Lh/Nu5YPHGTEG42FTUlg+D3vrH4W2lRMLs7EP4fujhLiA5jJXlxkoOBw6nTscSZk1h91B/NZ/wAgoD2uaYrJOBHbGlCEHOZhEJ4GisK3lSII6GN2fddqUOIJseHbimtGU4AbSoUIFuDAF594CQCY9ghxnSePePvJp94eawWrKO5hGo2rBMJdXZFZAh3VSco7ZFYLBY1gjsk0S7QWDfnw/wDksDwqGYb47Lf8rioNaQwyFV1rA8CaQMIY4uvM1gv57PNYJ+ezzWCZT4OFM11D6Ckw3NcL2mabEgCPoqzKMaI+IfeM8Vr3AOfUab3XyWAYHMiPWcdMj9lgn5w8j9lgn5o8j9lgby+LCj5RtqVTad6wSx8eNIg9iqfVYH+b/wCLvssE/N/8XfZYBhgFaMWltxDT9lBMUtfFqw/jqznyWAYLD6NkQyvta635LBPzD/xd9lgT2lrnzDrDku+ywOU4EVxPwlp9U6G4OaZEaVojt/U37LBX/wBUDfYsF/PZ5rB4fZnEOz7qNhdhyWfCPr3F3xHzKd8R807WfNHWfNHWfNHWfNHXmIjOy9zdziFFdfEed7jivHvu8ynm97j+o5sjSjrNJ15vCoorVas/iMlFwYyiNlq1FFxAF5X4LA4eDDtP7X1+eZyhv/s9rsKgh11ajp8HdVbWc20a10HtOE5AZaAfVHCozomi5u7MyLdv9nlpmLCFISjsJl7zfsoHuseTtkFFwyw5LPhH1zUyNn/7M9O8/wD/2gAIAQIRAz8C/qmv/9oACAEDEQM/Av6pr//aAAgBAQMDPyFQpXdu7KckORbZ8xUD/wBh/ESWoF8oFgMqW0Fk7tYObZEGaoTm1Scahk+KW1ZPAG0ZpmiBWFHcU0QgreghN8imPP3/AAUeHpItzaEeUJ34BFvhWPMEx9Kk06R+wRWBno0joc/y+FctNuL2OK7AVMPhU5Z4TEKDVPkYvoQVyTuAUB/ITn0FkDGZxLBngHnJTXQ5K1QBd/wgIp9pMB6Ht7ROdwGHVg/l+ABX+pyO1QiCgoTQ7FCcQRV9lG+nl7J1L4PlHrZGHZV+Q/SEwXehtuxGqGE8k5TOxonZUGqYc+LDinh+UGDlA3Tui+FD56ZqqhTgqETJFSESFUtQIWDYozuxFpV/t05fWep4JXm7E+EuCmLiqfgkpsffaL2QdV3EYhUwkqDE6kE6oHF8nF9uqdMVUcADIkgRxK4/WABgqCmZPnjH3RNDsrF3vwbZXDImtx8ZHZNyP5wpg4CvNOMAhSON5uL381DNGauePyHD5WIb5WGRyQrQKTJFVJ2+/wAu73yynTPRhOSv59spBJ5MmmioMjP9QycTB9Y40+bi934sjLZOJzRhKp/x65Ddk+Rg7fKcjumEUr3wF10QW9nhz5+LTr8BaFo7YN0QjF3zRhKoowrxW/LHwtdPLCqu9bIxc7aKR25rUfSCoKhkZg4MWom2ofYMMeS6e34Xe8WPJ8OFGEYMZLILret3ZGK8ZqcN+BGM8wU4MnKmZhqUHVTQmhwo4EeQJCYptS0sUTrCawUSzHeyA1PMynDE6ghVF4DUFPLG1kHOyiOBquvJbZ+/VOJ2nzxEfntnhk+OLxdOA2DT9olMR4CHkH/0fK2UjyyGgE732W0UEASNl/CdPYq3kFSJ6yiD1cig9BtBCcVi7jbSjSQGop0NE8GuG/4X9GvER/xpxfEZSr8BzRIuetlRTqZRKdCagth1lEF6boflumgCCbmf4onSTmMVZ5IkCNsuad0K57oibDEN+0AsHL9df4mBDYoXcNIXUhaPwT9WvERxm/IdlvhXKMREoI1PtBCMLlF47QNDoEABBw7TB0ojN+6UKc1QfU6Jl60TM5QF6Pn9Labp31VQNXlfujcqqCvSrvRSYlgeqJJ0RGjFMCDyFMxrLMq7GE3GXe+xwiu1FI0UIcZvyBCIQKfsenYar3ZQADSG2oopiE1M1hvv2UwTYch+lETcOyJlPct9BQh3XQbB0aunBJTACzIM5Cc7EYEbXV38INCWHdYfaDWpl72ByF07Nn5k0Jw6qdF/WPacXun54QIJ1HH2z9xkw41cAUQhzxHBPZEmaQOt2WvbEiwsHV6JouLCmwa7oiXYnWxXwckHcuT7aG5IGbBLVCjwRB7mEADYd0wAJFLObhMkSU6RKOT9hSTI/AZvhSFUiiKGRN6tbVAjQ+dChzPvDsOLHEDqOORnYQagv3/xRPGqtU18HomAQSRHVHRu5qoBmGruee6IQGCg+SnynxDp04MXdwZz+aJ5IWF0IhABsZABXu+DS9FAoE0GjLVCGrfKY2WjumEZJ+0wJIkpm6JuiWAj0f4piLQ6hdSYJ5GaPwgdeK/CbFlXcgdkw4AQTYPg2R0IdLshQdUTDpITksZKhtD9UHmHx6MPIhAAaw7j7dN2H5nEgDmobVIwsmsvUVJhLn+uxlEnspzNz9YhzokdH0ufg7nVCWYgCdAap57zMXTsPvNGeeT6cN+Awcpsrps70v7CBDUx15JoGtT8fSfgbZzjB6KRDChAwGNDug7/AAheAUHM0ftDDDunYgDI1NfiEHGj41xYBpPZAu1JDliy2b5Ttn6TJ8X2UrUChb+hBrhsU8o+Txez9PwX4W2V0A5feoRfhu40KrVJ8f66j8J/bpjCbA+UDzKUUIMphQNAHaFWMYns13RE87XxcIQ3burgVE2Y6j/UzuZ7ZWDz8Iwi3wJ+kxFBboCLO4bqvAfPF9DT8p10QKCHpWweU1+xRBDDwgW47ue6B6Lch/XR/CNQ/bkt5iQ0DJo9lQ7NutkQ3lQINgd5QBu795Cx5QiAOyOAW6EwjJVMTw32iAQLEnHT7UGpHgVWdVHR8niV5Lvvy7LRHBd+kH6CgFA/QXTcvfQgSwp8x3PyfwmtShVLOdHonDo62DCaHLkel69FTUogMgOj+yAB8IjA98WV8xMDV0QuCnluPMPtMC8Hyf8Aksoooom6AYLmk06lNcbs7p7Juak/xvwtBflHqOhdmJJ0RAbEeVQbS69U0mSoZ5K6U+nZPov4IWJEHGOgUbACmVkJK3FiOiZ/U4eH5/JLh84JMGWCfhbI6ImsKgkoiSkDBuqmEnV2U+E/4IZNnwQveSA8UpuboJbqcTnAL0aE9IqEHkMhiQjquaNjCiTYBVbpjsTQqL334lF233xb/hHRG5VBzJycVDfbqgCaobYCqYtoSFOU8M2U0IThME2BJspqJ0yfK1VU2qK4hYJAOzp4ugf0eHRALcbPspDp0wTFPYSULjwhUHorB0RpJhXponKi7n3xKLsPtbfhV4Iw3R1RKEiVpGC2pE6oth/S6k8z+DITwGZIDUJ4mGE7kIbInI2CZPg4ZoQCAyIc00aQ1ryTbmVCGJd0yHYUyHMSnSVcAb5TImz1HkytET0VNwnUFFuSpn1sPRrxPpOPpXEoo8JvwSmkuiLHoMaig1GBOj0A+eqZbn8FkLQSQEGcEogjcCkquIRFITKonAyVKhOSHZynwA20SCE7DKuwQCGmbdGBh5UE4OwnUKXN88T6TYerrYtIR0IYDQVpODV+OdU26INZUOhMitB1r9Ay7xwf8BnV4Qg+ghM0vHSERMrZNE2Ip6h7IaJ7spclCo0GM+Z+eG6+l7d/zwhgaouQJowFOgS/U/H4eSJu8giCUkTP8Kcf0KYVMWxjGMt1BwHKYYeZ+eJ9KXvX8V+J1Vj2++icbmp5Wy3VbrQtCCyKy3Sc5wZTOjmoDo3Qf3d7J3RSTjIQccF8YTnHzy1VWmSPpPEqun9v4jpuI+y6DW66baBN0MpUxRZDnKJoX+OyZ5OfAJAioTmC8Ph1UPQoxjCcxzaYMUQA9w6BBQ5E84snHNg3GCD/AMNMxd2PRUbet0/Sy81z+U9S7Mgn/U2yfgx76oAmAIs1VJ3VL1xZWElPJ7YCQLVdMmHlQVs7r4QaSVLT4s+VdziK8l4P+Dsn9pvg5PPLzXNc8JYcJwQrdRXyoU4MG5XpRQs6NKfxONmnqmjFSYbwg8AAO/igtzb6RIlhJqSl0TJ8HJ1yg7ZO7/0CYcAc1DcANviQi6iNyYkKqpyw7soONVtU+ZigOicPZMjYj7T7pHO/NOTs6oFAQ3VFDiKhOHVeSbKnePF9On/DfgACeAyfIw7wnealnu6Ec1KBtk7k1QGQ51T4BdFjhtUSxQZ6aKhqHQnYpmFl1L6ozRJVR0VVkox8/wD1uEBwDZu0Kb9EQ+qjYquaJhulahlcIGqFsLnp8I2KJlAArkGUIIByeTkoxb/v/IzQ2qEtVCBuOqetk96y8oc2a3RnAwyopNk29E5V2jugLBAhRsUAA7Hmi9VYJzlOzxe8/wCfGDVxZPi52TssXZTYu4oAeGqgCSWim7JyXSgRg6oEe3V7uyluakORKPc76qeiA1mQBDGQrjouKfwVyOYTl3fmiIdw6Cj8Ip84LdPoSvCLC6J+UGYoOSb30TsAsP7suirqnBQL7B/CcBh/pF3QlA8oaKC3dmTFzNchPRk7DiSOY/OANmyAfcD8qdT5lQ1VDJwt5RQIh0CR5+JWoc/1PNb4RGBQAPzITDn8qWgAIND1MPhXbuiITlPhBT0ZO04kjmP+FkD8dwIqKc0AVh+ZwDkIo72LhABooPlc5AQ92HhEEa/ROA8PVOClmyo24feEILRaCmpQp5wheKnkGT2rcSeYJ/an8YYk2xlOR/iNB2I9XQih0M1eifdLIrPNPwSScYQTpmcmYEcvQqsLoRIRgQJBRdKPpORsdASJDOiBrCI6olmNPQnAtUfKcFi4KMbYsE8Cp5Ao47Su++fyHyQFrCAChB0GN2QXKMmAI1IkknmXVAuRGovz/BIBiFQ1Vcro0l6pnCjFyOSkA3NUSjiDFkXdR1IVoyE2M/TJ4BOVHUocynkGEoCDghzQ7FCWCB2wXIHeUYggL4Ni2LYtmA6ILJxAJJNd0VhjwiijklRlfA6o4SmDZEGqJ0K2T/hAuGDyVCIGoC4P+5TbZCvVB54vg+AZANoNU5bROgoGLQ5Y615lPQoCrIAgM9whhg2DSg4CSSgBYEZN8PvCcri9p4LxoNUAdhJlkDZyFXLagUEqqmEs4dzsiQdipTkd1uFuFyQCc5Dp+I3R0AtcAw9mysgbR7Hhd0MsIp0YBcvGBODKFkqXL4Kih1A9iEDtI03QuhEMgAbTEBtzIFqGPOq3Qkcn2Tqq/WNU5bfdwYxQ2UAEHVC16ok0LR5R1AoLgaJ4ME6hP1xfAKKOZ/xCNf4AIAMmtGV8pABYk78kBdnmhxbKyjsl0T0HjCF735Cl6oqbJtk8w4QiC8hq91EN+mR2XEPlEFhoHsEYn2Sexry/1BOkBgiI2LrXRAd8Bkflhw6gFeV0o6Ip0BihYpkKEdVFslaPtkOxJCADvUJr4BBBBDVBk1/COh7YdyB5MpimaQYGX6sY8J8pT4Dm3wIoVGEJ3HyFL3TAgrAuWb3CYlMqMjAhvdEPYsoAuPZPjOAHr0QhBtPUPojAk1dOimAWgjRFAJnpuQr9eTo4LoVRSu2HQPFbMpaWGMHOyO5ie6Ywk4BDRbYbJ7BMPjK6hSYThy8IXwEH6kMsA8k7C2TmMG+YhavDoyFDBPO+dyBkggbzhHWu++Qpc/jh2wiD6PCBZdwgAEP8T2DBuLiex8JkgRS4IiiZ9yJPJH5J1COIgQzmA6fTIEIRl5D9ugwDUUA3sP7wcnBka9kAoey0ZTQCeQRuDyZAK9w/SESUAbv0gs8oTh2J7AKwQ/0gWog2w7MB4YdEyALtEKksECBNVDomphFRKJNaDPva7ojsMIU4sE80TlsYxcNcfBqrFRyrvPnBJTnYLuCdk2qiRV4EqRRSbpzXhruXQADIkHcpwCQAcSTJNQuGcGXLppa9UgEWQcOUpAQQ3JEtqRDfCAdKoIL9lZT5UjmE/PcEoBGo6l2RBSoLckaqDkFBrGqALC2DjAI1ByQb4XcwwUwL2CXK1FvWs4zWqGkgTKaam7cYwA9SjPoBDcO5oDAonRynhBnKCCqgJBkLR3fvmJAxARzTNTYN9uicYD4MtWqfs+0+OowaUQedEQGy7hHs0U9E3ap8lTIEDYIaIaDthUwfDSwhzCcu/gh7d8kEyjoOwc0CzICgKgmIe0wjAzcYm+kMpaWW1bFsWgLQtCAAgQbJg+k8MrASdk04JsxTbuC5VAUBgwTEmTstUJi4z8oA7nhDEQm4tsmKcDChQCcEbKG4ornHIr5QD0O0dhUufwUqeldpTmcQQftJUAksE+X79lO4j54IiC0mrclUPAqMA35oi5yz+EBhYgpw6/rCR6qbYQjXNmVQcPTw9JBYgNCEYCSSdavcTwgA7oYMtRQQyCGMJkfPJw4zXzuhWkqUUpgHyGw3QHHqR3TmiFKJdjopXxUeg/BUnIA5NgoQlFm5dEDmGLHJ6gqvjkeZUZCCl8vQB8BV6+TwW+8ANGpUIth+k0QByAIGXNqXeMhggFG0QVwEHWjyiRbfBdZOhhtgURfAm6KkoCK0gozOE8pkClakNcIKcxEe1PBJYf5P+05QnOLeVsiYwdUOv1GDgRYpu4fmiDhwA3AKdwMTDoXKTlrqKCiDHQYdSGlUybrCESQK71fKwLT52NAE8lrI1ZR5OAJi7kqn8aEwRuSHBQBu36zpKa6Mzk/3M1UTQLUiTA6APXojdNdgzwqhOTKBFbIkFgi4mlw4dkxGcmNRbutaAnmZwjB8PknGBCAR1BvjGhPdRyvgroB8lJySDUIYDuLlREu2PZ2RP9wU6C01yvcuw7olfFPmtLWdOEtdEtTpti3Cacso5eieAOqaspoCLKCWgROVAwkFRmlOMTg4nnVA78kxIrLIhBARtmEAw+E8ihDOuVk7800hOJWK7Jg9O8IkK3xUYdhgZtCPgqcoBJADlRQfermQAIDXyyb/AIOBQW7CgRbJP0hCJANQKYCzLtnKS6g4PJC34LZAmlHQ2JqIkJCUwEPoQ1iMQRZygE3BM+ACdABEFjpgCpoEEMtTdAAknd0bvMrQJsMbIcA9GyxgwejYmRL0D8hh2k2dZJNrs+f9ps0+wwIaAQ+PsnJALFQ/KAakXkaE6wcDRx/ZCOH2gP3+O8aJkSWCSmAsgHaUSYIBByeJEjaimCdEaYCFIK2DqMBT85Jb3fKRStQpBf4yS3gYwfaYuZ1v0unOET5ogxiARNgr9YSSce4qtS8KTugiEkHMyNoboQcgyjoipGqYJmfgt9ITQ0OqRr9ENSNcvcwgzQdtQbwgLEgbwoSDcg3jno6ah0dZOSvFbK5nVUYEByBNFAOFcoKOIxE6oWRGARYVoTOq5AeFSXMcrs0f1FbSMIA1xg18RhVEYeivkwBRt8gXvXwMtUH71KkEf6nJ1HUIUVKCcAXqiBIMCqZPrVydT4GDfcy76FaN7WMjuIxYCESNNlPxmhVVGpwr0E/KyYIyTDjliULddTNwFuSAb2fzl8LX/IAH+cHDYYAhSpEejUyEZ7AHM/0C84RM+rqqM1S5PWqE3eDVEci/+ppnjB3ui8vlA4Aqu6e+MFd3w/KGQIE1ODPt9pooylIUtnbgOns3BcFPszm5Fjuf4C/ah9WDbl0KDKPh1kCAR2JKYDlCExAd0/M73X15RYkqqCcJizvRCYNqDdERAOz9U7uCGREXMxG74SWZlUVQzgHvhJMLU/L8gyZynLo4PzEJg7KugAGDTndV4F09a41yuoCpfaaNPrK0Hgv3TGF/jAByaByeiJE1JbllnsTBEHQfsJ9/74cltwpLvfP8S6ucXKsmCkWBvqTuSaAOG5+A6cnwdT5X0z3OXZsrtobLRPh/EM/zmpsiwnRENAkbrs/PFjhk/ClUIBgnTOS7k0NkzDthJqAmGVsGyBEKoOz8B8TAVTB8WdA5yjYRjQHrkX0T9W8qNSLOSG0QBaMhymgEEEMuy2WyKFLxGRDWfLfrjxlqquycugCcyY6d9U5Jkx6v2U4G+V0xZADYg5lESGYK5uriU5hdN3zzg8J4TMt0AFSXxlIkQiKjg6wqhIwAfsjrhHzhplYtrh1/hxe5/AjKxwZSwwdgEyMIURsmjROMHwdVBETofsRVk/xHZgSGOyrxgKboiB1TtUKAEEJgnzu6NCkTlhWWyOzaHTQx/wATpGx1F+lV02UBNCgatPG4faPxXKbC90zcqpQ/TFhBh6pxmcFJh3RiTOJLV0BiA/SDm43eqIDWESxnt0+IQxdVxbGRTuriPjN8opemdyvpNmhB4GE7aA8Y9HT8UAymME5TSnODuMWDoiWxBHVPlMVQX7IvC5b0QbLVRZggjUJhMAMWclQU+aFXF0GT0NecCU41PnhEwByacB32duui8vFj/GTFSrBFEVXUX6UIENhhCfQokVyuDVPVDp50JSEADKaFSUSBT5GIYymCDr/XpWoEcEiAuDo7/wBE2c00vZp/xE4KF1Yg8OSZMBThBwKBomR0z7oGSFGURBCLwchCyc4IeBR2cnviyYJlcYQmCelAfMfrg/CJHN8hH2jnZZ3hBx7svcrxex+POUuMGQTQn5k5c1ScCitGyG4c+VwyiKp8HyBBlaKqGDoUQdqoDuS5KYL0QMBwhME+1+HBIOWg5lgPlM4NaduATCqeQUdvgXwP+IJq0VxgDhAKq0Twj4hAz10U1ZHQM/AIaoBK0IKLAVkIXIVJIwBByYvDoAJW6KJOvwnJOpPBB4xw50AQ61I+eBLkiA7AN8Ig5Ec1quQWo9lrdlrPZf5rf2WoVqLWWqrTRzEygvqcG/HsVfB4RBZZMbhOY5dYgAQeifIDDZW+wQ1wC6AcBA3QnYT7QumHsMCEJvgKILPRB2myYAuAGTKFFAZg4W9RwfK0y0J+LX8l4KZMQgwUxZUOYQ3qIKHxZOEQEgom2XF0y6GgJRtArK/npLUA40fksmbjDVZTChAJZFZuaqSQUyCOigVt0NWinILbrYPw5QeKcef/AJIE7o2OtRTahnJJwKbKdUdfx3ZuXBMBJoyJKgDtiQC2X5nfjRx2txSEdAtkE0CL84FhLCDsAx4OlgMOsVRJf6ssO4n/AAa8MkNw3wb/AIZJZX0UxI0jOz1I+UAufuGHlHL4PHGj8qDgCmP/AAnOE6ILSneuL5G26MmrPYczHvBwZPw4ytwnICF0KMkHLPnjP/DIEJNx0kdTOdi4LI1FzZ2HJPiTkpljF8I4UENUDkjKYd8Z/wCG/FnsOZEKk2jqK5YPAdE24sIs9sJTJ/wIOUiJHCP+GRtSfsnWajXispCKA8UIEA/EjJKLDWRvhH/E1AHaZ+EYX4blEZIHCp+RLNeQsDT9IKq8GlkCD/xJOYcjpV9JxGkdRxJCDkijxmfhRkfjVyXq88kVXigqOEn/AIbHiymLM2eFTMyfiwchUkbR0KNB+ENg6hVxYS/4ke34tWudw3Aj8NhkekzgPKsCJILyFlL/AInvxxQEMiLJoCFx7ItsF7qmVlOePw4yEMWctVE1LvjP/ElMRxKDcBNtdnCPWfB1ZDK/5UZIyz/xXD8R5f8AwUwcBYcWv4yc0/8AFHEdi1h2YPnj8mMZzOm/4krzww3d5+lRW2CNAbtEz/WX6yvGaf8AwVMQa3n/ADhUQXDydgsgTDJ5yhvLYIEDtCHdWGiVOMXTJOZj+M4/67biEtXIJVIGbrSNkaxc13RIJiujoCXCDm9HDj8KMbf9bd4dO0s4xcAol3nBzp5wBqBQS2+WPyIxnE6Jv+lVuyJAA0w0eypQtZQqhO0D11JqIH5joMpwhxgFsn/6LkDVMA3AW5nwuaU6ogCHoVeJA9Be3NEWq9E/5hav/YAJPREmbzgHCw1CgQ7d1RFK64GYEdExI0+vy3RAxYGqAL+f4rlYJQXqkhkxb/nltkQZ2cbGxgAnkmCx1IBMFwLAv+kVAgsW7JxJqRJ6z+WyjFiCLEIA9Fqhoq7BDJZp+f8AjO7OWDkgU34NN0CBIcXUVsrl0RZFlwLjyg5iWD5I+SWnuiqF906Zuv5sZCGdR3RqQy1KMcgWqEf+MyEAK7B4GxvyU8B1D3QBh98oTtCI6IaVxunfmxkeQA6OrFcJ3uQD3onEmpL/APF14TqyZEQYfRlWYe/pW/OCk4kBJdHWfeaANJS5PRHEISROqoaIoiXA1BH5bhy5DkSQ/RB4ghK/Xv6RgFod2IOpRG8ojzJgIwCDNwwB7Oq/OhQkUluXNCUlqOjW1SBRwjuClLuiFECKEHyt85/pb/f9I7mgEco4U/ggYCQJKmwoleYO6aXeV/Ef3hgCHhWBQgF3g0PieugCwXYxMxI7u33iGRIXNABco2kWD3p+OUEIJBEEInuWJ3yAGoQ5W0YezfgwjXiNfC1oPRVAuv5voW4mD0BF5x76a9ACeSdeioBAtDxKJNkkA+5AKoY/IWHQYEwAkMAKkqHhHwv2XsX/ADAg9Gxw9m/8lvxvasUDBxoPgUmLA1UGAAYth0TQuYP6V0S6UJAshSTVoczRNt2fRO+Dm0YRz8jgpFaIDAttgMT20/Kop0jWAB+QkiGJWSbmGFBICNH8ijDIxIMQrMYYPIujoOp9hD8I+hQIJy4fQVC2g630gNXRH4KA4weSWFwR8IUiMAOShgIPrt5TBqHuOwDlEIW1C7EEKa3b9UQ0CvlP0zsB7OuHsXorgkBodfUmhXt/WOhDg8AtNxhgIWRdjq0nQzu5BgKyfEsuTswEYUNA0HRHIo4LQPKqrejsysQNXs3JRYNFFB7mgQQXyI61KEzm5dR0whwZfamQgKBhhyyyCHNuddggM3cRL6RwDliEEJ8V+psd8QlVgcRbD9oAqABOPagINMmBghOrIZJ0IgfReIngt+D61igYehZlecKRIDmfRkg1UEFInVk4HIYMjHGAZB3C9T6RxdCOpJbX0A2JGqBqoLkDoiCTNtYB0RAGgdf6YCgGQIsFS+kMQnQRBBCEK4HoCh54dM4VyK0jRh/I+uAG1LkyE4CWY9hzwd/RjzLIuMQM8iY+MAYMugkwGNLh3w7f7ya9774e1ciARscdEXR2z1NzCE6sm95rgP1byo+82feQygAiNzy2Dgg3CMctihwGSXkyneiQAc0BxJciJhA1GlJZXPk+Ecor1BuDywZ0hWkz4wAyLtOf6wL1T+Q+cCeLkgCd4fSFIFiDQgpt1vdbpT8D1rFAw7HKe/YoHIYd0ns2LsDD1bjAAG7e5Y7z0wISsB1IGDoW+AnwYw3QU/lejTD2bIsIghiOiBQm2Wo1RMEc6Q0AsmGd+G/MJoe6v6QhZ0R7K9qxQOQw7/5w7f5OTTuffD1rkSALDxsnY3JGoPQ4sKBvXo2EEAHjpIvpXMW2CPDJ7tcfbuRIEEE8pw5DJhyGnlw7haQHoSfCBLBANAMHw1+RhUsflw1Y58qPP4HvWKBh2eU9exQOQxh6Ni7A+MPfuMI2Wegft8ClIzIdp6oaruEOC4IES06UNq2mtFBgljATqBZezTD0bZzQ0kkEwABQOWHpXw7f5OSSOb74etdi4J+aoPUNgzhxdX+UQAJJYDcoQ0LqSXXL6NcfTvXYfK7T4zMnuF7VRhBR8IRJJOQZMp4qYomRoABP4aNBHNB2GH4HtWKByw7PIOKERRzEdmQDVIOSw5DGHq2LtPjD37jBxGg8IFvERm92mHoWyCGFsLc9ESAz96v0nNadknhSm6UAlrME4B2w9K+HZ/JyCR63w9i7ForSdrn1g6vI70hWxP4KrvkdEeiuI9ipdwfK7b4zM3uE2Mgk7dklx4/E9ixQOWHZ/DJDN4fB0C92xdgYk9+xdp8YencYA3Aw5A31gCVO6BCBiC6ZffpmAfol5s5DA/2u7L37F2Bh7F8PRqcyD7N2JEBYkCDoQhpLkRH94MUCZuTQOhlEiTJJc9cvr1x9u5dwfK9y2aSd6gQLE62jiEKEAtBjyPxPRsUDlh7tGJOCiaxanUU50+FezYuwMWbgB7FAbQnuBgVMWnIgx5QURgROgBUCnAI3mOhRTYOCLg4GaNMXoDXfdEY7/wDSjMBdB5T03ZQDwgERA5NS6HXp0w9i7GQqlGO2BLzMyRc7o0GiBoQmA5DCEk+3cYejU4epbIfRuyP2J9v7Bg+oHqKDoPnN3Pzj7dykcwvUtmEnepkcwAAGkUD7wGGvBQJMlhO3R+k6xzQGhnAWd36Tcodc3kuOSASSQBzKGpQB3JpoMapIuqeXFjWPhODcbHPlAttUhDupQRpMVF0/kUNQoKPugjxF/EQbKEMBgM91TJUBY0kIKLFNoE6oLkA2LoAUNuhhogAZ3WRM0AKBYBMuWR6G2QRFJvtdChQQeRdCRIHMsgFuzJdo8otpQDXcroBQQQYsdHqUXQgEPsnp/lO1l0QbVBo5NUGwEucRyEDuTsdkEBHQKON7MAeVGyCJyJaSqB6CwG51QHBRqATtZ3gXQCeyEBT1KB5AGyaNQbS/kIFQYQQDgoUAlSuMjtCN8nMIpYbYGQILJhN0Ak6gHziS2ADmE9G6cQJHdVZP0W8ZQeMkBDoCYcViQI2GAKislOuMwDGWYGUreG2NQBqgjAID3ifbPqKgjBC7AZMpqDoJnEkSiRqcEhWBEFYFBN9QzY15gURTnuAhMA99J/RCfkRJ+UCAi/QAw7k4TtZ5qn8H03yv6X7X9b9r+5+1/c/a/sLU7lE3PdHU90dT3R1yAYNp8AUBhuhHyctIHIX2vOBPvh0CHIkIqk5knHU7lE1ngugQEJCQeiDOfVXkFAJyAAakoF8D8le+GaMewU/+OYV8npAJHlsCMQoDAeFW6KQmZhy+ofARRsNBp/c0Yl1u/wDHgGcAgixCZMA5nMm+UAOxgB3cqwRg0HmvnjEvbf0p/wDNz0VP/Nz0/wDOT0/85Xl/5yv5L//aAAgBAhEDPyH+qa//2gAIAQMRAz8h/qmv/9oACAEBAwM/EHTkmEoP37Qx/amvpVUJkIiY25Ep6EuRr7xQDQiU+qx3Q5YohkR0ROx0DnKIkOB+RME/4EArIbcUmVM0BhyvonZvo/qG3x1oqjmH+qLcIsRyJ++igVWagh2W4MO38UslMvMA+hTuycZqYHY+ijd0/wBwFO5H6IT6od8SfkT2pGO2D0LKwt1afpMVVphGEHddjiMF7dhwnx9S68MJ6vtR6VVFOSFJPOndOu7Q3ZT2xY6iWz9i5rf9hN9oTzJLuETVgLEtnWQCwNYUO6BaDeWRu7f1Cug47oSIm97rNZ3TLSQC6aAN4cr/ANXZNRMH+2WuPUfoLog3DHcck0g3nAGU6AX9c0LJkCGaKo+qeOsO4JrkyHYabp/fjDW7LUeyjmqvUJ9O6oVVCc3BHcJTnFezbhugm5fmkQcBUAOyZG5Bp5E+gcsKDg8qvVfSZOy7GTm8mWqft+1Eug+02IAEVD2F90OaiU4vWUZ0g+ZExVk5jnzwNF6lFu6Ao38w3VGlgfGndETY3BTnNOEn0mb4+L1fpRlIRYlrz7nXQnh+8AtCA5iPJV9X/SdHTLRURZcTkzKbkDJJ4PZ5RxSOckoXgiSDAUpCMBLI6IBUDCfdl8jCFC0wb1umJcpxoYDeT7Tjuo3+s1WQ4WaoJlKoRKGT5SnRqOUGKhRX1h5w+8Dg7aQeyl9i/uFOgUopi0RTRdRUa2SuVsHwnkjpwW9yCjKVTjCheWEr5TKBjOGynRQVAcBsrS6dRjOVi+Ig4RWoV7dn7QdhRNh8FHn4O2BpUBsP/EREpi6roHSRknCcZUqemDnzpsjpr5/VtUY21Wp2wJOSi8sTNhAUded8z4MPwTJ1YrzlITzF0BOMqnYuJ7l5Yt2QPd8CnJJxnJPTgE+dt/IDgUxd2APl8sgWd1CryU8MjAoniRlcThKp1UpaEWR8Fuaq5flOdPi6aCjwks4brk1Y125olFjoorN1sTDsU5OM4zwwKbIPQMknijDXJrIWmGTHNkDKDgkL54A5Qo5FJzPlcMjwRyXzMW1TIMvlTyPtSeeLmwcioqMm1VCc+SHwgEawAbyGfhdYsjFbk/NshXShS1Ot9EdERN/tD96ElIZiy2n7JjbM5TYdBFOA6lkykYax3RwKOZBxCkEMMRKv8EYr3FG4N8kMmPLhuJNs8hORNcIXq2Kp2JxuOyh6sDPyRAaMmPwhA2+5ibYeqGxS8ICAPUo0ck595Kvn2KEBs1Ay7eESrz1mKolEZfqqWzo3TDknAHywTmEYPtbHdAmKtXyrFK88Ag+EjAfDhUX0mSUd+DCjKfF1uFuFuOGybLOR3PAC4QyOg2RULucOxTFVVCShrptzvBDRGVtR2FpsfIopPIrYUsP8iYfBr5miKX79+0EAXH8whWGwsomGewfJTreX/wAFsHYZrqdj3DnMIPljWuvQDVQXNX9RzOrAh1M0pFExK1AJw+Mp+ZRHCdM/T8XSck5GQPHJjPhmnAVG36x6BJTuRfYMIm5r6ums7SKrWLbqxao+QJQymBqjuED4SOCjQI/UlDAUKB0Sd1/8KoR3TDX0crkCwHVHRQgE7gB2+nVRaoj/AATA8B7NiMAck2ZlWTqB6bIyNmtV+4hcoBsUyb3XT04dei6xKrnauDxc2Xj5zIxnOBwZE1Qwf8GTA44YbgtD5Ukw6I6oLt6P7LJ2T9/fCCJMaAYv0Ikq+NE2h8qrZ0g7pC0l1Xyh0NBbmhCm01QjWSHKcvVZLDLoCL/ApsgaxBCTJ6p4/Q/pGJ8pm0J0yZP8pu2g6sUgmSDup/iBhEAbI1J/fdA3TDhOu8XXgvboVQIAkTCcMqOA+BR8Tr+Eyng7owA5v9rYcJuPR6pnYNGBzG3VIUvktNw6IqdO6zsuSgDpm/emVcGwoZ5FabLumC7ZuG6KZmwHsKdW8oORY6ULIwnmF2ptxcoBJbUXN0dVcNbQoxX2BKoZ3IGtBmXUszK32U7HQ2KDDmknRuvZRePAsnBey9C5VeeA04XV8KKcFsl0yDVBgUjiyfBkyeyGiFspNHIiy1xlOidxAFkPBlU+1T6IZDTshwpNl8LVjChMjyT6HRdoXrakKMFxI+Wa49jq43uegRs82g66L/VA4n3CBjGGHJrujwsBDgEx6kQTDqQNgESKr6uyuMAT8koGc7oP7AYKGkDT2qlvEjUmp2U1PVNYEFP1TJC0B/R0QSxJQH9DB0Q0scWa5QF6WuTdbpg75+78+EcInBNMcxw3TLTJQRNRmI4zt4oJZhNEb5zIbYjZ8AToORu+iq+KHEPvVBojf+xZHHZF6eEJPEdmB+UQrnPYd1zoMjMBGjTSlnwmAEFBiDWOSYDYkobQAudAQQwDXgd2perWTnUgCol2AE6CjDoB7wrQw1ewBGQCBoEKEBWyPZF04JVcpPzZnNk8kCG+nM00K2IWoGqOiDO7g0XtXPFU+5yGzQrUicHyzkKcyblhGZ13ByT7flH3iRi6AT4gyDCn0W6hkb26suqRqJr4mNiqRAzNPynwrqlE1xyCFoo7IaX+AdymwfJMgQ/YRt/0LVGgRDUB3UQfQBKsOZMYaJ11RHJHNlOiY5moQmLu9hLRoqqneftAuLFM+hd0uYehRKudskeUuh714lQVFJVCeSPl4pDwm2RByg4uQRuySgKtnDliUSicDsaqAu8t+hGWlNeSZJbRsrIIBD/SLo5CLrVhCFgFU46IN4R3l7JFq00e7rdiowEAPQGXNAcqeFANZ0EfLyoNUaKkmbyjAEgMmCpdXoorYgOx3QIBcE81PT4TUarXHq9HQASBP6wiRzWtWTpDi8otU/SfaFSJJTWkfE/AIGiGiAbLaBwmwc4OtUA1TWVE6jFlVRC5Chpg6KP7GFbVkl7dgEVOEkHL3UBEuWJR1RwdAIYnM5q6I1IOgG5A3DHJHcI8o48bIyBEOxANLdY5/kINSKAUfIYJ5h2ci5UBXTjzBUjX2v8AGAGsAv0/qMepHR1u6EZmL3RgARJQM6QpKf2fpVsfMSH5CQk9Ua6+G1ir2PLg0yQoQOXDZTi6OEZmKsLJoI6sA9e6PXqnq8kCght9i7+4hXrsmo0NiNgw6vyQg3BfBs8mpLhBDpQCDmTP8JqBSFdEQbi2l15WhQjpxaHP7omkGjcw8k0AgnYQyOyJUGCSHMUE2ENlQtvbJigmhaEX+EAlX/3wmCdTyRbcgQUFRUfZMA5qIAydCf5QfXfagtVZ0UiDcCmMcxe7VlA4j4wmOD5Aa4MUbIM5NODSPEqqHNQvJ9L/AEy0ZnRyoEoX7x2Aq39wKwBjwGzNi3R/JKICu/sfyundCW7XHNEQ6gmZCHNAwYoUXqLRGZ0EyUFU6FgDzlDSHj05IwFUKXB2VUdIJt30REolS6ICOiyITlX0Q7nzA6JfRROzQHu1AB3cunJulJ58B0xzts7lkxKZOmOIvi2WFC1LYtHlFb7TRIAHT70RErATJcVAkje0/wDHkdQ/FOQgzgH0R7VASsBbogD/AAh0TH9BBqAHY66xRo2DZMUEgKe3NIeiMREIQYX0KK/V3kfaNrIlPay7ugAeqDCEU5kIXIIfyhwQeqcVKQAAdfeS2dzUPtUIcO3H+Ex5le7VwnRCfuF0v3xKevA3mmDZJ2+UReS9Vu+J02LJwt1CP+kY/hRQahcmdeQRJlZ1jbWQeLjvWeRLu4jYPjsyQu9WSrSdWY4RZXHTM3smAR1EyU6ADtQXUzZAOplNGMaCulUW11mdvtQjqgQGUTZAIB5oqFdEO7feSf8ALfpAJQ1aqpFSQGvyTZ1+6iBRZ2qfcIHlw3qmLNV0M4bKU8MLY2TpinyvgFojphVIlc6nbfmpkGS0SBRTl4cLBOfwGU+Bsr4RiFyJPoKIgDU7FEdY8oiEScwmAIwBAB+0xF/JZQgCMJ1vK1caGiZi5EPUyYjUoZjXUGBqbBLqECMZDsnHa5aR4QB/OK2Cej9IgWgjqBMdF1AUdRZKVoRZG9dfEnmRSyhvwXQphFcBQ4sCU8AkRyR1LUVF+qgRZSq8KwqC6FI7KOf0OM4FHgRixN1PxrDAA6DUlG38T8Wu6oHVVHVDRE3OaqoUiGB+UyOgkLEMXMyiyQqD4KDaHrNEXS2QTc05E2rd5oRBGQdw/wCk0zbiN6kCtEM1FJmCo3OGer0pnUBAidGXrdFYEIMBC7j58Seqetqo1UQti9HAUUdMWQOApifCCgytlbIENFayHiCiWHIPIjQugtT95kaRlPBoRd3kiPDq0hqYDBNy6U5IEnsq7FOBugUhVKk4XBXTDdECBkkIoQQjNFNGnhDERgx0QRFhlusIFWUypJ5VMQCXhHK0UNj9ISo502DDcJlf1VAFDXBuv+aCpFcbqru0lFd3xkscdEX8ZDg4TJinUk6qExT5nwZGyKoAckCbvKonSAVPMpj+kZQXjXCYm41fbp0MlhEmReoRHojnAGaOSMjkmLaqidG5Ep7ICoZClyBOUCHVLtK1FhRSaAiyxRQKIENCNGL6IsmqEhb/ABOUEUumC6y1+FBNHqqcuCT6Mzp8BiVGEcEiLIpO8clAmnd07oJNuPOMbo5nRCnK8ar0hn0jBEgieanxU6R9J7ZAR2I2B8U4H6Jy+i63XkgplMbHogjk2VOqO0+VKUMKBWccOvq/4HWyOplMTKXUcEAoSWNWHVBqdnekOVeqa/T4xdBpQGiWYWok9KHRtEhP+Kc0aEd9H2gaGghVNcUD0qjzEkDROUzKOoMIBwC1QpVUGyoHQZQizdDpgykoNyJiBJi89SoUpi4COFHIPtdMJJ/BlMVUjkOmwbJsmaNq90APa0CoG+0udyXXOfTCFGFkggg9CjQgDeVdkwdA9G7XIEmatHAEBqCIN5GUA4naJrgIrjXYqJ9ZeX0oTEHRvlMkuxQHVVOiJWMEArdXHGyOBYcj/iuBPdMOzgUxiZQpaoIHAdMU9l6F1ROOF2Cn5KyfxiM0tkv8lO0A0ftAsf5HN40XLfDCAtsAE37E+tTqDvPromuLESrkfI6G40HQtRuEU1M3cnJBLC6IAVFx6wgLUUBXmxPQIPYPkqR/omLiiMH9BgSkEuauSFuH0EHojrQQDUNKmBQ7tpKcVGejJpBshKZ+S6Crf0OEBSur8ypgERwI9Lrv/FT+BGQ4NmnKo7Gg1owemkzunWpYQtvODoUBuHNB9fhVVNMrYzomTN1QMk/4kNqB0VpqoREKwhEOXVFU3IqHlEAaDV3QyqZDTBauhYiAU3N5U4pw8u2hPsS+5tUnoR9xbogEnaHJAuaqCmdECKPoJ9SwUYe9cZHQQAzV3DJ+m7Afhvx5bVON3T4lBBCxbAuM9hwYTBwbFQUH1/Im2z+EIPoiSGoNzBJPjC3A7DGO7Jk5nbyt+0CyhXCbkHbkhABbkKo4s7nfvb7QD7uLuRvgowgauuylqE3Sm1SZ6N+0C8xFkRy9qocblKbd14lMBi+79OaM0DmE/qo/HfF8k4ymVqYYviCiigJ4I6KZtkA9CyTBP5U/8Bldu+FUaP4TDX6lRdhG1k0EChCQjkg3s6dF1NWUBi41eyEkwzdiK51JDRG0kMUpgTgG6JRuQYDVAQJM8nKADiBtRsZROvI+M0Z39tB+cyfAp02UAK50ChhHMdWSnqmTK4Uo0WCi7e/YVsFdgUZrnPVNQOkbQftAIQx29kReF+zJqxJhOQmvVMs57p2YRzkFCKEvg/yhqmD5Uh29dBiKCS6hDnCGwUKgEcxVOQoH7rrMEwY9CT3bNGd9w/gf8FkENMoC38IYDGHwbENkTWEA4BdP3QLiwKzPRBgrCNIKN6cGqg6fVE8nr9QJwLzA7fSaiAX5wyJcLLsjB2MQ1CAA9UXcHkG8P0haRA7ohg0OwQDiaDJySI+F2UEABJTByxHNT4UDBnQ6XNGaRzC9nT80YNiEMzYzizETQI0GTp7YCjYNNWHohvQhJyCT9IuKpuRPyXka81Bph+0nogNDZHpB2I/ifC7T3KXCgA5I0OjSGQBfyBWiC4we3Q4RDzUEfl0UW1r0VbaHTTyfdV2VRXYGMFdh8Z2yuFW5flhwCNwLUo4pT5AuijIihykf2DPpUIMgxQd1QIar3Ihk22H9Rzw6QujeVgdyLIdHzaEzqHg7IrmW6ObTrBvtTEHV1KBBozt0Dl50A+FUOZBu/ZN+hRU6IKHVdvI9K2d0xyP70/ko+LBShgQuowbryghxiE4zWZ179CrQoueSJI+ipJ2JEBA3KsUB2kDNAQDo21P0AT8BMnuk4zZAAJLkAQN1vlSjBEbKDFw6wpLagac0YhoBw7BXqnbASK1Qh0KYoT8opuWkYts/HwBRNSUdMPeun9SfxiimqgApThSqDvlIHBHAgNlNRIPIVxByDohpZOnRah10KcNY5/xGLgAwtggYfQh/hGgeq0KUiBxq1kQKI9DIV1D01UWBujQKFGAYs0PlMAk6XRLqwYU/W+F7uigcMkvg6ZTaG8p/qb8U2QBCBIbBmoiC5FUeEgmEUR5ESy3kF060+mo/AkICJGKO175ZRIKPPSgBGsgXp1CNDhfaqBTZ0LLrnqyIwh9dFFxHNTJlYe1+kT+56dBhOX9j0ZQFyUYEYUTJ1zTqHtC9XROB2wh0z4Y/Qghrhyzl1DmF6N34UYDVDEQgGqv6FEIL6YGOiquBHo8nUwwHS1p0tBqxyIxJC3PwQyfOLFL9Wyf6ZXU3970RPQZMUSaLVMGMvRAho+SGwu0VIoVLlgIJL3Bw1HUoSDpsmG7lnpqmglXsq3LFB8HITFR0DezRQIT9UbpnY10zVc0ZuwaoNCryI1EctVWcBF9VqB6Kp01J/mvYK4BaSgnRPDFIipIMMwBrrwtCJBbFsSchRkco6S+HxTXYqz3VaouVCgNxCnGUBBtiUO2aK8wTHJzHZsUAmrkVPGErsjwqhQCBJJYgiQh6ooSmoAmkX6WZajYI8SPgThFOEXCbnJP3kJuR9cCIEkB3OQoPyBO1QgYBwbmnrbBVOYwYOoSBSqc9Ugcsj5BTPsy2EmeyCKUAh5oJoHnA/alArAdcGqNAiPUIOCsFL0ZBUA0dN+5f6Jr9yqN3ThTJ0dldwAW+AyNkkWkfKHfPxKFdQWTplKkgyAOgqOqNUSrsiTUQWi0FU3QmTRB2qa/Q/alWEaJw6rvFelcJw6udiYcrL0uF9qR0JXFVwiHBlzRDjd5LeqhNKwC9z/YQla5wfRDR/iGQw7UB/qDGNaKWSyFi8u2IqMY5EzzxODhFDDQAJMoDczvtPlnn9rR7n9rR9c0D7RFdIDPEo56mdzFEpiycggmIdeitRQCpRy6W4jJ652xRoMILzMU9cPKb0g8x26soWadCrW8qHxAgqEzjmnFxSq2SWTIIdYjngfei82Fje+heBTkC5g/0miJy6SACOqBbQ6LHbD6+UX8SGjFpRBh/83dkBrs5eQ8PjCfdvAvIMzUlhGyHtFwu/wBpwL3WVhHZECdg2FmGFeSghcl2GZk+QvZCgAT5q0EOoef0isB1Q0d0SMFORqRGiKRe4UtSL1kTEMhCUGpi3IrnsUVz2KvIdCoFB+O+P9xesip16KBgOZZAl0P1mgROwcEObO6YPZQOAOK9PI6kskbqMjJ5aqfdF5UFp3PgTFQ4zbUO6BtSCL7AbaETAY8xFECXDLn+E2Ydm5ch1QdEAto57bFBgCBojSA74BSc6wiWoD8idLdBPQWMJy2B9ZZRNhPIsRi6gAxJE7gMnwElhtL7EFtCg5bmn5Ie3EGBkFi08LQw2mgrBINicrAO5ctVHGycCLLQiwNvCAs7KMHNUrU3TOMoTHRGqxq0JkAhQpoKqSjDr/abBG1Yp5RyfaeG3YEWLQb5QjuWKCb3xaDSey95yrqWxYURGqW2KwUF2xD7JEowWOrG0XKCBfAvsg+KsjqtHltVyA8uDfDwdBGlKq8iChGjpwaNoBnaC5ooqgaUD0QbguSG+1y09O52QWALgoT8oTANA73Cknee65t+sznG0SOPOWp2TKU6AXkwKBu4HUYHbPgGomPR2V825E6EqkTqrHsVp3CtKsENhjRKzNlGVlr3IxM0HU4gNxlOYAbklQNSIpQDqUhnVycwDiVLtQBG/LqM2uXNfQ3UNscAHSnTynyUOllS1j1D+K2APVQKAG3Topd2AXd+IToCi3P1hMLX9KACSo29VoBekPkIsuhPQ7qFjZRoH2nH366Eyuzgid9KVz05tESbRLEA9U7DoYqn087C8gLo7ujCMa8dCY4FkAmGaphehKB2pfjIyfJES6rBfRWUQ/pkw9ub+UyHACWhVBA8nKO0T9nR2Uo8wmC0QuYUhQaFDBETYIRKAVrQKJ/qX9qIIFb4wgFu4T5RljCZJpBhEbFl5FU4ApyTD0BTSiNymJHZBZBZAhwsQhdICy3IHM6SERMRhbEFfYnw+EeeqlATx5qZVR7cF0qW9noFOnstB6oAvcUDnYEy573xKCO9br26KlPUA1rNUIiiEOKLQGo1uyaB7Q0QAgBI7oWdr5f4mfnHJEXGhLTCrvB5ack952agsgAwAA00Xs3W+/LiyfKyXeVqQoD6I6ceYEnJ/gRPWb4ZB2d3OVIjzpBBbsWhNKfyLS7LT7KIiFtiPqT8MGarA9UMjckt6ACZadNFYQoyHPBQNPruizRBw9FA2CF0AgAdSu/9p2wg8wvlsre1RCjqz5WINad1w4P1ChTBtqnCDJ9zCAhYgFEUhPU4RMoFJ2vzvKhAhS94/pYY+S9ehT7XyCfkyzqWLbIfzcx6GBQtDcWMCmGdOZe6k5IbfsT4QGT5rMABBVSRpEUQxg6fqv8ArgLl74DArwg9OQQJhwDUP6hXjLR96r1ftaWEkPp1TT07oN0BH9yOQK1wbIabwdrBTzM8hQQDAKJlFoTJ1Ap/RsDVTYbr7QHVA2CR3LLyx65rKohJtaCWJbW6L/wiqgc1HRObdUpm3I7J8tOyYtpHbBvq8orTjINzTQtKLJJbm/wovop5viVz175aDREfkA6cSCNII7gQAMFoI6II0yiIJ3llC7S2Mpt99xeRdzB84gdtFZNQrhTGYSN0noUM/wAEXwU4PA3umX0R3cma33KNEHmr+Zuv9CsjuqUcyKtVWTfO6rZDRBARREWCBILeuBvuQIExCAQJQDN8b4BP7AlEdTIwKYEyIBuxNlASz+90JDRAZq6KgCAkb5mU80NaY6iQ+UztQiQqa4MOx8kdeTyGPlOme1CcYA0dH7VrZ0VVz7YEJr0GUF2u9EOqqfM6orQMEjINtFF7ak1T2WaG4yBm7n5jGVvP7I964eCDqSKwOYUHBsNqoSk8KhOsYE/wcLhA/qqZHKjyXSdN1I2SCa6JoiaprJcyVBGuSoIVkehTB+wgHfshjPU1BFgNUmBgzSHZQE5wfCW4KclEFHqQiULkESdCaHG36KZKPdE51d+mcIqIPBG0DoHKXChgzdSiRqdGA1jpX5V0zvZTkeTenF9ZbyVmq/Ggm6xQ+Srg53MKM5EjqgZ4ANTh5FUDkgQnLwNh6cjFS6eTAgpJaDTqhCxN6O6dOty6HRDgrB1TLJ1JMsgRdQMaZXI5J1wIRRHMiiygjB1VXdmphE7IoQc0EbYDVPprA31QF+iKQQImHvRAC1CEG2BlGLhVIE2QumonSrugSdYUDu+EECC5cijG1mTPRV7I5D5V8tDK5tehQF9wCaj9QU/IynDaYw5qTd9IF7ghG0BPBQh7S5f0UAkm6g52wj2Oy6p+MAvI5H+UNqobl4T8BvSxj4QM8huZUIlQGc6lBhkbYPdFeSkO69RwiXRgIV9CF+hHgeSC482GAsXQCN1OQvVb8SMjoCNcJwYENgSi9GIOhGgIFuF1BPoqmQsaOjeMhAJBJugiEyFIcJgMLYkJiIwjdDABFOiWQbQHVFAxx7CLESAgRh0JVUwWj7BHBlsWz/WJR6glNsZBb6lj5X0nTKnbuq9fl0zlkBFjdcBUiuWx+sG5Jawi57sCzkZe8pVPT0ZAvPdWyR1CbaHclfSYx8mSHRbjWdl1OIh7AZeRKkIKXj8ChKfAjABzoicaVpgUCGMcZOgE55INAWd9E8B1CAEAQhi2UqUCFoiOIIC6M0OiDOod6LYAmYKNiY7IQZDl9XCgN3QSE8YDCoaoEMy3stVAupTGHskwbQKq2QHmQXKHo5owDHo3t3UvEHbu+AvtNqAtS+YvZVIhzQ2y1UpLAZ8IDKXyKKjBdCiM0HZGpr9MfkgHsHqnm4xvQHUpTF3JFg91+sIK6oMFLYRNg7qgtggKeS+JBMpy7e6V9FE95vemScqMrJ05TE2L0TdWEAbEw6ILuyzKAoEIJCAGXQDi6qgLwQ0yNg+UGBFkACKPZAeMVGCnwaWRAPQok5TZMroNiAJlE7aHLCVCPdPesulieSjYd70U8wiIDk/QKFZDuV61wi5VGLvR9qQXr1HpV0GqlHWN2WbXPRNIPCQbAB7QQiM0CAZuUIjhE9BcoYgYuqYi9e7DyydW88wGUhgTeHToAd1gpCa3Iw8l9H5bCDyRAdD2wCi2xWVSskHpGEQYyCD+Jg2M5YyvhOTREhzSrHmTj2y/2wlNCgg6JtEdTmoLYQ22AwZMc4IRmGMhFGckZIPCaYUQAhMFXJdYXTLqzIuE083ZDY3M7uKeCtl5046KjQTyIpSYGwQL4fromWfFQ8yYPzDkV1vkXuKUxunwLKOA1Bp+66dBjg7v4wRBNXdvkEVy8JgJgxJ2+flWjqUIMQ4BH1sFSZl9AiqHYanmR8qnTxh2Cu0wFrJjhOVssZ3CKc4EYqUBHJLrygICrPL+oNjGZVEVI+UwSGDsmJM4GQZkyjCE6dnlADFUDGElADCHTK+L1QQGwsPXB0FCkIuv4ioB8kzo+oIR7Dz4TVUOQ+4ECYwhQjT1M9DYy2Tf0TMxFvIXMv8AQVBuR3RkQcsRsnLQBwfkKwv4+ScsSTXQp7pmwd0CfBTwqhOjd2If5TPJ3CDcDmaUUn9isG9dVzbdFzlKPAjKyfG9MIpdEdeHRMgIVbdj/FEMyGDoAgAYPYFCpg6bBh1TkNGTPleqhF2BMAoRgCGQiTfF8GFVsz8M8px3B3Ni4TwvsyKB4KavgOaBm6IEQZGgkvXGfKaU6hfKPJ1EAAOGhkZKmrXPpEvUXgygK1H7T1DWlzHwEA0DtounroMzBEYDD4bBje0K6qAPwpyRlcyAB6CaRRwpPRNGykVfSfJ6IiANHdMEXpgHbU/aLNaOyFAMLKmLKMr+PhdUnbGMGUKhF0RdNBwl0KJwUTBwKLFBzVmQCx+/IRRNHY9j8oNw3eP3XcWZA0rsKT+QEu1uhfAXWmE7joDwwQ8vRQIcITc2e5Ri696YycrdabmfJZ4LBsnTYxl7E4Iyp8XZCBCRf0ESRIFvBv3g5tAPeoT4NU4VDthCcoG6cgVYoG6C9gjLgjbdgynKHRKexsnELcESSZETgdOIQADRaqF2bLob/FfpVcVPNB1A/KbFXAjsqP3rxhZMMAtGFkQQESRFCu0a3CbQrSVYChohoUNENMO9HX4Wp4X+iNbOqjBACPmqSeEU+LZVSlWlJK3COkQL2oFcwEA4pUgE9BDoWP3UKmDobf4nisUSRiTaooOPZnCvhA1VkHRGneCB6BF1akAQwYPkCkmBIsgLiyAlWNUADYYNhRApQIcRGBX3RsrFICYHkgEji7YQrqMb4HjA4OJbcyqyhakeQ4BkdUdUdUdV7FlPHhlgsU4AQAkwiah00J3udMHPunA2ToILQ+0QJXt0UiZkzAIAMBCfgIANS6s37IFubI8H6qmj1uhRkXQaq8HnZk+cJaqZZNVoTAcXwfAAGqKTAonUKAUy3TIFHVhIqBvTFk6MFT171lRL86oOfrAG7S7kDKZNgXRW762Tu1Qcl3/1xec8CXzMcobJDZW0AQoJsuYlQQAdqg2qYKTsoT06AfKdGMoriomKfGTkzckCmPkyKM472cM+VFHJApBDVcxNOTMoWCBFFphRiATMG7pygCAoumwYiNVDOgOx4MIDizKyyaBFqkl969hgdM18xjKnthLWP8R4Q7+Q5Isvc/k9IT8AxyBLOiJymuTpVuSbuOiQJqoRd6fZAa+uqLAdgAe6ADC2MK4fQ5QkTJof6nQNbadEW4DA+pZPuowzFkBgEXT4TCqOoEQgg1Qo6dbp1JADmOLgExQPdSOgSgDuD/KJE/sYvj+07F9QGqjI0fOQseq8g2Ck0/RR+AE2D/gODVBy6SOiCbggxoTJ4LYhQG5lauDpBDIQr4ugbsKbFJHjyi00N9PShbFUKBmDYghOEV0gSFRs0IFVM6sTpgoZSF04RKIcueFatvQPojFBg5cEDwGjkvHfOwDKnXZcpzsCjPTLTsf4xijq6KvqCDNXhCbZLtK3QB07yQl7BALoTjWWtwkgEAJArd1rg6DKb3C3WHAKMwABBUBSMJVU7qiDRPRm6ISj1QCY9lIDor8EhNewqFA8yLbsTCLtiA6CNwK7EUKoQpc/nOZGJQc6qU+RDqPJoUDM5ZUyw8Lb8U7V1CmjzRgxReVcQDKNgRVM2JMpm2WvtJ+SDbQBfogZByAxB3RFEqZNqqZEJhUC6LUI2lPDfLGCiGBo7/1UHbJU3G5dbOiDkghRVPUpOfwr252xPknAOu5mlWmH7hHAOx4Z71OyEcjqk6fIpO5ykFEoo6IiyK9i/CNxqZJyLIuHXPTb6JyEEYMCC79ExylOqe4TYGDJkRBvKBZUVEECADzUq75QLTBTKiAunQF9brS7pwQYBBxqkMU0Ad08AQdymMuhTktMqHwnEm4C41QNiC3q3re53xrlKbyc3UUy0HcnKiGYlzR0XWgMlddKSNp7i/sIh9xARe3IDBHBhLskQfwoKrGiKnXNCwiijH6RrmNxxLqTgxsptQODNQQXMDdCVKiWwiIQOJTbwQ9vDukFAAH5YMtStZJuRwoo1IFVRfmnR8I5ZxdGhOrSyc0RG2gwoFP4nUh9pzRUYmnbE2wyyA01tMkKMHwIIZjgP6UcCexdQR0lTGHJE6dk3+I4EBS2JUJJySFGEcUimLJp6aJIlbhNB6+QjNpRdXL5RbC6xBzF3RWF/pa4MOyvXcgizncNCKLOiIxBGsOomKqZGiJ64tg+ZsLafaI6LTJ8up58CikV6MmQKD5oHNQ+SSk5JCjCPwXOEQtuLuEJJDORpAVOoZU/qVSTkMYGhTrWECngg3QXX3QpJbmgFxQly5mlH8IMekP3T19soyRhAye0qcXKYIJ8fnLBUnJTF/wiThVjJUYTJeRmiwxCd0aNWLYai1O6Jv8AiyFLU58HyxkaDZBWV7Rk1R2UdcnlijV4HyvrJJSeAcxB3Di3lcgGuE2UBqIn8ydF6luC6GDjkpUYgdPflQ7HEC5BM+k5NGSq/wBycm4kFScYQgP7ThPllKHBNCJCP/DWqEDZpTedWDKWvk9l1qnZdCQQm89f8yk7pHqjHF+FLKSGxb8Jy7r4VhPD/hEZmIumaMfQcimjT0JlRfVRjsw/LorYA5jCVcckTBwm5EgE4HGifJLKzJAyumC61ExkPstlcuzFv+H9fp4wkIb322DTjDphw2Ka6wdN5zVEJTgY2RJUZFVOMsQbFaJmYOeAx90boAEHJ4MvqXVkFV+Y6bI+ABrh6jwuRM1iJdjyxbhTIFEyqeWMqMXIUDAaNhJUHNh4II7ABTwDl6mR2QFxhBbB3fjlHRHGcjpsKQkX6PhEGwuxqUa8sJwgjGMpOEwoPM4314JCUCMg/AcskOYQxDA3UK55wY/xHxfHfg0XljHdDRTf5VPQBsnxnCMsC+BTjBpwYT4pwfB02E5GwfJByfwgKVmAUCGEuqDQJAWTEj8Zk6GByNk+QtfSmZW7q46z8wzxlY3dGMYiZkhEIYJ6ZYKdk6oUoBDAxT4RwnCTiIqoHQyOktJFbp4+nZOneOmdMLfjPiBkjjMHyjN3l9Sa5JCnOwJhmcE4dT0yywfGAQQwMxgcOk4wERDQRNWjWclS5xFEbtW6c8yu/lnKEEEMQgoxjj9vxkSpTZmIRJEhZHMJ6ZwXYNgyf8JLL4QsjLIf0lVDqBO5l1sscWMQ3GF1Uc/COWyOnzsn/wDYigabGkFIdBLySA7gftRkeF3DLCheWQZI48J/AK7uKsEe5PVFP0jJP/AZO6xjgkTcX6QWQc7WNlDynHJAXZGWMK8xwp4uGX45I4M4nVFP+HyzeXdNhGE5yLpUQq2ygJCe604UZRQWybI54hw5psvwxfhNg/AfjAS4qpjJOduk2GgI6ZWUDmY5GT5IPF9nBG/EjjdyIaXxMVOcAb5hYo8HOwR6t5MFAijnfIZB10OGhBDCDwoxDPrwG/Bp+Cyh11Bkac07qpjHiDuTJxUCOwnP2K7Yxw2v+KkdqoHN4gYsm5szCfgMOFCnBlszJ/xmT8WybI+bSaqahK0ILnkqlQDkiYOQE7nuhV4+YDt3RNtQxDawgGLJwDmhxoypOEHA35jcWTw2UP6qDmu9w6JJKpumEplwDG5QOZEmvJBcarc16r3pkfFOEJxkbFuBOTJwcuWB0RUQ1BR+VH4E5w64sLscRmErG2D2RV7yMSmjhgE/0qqSHqXT88841yTi+dhi5XVJTgGkoGcOhZo7p1E//AfhTmIipMOqeDBAWmrgJtOPWROkNXur+EQm7NjkJGhipMeuV8JxrxWyMpcTiDRAqBlot0//AABw3UZR3gUI1MLDOEUroY9JQqgepGsv+09GbATJRMw4g8ybKzYMTjJ4k5XLYYkBUm7qkZD0Iyo9R+lCs9OiRJRzQW/PZDLJTZIyUTATyAUXxK4djpoD+sdDCaQiU3iIxH2RPn5gFkMnbCT+I5PiuwjshPUlSyhp8oTG+SmxUtnNzV/X/NCGQviYjs8OZsrZIyD5NmUgiHVCVISJAuckVaYxRuqZcj9KJgE5ogMu5Pkpc/4RBnCBrmjmmyuFCk5I/FvQ4Cbf0tYzXVCoAeaYU153QR6h/wAOcYr9YeYZBLJGRyA+IhwzHcHyPCFzQEsVmoeeIqsprWzRhJyRwoyPm1UMsftDaBaETAidQt6rCaF0aqX/ABVVc6cCVUiKoRbLcoV7AORm9Qv0FEGQjQ20v9lUap+BJ4s5qqUAXcyUYQ+ok9FeGWtjdVsyZCgDu5o8mBmqAP5ZNxsiEQ9jTYpmB1/gEfiwpgI6CK6iNzYCA5JwfliJeTZ2ACACI6AkPVDfDcnhO2jtHTvgpVSTwgXepvnACIVyK5ElBkWTq9SZSRx+SEFNXe/PPOU/GoNSMGhLFO0EdlJwQg+r5RhSqjGk5O6jGAYVhR0IJecKsgAAIAgYNABDvdE4kgEQrVwmiJnkAYmmn45biCTgaFbuApjP4w6mFtSTk7RLhs4xxgHkmc2dc8YldES+i3dsH6YDvCsDcntnKacJ/CYuiVwOWGrIANjFsJWpCkaUJS4L50ZnEH5L9cnMBRteOFBUdoBgPYAzkUAGqibx3XN+S9q38j1Nc/ZmMDkFPBnik4nHGfOf2BgDKWGegGEouLOHJE69WJeSd5AgdYAHkr4xmuRpmoM3aIKnZJn+9/jgBOckg7wYYSwMZhtUnIlOucCfaNMYFCXywqdtBsewJPcCJ2ZUNwUxMDWbYoumN3BPmr0B7puYVEDsBevMFx2LelrvZyo4FNl+ZHbYjrx0Ecgv964AFD6zHRJUxOcx88KO0cS+VK6iBB7Ti9rXJf7NsWtJNie5SIpdfDl/UsT/ADsIxNdEHml1VQRbtmRhzhQsVY9M4kYab6U7O4V1UcIGe5l9ZeVd926TacoDuzqIO0npB/0L0GixOq6E/uGqcAcUxGgFA0ETY3/1QZtb0digbkqadSQUHMrJmeEUycrXkC1llKYOOiD5CO+kOanmCG7umo3fHqTThzn/AOwMtcqUHk7vcCBOAdcItFdR+qBBeQolmpJ3GDV2c8DUWquVF+J8PclQFEl1RbbKL7GSPoiyUf8AqjId4DdRBnlRgPwyfIO5SzkzvwLv0NgclcI6EWGi5PyCKVhzKWAM6yXSV1KRtPjCRnAem5ey6Zh3H3Jw+qCQAAYgyCDUEaJqPW1o5YPTvkNevbEfDAcr2oCtRNH8cHByGoI7qMSXJfLDUWdAIF6EXn89mQ+TGek5B0wFIEB5ESm9hZjwhIbmMnrMA+uJa4IzBaHJINPqofpRAFwBAKi1LAtCGljO/CCtnvCyUaim9l2gO83nstFu23JaEEwc8AQU2zVHuf8Agh+wOBsp7lsjzPasMgEIgLPLDIisfqyz4GtilMB1nunXT3dmnqK7jB696IfJAsZDyge09B3i01ShE/ojy69UGGxOwwNTRElsxZ3Eo9yAcvZjma7sCvctgAbXx8HRartzuxXwbYIPBuHFDhE/t7XCkctE2yE53HSDtGaIPI4RltjDuATnUncDAE/o9AI2Rr2Y0bSGxCEgaFiwHYJgTpPZF0Ceomk8pRI3QpwQC8Jv4JH2BwLtPctkjB79mTgFZN2ozeWCuN+IGgC7ZeJf3FqfgKdkCAoYYa1i9oKZZjnv3qBllPzTWAJfkmEagPjD2LeDB7oOiLgvRBzuaMeyrh9yJzdXJ4A144zIjRx9QsYyZB5FFIn3aF6tmT/uaY8DFf8AVmCw8GOiflm6nABgBAdOzQwjwZNeJxqspRR4SfafGYqTaAXRWOYrT/EPC9Sww9S3BD1bMjAGXjwcCADkbOBg9K9QMbFdaNSoHNOpmonZSTGz0I+tT7TSx+jJ0uB7jD0LcwBvdy3UYoOUDhABBDghiNQUSlHqfYQL/MySrtqwQUAF3p2L0bMi/S0xb2xLBwyDbE3q/I/Fb7b4yFsngXXV21zvYNnpWGHv2YUerZkkLDAnNPOH7dTAeWRGD8Q1bP1EjO3pXKBg8JuI3VA4foYe4j8cJPSsMPftw7PIM+/PK40pEuHB6EJ5UxPuTn8sOzAGusdiL7kTUyOLqV3OCDhl6Vi9izJT39MZ5Noiz4PDGK3q5Ibr+Ld23xg/KYrmz+oLwIUsfWYee1YYenYv854ohuEnmsKEsJXGBzBW8cIoN+fqfughVDHnADgjBhi4HSIyEGMjQE+a55he8jDRT/FeqHkqODLuZdriogYMTQg9iiWCyWhHCPhg1FATuVf1mWlPoyIZqAHoMAeNhGEbtm5X788HUk46yi9EvVsNN4cvgSZBwi9y69azCbAe/pg6UsIghiNmRJnMyE2qjuwDrmDfqNCLFPp/XBkqA1fWh1mAQCwjy4eSdeOFGUMsQ1IwHco/zsL+wCCeaAQ1HdEy9YfcOVUPtgkkWs39YRBk5vF+E0u9GiZLs4UIFiIAFCG5HVet+UDndfPPDkMGBF4hdkNEEMitpaBZAEihEHcOjHBdEDzC/XFiMAgSMEAXsgmFrnuCioUgCtD+xXs0Pghs0XAHlNRKn6Al9HrU2onyoTQ31CfB06lgsGDu++ir5U2CyABbEAXAf7j2mykJQPwpQiASam7kAOlzlf8AQlYHlGGLI51vEgHytaAD86nxzQKBEm9rc3VuvV/KOjrLRFcwTj8hQwq2sABB/URSgEtp6L+nY+EYnzd910x/kdfgjo8ytZ6NGU0kM4gcwook49MtSShSDIlEylRP9UZSU3dQExTGhBACwjkYOc0kCgIH1pn1kdkVCoELMOlMMRmxS/8AIoKIeFxXA/rZFwwYa+5kBFxZDoCE/ZeeyAC9Ppath0hHDAdb5GkZuJlvivUfK998qIn5kftf3P2v7n7Wp3KOp74tOLI7ARRAqD9spEPHqBBMGNhXnIGgQ0HZDQdltk9LTQhR+oknBlZ626qDzF88YEgBJMAC6BGqIu490e680QNCEWQtqksB3Tah2c4iMIChyO5/44/4AzuAgqx8N4K1B9CPMh0SpB6q6jUj6bc1zPLCibVvmmff/kR+CUeNOR8C7qTiHB7oCgghduokh62PSnoi326kXPjO2CEHoKB3R+78Bvxgh+C6CHGnGvEnGF2s+F63/AhT+Gyb/hzi+D8Kckkgf8iP+BPHlQMhH/Db/izx5UDGeb8hQfwm/wCpOE8eVAxnmfI/Bjgf/9oACAECEQM/EP8Afb/gb/jz+e/+iw/9Gf4/7VD/AEH/AP/EACMQAAEDBAICAwEAAAAAAAAAABEhQFAAASAwEDFRYEFhcJH/2gAIAQMQAz8Q69nvgd4gS3G46RxaFGsxBdnEaDikNeGLG+BpHJyHs3XA9ZWIW8wYe0pb8QFvyv7y8PQwSEtxbT4q/mLXlatoMF/eenZeCAXWcAwD1ZD5YGFtpFGEThYbqVvCX2/HiA7oTA47pcA0Lq7QcLsTYKDIb01ijSwHbpI5Mzl54XJIe9BeDR2LqVuMDQ0LwmZeC1HUcx8es39dvKDSKOQo6A0WrMDxZittp3oyFHQjNG3/2Q==",
    ],
    postModified: {
      content: null,
      ebook: null,
      starsEbook: 0,
    },
    type: "",
    userName: "rafa.carvalho",
  },
  {
    author: "Larissa Almeida",
    authorId: "1729000000015",
    comments: [
      {
        userIndex: 4,
        text: "Boa sorte KKKKK, você vai precisar lembrar de muitos nomes ??",
      },
      {
        userIndex: 10,
        text: "Queria poder acompanhar suas primeiras impressões sem spoilers!",
      },
      {
        userIndex: 13,
        text: "A construção desse universo é incrível. Vai contando o que está achando!",
      },
    ],
    content: "<p>Começando a ler Game of thrones agr kkk</p>",
    createdAt: "2026-10-17T19:52:16.074Z",
    id: "1792266736074",
    likes: 51,
    midia: {
      alt_text:
        "TV gif. Emilia Clarke on Game of Thrones set, dressed as Daenerys, smiles at us and gives us two thumbs up, nodding.",

      analytics: {
        onload: {
          /* dados originais */
        },
        onclick: {
          /* dados originais */
        },
        onsent: {
          /* dados originais */
        },
      },

      analytics_response_payload:
        "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01OWQyZmE3ZmlqZ29zYWhzajl3ajVobGI2eHFoOHYwb3pjaXVjc28zamF5Mm9tOTcmZ2lmX2lkPVE2Z1B5VVlyQ2s3NmcmY3Q9Zw",

      bitly_gif_url: "http://gph.is/1LBwXgv",
      bitly_url: "http://gph.is/1LBwXgv",
      content_url: "",
      embed_url: "https://giphy.com/embed/Q6gPyUYrCk76g",
      id: "Q6gPyUYrCk76g",

      images: {
        "480w_still": {
          height: "551",
          width: "480",
          size: "3440192",
          url: "https://media3.giphy.com/media/v1.Y2lkPTU5ZDJmYTdm�MV9naWZzX3NlYXJjaCZjdD1n/Q6gPyUYrCk76g/480w_s.jpg",
        },
        downsized: {
          height: "480",
          width: "418",
          size: "1854973",
          url: "https://media3.giphy.com/media/v1.Y2lkPTU5ZDJmYTdm�3NlYXJjaCZjdD1n/Q6gPyUYrCk76g/giphy-downsized.gif",
        },
        downsized_large: {
          height: "480",
          width: "418",
          size: "3440192",
          url: "https://media3.giphy.com/media/v1.Y2lkPTU5ZDJmYTdm�2MV9naWZzX3NlYXJjaCZjdD1n/Q6gPyUYrCk76g/giphy.gif",
        },
        downsized_medium: {
          height: "480",
          width: "418",
          size: "2092841",
          url: "https://media3.giphy.com/media/v1.Y2lkPTU5ZDJmYTdm�aCZjdD1n/Q6gPyUYrCk76g/giphy-downsized-medium.gif",
        },
        downsized_small: {
          height: "400",
          width: "349",
          mp4_size: "171968",
          mp4: "https://media3.giphy.com/media/v1.Y2lkPTU5ZDJmYTdm�jaCZjdD1n/Q6gPyUYrCk76g/giphy-downsized-small.mp4",
        },
        downsized_still: {
          height: "480",
          width: "418",
          size: "49500",
          url: "https://media3.giphy.com/media/v1.Y2lkPTU5ZDJmYTdm�lYXJjaCZjdD1n/Q6gPyUYrCk76g/giphy-downsized_s.gif",
        },

        fixed_height: {
          height: "200",
          width: "174",
          size: "528337",
          mp4_size: "69607",
        },
        fixed_height_downsampled: {
          height: "200",
          width: "174",
          size: "95749",
          webp_size: "50804",
        },
        fixed_height_small: {
          height: "100",
          width: "87",
          size: "174860",
          mp4_size: "27120",
        },
        fixed_height_small_still: {
          height: "100",
          width: "87",
          size: "5395",
        },
        fixed_height_still: {
          height: "200",
          width: "174",
          size: "14682",
        },
        fixed_width: {
          height: "230",
          width: "200",
          size: "670277",
          mp4_size: "86732",
        },
        fixed_width_downsampled: {
          height: "230",
          width: "200",
          size: "113935",
          webp_size: "64160",
        },
        fixed_width_small: {
          height: "115",
          width: "100",
          size: "216625",
          mp4_size: "33099",
        },
        fixed_width_small_still: {
          height: "115",
          width: "100",
          size: "6584",
        },
        fixed_width_still: {
          height: "230",
          width: "200",
          size: "18360",
        },
        looping: {},
        original: {
          frames: "23",
          hash: "7ffb7cf3eb2ec8fba40cb3d5c1846120",
          height: "480",
          mp4: "https://media3.giphy.com/media/v1.Y2lkPTU5ZDJmYTdmaWpnb3NhaHNqOXdqNWhsYjZ4cWg4djBvemNpdWNzbzNqYXkyb205NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Q6gPyUYrCk76g/giphy.mp4",
          mp4_size: "362072",
          size: "3440192",
          url: "https://media3.giphy.com/media/v1.Y2lkPTU5ZDJmYTdmaWpnb3NhaHNqOXdqNWhsYjZ4cWg4djBvemNpdWNzbzNqYXkyb205NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Q6gPyUYrCk76g/giphy.gif",
          webp: "https://media3.giphy.com/media/v1.Y2lkPTU5ZDJmYTdmaWpnb3NhaHNqOXdqNWhsYjZ4cWg4djBvemNpdWNzbzNqYXkyb205NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Q6gPyUYrCk76g/giphy.webp",
          webp_size: "452166",
          width: "418",
        },
        original_mp4: {
          height: "550",
          width: "480",
          mp4_size: "362072",
          mp4: "https://media3.giphy.com/media/v1.Y2lkPTU5ZDJmYTdm�2MV9naWZzX3NlYXJjaCZjdD1n/Q6gPyUYrCk76g/giphy.mp4",
        },
        original_still: {
          height: "480",
          width: "418",
          size: "148364",
          url: "https://media3.giphy.com/media/v1.Y2lkPTU5ZDJmYTdm�V9naWZzX3NlYXJjaCZjdD1n/Q6gPyUYrCk76g/giphy_s.gif",
        },
        preview: {
          height: "192",
          width: "167",
          mp4_size: "31214",
          mp4: "https://media3.giphy.com/media/v1.Y2lkPTU5ZDJmYTdm�zX3NlYXJjaCZjdD1n/Q6gPyUYrCk76g/giphy-preview.mp4",
        },
        preview_gif: {
          height: "71",
          width: "62",
          size: "47975",
          url: "https://media3.giphy.com/media/v1.Y2lkPTU5ZDJmYTdm�zX3NlYXJjaCZjdD1n/Q6gPyUYrCk76g/giphy-preview.gif",
        },
        preview_webp: {
          height: "148",
          width: "128",
          size: "36880",
          url: "https://media3.giphy.com/media/v1.Y2lkPTU5ZDJmYTdm�X3NlYXJjaCZjdD1n/Q6gPyUYrCk76g/giphy-preview.webp",
        },
      },

      import_datetime: "2015-03-20 22:08:10",
      is_low_contrast: false,
      is_sticker: 0,
      rating: "g",
      slug: "reaction-Q6gPyUYrCk76g",
      source: "",
      source_post_url: "",
      source_tld: "",
      title: "Game Of Thrones Yes GIF",
      trending_datetime: "2017-08-04 00:30:01",
      type: "gif",
      url: "https://giphy.com/gifs/reaction-Q6gPyUYrCk76g",
      username: "",
    },
    postModified: {
      content: null,
      ebook: null,
      starsEbook: 0,
    },
    type: "",
    userName: "lari.almeida",
  },
  {
    author: "Matheus Santos",
    authorId: "1729000000013",
    comments: [
      {
        userIndex: 1,
        text: "Tem frases que parecem ter sido escritas exatamente para a gente.",
      },
      {
        userIndex: 5,
        text: "às vezes uma frase simples consegue transmitir muita coisa.",
      },
      {
        userIndex: 9,
        text: "Terminei o livro e não esqueci dessa frase (está bem no comecinho pra quem não sabe) recomendo mt",
      },
    ],
    content: "<p>Essa frase me marcou</p>",
    createdAt: "2026-10-17T13:40:11.489Z",
    id: "1792244411489",
    likes: 29,
    midia: "listNull",
    postModified: {
      content:
        "Sim, minha força está na solidáo. Não tenho medo nem de chuvas tempestivas, nem das grandes ventanias soltas, pois eu também sou o escuro da noite.",
      ebook: {
        ebook: {
          accessInfo: {
            accessViewStatus: "SAMPLE",
            country: "BR",
            embeddable: true,
            epub: {
              acsTokenLink:
                "http://books.google.com.br/books/download/A_hora_da_estrela-sample-epub.acsm?id=82UHEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
              isAvailable: true,
            },
            pdf: {
              acsTokenLink:
                "http://books.google.com.br/books/download/A_hora_da_estrela-sample-pdf.acsm?id=82UHEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
              isAvailable: true,
            },
            publicDomain: false,
            quoteSharingAllowed: false,
            textToSpeechPermission: "ALLOWED",
            viewability: "PARTIAL",
            webReaderLink:
              "http://play.google.com/books/reader?id=82UHEAAAQBAJ&hl=&source=gbs_api",
          },
          etag: "oXgdcQedVoo",
          id: "82UHEAAAQBAJ",
          kind: "books#volume",
          saleInfo: {
            buyLink:
              "https://play.google.com/store/books/details?id=82UHEAAAQBAJ&rdid=book-82UHEAAAQBAJ&rdot=1&source=gbs_api",
            country: "BR",
            isEbook: true,
            listPrice: {
              amount: 29.9,
              currencyCode: "BRL",
            },
            offers: [
              {
                finskyOfferType: 1,
                listPrice: {
                  amountInMicros: 29900000,
                  currencyCode: "BRL",
                },
                retailPrice: {
                  amountInMicros: 28400000,
                  currencyCode: "BRL",
                },
                giftable: true,
              },
            ],
            retailPrice: {
              amount: 28.4,
              currencyCode: "BRL",
            },
            saleability: "FOR_SALE",
          },
          searchInfo: {
            textSnippet:
              "O renascimento da fascinante Clarice Lispector tem sido um dos verdadeiros eventos literários do século 21. Ninguém soa como Clarice. Ninguém pensa como ela.",
          },
          selfLink: "https://www.googleapis.com/books/v1/volumes/82UHEAAAQBAJ",
          volumeInfo: {
            allowAnonLogging: true,
            authors: ["Clarice Lispector"],
            canonicalVolumeLink:
              "https://play.google.com/store/books/details?id=82UHEAAAQBAJ",
            categories: ["Fiction"],
            contentVersion: "0.3.3.0.preview.3",
            description:
              'Pouco antes de morrer, em 1977, Clarice Lispector decide se afastar da inflexão intimista que caracteriza sua escrita para desafiar a realidade. O resultado desse salto na extroversão — A hora da estrela, o livro mais surpreendente que escreveu. Se desde Perto do coração selvagem, seu romance de estreia, Clarice estava de corpo inteiro, todo o tempo, no centro de seus relatos, agora a cena é ocupada por personagens que em nada se parecem com ela. A nordestina Macabéa, a protagonista de A hora da estrela, é uma mulher miserável, que mal tem consciência de existir. Depois de perder seu único elo com o mundo, uma velha tia, ela viaja para o Rio, onde aluga um quarto, se emprega como datilógrafa e gasta suas horas ouvindo a Rádio Relógio. Apaixona-se, então, por Olímpico de Jesus, um metalúrgico nordestino, que logo a trai com uma colega de trabalho. Desesperada, Macabéa consulta uma cartomante, que lhe prevê um futuro luminoso, bem diferente do que a espera. Clarice cria até um falso autor para seu livro, o narrador Rodrigo S.M., mas nem assim consegue se esconder. O desejo de desaparecimento, que a morte real logo depois consolidaria, se frustra. Entre a realidade e o delírio, buscando social enquanto sua alma a engolfava, Clarice escreveu um livro singular. A hora da estrela é um romance sobre o desamparo a que, apesar do consolo da linguagem, todos estamos entregues. — JOSÉ CASTELLO, Jornalista, escritor e Mestre em Comunicação pela UFRJ "Esfinge, feiticeira, monstro sagrado. O renascimento da fascinante Clarice Lispector tem sido um dos verdadeiros eventos literários do século 21. Ninguém soa como Clarice. Ninguém pensa como ela. Ela não apenas parece dotada de mais sentidos do que os cinco conhecidos, mas também curva a sintaxe e a pontuação de acordo com sua vontade. Ela vira o dicionãorio de cabeça para baixo, soltando todas as palavras de suas definições, espalhando-as de volta como quer e não é que a língua parece melhor?" — THE NEW YORK TIMES',
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=82UHEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=82UHEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            industryIdentifiers: [
              {
                type: "ISBN_13",
                identifier: "9788532508127",
              },
              {
                type: "ISBN_10",
                identifier: "8532508122",
              },
            ],
            infoLink:
              "https://play.google.com/store/books/details?id=82UHEAAAQBAJ&source=gbs_api",
            language: "pt-BR",
            maturityRating: "NOT_MATURE",
            pageCount: 96,
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            previewLink:
              "http://books.google.com.br/books?id=82UHEAAAQBAJ&printsec=frontcover&dq=A+hora+da+estrela&hl=&cd=1&source=gbs_api",
            printType: "BOOK",
            publishedDate: "2020-11-16",
            publisher: "Editora Rocco",
            readingModes: {
              text: true,
              image: true,
            },
            title: "A hora da estrela",
          },
        },
        progress: 69,
        userId: "1729000000013",
      },
      starsEbook: 2,
    },
    type: "citation",
    userName: "matheuss_17",
  },
  {
    author: "Julia Ferreira",
    authorId: "1729000000011",
    comments: [
      {
        userIndex: 2,
        text: "Essa sensação é muito boa! Queria esquecer alguns livros só para ler de novo. ??",
      },
      {
        userIndex: 6,
        text: "Quando a história é assim, dá até uma ressaca literária depois.",
      },
      {
        userIndex: 11,
        text: "Agora fiquei com vontade de ler! O que você mais gostou nele?",
      },
    ],
    content:
      "<p>Simplesmente perfeito, queria poder ler pela primeira vez de novo!</p>",
    createdAt: "2026-10-17T13:38:24.593Z",
    id: "1792244304593",
    likes: 79,
    midia: "listNull",
    postModified: {
      content: null,
      ebook: {
        ebook: {
          accessInfo: {
            accessViewStatus: "SAMPLE",
            country: "BR",
            embeddable: true,
            epub: {
              isAvailable: true,
              acsTokenLink:
                "http://books.google.com.br/books/download/Nunca_miúdo4_fulfillment_token&dl_type=sample&source=gbs_api",
            },
            pdf: {
              isAvailable: true,
              acsTokenLink:
                "http://books.google.com.br/books/download/Nunca_miúdo4_fulfillment_token&dl_type=sample&source=gbs_api",
            },
            publicDomain: false,
            quoteSharingAllowed: false,
            textToSpeechPermission: "ALLOWED",
            viewability: "PARTIAL",
            webReaderLink:
              "http://play.google.com/books/reader?id=e2U0EQAAQBAJ&hl=&source=gbs_api",
          },
          etag: "lEKhPPZ1Akk",
          id: "e2U0EQAAQBAJ",
          kind: "books#volume",
          saleInfo: {
            buyLink:
              "https://play.google.com/store/books/details?id=e2U0EQAAQBAJ&rdid=book-e2U0EQAAQBAJ&rdot=1&source=gbs_api",
            country: "BR",
            isEbook: true,
            listPrice: {
              amount: 39.9,
              currencyCode: "BRL",
            },
            offers: [
              {
                finskyOfferType: 1,
                listPrice: {
                  amountInMicros: 39900000,
                  currencyCode: "BRL",
                },
                retailPrice: {
                  amountInMicros: 39900000,
                  currencyCode: "BRL",
                },
                giftable: true,
              },
            ],
            retailPrice: {
              amount: 39.9,
              currencyCode: "BRL",
            },
            saleability: "FOR_SALE",
          },
          searchInfo: {
            textSnippet:
              "Quantas mentiras uma pessoa é capaz de manter sem ser assombrada por elas? De Freida McFadden, autora do best-seller A empregada, Nunca minta é um thriller sinistro que deixa uma coisa bem clara: toda verdade tem um preço.",
          },
          selfLink: "https://www.googleapis.com/books/v1/volumes/e2U0EQAAQBAJ",
          volumeInfo: {
            allowAnonLogging: true,
            authors: ["Freida McFadden"],
            canonicalVolumeLink:
              "https://play.google.com/store/books/details?id=e2U0EQAAQBAJ",
            categories: ["Fiction"],
            contentVersion: "1.2.2.0.preview.3",
            description:
              "Quando Tricia e Ethan foram visitar a casa dos seus sonhos, eles não esperavam que os mistérios envolvendo o desaparecimento da antiga proprietária se tornariam seu maior pesadelo. Quantas mentiras uma pessoa é capaz de manter sem ser assombrada por elas? De Freida McFadden, autora do best-seller A empregada, Nunca minta é um thriller sinistro que deixa uma coisa bem clara: toda verdade tem um preço. Tricia e Ethan estáo em busca da casa dos seus sonhos. Recém-casados, eles vão visitar um casarão antigo no meio de uma floresta no estado de Nova York. No entanto, durante a viagem até a mansão que pertenceu à Dra. Adrienne Hale é uma renomada psiquiatra que desapareceu sem deixar vestágio três anos antes é, uma nevasca terrível começa a cair. Quando chegam ao destino, Tricia percebe de cara que há algo de errado; afinal, por que haveria uma luz acesa no segundo andar de uma casa vazia há tanto tempo? A tempestade se intensifica, o BMW deles fica coberto pela neve, a corretora de imóveis não aparece, os celulares estáo sem sinal, e de repente Tricia e Ethan se veem isolados da civilização. Ali, presos na casa, temores e segredos que nenhum dos dois teve coragem de compartilhar com o outro ameaçam vir à tona. Eles só não imaginavam que a casa também guardaria os próprios mistérios. Em busca de um livro para se entreter, Tricia recorre às estantes abarrotadas e descobre por acaso um cômodo secreto, também repleto de estantes, mas, em vez de livros, o que encontra são fitas cassete: elas contém gravações de cada consulta da Dra. Adrienne Hale. Tricia começa a ouvi-las uma a uma e acaba montando um quebra-cabeça aterrorizante, o que a distrai momentaneamente da sensação desconfortável de que não estáo sozinhos. Qual foi o destino da antiga proprietária da casa? Ela ainda está viva? Está escondida em algum lugar? Foi morta pelo namorado da época, como os jornais levaram a acreditar, ou assassinada por um de seus pacientes? E será que, ao pisar nessa casa, Tricia e Ethan correm o risco de protagonizar um novo capítulo dessa história nefasta? Entrelaçando passado e presente em uma história repleta de mistérios, Nunca minta é um novo thriller envolvente de Freida McFadden capaz de surpreender os leitores a cada nova revelação.",
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=e2U0EQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=e2U0EQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            industryIdentifiers: [
              {
                type: "ISBN_13",
                identifier: "9788501923400",
              },
              {
                type: "ISBN_10",
                identifier: "8501923400",
              },
            ],
            infoLink:
              "https://play.google.com/store/books/details?id=e2U0EQAAQBAJ&source=gbs_api",
            language: "pt-BR",
            maturityRating: "NOT_MATURE",
            pageCount: 316,
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            previewLink:
              "http://books.google.com.br/books?id=e2U0EQAAQBAJ&printsec=frontcover&dq=nunca+minta&hl=&cd=1&source=gbs_api",
            printType: "BOOK",
            publishedDate: "2025-01-06",
            publisher: "Record",
            readingModes: {
              image: true,
              text: true,
            },
            title: "Nunca minta",
          },
        },
        progress: 100,
        userId: "1729000000011",
      },
      starsEbook: 2,
    },
    type: "resenha",
    userName: "julia.ferreira",
  },
  {
    authorIndex: 15,
    comments: [
      {
        userIndex: 3,
        text: "Tô vendo todo mundo falar desse livro. Também quero saber se vale a pena! ??",
      },
      {
        userIndex: 8,
        text: "Depende do que você espera da história, mas achei bem interessante.",
      },
      {
        userIndex: 12,
        text: "Ainda não li, mas as opiniões que vi me deixaram curioso.",
      },
    ],
    content: "Vale o hype?",
    // createdAt: "2026-10-17T13:37:19.221Z",
    // id: "1792244239221",
    // likes: 36,
    // midia: "listNull",

    postModified: {
      content: null,

      ebook: {
        ebook: {
          accessInfo: {
            country: "BR",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
          },

          etag: "UfcmrAOYLlQ",
          id: "uobgEQAAQBAJ",
          kind: "books#volume",

          saleInfo: {
            buyLink:
              "https://play.google.com/store/books/details?id=uobgEQAAQBAJ&rdid=book-uobgEQAAQBAJ&rdot=1&source=gbs_api",
            country: "BR",
            isEbook: true,

            listPrice: {
              amount: 39.9,
              currencyCode: "BRL",
            },

            offers: [
              {
                finskyOfferType: 1,

                listPrice: {
                  amountInMicros: 39900000,
                  currencyCode: "BRL",
                },

                retailPrice: {
                  amountInMicros: 39900000,
                  currencyCode: "BRL",
                },

                giftable: true,
              },
            ],

            retailPrice: {
              amount: 39.9,
              currencyCode: "BRL",
            },

            saleability: "FOR_SALE",
          },

          searchInfo: {
            textSnippet:
              "Edição de colecionador Raphael Montes. <b>JantarSecreto</b>.com. 1 Passamos a virada de 2014 para 2015 em Copacabana, entre as milhões de pessoas que assistem aos fogos de artifício na praia, pulam ondas e trocam ... <b>JantarSecreto</b>.com ...",
          },

          selfLink: "https://www.googleapis.com/books/v1/volumes/uobgEQAAQBAJ",

          volumeInfo: {
            allowAnonLogging: true,

            authors: ["Raphael Montes"],

            canonicalVolumeLink:
              "https://play.google.com/store/books/details?id=uobgEQAAQBAJ",

            categories: ["Fiction"],

            contentVersion: "1.2.2.0.preview.2",

            description: `Dez anos depois, os jantares organizados por Dante, Leitão, Victor Hugo e Miguel seguem a todo vapor! é o que descobrimos no capítulo inédito e exclusivo desta edição de Jantar secreto, best-seller de Raphael Montes. Uma caixa surpreendente, que esconde um livro em capa dura, com corte pintado e outras novidades. Prepare-se: o jantar está servido!

Um grupo de quatro amigos deixa uma pequena cidade no interior Paraná para viver no Rio de Janeiro. Juntos, Dante, Leitão, Victor Hugo e Miguel alugam um apartamento em Copacabana e fazem o possível para pagar a faculdade e manter vivos seus sonhos de sucesso na capital fluminense. Mas o dinheiro está curto e o aluguel está vencido.

Para sair do buraco e manter o apartamento, eles adotam uma estratégia heterodoxa: arrecadar fundos por meio de jantares secretos, divulgados pela internet para uma clientela exclusiva da elite carioca.

A partir daí, eles se envolvem em uma espiral de crimes, descobrem uma rede de contrabando de corpos, matadouros clandestinos e grã-finos excêntricos, e levam ao limite uma índole perversa que jamais imaginaram existir em cada um deles.

Esta edição de colecionador de Jantar secreto, que celebra os dez anos de sua publicação, traz aos leitores um capítulo novo e exclusivo com a surpreendente continuação desta história.

"Este romance é uma verdadeira montanha-russa: extremamente imaginativo e totalmente único. Devorei é sem trocadilho! é de uma vez só. Ora sangrento, ora chocante, macabro e por vezes muito engraçado, é impossível largar. Só agradeça por não estar no cardápio..." - Alex Michaelides, autor de A paciente silenciosa

"Sombrio, irresistível e perverso, Jantar secreto é um thriller deliciosamente perturbador sobre amizade e ambição, com um desfecho de cair o queixo. Prende o leitor desde a primeira página e não solta mais. Raphael Montes é um talento extraordinário." - Lisa Jewell, autora de A família perfeita`,

            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=uobgEQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",

              thumbnail:
                "http://books.google.com/books/content?id=uobgEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },

            industryIdentifiers: [
              {
                type: "ISBN_13",
                identifier: "9788535947274",
              },
              {
                type: "ISBN_10",
                identifier: "8535947272",
              },
            ],

            infoLink:
              "https://play.google.com/store/books/details?id=uobgEQAAQBAJ&source=gbs_api",

            language: "pt-BR",
            maturityRating: "NOT_MATURE",
            pageCount: 464,

            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },

            previewLink:
              "http://books.google.com.br/books?id=uobgEQAAQBAJ&pg=PT48&dq=Jantar+Secreto&hl=&cd=1&source=gbs_api",

            printType: "BOOK",
            publishedDate: "2026-07-20",
            publisher: "Companhia das Letras",

            readingModes: {
              text: true,
              image: false,
            },

            subtitle: "Edição de colecionador",
            title: "Jantar secreto",
          },
        },

        progress: 23,
        userId: "1729000000009",
      },

      starsEbook: 2,
    },

    type: "resenha",
  },
  {
    authorIndex: 0,
    content:
      "Hoje percebi como ler algumas páginas antes de dormir ajuda a desacelerar a mente. Quero transformar isso em um hábito diário. ??",
    comments: [
      {
        userIndex: 2,
        text: "Também gosto de ler antes de dormir! Estou tentando fazer disso uma rotina.",
      },
      { userIndex: 4, text: "Qual livro você está lendo atualmente?" },
      {
        userIndex: 6,
        text: "é um ótimo hábito. Só começo a ler e perco a noção do tempo ??",
      },
    ],
  },
  {
    authorIndex: 2,
    content:
      "Preciso de recomendações de fantasia! Quero começar uma história nova, de preferência com personagens marcantes e um universo bem construído. ?",
    comments: [
      {
        userIndex: 5,
        text: "Se você gosta de universos bem construídos, vale procurar alguma saga de fantasia!",
      },
      {
        userIndex: 8,
        text: "Eu adoro histórias em que os personagens evoluem bastante durante a trama.",
      },
      {
        userIndex: 10,
        text: "Também quero recomendações desse gênero! Vou acompanhar as respostas.",
      },
    ],
  },
  {
    authorIndex: 4,
    content:
      "Terminei um capítulo que me deixou pensando por horas. Gosto quando um livro consegue surpreender sem parecer que a revelação veio do nada.",
    comments: [
      {
        userIndex: 1,
        text: "Quando a reviravolta faz sentido depois que você pensa nos detalhes, é muito bom!",
      },
      {
        userIndex: 9,
        text: "Agora fiquei curioso. é mistério, fantasia ou outro gênero?",
      },
    ],
  },
  {
    authorIndex: 6,
    content:
      "Minha lista de livros para ler está ficando maior do que a lista de livros que já terminei. Acho que preciso parar de descobrir novas histórias por alguns dias. ??",
    comments: [
      {
        userIndex: 3,
        text: "Acho que todo leitor passa por isso. A lista nunca acaba!",
      },
      {
        userIndex: 7,
        text: "O problema é que sempre aparece um livro interessante bem na hora errada.",
      },
      {
        userIndex: 11,
        text: "Desisti de organizar a minha lista. Agora só aceito que ela vai continuar crescendo.",
      },
    ],
  },
  {
    authorIndex: 8,
    content:
      "Vocês preferem ler um livro inteiro de uma vez ou dividir a leitura em pequenas partes durante a semana?",
    comments: [
      {
        userIndex: 12,
        text: "Prefiro dividir durante a semana. Assim consigo aproveitar a história com calma.",
      },
      {
        userIndex: 14,
        text: "Se o livro for muito bom, leio vários capítulos seguidos sem perceber.",
      },
      {
        userIndex: 16,
        text: "Depende do tamanho. Se for curto, gosto de terminar no mesmo dia.",
      },
    ],
  },
  {
    authorIndex: 10,
    content:
      "Uma das minhas coisas favoritas é terminar um livro e continuar pensando nos personagens, como se eu tivesse acompanhado pessoas de verdade.",
    comments: [
      {
        userIndex: 13,
        text: "Sim! Principalmente quando o final é emocionante e você não está pronto para se despedir.",
      },
      {
        userIndex: 17,
        text: "é por isso que alguns livros ficam na memória por tanto tempo.",
      },
    ],
  },
  {
    author: "Lucas Martins",
    authorId: "1729000000005",
    comments: [],
    content: "<p>Realmente, é incrível</p>",
    createdAt: "2026-10-17T18:14:14.887Z",
    id: "1792260854887",
    likes: 41,
    midia: "listNull",
    postModified: {
      content: null,
      ebook: {
        ebook: {
          accessInfo: {
            country: "BR",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            // Demais propriedades mantidas conforme o objeto original
          },
          etag: "XgHRR+/INgQ",
          id: "82UHEAAAQBAJ",
          kind: "books#volume",
          saleInfo: {
            buyLink:
              "https://play.google.com/store/books/details?id=82UHEAAAQBAJ&rdid=book-82UHEAAAQBAJ&rdot=1&source=gbs_api",
            country: "BR",
            isEbook: true,
            listPrice: { amount: 29.9, currencyCode: "BRL" },
            offers: [],
            retailPrice: { amount: 28.4, currencyCode: "BRL" },
            saleability: "FOR_SALE",
          },
          searchInfo: {
            textSnippet:
              "O renascimento da fascinante Clarice Lispector tem sido um dos verdadeiros eventos literários do século 21. Ninguém soa como Clarice. Ninguém pensa como ela.",
          },
          selfLink: "https://www.googleapis.com/books/v1/volumes/82UHEAAAQBAJ",
          volumeInfo: {
            allowAnonLogging: true,
            authors: ["Clarice Lispector"],
            canonicalVolumeLink:
              "https://play.google.com/store/books/details?id=82UHEAAAQBAJ",
            categories: ["Fiction"],
            contentVersion: "0.3.3.0.preview.3",
            description:
              "Pouco antes de morrer, em 1977, Clarice Lispector decide se afastar da inflexão intimista que caracteriza sua escrita para desafiar a realidade. O resultado desse salto na extroversão — A hora da estrela, o livro mais surpreendente que escreveu. A nordestina Macabéa é uma mulher miserável que viaja para o Rio de Janeiro. Clarice escreveu um livro singular sobre o desamparo a que todos estamos entregues.",
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=82UHEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=82UHEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            industryIdentifiers: [
              {
                /* identificador original ISBN_13 */
              },
              {
                /* identificador original ISBN_10 */
              },
            ],
            infoLink:
              "https://play.google.com/store/books/details?id=82UHEAAAQBAJ&source=gbs_api",
            language: "pt-BR",
            maturityRating: "NOT_MATURE",
            pageCount: 96,
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            previewLink:
              "http://books.google.com.br/books?id=82UHEAAAQBAJ&printsec=frontcover&dq=A+hora+da+estrela&hl=&cd=1&source=gbs_api",
            printType: "BOOK",
            publishedDate: "2020-11-16",
            publisher: "Editora Rocco",
            readingModes: { text: true, image: true },
            title: "A hora da estrela",
          },
        },
        progress: 84,
        userId: "1729000000005",
      },
      starsEbook: 4,
    },
    type: "feedback",
    userName: "lucas.martins07",
  },
  {
    authorIndex: 12,
    content:
      "Estou tentando variar mais minhas leituras. Ultimamente fico sempre nos mesmos gêneros, mas acho que posso encontrar boas surpresas fora da minha zona de conforto.",
    comments: [
      {
        userIndex: 15,
        text: "Experimentar um gênero diferente pode surpreender bastante!",
      },
      {
        userIndex: 18,
        text: "Comecei a ler ficção científica assim e acabei gostando muito.",
      },
    ],
  },
  {
    authorIndex: 14,
    content:
      "Pergunta sincera: vocês abandonam um livro quando não gostam ou insistem até o final? Sempre fico com a sensação de que talvez ele melhore depois.",
    comments: [
      {
        userIndex: 19,
        text: "Dou uma chance até mais ou menos um terçoo. Se não me prender, sigo para outro.",
      },
      {
        userIndex: 20,
        text: "Eu abandono sem culpa. Tem livro demais no mundo para insistir em um que não funciona para mim.",
      },
      {
        userIndex: 22,
        text: "às vezes insisto mais um pouco, mas depende muito do motivo de eu não estar gostando.",
      },
    ],
  },
  {
    authorIndex: 16,
    content:
      "Comecei a anotar minhas impressões enquanto leio. é interessantte comparar o que eu pensava no começo com o que entendo depois de conhecer melhor a história.",
    comments: [
      {
        userIndex: 21,
        text: "Isso deve ser muito legal para perceber as pistas que passaram despercebidas!",
      },
      {
        userIndex: 23,
        text: "Também quero começar a fazer isso. Sempre esqueço os detalhes depois de terminar.",
      },
    ],
  },
  {
    authorIndex: 18,
    content:
      "às vezes a gente escolhe um livro pela capa e acaba encontrando uma história que precisava ler naquele momento. Já aconteceu com vocês?",
    comments: [
      {
        userIndex: 24,
        text: "Já! Escolhi um livro sem expectativa nenhuma e ele acabou virando um dos meus favoritos.",
      },
      {
        userIndex: 25,
        text: "Comigo acontece mais quando alguém me indica algo inesperado.",
      },
    ],
  },
  {
    author: "Rafael Carvalho",
    authorId: "1729000000021",
    comments: [],
    content:
      "<p>Esse livro não tem como, cada página é uma reviravolta. Estou na metade demorando pra ler pra durar mais kkkkk</p>",
    createdAt: "2026-10-18T03:36:49.177Z",
    id: "1792294609177",
    likes: 88,
    midia: "listNull",
    postModified: {
      content: null,
      ebook: {
        ebook: {
          accessInfo: {
            accessViewStatus: "SAMPLE",
            country: "BR",
            embeddable: true,
            epub: {
              isAvailable: true,
              acsTokenLink:
                "http://books.google.com.br/books/download/O_massacre_da_familia_Hope?source=gbs_api",
            },
            pdf: {
              isAvailable: true,
              acsTokenLink:
                "http://books.google.com.br/books/download/O_massacre_da_familia_Hope?source=gbs_api",
            },
            publicDomain: false,
            quoteSharingAllowed: false,
            textToSpeechPermission: "ALLOWED",
            viewability: "PARTIAL",
            webReaderLink:
              "http://play.google.com/books/reader?id=oQwSEQAAQBAJ&hl=&source=gbs_api",
          },
          etag: "tzid14SOfv0",
          id: "oQwSEQAAQBAJ",
          kind: "books#volume",
          saleInfo: {
            buyLink:
              "https://play.google.com/store/books/details?id=oQwSEQAAQBAJ&rdid=book-oQwSEQAAQBAJ&rdot=1&source=gbs_api",
            country: "BR",
            isEbook: true,
            listPrice: {
              amount: 29.9,
              currencyCode: "BRL",
            },
            offers: [
              {
                // Os detalhes da oferta não estavam expandidos nos dados enviados.
              },
            ],
            retailPrice: {
              amount: 26.91,
              currencyCode: "BRL",
            },
            saleability: "FOR_SALE",
          },
          searchInfo: {
            textSnippet:
              "... familiar para mim, e nessa familiaridade encontrei refúgio. Até mesmo uma prisão se torna reconfortante se for a ... assassinato pelo qual eu teria alegremente assumido a culpa. Mas a morte é rápida. E eu queria que o castigo dela&nbsp;...",
          },
          selfLink: "https://www.googleapis.com/books/v1/volumes/oQwSEQAAQBAJ",
          volumeInfo: {
            allowAnonLogging: true,
            authors: ["Riley Sager"],
            canonicalVolumeLink:
              "https://play.google.com/store/books/details?id=oQwSEQAAQBAJ",
            categories: ["Fiction"],
            contentVersion: "1.4.4.0.preview.3",
            description:
              "Em novo thriller, Riley Sager traz mistério instigante e repleto de reviravoltas sobre o assassinato sem solução de uma família. Em 1929, um crime bárbaro chocou o estado do Maine: a abastada família Hope foi brutalmente assassinada, restando apenas a filha mais velha, Lenora, que acabou se tornando a principal suspeita. Apesar de todos acreditarem que a garota foi a responsável pelo massacre, a polícia jamais encontrou provas disso. Daquele dia em diante, Lenora nunca mais falou sobre aquela noite e permaneceu isolada em Hope's End, a famosa mansão onde o crime ocorreu. Décadas depois, quando a única lembrança do crime é apenas uma perturbadora cantiga infantil, Kit McDeere é designada como cuidadora de Lenora Hope, após a fuga da antiga enfermeira. Aos setenta anos e confinada a uma cadeira de rodas, Lenora perdeu a capacidade de falar, devido a uma série de derrames, e só consegue se comunicar com Kit datilografando frases em uma velha máquina de escrever. Até que, uma noite, Lenora escreve uma frase inesperada: eu quero te contar tudo. é medida que Kit ajuda Lenora a escrever sobre os eventos que levaram ao massacre da família Hope, fica claro que a história é mais complexa do que as pessoas imaginam. Mas quando a cuidadora descobre os detalhes que provocaram a fuga da antiga enfermeira, ela começa a suspeitar que talvez Lenora não esteja dizendo toda a verdade é e que a senhora aparentemente inofensiva sob seus cuidados pode ser muito mais perigosa do que ela pensava.",
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=oQwSEQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=oQwSEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            industryIdentifiers: [
              {
                type: "ISBN_13",
                identifier: "978655532",
              },
              {
                type: "ISBN_10",
                identifier: "655532",
              },
            ],
            infoLink:
              "https://play.google.com/store/books/details?id=oQwSEQAAQBAJ&source=gbs_api",
            language: "pt-BR",
            maturityRating: "NOT_MATURE",
            pageCount: 392,
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            previewLink:
              "http://books.google.com.br/books?id=oQwSEQAAQBAJ&pg=PT384&dq=O+massacre+da+fami&hl=&cd=1&source=gbs_api",
            printType: "BOOK",
            publishedDate: "2024-09-02",
            publisher: "Editora Intrinseca",
            readingModes: {
              text: true,
              image: true,
            },
            title: "O massacre da família Hope",
          },
        },
        progress: 57,
        userId: "1729000000021",
      },
      starsEbook: 4,
    },
    type: "resenha",
    userName: "rafa.carvalho",
  },
  {
    authorIndex: 20,
    content:
      "Estou procurando histórias com finais marcantes. Não precisa ser necessariamente um final feliz, só quero terminar a leitura e ficar pensando nela por um bom tempo.",
    comments: [
      {
        userIndex: 26,
        text: "Também gosto de finais que fazem a gente repensar tudo o que leu.",
      },
      {
        userIndex: 27,
        text: "Os finais abertos são interessantes, mas às vezes preciso de respostas ??",
      },
    ],
  },
  {
    authorIndex: 22,
    content:
      "Acho incrível como duas pessoas podem ler o mesmo livro e sair com interpretações completamente diferentes. é uma das melhores partes de conversar sobre leitura.",
    comments: [
      {
        userIndex: 28,
        text: "Verdade! às vezes alguém aponta um detalhe que muda toda a nossa perspectiva.",
      },
      {
        userIndex: 29,
        text: "Por isso gosto de ler comentários e teorias depois de terminar um livro.",
      },
    ],
  },
  {
    author: "Isabela Rodrigues",
    authorId: "1729000000023",
    comments: [],
    content: "<p>Um clássico, sem palavras não</p>",
    createdAt: "2026-10-18T03:33:58.735Z",
    id: "1792294438735",
    likes: 69,
    midia: "listNull",
    postModified: {
      content: null,
      ebook: {
        ebook: {
          accessInfo: {
            accessViewStatus: "SAMPLE",
            country: "BR",
            embeddable: true,
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: true,
              acsTokenLink:
                "http://books.google.com.br/books/download/A_Metamorfose?fife=w400-h600&source=gbs_api",
            },
            publicDomain: false,
            quoteSharingAllowed: false,
            textToSpeechPermission: "ALLOWED",
            viewability: "PARTIAL",
            webReaderLink:
              "http://play.google.com/books/reader?id=eH8IEgAAQBAJ&hl=&source=gbs_api",
          },
          etag: "LcuZhA79DBk",
          id: "eH8IEgAAQBAJ",
          kind: "books#volume",
          saleInfo: {
            buyLink:
              "https://play.google.com/store/books/details?id=eH8IEgAAQBAJ&rdid=book-eH8IEgAAQBAJ&rdot=1&source=gbs_api",
            country: "BR",
            isEbook: true,
            listPrice: {
              amount: 9.9,
              currencyCode: "BRL",
            },
            offers: [
              {
                // Dados da oferta não estavam expandidos no objeto original
              },
            ],
            retailPrice: {
              amount: 9.9,
              currencyCode: "BRL",
            },
            saleability: "FOR_SALE",
          },
          searchInfo: {
            textSnippet:
              "Sobre a Obra Principal Publicada em 1915 por Franz Kafka, A Metamorfose é uma das obras-primas mais influentes e perturbadoras da literatura ocidental.",
          },
          selfLink: "https://www.googleapis.com/books/v1/volumes/eH8IEgAAQBAJ",
          volumeInfo: {
            allowAnonLogging: false,
            authors: ["Franz Kafka"],
            canonicalVolumeLink:
              "https://play.google.com/store/books/details?id=eH8IEgAAQBAJ",
            categories: ["Fiction"],
            contentVersion: "preview-1.0.0",
            description:
              "Vá além do clássico da literatura mundial e descubra os significados profundos, filosóficos e sociais por três da transformação de Gregor Samsa. Sobre a Obra Principal Publicada em 1915 por Franz Kafka, A Metamorfose é uma das obras-primas mais influentes e perturbadoras da literatura ocidental. A história do caixeiro-viajante Gregor Samsa, que desperta em uma manhã transformado em um inseto monstruoso, tornou-se o grande símbolo universal da alienação moderna, da opressão familiar e da fragilidade do valor humano em uma sociedade pautada pela produtividade. O que você encontrará nesta Segunda Parte? Enquanto a Primeira Parte introduz a narrativa envolvente e o impacto do absurdo kafkaiano, esta Segunda Parte: Guia de Análise Crítica é um mergulho aprofundado na estrutura, na filosofia e nos simbolismos que transformaram a obra em um marco do século XX. Elaborado para estudantes, professores, acadêmicos e entusiastas da literatura, este volume entrega um estudo detalhado e acessível para decodificar todas as camadas do texto. Principais tópicos abordados nesta Parte II: Contexto Biográfico e Histórico: A conturbada relação de Kafka com o pai, a burocracia de Praga e os reflexos da Europa pré-Primeira Guerra Mundial. Estrutura Narrativa: A construção da narrativa tripartite, a mudança de perspectiva e a desumanização progressiva do protagonista. Decodificação de Símbolos: O verdadeiro significado do inseto, o isolamento do quarto, a ferida da maçã e a sensibilidade da cena do violino. Correntes Filosóficas: Leituras e interpretações sob a Ética do Existencialismo, da Filosofia do Absurdo (Camus), da Psicanálise (Freud) e do Marxismo. Conexões com o Século XXI: Como A Metamorfose explica dilemas atuais como a uberização do trabalho, a síndrome de burnout, a solidáo urbana e o descarte de indivíduos improdutivos. Para quem é este livro? Leitores de A Metamorfose que buscam uma compreensão mais rica e crítica do texto. Estudantes universitários, vestibulandos e concurseiros que precisam dominar a obra para exames e trabalhos. Professores e pesquisadores de Literatura, Filosofia e Sociologia. Amantes de clássicos que desejam conectar a literatura do início do século XX aos desafios do mundo contemporâneo. Adquira agora e transforme sua leitura do clássico de Franz Kafka com uma reflexão crítica, profunda e indispensável!",
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=eH8IEgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=eH8IEgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            infoLink:
              "https://play.google.com/store/books/details?id=eH8IEgAAQBAJ&source=gbs_api",
            language: "pt-BR",
            maturityRating: "NOT_MATURE",
            pageCount: 152,
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            previewLink:
              "http://books.google.com.br/books?id=eH8IEgAAQBAJ&printsec=frontcover&dq=A+metamorfose&hl=&cd=14&source=gbs_api",
            printType: "BOOK",
            publisher: "Franz Kafka",
            readingModes: {
              text: false,
              image: true,
            },
            subtitle:
              "Edição em 2 Partes (Texto Integral + Análise Literária Completa)",
            title: "A Metamorfose",
          },
        },
        progress: 31,
        userId: "1729000000023",
      },
      starsEbook: 4,
    },
    type: "feedback",
    userName: "isabela.rodrigues",
  },
];

let posts = postsIniciais
  .filter((post) =>
    post.authorIndex !== undefined ? users[post.authorIndex] : post.authorId,
  )
  .map((post, index) => {
    const autor =
      post.authorIndex !== undefined
        ? users[post.authorIndex]
        : { name: post.author, id: post.authorId, userName: post.userName };

    return {
      id: `seed-post-${index + 1}`,
      author: autor.name,
      authorId: autor.id,
      userName: autor.userName,
      content: post.content,
      postModified: post.postModified ?? null,
      midia: post.midia ?? "listNull",
      type: post.type || "post",
      likes: post.likes ?? Math.floor(Math.random() * 100) + 1,
      comments: post.comments
        .filter(({ userIndex }) => users[userIndex])
        .map((comentario, commentIndex) => {
          const comentarista = users[comentario.userIndex];

          return {
            id: `seed-comment-${index + 1}-${commentIndex + 1}`,
            authorId: comentarista.id,
            userName: comentarista.userName,
            author: comentarista.name,
            text: comentario.text,
            createdAt: new Date(
              Date.now() - Math.floor(Math.random() * 7) * 86400000,
            ).toISOString(),
          };
        }),
      createdAt:
        post.createdAt ??
        new Date(
          Date.now() - Math.floor(Math.random() * 14) * 86400000,
        ).toISOString(),
    };
  })
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pasta: backend-capítulo/imagens
const pastaImagens = path.join(__dirname, "imagens");
// Associação dinâmica: todos os usuários pré-definidos consomem TODO o banco
// de imagens disponível na pasta "imagens", distribuídas em ordem (com ciclo
// quando houver mais usuários do que imagens). Nada é hardcoded aqui é se uma
// nova imagem for adicionada à pasta, ela passa a ser usada automaticamente.
const arquivosImagens = fs.existsSync(pastaImagens)
  ? fs
      .readdirSync(pastaImagens)
      .filter((arquivo) => /\.(jpe?g|png|gif|webp|bmp|svg)$/i.test(arquivo))
  : [];

const idsUsuariosPredefinidos = Array.from({ length: 30 }, (_, i) =>
  String(1729000000001 + i),
);

const imagensPorUsuario = Object.fromEntries(
  idsUsuariosPredefinidos.map((id, i) => [
    id,
    arquivosImagens.length > 0
      ? arquivosImagens[i % arquivosImagens.length]
      : null,
  ]),
);

function carregarImagem(nomeArquivo, pasta = pastaImagens) {
  if (!nomeArquivo) return null;

  const caminhoImagem = path.join(pasta, nomeArquivo);

  if (!fs.existsSync(caminhoImagem)) {
    console.warn(`Imagem não encontrada: ${nomeArquivo}`);
    return null;
  }

  const imagem = fs.readFileSync(caminhoImagem);
  const tipoMime = mime.lookup(caminhoImagem) || "application/octet-stream";

  return `data:${tipoMime};base64,${imagem.toString("base64")}`;
}

// Pasta: backend-capítulo/imagensTema
const pastaImagensTema = path.join(__dirname, "imagensTema");
// Mesma associação dinâmica das imagens de perfil, porém usando o banco de
// imagens da pasta "imagensTema" para os temas de perfil (midiaTheme).
const arquivosImagensTema = fs.existsSync(pastaImagensTema)
  ? fs
      .readdirSync(pastaImagensTema)
      .filter((arquivo) => /\.(jpe?g|png|gif|webp|bmp|svg)$/i.test(arquivo))
  : [];

const imagensTemaPorUsuario = Object.fromEntries(
  idsUsuariosPredefinidos.map((id, i) => [
    id,
    arquivosImagensTema.length > 0
      ? arquivosImagensTema[i % arquivosImagensTema.length]
      : null,
  ]),
);

// 1. Listar todos os posts
app.get("/feed", (req, res) => {
  res.json(posts);
});

// 2. Criar um post (Postar)
app.post("/api/posts", (req, res) => {
  const { author, content, midia, userName, type, postModified } = req.body;
  const stringToken = req.headers.authorization.split(" ");
  const decoded = jwt.verify(stringToken[1], "minha_chave_super_secreta");

  if (type === "feedback") {
    const feedbacks = {
      stars: postModified.starsEbook + 1,
      ebook: postModified.ebook,
    };

    feedbackEbooks.push(feedbacks);
  }

  const randomNumber = Math.floor(Math.random() * 100) + 1;

  const newPost = {
    id: Date.now().toString(),
    author: author || "Anônimo",
    authorId: decoded.id,
    userName,
    content,
    postModified,
    midia,
    type,
    likes: randomNumber,
    comments: [],
    createdAt: new Date().toISOString(),
  };

  posts.unshift(newPost);
  res.status(201).json(newPost);
});

// 3. Deletar um post
app.delete("/api/posts/:id", (req, res) => {
  const { id, newUser } = req.params;
  const tokenString = req.headers.authorization.split(" ");
  const decoded = jwt.verify(tokenString[1], "minha_chave_super_secreta");
  const postClear = posts.find((p) => p.id === id);

  if (postClear?.type === "feedback") {
    const filterFeedbackEbooks = feedbackEbooks.filter((item) => {
      return item.ebook.ebook.id !== postClear.postModified.ebook.ebook?.id;
    });

    feedbackEbooks.length = 0;
    feedbackEbooks.push(...filterFeedbackEbooks);
  }

  if (postClear.authorId == decoded.id) {
    posts = posts.filter((post) => post.id !== id);
    res.status(200).json({ message: "Post deletado com sucesso" });
  } else {
    res
      .status(404)
      .json({ message: "o post infelizmente não foi encontrado ;(" });
  }
});

let postsLikes = [];

// 4. Curtir um post (Incrementar likes)
app.post("/api/posts/:id/like", (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({
      error: "Post não encontrado",
    });
  }

  const validationLike = postsLikes.find(
    (p) => p.postId === id && p.userId === userId,
  );

  if (validationLike?.validation) {
    post.likes -= 1;
    validationLike.validation = false;
  } else if (validationLike) {
    post.likes += 1;
    validationLike.validation = true;
    validationLike.createdAt = new Date().toISOString();
  } else {
    post.likes += 1;

    postsLikes.push({
      postId: id,
      userId,
      validation: true,
      createdAt: new Date().toISOString(),
    });
  }

  return res.json({
    post,
    likes: postsLikes,
  });
});

//buscar likes
app.get("/api/posts/likes", (_, res) => {
  return res.json(postsLikes);
});

// 5. Comentar em um post
app.post("/api/posts/:id/comments", (req, res) => {
  const { id } = req.params;
  const { author, text, authorId, userName } = req.body;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ error: "Post não encontrado" });
  }
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  const newComment = {
    id: Date.now().toString(),
    authorId: authorId,
    userName: userName,
    author: author,
    text,
    createdAt: new Date().toISOString(),
  };

  post.comments.push(newComment);
  res.status(201).json(post);
});

//curtir um comentário
// Seed: curtidas pré-definidas espalhadas pelos comentários dos posts,
// vindas dos próprios usuários pré-definidos (sem duplicar like do mesmo user).
let likes = posts.flatMap((post) =>
  post.comments.flatMap((comment) => {
    const qtdLikes = Math.floor(Math.random() * 6); // 0 a 5 curtidas por comentário
    const curtintes = idsUsuariosPredefinidos
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, qtdLikes);

    return curtintes.map((userId) => ({
      userId,
      commentId: comment.id,
      postId: post.id,
      createdAt: new Date(
        Date.now() - Math.floor(Math.random() * 7) * 86400000,
      ).toISOString(),
    }));
  }),
);

app.post("/api/comments/like", (req, res) => {
  const { commentId, postId, userId } = req.body;

  const post = posts.find((p) => p.id === postId);

  const comment = post?.comments.find((comment) => comment.id === commentId);

  if (!comment) {
    return res.status(404).json({
      error: "Post ou comentário não encontrado",
    });
  }

  const validation = likes.find(
    (like) => like.commentId === commentId && like.userId === userId,
  );

  if (validation) {
    likes = likes.filter(
      (like) => !(like.commentId === commentId && like.userId === userId),
    );

    return res.status(200).json(likes);
  }

  const newLike = {
    userId,
    commentId,
    postId,
    createdAt: new Date().toISOString(),
  };

  likes.push(newLike);

  return res.status(201).json(likes);
});

app.get("/api/comments/like", (_, res) => {
  res.status(201).json(likes);
});

// 5. editar um comentário

app.patch("/api/posts/:id/:comenID", (req, res) => {
  const { id, comenID } = req.params;
  const { text } = req.body;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ error: "Post não encontrado" });
  }
  const comment = post.comments.find((c) => c.id === comenID);

  if (!comment) {
    return res.status(404).json({ error: "comentário não encontrado" });
  }

  ((comment.text = text), res.status(200).json(post));
});

//excluir um comentário
app.delete("/api/posts/:id/:comenID", (req, res) => {
  const { id, comenID } = req.params;
  const post = posts.find((p) => p.id == id);

  if (!post) {
    return res.status(404).json({ error: "Post não encontrado" });
  }
  const comments = post.comments.filter((p) => p.id !== comenID);

  if (!post.comments.find((p) => p.id == comenID)) {
    return res.status(404).json({ error: "comentário não encontrado" });
  }

  ((post.comments = comments), res.status(200).json(post));
});

app.post("/auth/register", (req, res) => {
  const { name, email, password, userName } = req.body;

  if (!name || !email || !password || !userName) {
    return res.status(400).json({ error: "Preencha todos os campos." });
  }

  const userExistsEmail = users.find((u) => u.email === email);
  const userExistsUser = users.find((u) => u.userName === userName);
  if (userExistsEmail || userExistsUser) {
    return res.status(409).json({ error: "Email ou usuário já cadastrados " });
  }
  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    userName,
    password,
    followersArray: [],
    followersNumber: 0,
  };

  users.push(newUser);

  const token = jwt.sign(
    {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      userName: newUser.userName,
    },
    "minha_chave_super_secreta",
  );

  res.status(201).json({
    message: "Usuário registrado com sucesso!",
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      userName: newUser.userName,
    },
    token: token,
  });
});

//edit users data
app.patch("/updateUser/:id", (req, res) => {
  const { name, userName } = req.body;
  const { id } = req.params;

  if (!name || !userName) {
    return res.status(400).json({ error: "Preencha todos os campos." });
  }

  const userExists = users.find((users) => users.id === id);

  if (!userExists) {
    return res.status(404).json({ error: "Usuário não encontardo " });
  }

  const userExistsUser = users.find(
    (u) => u.userName === userName && u.id !== id,
  );

  if (userExistsUser) {
    return res.status(409).json({ error: "Email ou usuário já cadastrados " });
  }

  userExists.name = name;
  userExists.userName = userName;

  res.status(201).json({
    message: "Usuário atualizado com sucesso!",
    user: {
      id: userExists.id,
      name: userExists.name,
      email: userExists.email,
      userName: userExists.userName,
    },
  });
});

//c
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  const userExists = users.find(
    (u) => u.email === email && u.password === password,
  );

  if (userExists) {
    const token = jwt.sign(
      { id: userExists.id, email: userExists.email, name: userExists.name },
      "minha_chave_super_secreta",
    );

    return res.status(200).json({
      message: "Usuário logado com sucesso!",
      user: {
        id: userExists.id,
        email: userExists.email,
        name: userExists.name,
        userName: userExists.userName,
        followersArray: [],
        followersNumber: 0,
      },
      token: token,
    });
  } else {
    return res.status(401).json({ error: "Erro ao efetuar login" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Simulação de um banco de dados simples (ou perfil do usuário)
// let posts = [
//   {
//     id: "1",
//     author: "Maria",
//     content: "Estudando JavaScript hoje!",
//     likes: 2,
//     comments: [],
//   },
//   {
//     id: "2",
//     author: "João",
//     content: "Conectando o front ao back-end!",
//     likes: 4,
//     comments: [],
//   },
// ];

// Lista para armazenar os IDs dos posts salvos pelo usuário
let postsSalvos = [];

// 1. Rota para salvar ou remover dos salvos (Toggle Bookmark)
// app.post("/api/posts/:id/save", (req, res) => {
//   const { id } = req.params;

//   // Verifica se o post realmente existe
//   const post = posts.find((p) => p.id === id);
//   if (!post) {
//     return res.status(404).json({ error: "Post não encontrado." });
//   }

//   // Verifica se o post já está salvo
//   const index = postsSalvos.indexOf(id);

//   if (index > -1) {
//     // Se já estiver salvo, remove da lista (desalvar)
//     postsSalvos.splice(index, 1);
//     return res
//       .status(200)
//       .json({ message: "Post removido dos salvos.", saved: false });
//   } else {
//     // Se não estiver salvo, adiciona na lista
//     postsSalvos.push(id);
//     return res
//       .status(200)
//       .json({ message: "Post salvo com sucesso!", saved: true });
//   }
// });

let saved = [];

app.post("/api/posts/saved", (req, res) => {
  const { post, savedType } = req.body;

  if (!post?.id) {
    return res.status(400).json({
      message: "Não foi possível identificar o post",
    });
  }

  if (savedType === "delete") {
    saved = saved.filter((item) => item.postId !== post.id);

    return res.json(saved);
  }

  if (savedType === "saved") {
    const alreadySaved = saved.some((item) => item.postId === post.id);

    if (alreadySaved) {
      return res.json(saved);
    }

    saved.push({
      postId: post.id,
    });

    return res.json(saved);
  }

  if (savedType === "update") {
    return res.json(saved);
  }

  return res.status(400).json({
    message: "Ação inválida",
  });
});

app.get("/api/posts/saved", (_, res) => {
  return res.json(saved);
});

// 1. Rota para filtar)
app.get("/api/posts/:id", (req, res) => {
  const { id } = req.params;

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({
      error: "Post não encontrado.",
    });
  }

  return res.status(200).json(post);
});

const dadosPerfil = {
  1729000000001: {
    bios: "Leio 3 páginas e já considero desenvolvimento pessoal. ??",
    location: "São Paulo, SP",
    link: "https://example.com/gabriel-lendo",
  },
  1729000000002: {
    bios: "40% gato, 60% poeira estelar e 100% sem pagar aluguel. ??",
    location: "Via Láctea, planeta Terra",
    link: "https://example.com/miau-cosmico",
  },
  1729000000003: {
    bios: "Minha lista de livros é maior que minha disposição.",
    location: "Campinas, SP",
    link: "https://example.com/ana-leitora",
  },
  1729000000004: {
    bios: "Forte como café, emocionalmente leite morno. ?",
    location: "Cafeteria do Multiverso",
    link: "https://example.com/cafe-com-leite",
  },
  1729000000005: {
    bios: "Só mais um capítulo. Mentira, são mais 47.",
    location: "Curitiba, PR",
    link: "https://example.com/lucas-mais-um-capitulo",
  },
  1729000000006: {
    bios: "Disponível para conversas profundas e viagens interplanetárias. ??",
    location: "Anéis de Saturno, bloco B",
    link: "https://example.com/lua-fora-de-orbita",
  },
  1729000000007: {
    bios: "Personagem principal de um livro que ainda não comecei.",
    location: "Rio de Janeiro, RJ",
    link: "https://example.com/bia-protagonista",
  },
  1729000000008: {
    bios: "Não sou sobremesa. Sou um estilo de vida. ??",
    location: "Geladeira, prateleira de cima",
    link: "https://example.com/pudim-supremo",
  },
  1729000000009: {
    bios: "Leitor profissional, comprador compulsivo de livros.",
    location: "Belo Horizonte, MG",
    link: "https://example.com/pedro-estante-infinita",
  },
  1729000000010: {
    bios: "Visualizo tudo, respondo nunca. ??",
    location: "Entre o mundo real e o Wi-Fi",
    link: "https://example.com/fantasma-visto",
  },
  1729000000011: {
    bios: "Romances fictícios porque os reais estáo em manutenão.",
    location: "Florianópolis, SC",
    link: "https://example.com/julia-romances",
  },
  1729000000012: {
    bios: "Uma batata pequena diante do universo. ??",
    location: "Galáxia do Puruí",
    link: "https://example.com/batata-intergalactica",
  },
  1729000000013: {
    bios: "Leio fantasia para fugir dos boletos da realidade.",
    location: "Santos, SP",
    link: "https://example.com/matheus-fantasia",
  },
  1729000000014: {
    bios: "Previsão do dia: 90% de chance de ficar em casa. ???",
    location: "Acima da sua cidade, talvez chovendo",
    link: "https://example.com/nuvem-depressiva",
  },
  1729000000015: {
    bios: "Coleciono livros, marcadores e problemas imaginãorios.",
    location: "Porto Alegre, RS",
    link: "https://example.com/lari-entre-paginas",
  },
  1729000000016: {
    bios: "Carregando personalidade... 99% há três horas.",
    location: "Atrês do monitor",
    link: "https://example.com/pixel-sem-sinal",
  },
  1729000000017: {
    bios: "Leitor de madrugada, arrependido de manhã.",
    location: "Brasília, DF",
    link: "https://example.com/joao-sem-sono",
  },
  1729000000018: {
    bios: "Respira. Bebe Água. Ignora os problemas. ??",
    location: "Lago tranquilo, perto de um jacaré",
    link: "https://example.com/capivara-paz",
  },
  1729000000019: {
    bios: "Se o casal não ficar junto no final, eu viro vilã.",
    location: "Recife, PE",
    link: "https://example.com/duda-casal-endgame",
  },
  1729000000020: {
    bios: "Bio não encontrada. Tente novamente após o próximo capítulo.",
    location: "Página não encontrada",
    link: "https://example.com/erro-404",
  },
  1729000000021: {
    bios: "Crítico literário autoproclamado desde ontem.",
    location: "Goiânia, GO",
    link: "https://example.com/rafa-opina",
  },
  1729000000022: {
    bios: "Durmo de dia e julgo personagens às 3 da manhã. ??",
    location: "Caverna 13, setor das sombras",
    link: "https://example.com/morcego-madrugada",
  },
  1729000000023: {
    bios: "Meu tipo favorito? Personagem literário emocionalmente indisponível.",
    location: "Salvador, BA",
    link: "https://example.com/bela-ficcao",
  },
  1729000000024: {
    bios: "Duas metades, um recheio e zero estabilidade emocional. ??",
    location: "Pacote aberto na cozinha",
    link: "https://example.com/biscoito-recheio",
  },
  1729000000025: {
    bios: "Leio livros enormes para fugir de conversas curtas.",
    location: "Manaus, AM",
    link: "https://example.com/vitin-leitor",
  },
  1729000000026: {
    bios: "Au-au.exe iniciado. Carinho detectado. Bateria fraca. ??",
    location: "Tomada mais próxima",
    link: "https://example.com/robozinho.exe",
  },
  1729000000027: {
    bios: "Minha linguagem do amor é indicar livros e cobrar a leitura.",
    location: "Niterói, RJ",
    link: "https://example.com/manu-indica",
  },
  1729000000028: {
    bios: "Penso, logo coaxo. ??",
    location: "Lago existencialista",
    link: "https://example.com/sapo-pensa",
  },
  1729000000029: {
    bios: "Protagonista de uma história que nem o autor entende.",
    location: "São José dos Campos, SP",
    link: "https://example.com/enzo-protagonista",
  },
  1729000000030: {
    bios: "Conexão instável, sinal forte quando ninguém está olhando. ??",
    location: "Rede protegida por senha",
    link: "https://example.com/wifi-gratis-talvez",
  },
};

let profileEdit = users.map((user) => ({
  userId: user.id,
  name: user.name,
  username: user.userName,
  bios: dadosPerfil[user.id]?.bios ?? null,
  location: dadosPerfil[user.id]?.location ?? null,
  link: dadosPerfil[user.id]?.link ?? null,
  midiaIcon: carregarImagem(imagensPorUsuario[user.id]),
}));

//edit profile

app.post("/profileEdit/:userId", (req, res) => {
  const { name, username, bios, location, link, midiaIcon } = req.body;
  const { userId } = req.params;

  const profile = users.find((u) => u.id === userId);

  if (!profile) {
    return res.status(404).json({
      message: "Perfil não encontrado :(",
    });
  }

  const userExistsUser = users.find(
    (u) => u.userName === username && u.id !== userId,
  );

  if (userExistsUser) {
    return res.status(409).json({
      message: "Este username já está em uso por outro usuário.",
    });
  }

  const perfilAnterior = profileEdit.find((u) => u.userId === userId);

  const edit = {
    userId,
    name: name ?? perfilAnterior?.name ?? profile.name,
    username: username ?? perfilAnterior?.username ?? profile.userName,
    bios: bios ?? perfilAnterior?.bios ?? null,
    location: location ?? perfilAnterior?.location ?? null,
    link: link ?? perfilAnterior?.link ?? null,
    // "midiaIcon: null" no body significa REMOVER a foto é não pode usar
    // "??" aqui, pois null ?? anterior devolve a foto antiga e a exclusão
    // nunca tinha efeito. Só preservamos o valor anterior quando a chave
    // não veio na requisição (undefined).
    midiaIcon: ("midiaIcon" in req.body && req.body.midiaIcon == null)
      ? null
      : midiaIcon ?? perfilAnterior?.midiaIcon ?? null,
  };

  // Atualiza os dados básicos do usuário
  profile.name = edit.name;
  profile.userName = edit.username;

  // Atualiza os nomes nos comentários
  posts.forEach((post) => {
    post.comments
      .filter((comment) => comment.authorId === userId)
      .forEach((comment) => {
        comment.author = edit.name;
        comment.userName = edit.username;
      });
  });

  // Atualiza os nomes nas publicações
  posts
    .filter((post) => post.authorId === userId)
    .forEach((post) => {
      post.author = edit.name;
      post.userName = edit.username;
    });

  // Substitui o perfil anterior
  profileEdit = profileEdit.filter((u) => u.userId !== userId);

  profileEdit.push(edit);

  return res.status(200).json({
    message: "Edit feita com sucesso!",
  });
});

//get edit profile

app.get("/profileEdit/:userId", (req, res) => {
  const { userId } = req.params;

  const profile = profileEdit.find((u) => u.userId === userId);

  if (!profile) {
    return res.status(404).json({
      message: "Perfil não encontrado :(",
    });
  }

  return res.status(200).json(profile);
});

//photos
// Seed: cada usuário pré-definido recebe a imagem de tema da pasta
// "imagensTema" (mesma distribuição em ordem/ciclo usada nas imagens de perfil).
let photos = idsUsuariosPredefinidos.map((id) => ({
  userId: id,
  midiaTheme: carregarImagem(imagensTemaPorUsuario[id], pastaImagensTema),
}));

app.post("/profileTheme/:userId", (req, res) => {
  const { midiaTheme } = req.body;
  const { userId } = req.params;

  let profile = users.find((u) => u.id === userId);

  if (!profile) {
    return res.status(404).json({
      message: "Perfil não encontrado :(",
    });
  }

  const newEditPhoto = photos.filter((u) => u.userId !== userId);

  const editPhotos = {
    userId,
    midiaTheme,
  };

  photos = newEditPhoto;

  photos.push(editPhotos);

  return res.status(200).json({
    message: "Edição de foto feita com sucesso!",
  });
});

//get edit profile

app.get("/profileTheme/:userId", (req, res) => {
  const { userId } = req.params;

  const profile = photos.find((u) => u.userId === userId);

  if (!profile) {
    return res.status(404).json({
      message: "Perfil não encontrado :(",
    });
  }

  return res.status(200).json(profile);
});

//get all
app.get("/profileEdit", (_, res) => {
  return res.status(200).json(profileEdit);
});

//delete perfilIcon

app.delete("/profilePerfilIcon/:id", (req, res) => {
  const { id } = req.params;

  const profile = profileEdit.find((photo) => photo.userId === id);

  if (!profile) {
    return res.status(404).json({
      message: "Perfil não encontrado :(",
    });
  }

  profile.midiaIcon = null;

  return res
    .status(200)
    .json({ message: "Foto de perfil apagada com sucesso" });
});

//seguidores
let allFollowers = [
  {
    user: "Ana Clara Souza",
    userId: "1729000000003",
    following: "1729000000001",
  },
  {
    user: "Gabriel Oliveira",
    userId: "1729000000001",
    following: "1729000000005",
  },
  {
    user: "Pudim",
    userId: "1729000000008",
    following: "1729000000003",
  },
  {
    user: "Lua de Saturno",
    userId: "1729000000006",
    following: "1729000000018",
  },
  {
    user: "Pedro Henrique Lima",
    userId: "1729000000009",
    following: "1729000000001",
  },
  {
    user: "Capivara Zen",
    userId: "1729000000018",
    following: "1729000000008",
  },
  {
    user: "Beatriz Costa",
    userId: "1729000000007",
    following: "1729000000011",
  },
  {
    user: "Fantasma Online",
    userId: "1729000000010",
    following: "1729000000003",
  },
  {
    user: "Julia Ferreira",
    userId: "1729000000011",
    following: "1729000000009",
  },
  {
    user: "Matheus Santos",
    userId: "1729000000013",
    following: "1729000000006",
  },
  {
    user: "Nuvem Cinza",
    userId: "1729000000014",
    following: "1729000000013",
  },
  {
    user: "Larissa Almeida",
    userId: "1729000000015",
    following: "1729000000007",
  },
  {
    user: "Pixel Perdido",
    userId: "1729000000016",
    following: "1729000000020",
  },
  {
    user: "João Pedro Ribeiro",
    userId: "1729000000017",
    following: "1729000000015",
  },
  {
    user: "Maria Eduarda Silva",
    userId: "1729000000019",
    following: "1729000000011",
  },
  {
    user: "Rafael Carvalho",
    userId: "1729000000021",
    following: "1729000000002",
  },
  {
    user: "Morcego Noturno",
    userId: "1729000000022",
    following: "1729000000016",
  },
  {
    user: "Isabela Rodrigues",
    userId: "1729000000023",
    following: "1729000000019",
  },
  {
    user: "Biscoito Recheado",
    userId: "1729000000024",
    following: "1729000000008",
  },
  {
    user: "Vitor Mendes",
    userId: "1729000000025",
    following: "1729000000021",
  },
  {
    user: "Manuela Gomes",
    userId: "1729000000027",
    following: "1729000000023",
  },
  {
    user: "Sapo Filosófico",
    userId: "1729000000028",
    following: "1729000000014",
  },
  {
    user: "Enzo Barros",
    userId: "1729000000029",
    following: "1729000000005",
  },
  {
    user: "Wi-Fi do Vizinho",
    userId: "1729000000030",
    following: "1729000000027",
  },
  {
    user: "Gabriel Oliveira",
    userId: "1729000000001",
    following: "1729000000018",
  },
  {
    user: "Ana Clara Souza",
    userId: "1729000000003",
    following: "1729000000024",
  },
  {
    user: "Café com Leite",
    userId: "1729000000004",
    following: "1729000000010",
  },
  {
    user: "Robô de Estimação",
    userId: "1729000000026",
    following: "1729000000004",
  },
  {
    user: "Lucas Martins",
    userId: "1729000000005",
    following: "1729000000029",
  },
  {
    user: "Batata Cósmica",
    userId: "1729000000012",
    following: "1729000000022",
  },
  {
    user: "Rafael Carvalho",
    userId: "1729000000021",
    following: "1729000000030",
  },
  {
    user: "Isabela Rodrigues",
    userId: "1729000000023",
    following: "1729000000017",
  },
  {
    user: "Manuela Gomes",
    userId: "1729000000027",
    following: "1729000000012",
  },
  {
    user: "Pudim",
    userId: "1729000000008",
    following: "1729000000026",
  },
  {
    user: "Julia Ferreira",
    userId: "1729000000011",
    following: "1729000000025",
  },
  {
    user: "Enzo Barros",
    userId: "1729000000029",
    following: "1729000000014",
  },
];

app.post("/user/followers/:id", (req, res) => {
  const { user, userId } = req.body;
  const { id } = req.params;

  const userChosen = users.find((u) => u.id === id);

  if (!userChosen) {
    return res.status(404).json({ message: "usuário não encontrado" });
  }

  const unfollow = userChosen.followersArray?.find(
    (followers) => followers.userId === userId,
  );

  if (unfollow) {
    userChosen.followersNumber -= 1;

    allFollowers = allFollowers.filter(
      (follower) => !(follower.userId === userId && follower.following === id),
    );

    userChosen.followersArray = userChosen.followersArray.filter(
      (follower) => follower.userId !== userId,
    );

    return res.status(201).json(userChosen.followersArray);
  }

  const newFollow = {
    user: user,
    userId: userId,
    following: id,
  };

  allFollowers.push(newFollow);

  const arraySetFollowers = [
    ...new Map(
      allFollowers.map((followers) => [
        `${followers.user}-${followers.userId}-${followers.following}`,
        followers,
      ]),
    ).values(),
  ];

  allFollowers = arraySetFollowers;

  userChosen.followersNumber += 1;
  userChosen.followersArray.push(newFollow);

  return res.status(201).json(userChosen.followersArray);
});

app.get("/allFollowers", (_, res) => {
  return res.status(200).json(allFollowers);
});

app.get("/updateUser", (_, res) => {
  const usersWithoutPassword = users.map(({ password, ...user }) => user);

  return res.status(200).json(usersWithoutPassword);
});

app.get("/users", (req, res) => {
  const { search = "" } = req.query;

  const usersFilter = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return res.status(200).json(usersFilter);
});

let goalNumberList = [
  { number: 12, userId: "1729000000019" },
  { number: 37, userId: "1729000000005" },
  { number: 8, userId: "1729000000011" },
  { number: 45, userId: "1729000000021" },
  { number: 23, userId: "1729000000013" },
  { number: 16, userId: "1729000000009" },
  { number: 4, userId: "1729000000025" },
  { number: 31, userId: "1729000000004" },
  { number: 49, userId: "1729000000017" },
  { number: 6, userId: "1729000000028" },
  { number: 28, userId: "1729000000010" },
  { number: 19, userId: "1729000000002" },
  { number: 41, userId: "1729000000022" },
  { number: 14, userId: "1729000000015" },
  { number: 33, userId: "1729000000007" },
  { number: 2, userId: "1729000000029" },
  { number: 26, userId: "1729000000012" },
  { number: 47, userId: "1729000000006" },
  { number: 10, userId: "1729000000024" },
  { number: 35, userId: "1729000000018" },
];

app.post("/goalNumber/:id", (req, res) => {
  const { number } = req.body;
  const { id } = req.params;

  const validation = goalNumberList.find((user) => user.userId === id);

  if (validation) {
    validation.number = number;
    return res.status(200).json(validation, { message: "Meta atualizada!" });
  }

  const numberBooksObj = {
    number: number,
    userId: id,
  };

  goalNumberList.push(numberBooksObj);

  return res.status(200).json(numberBooksObj, { message: "Meta formada!" });
});

//buscar numeros das metas

app.get("/goalNumber/:id", (req, res) => {
  const { id } = req.params;

  const validation = goalNumberList.find((user) => user.userId === id);

  if (validation) {
    return res.status(200).json(validation);
  }

  return res.status(404).json("Meta não encontrada");
});

// Buscar a meta do usuário logado
app.get("/goalNumber/user/:id", (req, res) => {
  const { id } = req.params;

  const goalUser = goalNumberList.find((user) => user.userId === id);

  if (!goalUser) {
    return res.status(404).json({
      message: "Meta não encontrada",
    });
  }

  return res.status(200).json(goalUser);
});
