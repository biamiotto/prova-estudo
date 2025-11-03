import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Inserindo comidas no banco...')

  await prisma.comida.deleteMany()

  await prisma.comida.createMany({
    data: [
      {
        nome: "Arroz branco",
        tipo: "Acompanhamento",
        preco: 5.00,
        descricao: "Arroz branco soltinho, ideal para acompanhar qualquer refeição."
      },
      {
        nome: "Feijão preto",
        tipo: "Acompanhamento",
        preco: 6.00,
        descricao: "Feijão preto temperado, cozido com alho e louro."
      },
      {
        nome: "Macarrão com molho",
        tipo: "Prato principal",
        preco: 8.50,
        descricao: "Macarrão com molho de tomate simples e delicioso."
      },
      {
        nome: "Ovo frito",
        tipo: "Proteína",
        preco: 3.00,
        descricao: "Ovo frito na manteiga com gema mole."
      },
      {
        nome: "Pão com manteiga",
        tipo: "Café da manhã",
        preco: 2.00,
        descricao: "Pão francês quentinho com manteiga derretida."
      },
      {
        nome: "Salada de alface",
        tipo: "Acompanhamento",
        preco: 4.00,
        descricao: "Salada fresca de alface com azeite e sal."
      },
      {
        nome: "Purê de batata",
        tipo: "Acompanhamento",
        preco: 5.50,
        descricao: "Purê cremoso de batata com leite e manteiga."
      },
      {
        nome: "Frango grelhado",
        tipo: "Proteína",
        preco: 10.00,
        descricao: "Peito de frango grelhado temperado na chapa."
      },
      {
        nome: "Bife acebolado",
        tipo: "Proteína",
        preco: 12.00,
        descricao: "Bife bovino com cebolas douradas."
      },
      {
        nome: "Sopa de legumes",
        tipo: "Prato principal",
        preco: 7.00,
        descricao: "Sopa leve de legumes variados com caldo natural."
      },
      {
        nome: "Farofa",
        tipo: "Acompanhamento",
        preco: 4.50,
        descricao: "Farofa crocante com temperos caseiros."
      },
      {
        nome: "Cuscuz com ovo",
        tipo: "Café da manhã",
        preco: 6.00,
        descricao: "Cuscuz nordestino acompanhado de ovo frito."
      },
      {
        nome: "Sanduíche de presunto e queijo",
        tipo: "Lanche",
        preco: 5.00,
        descricao: "Sanduíche simples com presunto e queijo no pão de forma."
      },
      {
        nome: "Panqueca simples",
        tipo: "Lanche",
        preco: 6.50,
        descricao: "Panqueca recheada com carne moída e molho."
      },
      {
        nome: "Batata frita",
        tipo: "Acompanhamento",
        preco: 7.00,
        descricao: "Batata palito frita crocante e salgadinha."
      },
      {
        nome: "Arroz carreteiro",
        tipo: "Prato principal",
        preco: 9.50,
        descricao: "Arroz misturado com carne seca e temperos."
      },
      {
        nome: "Miojo",
        tipo: "Prato rápido",
        preco: 3.50,
        descricao: "Macarrão instantâneo com tempero sabor galinha caipira."
      },
      {
        nome: "Torta de frango",
        tipo: "Prato principal",
        preco: 8.00,
        descricao: "Torta salgada recheada com frango desfiado e requeijão."
      },
      {
        nome: "Lasanha",
        tipo: "Prato principal",
        preco: 11.00,
        descricao: "Lasanha de carne moída com molho e queijo gratinado."
      },
      {
        nome: "Pizza de muçarela",
        tipo: "Prato principal",
        preco: 14.00,
        descricao: "Pizza tradicional de muçarela com orégano."
      },

      // --- Novas comidas (21 a 50) ---
      {
        nome: "Escondidinho de carne seca",
        tipo: "Prato principal",
        preco: 12.50,
        descricao: "Purê de mandioca com recheio de carne seca e queijo gratinado."
      },
      {
        nome: "Feijoada completa",
        tipo: "Prato principal",
        preco: 15.00,
        descricao: "Feijoada tradicional com carnes, arroz, couve e laranja."
      },
      {
        nome: "Picanha grelhada",
        tipo: "Proteína",
        preco: 18.00,
        descricao: "Picanha suculenta grelhada na hora."
      },
      {
        nome: "Linguiça toscana",
        tipo: "Proteína",
        preco: 9.00,
        descricao: "Linguiça toscana assada com temperos."
      },
      {
        nome: "Salada de frutas",
        tipo: "Sobremesa",
        preco: 6.00,
        descricao: "Salada de frutas frescas variadas."
      },
      {
        nome: "Pudim de leite",
        tipo: "Sobremesa",
        preco: 7.00,
        descricao: "Pudim de leite condensado com calda de caramelo."
      },
      {
        nome: "Brigadeiro",
        tipo: "Sobremesa",
        preco: 2.50,
        descricao: "Doce de chocolate com granulado tradicional."
      },
      {
        nome: "Mousse de maracujá",
        tipo: "Sobremesa",
        preco: 6.50,
        descricao: "Mousse cremosa com sabor tropical de maracujá."
      },
      {
        nome: "Bolo de cenoura com chocolate",
        tipo: "Sobremesa",
        preco: 5.50,
        descricao: "Bolo caseiro com cobertura de chocolate."
      },
      {
        nome: "Café preto",
        tipo: "Bebida",
        preco: 2.00,
        descricao: "Café forte e quente."
      },
      {
        nome: "Suco natural de laranja",
        tipo: "Bebida",
        preco: 5.00,
        descricao: "Suco de laranja natural, sem adição de açúcar."
      },
      {
        nome: "Refrigerante lata",
        tipo: "Bebida",
        preco: 4.50,
        descricao: "Refrigerante gelado em lata de 350ml."
      },
      {
        nome: "Água mineral",
        tipo: "Bebida",
        preco: 2.50,
        descricao: "Água mineral sem gás 500ml."
      },
      {
        nome: "Coxinha de frango",
        tipo: "Lanche",
        preco: 4.00,
        descricao: "Coxinha crocante recheada com frango desfiado."
      },
      {
        nome: "Empada de palmito",
        tipo: "Lanche",
        preco: 4.50,
        descricao: "Empada com recheio cremoso de palmito."
      },
      {
        nome: "Pastel de carne",
        tipo: "Lanche",
        preco: 5.00,
        descricao: "Pastel frito recheado com carne moída temperada."
      },
      {
        nome: "Tapioca com coco e queijo",
        tipo: "Café da manhã",
        preco: 6.00,
        descricao: "Tapioca nordestina com coco ralado e queijo."
      },
      {
        nome: "Crepioca de frango",
        tipo: "Café da manhã",
        preco: 7.00,
        descricao: "Crepioca recheada com frango desfiado e requeijão."
      },
      {
        nome: "Panqueca de banana",
        tipo: "Café da manhã",
        preco: 5.50,
        descricao: "Panqueca doce feita com banana e aveia."
      },
      {
        nome: "Omelete de legumes",
        tipo: "Café da manhã",
        preco: 6.50,
        descricao: "Omelete leve com legumes variados."
      },
      {
        nome: "Strogonoff de frango",
        tipo: "Prato principal",
        preco: 11.00,
        descricao: "Strogonoff de frango com creme de leite e batata palha."
      },
      {
        nome: "Strogonoff de carne",
        tipo: "Prato principal",
        preco: 12.50,
        descricao: "Strogonoff de carne bovina com molho cremoso."
      },
      {
        nome: "Carne de panela",
        tipo: "Prato principal",
        preco: 10.50,
        descricao: "Carne cozida lentamente com batatas e molho."
      },
      {
        nome: "Peixe frito",
        tipo: "Proteína",
        preco: 13.00,
        descricao: "Filé de peixe empanado e frito na hora."
      },
      {
        nome: "Moqueca de peixe",
        tipo: "Prato principal",
        preco: 15.00,
        descricao: "Peixe cozido com leite de coco, azeite de dendê e temperos."
      },
      {
        nome: "Risoto de camarão",
        tipo: "Prato principal",
        preco: 16.00,
        descricao: "Risoto cremoso com camarões e temperos finos."
      },
      {
        nome: "Yakissoba",
        tipo: "Prato principal",
        preco: 14.00,
        descricao: "Macarrão oriental com legumes e carne bovina."
      },
      {
        nome: "Hambúrguer artesanal",
        tipo: "Lanche",
        preco: 12.00,
        descricao: "Hambúrguer caseiro com queijo, alface e tomate."
      },
      {
        nome: "Hot dog simples",
        tipo: "Lanche",
        preco: 7.00,
        descricao: "Cachorro-quente com salsicha, molho e batata palha."
      },
      {
        nome: "Pão de queijo",
        tipo: "Café da manhã",
        preco: 3.00,
        descricao: "Tradicional pão de queijo mineiro."
      },
      {
        nome: "Canjica",
        tipo: "Sobremesa",
        preco: 6.00,
        descricao: "Canjica doce com leite condensado e coco."
      },
      {
        nome: "Açaí na tigela",
        tipo: "Sobremesa",
        preco: 10.00,
        descricao: "Açaí com granola, banana e mel."
      },
      {
        nome: "Caldo verde",
        tipo: "Prato principal",
        preco: 8.00,
        descricao: "Sopa cremosa de batata e couve com calabresa."
      },
      {
        nome: "Vatapá",
        tipo: "Prato principal",
        preco: 13.00,
        descricao: "Prato baiano cremoso à base de pão, camarão e dendê."
      },
      {
        nome: "Esfirra de carne",
        tipo: "Lanche",
        preco: 4.00,
        descricao: "Esfirra assada recheada com carne moída temperada."
      },
      {
        nome: "Quibe frito",
        tipo: "Lanche",
        preco: 4.50,
        descricao: "Quibe crocante de carne e trigo."
      },
      {
        nome: "Sorvete de chocolate",
        tipo: "Sobremesa",
        preco: 6.50,
        descricao: "Sorvete cremoso de chocolate artesanal."
      },
      {
        nome: "Tapioca de morango com Nutella",
        tipo: "Sobremesa",
        preco: 9.00,
        descricao: "Tapioca doce recheada com morango e creme de avelã."
      }
    ],
  })

  console.log('✨ 50 comidas inseridas com sucesso!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })