import express from "express";
import jwt from "jsonwebtoken";

const key = process.env.GOOGLE_BOOKS_API_KEY;

export let feedbackEbooks = [
  {
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
          offers: [
            {
              /* dados originais */
            },
          ],
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
            "Pouco antes de morrer, em 1977, Clarice Lispector decide se afastar da inflexão intimista que caracteriza sua escrita para desafiar a realidade. O resultado desse salto na extroversão é A hora da estrela, o livro mais surpreendente que escreveu. A nordestina Macabéa é uma mulher miserável que viaja para o Rio de Janeiro. Clarice escreveu um livro singular sobre o desamparo a que todos estamos entregues.",
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
    },
    stars: 5,
  },

  {
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
            "Vá além do clássico da literatura mundial e descubra os significados profundos, filosóficos e sociais por trás da transformação de Gregor Samsa. Sobre a Obra Principal Publicada em 1915 por Franz Kafka, A Metamorfose é uma das obras-primas mais influentes e perturbadoras da literatura ocidental. A história do caixeiro-viajante Gregor Samsa, que desperta em uma manhã transformado em um inseto monstruoso, tornou-se o grande símbolo universal da alienação moderna, da opressão familiar e da fragilidade do valor humano em uma sociedade pautada pela produtividade. O que você encontrará nesta Segunda Parte? Enquanto a Primeira Parte introduz a narrativa envolvente e o impacto do absurdo kafkaiano, esta Segunda Parte: Guia de Análise Crítica é um mergulho aprofundado na estrutura, na filosofia e nos simbolismos que transformaram a obra em um marco do século XX. Elaborado para estudantes, professores, acadêmicos e entusiastas da literatura, este volume entrega um estudo detalhado e acessível para decodificar todas as camadas do texto. Principais tópicos abordados nesta Parte II: Contexto Biográfico e Histórico: A conturbada relação de Kafka com o pai, a burocracia de Praga e os reflexos da Europa pré-Primeira Guerra Mundial. Estrutura Narrativa: A construção da narrativa tripartite, a mudança de perspectiva e a desumanização progressiva do protagonista. Decodificação de Símbolos: O verdadeiro significado do inseto, o isolamento do quarto, a ferida da maçã e a sensibilidade da cena do violino. Correntes Filosóficas: Leituras e interpretações sob a ótica do Existencialismo, da Filosofia do Absurdo (Camus), da Psicanálise (Freud) e do Marxismo. Conexões com o Século XXI: Como A Metamorfose explica dilemas atuais como a uberização do trabalho, a síndrome de burnout, a solidão urbana e o descarte de indivíduos improdutivos. Para quem é este livro? Leitores de A Metamorfose que buscam uma compreensão mais rica e crítica do texto. Estudantes universitários, vestibulandos e concurseiros que precisam dominar a obra para exames e trabalhos. Professores e pesquisadores de Literatura, Filosofia e Sociologia. Amantes de clássicos que desejam conectar a literatura do início do século XX aos desafios do mundo contemporâneo. Adquira agora e transforme sua leitura do clássico de Franz Kafka com uma reflexão crítica, profunda e indispensável!",
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
    },
    stars: 5,
  },
];

const router = express.Router();


router.get("/", async (req, res) => {
  const { q = "fiction", page = 0 } = req.query;

  const startIndex = Number(page) * 40;

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&maxResults=40&startIndex=${startIndex}&key=${key}`,
  );

  const data = await response.json();

  res.json(data.items ?? []);
});

let savedBooks = [
  {
    ebook: {
      accessInfo: {
        accessViewStatus: "SAMPLE",
        country: "BR",
        embeddable: true,
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/A_vegetariana?source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/A_vegetariana?source=gbs_api",
        },
        publicDomain: false,
        quoteSharingAllowed: false,
        textToSpeechPermission: "ALLOWED",
        viewability: "PARTIAL",
        webReaderLink:
          "http://play.google.com/books/reader?id=E3FuDwAAQBAJ&hl=&source=gbs_api",
      },
      etag: "vaS6IAbEuOE",
      id: "E3FuDwAAQBAJ",
      kind: "books#volume",
      saleInfo: {
        buyLink: "https://play.google.com/store/books/details?id=E3FuDwAAQBAJ",
        country: "BR",
        isEbook: true,
        listPrice: {
          amount: 62.9,
          currencyCode: "BRL",
        },
        offers: [{}],
        retailPrice: {
          amount: 62.9,
          currencyCode: "BRL",
        },
        saleability: "FOR_SALE",
      },
      searchInfo: {
        textSnippet:
          "Este romance de Han Kang tem sido apontado como um dos livros mais importantes da ficção contemporânea.",
      },
      selfLink: "https://www.googleapis.com/books/v1/volumes/E3FuDwAAQBAJ",
      volumeInfo: {
        allowAnonLogging: true,
        authors: ["Han Kang"],
        averageRating: 4,
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=E3FuDwAAQBAJ",
        categories: ["Fiction"],
        contentVersion: "1.9.10.0.preview.3",
        description:
          'Vencedora do PRÊMIO NOBEL DE LITERATURA 2024. A vegetariana, romance perturbador e único, tem sido apontado como um dos livros mais importantes da ficção contemporânea – e uma introdução à fecunda literatura produzida na Coreia do Sul. "Eu tive um sonho", diz Yeonghye, e desse sonho de sangue e escuros bosques nasce uma recusa vista como radical: deixar de comer, cozinhar e servir carne. A vegetariana conta a história dessa mulher comum que, pela simples decisão de não comer mais carne, transforma uma vida aparentemente sem maiores atrativos em um pesadelo perturbador e transgressivo.',
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=E3FuDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=E3FuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        industryIdentifiers: [{}, {}],
        infoLink:
          "https://play.google.com/store/books/details?id=E3FuDwAAQBAJ&source=gbs_api",
        language: "pt-BR",
        maturityRating: "NOT_MATURE",
        pageCount: 168,
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        previewLink:
          "http://books.google.com.br/books?id=E3FuDwAAQBAJ&printsec=frontcover&dq=Han+Kang&hl=&cd=7&source=gbs_api",
        printType: "BOOK",
        publishedDate: "2018-10-04",
        publisher: "Editora Todavia S.A",
        ratingsCount: 1,
        readingModes: {
          text: true,
          image: true,
        },
        title: "A vegetariana - Prêmio Nobel de Literatura 2024",
      },
    },
    progress: 94,
    userId: "1729000000007",
  },
  {
    ebook: {
      accessInfo: {
        accessViewStatus: "SAMPLE",
        country: "BR",
        embeddable: true,
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Memorias_do_subsolo?source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Memorias_do_subsolo?source=gbs_api",
        },
        publicDomain: false,
        quoteSharingAllowed: false,
        textToSpeechPermission: "ALLOWED",
        viewability: "PARTIAL",
        webReaderLink:
          "http://play.google.com/books/reader?id=s79IEAAAQBAJ&hl=&source=gbs_api",
      },
      etag: "oJhOetByXAQ",
      id: "s79IEAAAQBAJ",
      kind: "books#volume",
      saleInfo: {
        buyLink: "https://play.google.com/store/books/details?id=s79IEAAAQBAJ",
        country: "BR",
        isEbook: true,
        listPrice: {
          amount: 29.9,
          currencyCode: "BRL",
        },
        offers: [{}],
        retailPrice: {
          amount: 29.9,
          currencyCode: "BRL",
        },
        saleability: "FOR_SALE",
      },
      searchInfo: {
        textSnippet:
          "Novela que traz vários temas que aparecem em obras maduras de Dostoiévski, como Crime e castigo.",
      },
      selfLink: "https://www.googleapis.com/books/v1/volumes/s79IEAAAQBAJ",
      volumeInfo: {
        allowAnonLogging: true,
        authors: ["Fiódor Dostoiévski"],
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=s79IEAAAQBAJ",
        categories: ["Fiction"],
        contentVersion: "1.2.2.0.preview.3",
        description:
          "Novela que traz vários temas que aparecem em obras maduras de Dostoiévski, como Crime e castigo e Os irmãos Karamázov, Memórias do subsolo é considerado por muitos como o ponto de virada na carreira do autor. Lançado originalmente em 1864, enquanto Dostoiévski morava em Moscou e sua esposa estava nas últimas semanas de vida, Memórias do subsolo é considerado por muitos o ponto inicial da segunda fase do autor — na qual publicaria suas mais aclamadas obras. Alienado da sociedade e paralisado pelo peso da própria insignificância, o narrador deste livro conta a história de sua conturbada vida. Com fina ironia, ele relata sua recusa em se tornar mais um trabalhador e seu gradual exílio da sociedade que o cerca. Escrita em poucas semanas, esta novela arrebatadora explora, com a maestria única de Dostoiévski, as profundezas do desespero humano. Tradução do russo, apresentação e notas de Rubens Figueiredo.",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=s79IEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=s79IEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        industryIdentifiers: [{}, {}],
        infoLink:
          "https://play.google.com/store/books/details?id=s79IEAAAQBAJ&source=gbs_api",
        language: "pt-BR",
        maturityRating: "NOT_MATURE",
        pageCount: 199,
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        previewLink:
          "http://books.google.com.br/books?id=s79IEAAAQBAJ&printsec=frontcover&dq=memorias+do+subsolo&hl=&cd=1&source=gbs_api",
        printType: "BOOK",
        publishedDate: "2021-12-01",
        publisher: "Penguin-Companhia",
        readingModes: {
          text: true,
          image: true,
        },
        title: "Memórias do subsolo",
      },
    },
    progress: 32,
    userId: "1729000000013",
  },
  {
    ebook: {
      accessInfo: {
        accessViewStatus: "SAMPLE",
        country: "BR",
        embeddable: true,
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Confissoes?source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Confissoes?source=gbs_api",
        },
        publicDomain: false,
        quoteSharingAllowed: false,
        textToSpeechPermission: "ALLOWED",
        viewability: "PARTIAL",
        webReaderLink:
          "http://play.google.com/books/reader?id=JtSCEAAAQBAJ&hl=&source=gbs_api",
      },
      etag: "qDCbDMRNhh0",
      id: "JtSCEAAAQBAJ",
      kind: "books#volume",
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {},
        retailPrice: {},
        offers: [{}],
      },
      searchInfo: {
        textSnippet:
          "CONFESSAR NÃO É APENAS UM ATO DE CONTRIÇÃO, PARA AGOSTINHO, CONFESSAR É LOUVAR!",
      },
      selfLink: "https://www.googleapis.com/books/v1/volumes/JtSCEAAAQBAJ",
      volumeInfo: {
        allowAnonLogging: false,
        authors: ["Agostinho de Hipona"],
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=JtSCEAAAQBAJ",
        categories: ["Religion"],
        contentVersion: "0.4.4.0.preview.3",
        description:
          "CONFESSAR NÃO É APENAS UM ATO DE CONTRIÇÃO, PARA AGOSTINHO, CONFESSAR É LOUVAR! Esta obra contempla os oito primeiros livros da monumental obra Confissões de Agostinho de Hipona, também conhecido como Santo Agostinho. Em Confissões — que para Agostinho é mais que confessar os pecados: é louvar a Deus — encontramos uma espécie de autobiografia imiscuída em um tratado teológico e filosófico. Escritas por volta do ano 397 e 400 d. C., as Confissões também são uma acurada exegese da Bíblia. MAIS QUE UMA BIOGRAFIA, CONFISSÕES É UM RETRATO DA PROGRESSÃO DA FÉ DE UM CRISTÃO NOS PRIMÓRDIOS DO CRISTIANISMO. A edição conta com prefácio, texto sobre o autor, marcador de páginas de cetim em uma edição capa dura. Agostinho é para todos e a leitura de suas Confissões continuará inspirando todos aqueles que queiram o verdadeiro alimento: o alimento da alma e do conhecimento.",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=JtSCEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=JtSCEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        industryIdentifiers: [{}, {}],
        infoLink:
          "https://play.google.com/store/books/details?id=JtSCEAAAQBAJ&source=gbs_api",
        language: "pt-BR",
        maturityRating: "NOT_MATURE",
        pageCount: 183,
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        previewLink:
          "http://books.google.com.br/books?id=JtSCEAAAQBAJ&printsec=frontcover&dq=Confissoes&hl=&cd=17&source=gbs_api",
        printType: "BOOK",
        publishedDate: "2022-09-01",
        publisher: "Pandorga Editora",
        readingModes: {
          text: true,
          image: true,
        },
        title: "Confissões",
      },
    },
    progress: 53,
    userId: "1729000000028",
  },
  {
    ebook: {
      accessInfo: {
        accessViewStatus: "SAMPLE",
        country: "BR",
        embeddable: true,
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_Codigo_Da_Vinci?source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_Codigo_Da_Vinci?source=gbs_api",
        },
        publicDomain: false,
        quoteSharingAllowed: false,
        textToSpeechPermission: "ALLOWED",
        viewability: "PARTIAL",
        webReaderLink:
          "http://play.google.com/books/reader?id=gV1nhvItuoAC&hl=&source=gbs_api",
      },
      etag: "/Gj9dsWT5nY",
      id: "gV1nhvItuoAC",
      kind: "books#volume",
      saleInfo: {
        buyLink: "https://play.google.com/store/books/details?id=gV1nhvItuoAC",
        country: "BR",
        isEbook: true,
        listPrice: {
          amount: 46.99,
          currencyCode: "BRL",
        },
        offers: [{}],
        retailPrice: {
          amount: 44.64,
          currencyCode: "BRL",
        },
        saleability: "FOR_SALE",
      },
      searchInfo: {
        textSnippet:
          "O código Da Vinci é fascinante, perfeito para fãs de História, loucos por teorias da conspiração.",
      },
      selfLink: "https://www.googleapis.com/books/v1/volumes/gV1nhvItuoAC",
      volumeInfo: {
        allowAnonLogging: true,
        authors: ["Dan Brown"],
        averageRating: 5,
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=gV1nhvItuoAC",
        categories: ["Fiction"],
        contentVersion: "1.88.82.0.preview.3",
        description:
          "Um dos maiores fenômenos editoriais de todos os tempos. Um assassinato no Museu do Louvre traz à tona uma sinistra conspiração para revelar um segredo que foi protegido por uma sociedade secreta desde os tempos de Jesus Cristo. A vítima é o curador do museu, Jacques Saunière, um dos líderes dessa fraternidade, o Priorado de Sião, que já teve como membros Leonardo da Vinci, Victor Hugo e Isaac Newton. Poucos passos à frente das autoridades e do assassino, Sophie e Robert buscam pistas nas obras de Da Vinci e se debruçam sobre alguns dos maiores mistérios da cultura ocidental.",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=gV1nhvItuoAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=gV1nhvItuoAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        industryIdentifiers: [{}, {}],
        infoLink:
          "https://play.google.com/store/books/details?id=gV1nhvItuoAC&source=gbs_api",
        language: "pt-BR",
        maturityRating: "NOT_MATURE",
        pageCount: 548,
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        previewLink:
          "http://books.google.com.br/books?id=gV1nhvItuoAC&printsec=frontcover&dq=O+codigo+davin&hl=&cd=1&source=gbs_api",
        printType: "BOOK",
        publishedDate: "2012-09-11",
        publisher: "Editora Arqueiro",
        ratingsCount: 5,
        readingModes: {
          text: true,
          image: true,
        },
        title: "O Código Da Vinci",
      },
    },
    progress: 6,
    userId: "1729000000019",
  },
  {
    ebook: {
      accessInfo: {
        accessViewStatus: "SAMPLE",
        country: "BR",
        embeddable: true,
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/A_Game_of_Thrones?source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        publicDomain: false,
        quoteSharingAllowed: false,
        textToSpeechPermission: "ALLOWED",
        viewability: "PARTIAL",
        webReaderLink:
          "http://play.google.com/books/reader?id=2WHZDAAAQBAJ&hl=&source=gbs_api",
      },
      etag: "26wSoKr9WK8",
      id: "2WHZDAAAQBAJ",
      kind: "books#volume",
      saleInfo: {
        country: "BR",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      searchInfo: {
        textSnippet:
          "Published in celebration of the twentieth anniversary of George R. R. Martin’s landmark series.",
      },
      selfLink: "https://www.googleapis.com/books/v1/volumes/2WHZDAAAQBAJ",
      volumeInfo: {
        allowAnonLogging: true,
        authors: ["George R.R. Martin"],
        canonicalVolumeLink:
          "https://books.google.com/books/about/A_Game_of_Thrones_A_Song_of_Ice_and_Fire.html?hl=&id=2WHZDAAAQBAJ",
        categories: ["Fiction"],
        contentVersion: "1.5.5.0.preview.2",
        description:
          "Published in celebration of the twentieth anniversary of George R. R. Martin’s landmark series, this lavishly illustrated special edition of A Game of Thrones—with gorgeous full-page illustrations in every chapter— is now fully optimised for ebook readers.",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=2WHZDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=2WHZDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        industryIdentifiers: [{}, {}],
        infoLink:
          "http://books.google.com.br/books?id=2WHZDAAAQBAJ&dq=Game+of+thrones&hl=&source=gbs_api",
        language: "en",
        maturityRating: "NOT_MATURE",
        pageCount: 803,
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        previewLink:
          "http://books.google.com.br/books?id=2WHZDAAAQBAJ&printsec=frontcover&dq=Game+of+thrones&hl=&cd=2&source=gbs_api",
        printType: "BOOK",
        publishedDate: "2016-10-18",
        publisher: "HarperCollins UK",
        readingModes: {
          text: true,
          image: false,
        },
        title: "A Game of Thrones (A Song of Ice and Fire)",
      },
    },
    progress: 78,
    userId: "1729000000005",
  },
  {
    ebook: {
      accessInfo: {
        accessViewStatus: "SAMPLE",
        country: "BR",
        embeddable: true,
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Noites_Brancas?source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        publicDomain: false,
        quoteSharingAllowed: false,
        textToSpeechPermission: "ALLOWED",
        viewability: "PARTIAL",
        webReaderLink:
          "http://play.google.com/books/reader?id=_YnrDwAAQBAJ&hl=&source=gbs_api",
      },
      etag: "9oT7hmTM+F4",
      id: "_YnrDwAAQBAJ",
      kind: "books#volume",
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {},
        retailPrice: {},
        offers: [{}],
      },
      searchInfo: {
        textSnippet:
          "Noite branca é um fenômeno comum na Rússia, em especial em São Petersburgo.",
      },
      selfLink: "https://www.googleapis.com/books/v1/volumes/_YnrDwAAQBAJ",
      volumeInfo: {
        allowAnonLogging: true,
        authors: ["Fiódor Dostoiévski"],
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=_YnrDwAAQBAJ",
        categories: ["Fiction"],
        contentVersion: "1.4.4.0.preview.2",
        description:
          "Noite branca é um fenômeno comum na Rússia, em especial em São Petersburgo, em que o sol permanece um pouco abaixo da linha do horizonte ao se por, deixando a madrugada clara. É nesse cenário de atmosfera lírica que dois jovens sonhadores se conhecem em uma ponte. Ao longo de quatro noites, os dois combinam de se ver para falar sobre suas vidas e compartilhar sonhos, angústias e reflexões, até o desfecho inesperado ao final do quarto encontro.",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=_YnrDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=_YnrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        industryIdentifiers: [{}, {}],
        infoLink:
          "https://play.google.com/store/books/details?id=_YnrDwAAQBAJ&source=gbs_api",
        language: "pt-BR",
        maturityRating: "NOT_MATURE",
        pageCount: 86,
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        previewLink:
          "http://books.google.com.br/books?id=_YnrDwAAQBAJ&printsec=frontcover&dq=noites+brancas&hl=&cd=4&source=gbs_api",
        printType: "BOOK",
        publishedDate: "2020-06-02",
        publisher: "Principis",
        readingModes: {
          text: true,
          image: false,
        },
        title: "Noites Brancas",
      },
    },
    progress: 66,
    userId: "1729000000017",
  },
  {
    ebook: {
      accessInfo: {
        accessViewStatus: "SAMPLE",
        country: "BR",
        embeddable: true,
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/As_obras_revolucionarias_de_George_Orwell?source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/As_obras_revolucionarias_de_George_Orwell?source=gbs_api",
        },
        publicDomain: false,
        quoteSharingAllowed: false,
        textToSpeechPermission: "ALLOWED",
        viewability: "PARTIAL",
        webReaderLink:
          "http://play.google.com/books/reader?id=8KQjEAAAQBAJ&hl=&source=gbs_api",
      },
      etag: "5IT9zCK06bU",
      id: "8KQjEAAAQBAJ",
      kind: "books#volume",
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {},
        retailPrice: {},
        offers: [{}],
      },
      searchInfo: {
        textSnippet:
          "George Orwell é um dos escritores mais importantes do século XX.",
      },
      selfLink: "https://www.googleapis.com/books/v1/volumes/8KQjEAAAQBAJ",
      volumeInfo: {
        allowAnonLogging: true,
        authors: ["George Orwell"],
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=8KQjEAAAQBAJ",
        categories: ["Fiction"],
        contentVersion: "0.1.1.0.preview.3",
        description:
          "George Orwell é um dos escritores mais importantes do século XX. Foi autor de romances, ensaios, críticas e artigos jornalísticos, com textos de fácil compreensão, inteligentes e críticos, apontando as injustiças sociais. Suas obras trazem oposição ao totalitarismo, o que as tornaram influentes na cultura popular, mas também na política. Conheça a essência de Orwell em 1984, A revolução dos bichos e Dentro da baleia e outros ensaios.",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=8KQjEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=8KQjEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        industryIdentifiers: [{}, {}],
        infoLink:
          "https://play.google.com/store/books/details?id=8KQjEAAAQBAJ&source=gbs_api",
        language: "pt-BR",
        maturityRating: "NOT_MATURE",
        pageCount: 715,
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        previewLink:
          "http://books.google.com.br/books?id=8KQjEAAAQBAJ&printsec=frontcover&dq=George+Orwell&hl=&cd=3&source=gbs_api",
        printType: "BOOK",
        publishedDate: "2021-03-29",
        publisher: "Principis",
        readingModes: {
          text: true,
          image: true,
        },
        title: "As obras revolucionárias de George Orwell",
      },
    },
    progress: 33,
    userId: "1729000000022",
  },
  {
    ebook: {
      accessInfo: {
        accessViewStatus: "SAMPLE",
        country: "BR",
        embeddable: true,
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Como_Perder_Amigos_e_Irritar_Pessoas?source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Como_Perder_Amigos_e_Irritar_Pessoas?source=gbs_api",
        },
        publicDomain: false,
        quoteSharingAllowed: false,
        textToSpeechPermission: "ALLOWED",
        viewability: "PARTIAL",
        webReaderLink:
          "http://play.google.com/books/reader?id=OvnUEQAAQBAJ&hl=&source=gbs_api",
      },
      etag: "AAin5HOxZks",
      id: "OvnUEQAAQBAJ",
      kind: "books#volume",
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {},
        retailPrice: {},
        offers: [{}],
      },
      searchInfo: {
        textSnippet:
          "... amigo que passar pela sua porta. Importunar qualquer pessoa...",
      },
      selfLink: "https://www.googleapis.com/books/v1/volumes/OvnUEQAAQBAJ",
      volumeInfo: {
        allowAnonLogging: false,
        authors: ["Irving D. Tressler"],
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=OvnUEQAAQBAJ",
        categories: ["Humor"],
        contentVersion: "preview-1.0.0",
        description:
          "Estes vigorosos conselhos de Irving Tressler, de eficácia garantida, já levaram diversas pessoas a ter uma vida mais tranquila e mais solitária. São regras que visam o homem comum e ensinam como afugentar visitas indesejadas, transformar conversas à toa em discussões desagradáveis e se livrar dos chatos.",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=OvnUEQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=OvnUEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        industryIdentifiers: [{}, {}],
        infoLink:
          "https://play.google.com/store/books/details?id=OvnUEQAAQBAJ&source=gbs_api",
        language: "pt-BR",
        maturityRating: "NOT_MATURE",
        pageCount: 177,
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        previewLink:
          "http://books.google.com.br/books?id=OvnUEQAAQBAJ&pg=PT27&dq=como+irritar+pessoas+e+perder+amigos&hl=&cd=1&source=gbs_api",
        printType: "BOOK",
        publishedDate: "2019-03-25",
        publisher: "Auster",
        readingModes: {
          text: true,
          image: true,
        },
        title: "Como Perder Amigos e Irritar Pessoas",
      },
    },
    progress: 42,
    userId: "1729000000024",
  },
  {
    ebook: {
      accessInfo: {
        accessViewStatus: "SAMPLE",
        country: "BR",
        embeddable: true,
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/A_vegetariana?source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/A_vegetariana?source=gbs_api",
        },
        publicDomain: false,
        quoteSharingAllowed: false,
        textToSpeechPermission: "ALLOWED",
        viewability: "PARTIAL",
        webReaderLink:
          "http://play.google.com/books/reader?id=E3FuDwAAQBAJ&hl=&source=gbs_api",
      },
      etag: "vaS6IAbEuOE",
      id: "E3FuDwAAQBAJ",
      kind: "books#volume",
      saleInfo: {
        buyLink: "https://play.google.com/store/books/details?id=E3FuDwAAQBAJ",
        country: "BR",
        isEbook: true,
        listPrice: { amount: 62.9, currencyCode: "BRL" },
        offers: [{}],
        retailPrice: { amount: 62.9, currencyCode: "BRL" },
        saleability: "FOR_SALE",
      },
      searchInfo: {
        textSnippet:
          "Este romance de Han Kang tem sido apontado como um dos livros mais importantes da ficção contemporânea.",
      },
      selfLink: "https://www.googleapis.com/books/v1/volumes/E3FuDwAAQBAJ",
      volumeInfo: {
        allowAnonLogging: true,
        authors: ["Han Kang"],
        averageRating: 4,
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=E3FuDwAAQBAJ",
        categories: ["Fiction"],
        contentVersion: "1.9.10.0.preview.3",
        description:
          'Vencedora do PRÊMIO NOBEL DE LITERATURA 2024. A vegetariana, romance perturbador e único, tem sido apontado como um dos livros mais importantes da ficção contemporânea – e uma introdução à fecunda literatura produzida na Coreia do Sul. "Eu tive um sonho", diz Yeonghye, e desse sonho de sangue e escuros bosques nasce uma recusa vista como radical: deixar de comer, cozinhar e servir carne. A vegetariana conta a história dessa mulher comum que, pela simples decisão de não comer mais carne, transforma uma vida aparentemente sem maiores atrativos em um pesadelo perturbador e transgressivo.',
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=E3FuDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=E3FuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        industryIdentifiers: [{}, {}],
        infoLink:
          "https://play.google.com/store/books/details?id=E3FuDwAAQBAJ&source=gbs_api",
        language: "pt-BR",
        maturityRating: "NOT_MATURE",
        pageCount: 168,
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        previewLink:
          "http://books.google.com.br/books?id=E3FuDwAAQBAJ&printsec=frontcover&dq=Han+Kang&hl=&cd=7&source=gbs_api",
        printType: "BOOK",
        publishedDate: "2018-10-04",
        publisher: "Editora Todavia S.A",
        ratingsCount: 1,
        readingModes: { text: true, image: true },
        title: "A vegetariana - Prêmio Nobel de Literatura 2024",
      },
    },
    progress: 94,
    userId: "1729000000003",
  },
  {
    ebook: {
      accessInfo: {
        accessViewStatus: "SAMPLE",
        country: "BR",
        embeddable: true,
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Memorias_do_subsolo?source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Memorias_do_subsolo?source=gbs_api",
        },
        publicDomain: false,
        quoteSharingAllowed: false,
        textToSpeechPermission: "ALLOWED",
        viewability: "PARTIAL",
        webReaderLink:
          "http://play.google.com/books/reader?id=s79IEAAAQBAJ&hl=&source=gbs_api",
      },
      etag: "oJhOetByXAQ",
      id: "s79IEAAAQBAJ",
      kind: "books#volume",
      saleInfo: {
        buyLink: "https://play.google.com/store/books/details?id=s79IEAAAQBAJ",
        country: "BR",
        isEbook: true,
        listPrice: { amount: 29.9, currencyCode: "BRL" },
        offers: [{}],
        retailPrice: { amount: 29.9, currencyCode: "BRL" },
        saleability: "FOR_SALE",
      },
      searchInfo: {
        textSnippet:
          "Novela que traz vários temas que aparecem em obras maduras de Dostoiévski, como Crime e castigo.",
      },
      selfLink: "https://www.googleapis.com/books/v1/volumes/s79IEAAAQBAJ",
      volumeInfo: {
        allowAnonLogging: true,
        authors: ["Fiódor Dostoiévski"],
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=s79IEAAAQBAJ",
        categories: ["Fiction"],
        contentVersion: "1.2.2.0.preview.3",
        description:
          "Novela que traz vários temas que aparecem em obras maduras de Dostoiévski, como Crime e castigo e Os irmãos Karamázov, Memórias do subsolo é considerado por muitos como o ponto de virada na carreira do autor. Lançado originalmente em 1864, enquanto Dostoiévski morava em Moscou e sua esposa estava nas últimas semanas de vida, Memórias do subsolo é considerado por muitos o ponto inicial da segunda fase do autor — na qual publicaria suas mais aclamadas obras. Alienado da sociedade e paralisado pelo peso da própria insignificância, o narrador deste livro conta a história de sua conturbada vida. Com fina ironia, ele relata sua recusa em se tornar mais um trabalhador e seu gradual exílio da sociedade que o cerca. Escrita em poucas semanas, esta novela arrebatadora explora, com a maestria única de Dostoiévski, as profundezas do desespero humano. Tradução do russo, apresentação e notas de Rubens Figueiredo.",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=s79IEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=s79IEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        industryIdentifiers: [{}, {}],
        infoLink:
          "https://play.google.com/store/books/details?id=s79IEAAAQBAJ&source=gbs_api",
        language: "pt-BR",
        maturityRating: "NOT_MATURE",
        pageCount: 199,
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        previewLink:
          "http://books.google.com.br/books?id=s79IEAAAQBAJ&printsec=frontcover&dq=memorias+do+subsolo&hl=&cd=1&source=gbs_api",
        printType: "BOOK",
        publishedDate: "2021-12-01",
        publisher: "Penguin-Companhia",
        readingModes: { text: true, image: true },
        title: "Memórias do subsolo",
      },
    },
    progress: 32,
    userId: "1729000000016",
  },
  {
    ebook: {
      accessInfo: {
        accessViewStatus: "SAMPLE",
        country: "BR",
        embeddable: true,
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Confissoes?source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Confissoes?source=gbs_api",
        },
        publicDomain: false,
        quoteSharingAllowed: false,
        textToSpeechPermission: "ALLOWED",
        viewability: "PARTIAL",
        webReaderLink:
          "http://play.google.com/books/reader?id=JtSCEAAAQBAJ&hl=&source=gbs_api",
      },
      etag: "qDCbDMRNhh0",
      id: "JtSCEAAAQBAJ",
      kind: "books#volume",
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {},
        retailPrice: {},
        offers: [{}],
      },
      searchInfo: {
        textSnippet:
          "CONFESSAR NÃO É APENAS UM ATO DE CONTRIÇÃO, PARA AGOSTINHO, CONFESSAR É LOUVAR!",
      },
      selfLink: "https://www.googleapis.com/books/v1/volumes/JtSCEAAAQBAJ",
      volumeInfo: {
        allowAnonLogging: false,
        authors: ["Agostinho de Hipona"],
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=JtSCEAAAQBAJ",
        categories: ["Religion"],
        contentVersion: "0.4.4.0.preview.3",
        description:
          "CONFESSAR NÃO É APENAS UM ATO DE CONTRIÇÃO, PARA AGOSTINHO, CONFESSAR É LOUVAR! Esta obra contempla os oito primeiros livros da monumental obra Confissões de Agostinho de Hipona, também conhecido como Santo Agostinho. Em Confissões — que para Agostinho é mais que confessar os pecados: é louvar a Deus — encontramos uma espécie de autobiografia imiscuída em um tratado teológico e filosófico. Escritas por volta do ano 397 e 400 d. C., as Confissões também são uma acurada exegese da Bíblia. MAIS QUE UMA BIOGRAFIA, CONFISSÕES É UM RETRATO DA PROGRESSÃO DA FÉ DE UM CRISTÃO NOS PRIMÓRDIOS DO CRISTIANISMO. A edição conta com prefácio, texto sobre o autor, marcador de páginas de cetim em uma edição capa dura. Agostinho é para todos e a leitura de suas Confissões continuará inspirando todos aqueles que queiram o verdadeiro alimento: o alimento da alma e do conhecimento.",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=JtSCEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=JtSCEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        industryIdentifiers: [{}, {}],
        infoLink:
          "https://play.google.com/store/books/details?id=JtSCEAAAQBAJ&source=gbs_api",
        language: "pt-BR",
        maturityRating: "NOT_MATURE",
        pageCount: 183,
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        previewLink:
          "http://books.google.com.br/books?id=JtSCEAAAQBAJ&printsec=frontcover&dq=Confissoes&hl=&cd=17&source=gbs_api",
        printType: "BOOK",
        publishedDate: "2022-09-01",
        publisher: "Pandorga Editora",
        readingModes: { text: true, image: true },
        title: "Confissões",
      },
    },
    progress: 53,
    userId: "1729000000008",
  },
  {
    ebook: {
      accessInfo: {
        accessViewStatus: "SAMPLE",
        country: "BR",
        embeddable: true,
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_Codigo_Da_Vinci?source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/O_Codigo_Da_Vinci?source=gbs_api",
        },
        publicDomain: false,
        quoteSharingAllowed: false,
        textToSpeechPermission: "ALLOWED",
        viewability: "PARTIAL",
        webReaderLink:
          "http://play.google.com/books/reader?id=gV1nhvItuoAC&hl=&source=gbs_api",
      },
      etag: "/Gj9dsWT5nY",
      id: "gV1nhvItuoAC",
      kind: "books#volume",
      saleInfo: {
        buyLink: "https://play.google.com/store/books/details?id=gV1nhvItuoAC",
        country: "BR",
        isEbook: true,
        listPrice: { amount: 46.99, currencyCode: "BRL" },
        offers: [{}],
        retailPrice: { amount: 44.64, currencyCode: "BRL" },
        saleability: "FOR_SALE",
      },
      searchInfo: {
        textSnippet:
          "O código Da Vinci é fascinante, perfeito para fãs de História, loucos por teorias da conspiração.",
      },
      selfLink: "https://www.googleapis.com/books/v1/volumes/gV1nhvItuoAC",
      volumeInfo: {
        allowAnonLogging: true,
        authors: ["Dan Brown"],
        averageRating: 5,
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=gV1nhvItuoAC",
        categories: ["Fiction"],
        contentVersion: "1.88.82.0.preview.3",
        description:
          "Um dos maiores fenômenos editoriais de todos os tempos. Um assassinato no Museu do Louvre traz à tona uma sinistra conspiração para revelar um segredo que foi protegido por uma sociedade secreta desde os tempos de Jesus Cristo. A vítima é o curador do museu, Jacques Saunière, um dos líderes dessa fraternidade, o Priorado de Sião, que já teve como membros Leonardo da Vinci, Victor Hugo e Isaac Newton. Poucos passos à frente das autoridades e do assassino, Sophie e Robert buscam pistas nas obras de Da Vinci e se debruçam sobre alguns dos maiores mistérios da cultura ocidental.",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=gV1nhvItuoAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=gV1nhvItuoAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        industryIdentifiers: [{}, {}],
        infoLink:
          "https://play.google.com/store/books/details?id=gV1nhvItuoAC&source=gbs_api",
        language: "pt-BR",
        maturityRating: "NOT_MATURE",
        pageCount: 548,
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        previewLink:
          "http://books.google.com.br/books?id=gV1nhvItuoAC&printsec=frontcover&dq=O+codigo+davin&hl=&cd=1&source=gbs_api",
        printType: "BOOK",
        publishedDate: "2012-09-11",
        publisher: "Editora Arqueiro",
        ratingsCount: 5,
        readingModes: { text: true, image: true },
        title: "O Código Da Vinci",
      },
    },
    progress: 6,
    userId: "1729000000021",
  },
  {
    ebook: {
      accessInfo: {
        accessViewStatus: "SAMPLE",
        country: "BR",
        embeddable: true,
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/A_Game_of_Thrones?source=gbs_api",
        },
        pdf: { isAvailable: false },
        publicDomain: false,
        quoteSharingAllowed: false,
        textToSpeechPermission: "ALLOWED",
        viewability: "PARTIAL",
        webReaderLink:
          "http://play.google.com/books/reader?id=2WHZDAAAQBAJ&hl=&source=gbs_api",
      },
      etag: "26wSoKr9WK8",
      id: "2WHZDAAAQBAJ",
      kind: "books#volume",
      saleInfo: {
        country: "BR",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      searchInfo: {
        textSnippet:
          "Published in celebration of the twentieth anniversary of George R. R. Martin’s landmark series.",
      },
      selfLink: "https://www.googleapis.com/books/v1/volumes/2WHZDAAAQBAJ",
      volumeInfo: {
        allowAnonLogging: true,
        authors: ["George R.R. Martin"],
        canonicalVolumeLink:
          "https://books.google.com/books/about/A_Game_of_Thrones_A_Song_of_Ice_and_Fire.html?hl=&id=2WHZDAAAQBAJ",
        categories: ["Fiction"],
        contentVersion: "1.5.5.0.preview.2",
        description:
          "Published in celebration of the twentieth anniversary of George R. R. Martin’s landmark series, this lavishly illustrated special edition of A Game of Thrones—with gorgeous full-page illustrations in every chapter— is now fully optimised for ebook readers.",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=2WHZDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=2WHZDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        industryIdentifiers: [{}, {}],
        infoLink:
          "http://books.google.com.br/books?id=2WHZDAAAQBAJ&dq=Game+of+thrones&hl=&source=gbs_api",
        language: "en",
        maturityRating: "NOT_MATURE",
        pageCount: 803,
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        previewLink:
          "http://books.google.com.br/books?id=2WHZDAAAQBAJ&printsec=frontcover&dq=Game+of+thrones&hl=&cd=2&source=gbs_api",
        printType: "BOOK",
        publishedDate: "2016-10-18",
        publisher: "HarperCollins UK",
        readingModes: { text: true, image: false },
        title: "A Game of Thrones (A Song of Ice and Fire)",
      },
    },
    progress: 78,
    userId: "1729000000006",
  },
  {
    ebook: {
      accessInfo: {
        accessViewStatus: "SAMPLE",
        country: "BR",
        embeddable: true,
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Noites_Brancas?source=gbs_api",
        },
        pdf: { isAvailable: false },
        publicDomain: false,
        quoteSharingAllowed: false,
        textToSpeechPermission: "ALLOWED",
        viewability: "PARTIAL",
        webReaderLink:
          "http://play.google.com/books/reader?id=_YnrDwAAQBAJ&hl=&source=gbs_api",
      },
      etag: "9oT7hmTM+F4",
      id: "_YnrDwAAQBAJ",
      kind: "books#volume",
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {},
        retailPrice: {},
        offers: [{}],
      },
      searchInfo: {
        textSnippet:
          "Noite branca é um fenômeno comum na Rússia, em especial em São Petersburgo.",
      },
      selfLink: "https://www.googleapis.com/books/v1/volumes/_YnrDwAAQBAJ",
      volumeInfo: {
        allowAnonLogging: true,
        authors: ["Fiódor Dostoiévski"],
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=_YnrDwAAQBAJ",
        categories: ["Fiction"],
        contentVersion: "1.4.4.0.preview.2",
        description:
          "Noite branca é um fenômeno comum na Rússia, em especial em São Petersburgo, em que o sol permanece um pouco abaixo da linha do horizonte ao se por, deixando a madrugada clara. É nesse cenário de atmosfera lírica que dois jovens sonhadores se conhecem em uma ponte. Ao longo de quatro noites, os dois combinam de se ver para falar sobre suas vidas e compartilhar sonhos, angústias e reflexões, até o desfecho inesperado ao final do quarto encontro.",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=_YnrDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=_YnrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        industryIdentifiers: [{}, {}],
        infoLink:
          "https://play.google.com/store/books/details?id=_YnrDwAAQBAJ&source=gbs_api",
        language: "pt-BR",
        maturityRating: "NOT_MATURE",
        pageCount: 86,
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        previewLink:
          "http://books.google.com.br/books?id=_YnrDwAAQBAJ&printsec=frontcover&dq=noites+brancas&hl=&cd=4&source=gbs_api",
        printType: "BOOK",
        publishedDate: "2020-06-02",
        publisher: "Principis",
        readingModes: { text: true, image: false },
        title: "Noites Brancas",
      },
    },
    progress: 66,
    userId: "1729000000010",
  },
  {
    ebook: {
      accessInfo: {
        accessViewStatus: "SAMPLE",
        country: "BR",
        embeddable: true,
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/As_obras_revolucionarias_de_George_Orwell?source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/As_obras_revolucionarias_de_George_Orwell?source=gbs_api",
        },
        publicDomain: false,
        quoteSharingAllowed: false,
        textToSpeechPermission: "ALLOWED",
        viewability: "PARTIAL",
        webReaderLink:
          "http://play.google.com/books/reader?id=8KQjEAAAQBAJ&hl=&source=gbs_api",
      },
      etag: "5IT9zCK06bU",
      id: "8KQjEAAAQBAJ",
      kind: "books#volume",
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {},
        retailPrice: {},
        offers: [{}],
      },
      searchInfo: {
        textSnippet:
          "George Orwell é um dos escritores mais importantes do século XX.",
      },
      selfLink: "https://www.googleapis.com/books/v1/volumes/8KQjEAAAQBAJ",
      volumeInfo: {
        allowAnonLogging: true,
        authors: ["George Orwell"],
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=8KQjEAAAQBAJ",
        categories: ["Fiction"],
        contentVersion: "0.1.1.0.preview.3",
        description:
          "George Orwell é um dos escritores mais importantes do século XX. Foi autor de romances, ensaios, críticas e artigos jornalísticos, com textos de fácil compreensão, inteligentes e críticos, apontando as injustiças sociais. Suas obras trazem oposição ao totalitarismo, o que as tornaram influentes na cultura popular, mas também na política. Conheça a essência de Orwell em 1984, A revolução dos bichos e Dentro da baleia e outros ensaios.",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=8KQjEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=8KQjEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        industryIdentifiers: [{}, {}],
        infoLink:
          "https://play.google.com/store/books/details?id=8KQjEAAAQBAJ&source=gbs_api",
        language: "pt-BR",
        maturityRating: "NOT_MATURE",
        pageCount: 715,
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        previewLink:
          "http://books.google.com.br/books?id=8KQjEAAAQBAJ&printsec=frontcover&dq=George+Orwell&hl=&cd=3&source=gbs_api",
        printType: "BOOK",
        publishedDate: "2021-03-29",
        publisher: "Principis",
        readingModes: { text: true, image: true },
        title: "As obras revolucionárias de George Orwell",
      },
    },
    progress: 33,
    userId: "1729000000027",
  },
  {
    ebook: {
      accessInfo: {
        accessViewStatus: "SAMPLE",
        country: "BR",
        embeddable: true,
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Como_Perder_Amigos_e_Irritar_Pessoas?source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.br/books/download/Como_Perder_Amigos_e_Irritar_Pessoas?source=gbs_api",
        },
        publicDomain: false,
        quoteSharingAllowed: false,
        textToSpeechPermission: "ALLOWED",
        viewability: "PARTIAL",
        webReaderLink:
          "http://play.google.com/books/reader?id=OvnUEQAAQBAJ&hl=&source=gbs_api",
      },
      etag: "AAin5HOxZks",
      id: "OvnUEQAAQBAJ",
      kind: "books#volume",
      saleInfo: {
        country: "BR",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {},
        retailPrice: {},
        offers: [{}],
      },
      searchInfo: {
        textSnippet:
          "... amigo que passar pela sua porta. Importunar qualquer pessoa...",
      },
      selfLink: "https://www.googleapis.com/books/v1/volumes/OvnUEQAAQBAJ",
      volumeInfo: {
        allowAnonLogging: false,
        authors: ["Irving D. Tressler"],
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=OvnUEQAAQBAJ",
        categories: ["Humor"],
        contentVersion: "preview-1.0.0",
        description:
          "Estes vigorosos conselhos de Irving Tressler, de eficácia garantida, já levaram diversas pessoas a ter uma vida mais tranquila e mais solitária. São regras que visam o homem comum e ensinam como afugentar visitas indesejadas, transformar conversas à toa em discussões desagradáveis e se livrar dos chatos.",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=OvnUEQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=OvnUEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        industryIdentifiers: [{}, {}],
        infoLink:
          "https://play.google.com/store/books/details?id=OvnUEQAAQBAJ&source=gbs_api",
        language: "pt-BR",
        maturityRating: "NOT_MATURE",
        pageCount: 177,
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        previewLink:
          "http://books.google.com.br/books?id=OvnUEQAAQBAJ&pg=PT27&dq=como+irritar+pessoas+e+perder+amigos&hl=&cd=1&source=gbs_api",
        printType: "BOOK",
        publishedDate: "2019-03-25",
        publisher: "Auster",
        readingModes: { text: true, image: true },
        title: "Como Perder Amigos e Irritar Pessoas",
      },
    },
    progress: 42,
    userId: "1729000000014",
  },
];

router.post("/saved", (req, res) => {
  const ebook = req.body;
  const stringToken = req.headers.authorization.split(" ");
  const decoded = jwt.verify(stringToken[1], "minha_chave_super_secreta");

  const userId = decoded.id;

  if (!ebook?.etag) {
    return res.status(400).json({
      error: "O e-book precisa possuir um ID.",
    });
  }

  const ebookAlreadySaved = savedBooks.some(
    (savedBook) =>
      savedBook.userId === userId && savedBook.ebook.etag === ebook.etag,
  );

  if (ebookAlreadySaved) {
    return res.status(409).json({
      error: "Este e-book já foi salvo por este usuário.",
    });
  }

  const randomNumber = Math.floor(Math.random() * 100) + 1;

  const newSavedBook = {
    userId,
    ebook,
    progress: randomNumber,
  };

  savedBooks.push(newSavedBook);

  return res.status(201).json({
    message: "E-book salvo com sucesso!",
    ebook: newSavedBook.ebook,
  });
});

router.get("/saved", (req, res) => {
  const stringToken = req.headers.authorization.split(" ");
  const decoded = jwt.verify(stringToken[1], "minha_chave_super_secreta");

  const userId = decoded.id;

  const arrayBookSavedUser = savedBooks.filter((a) => a.userId === userId);

  if (arrayBookSavedUser.length >= 1) {
    return res.status(200).json(arrayBookSavedUser);
  }

  return res.status(404).json({ error: "Ainda não foi salvo nenhum livro" });
});

router.get("/saved/:userId", (req, res) => {
  const { userId } = req.params;

  const booksUser = savedBooks.filter(
    (savedBook) => String(savedBook.userId) === String(userId),
  );

  return res.status(200).json(booksUser);
});

//retirar livros salvos

router.delete("/ebookDelete/:id", (req, res) => {
  const { userId } = req.body;
  const { id } = req.params;

  const book = savedBooks.find((book) => book.ebook.id === id);

  if (!book) {
    return res.status(404).json({
      message: "Livro não encontrado :(",
    });
  }

  let indice = savedBooks.findIndex((book) => book.ebook.id === id);

  if (indice !== -1) {
    savedBooks.splice(indice, 1);
  }

  const booksUser = savedBooks.filter(
    (savedBook) => String(savedBook.userId) === String(userId),
  );

  return res.status(200).json(booksUser);
});

//retorna a lista de livros com notas
router.get("/feedbacks", (_, res) => {
  return res.status(200).json(feedbackEbooks);
});

export default router;
