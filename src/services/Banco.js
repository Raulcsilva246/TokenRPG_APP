// =====================================
// IMPORTAÇÃO DAS BIBLIOTECAS
// =====================================

// Importa o sistema de arquivos do Expo
// Será utilizado para criar, ler e salvar o arquivo JSON
import * as FileSystem from "expo-file-system/legacy";

// =====================================
// DEFINIÇÃO DO CAMINHO DO BANCO
// =====================================

// Define o local onde o arquivo fichas.json
// ficará salvo dentro do armazenamento do aplicativo
const caminho = FileSystem.documentDirectory + "fichas.json";

/* ==================================================
   FUNÇÃO: LER BANCO
   Responsável por abrir e retornar os dados do JSON
================================================== */

export async function lerBanco() {
  try {
    // Verifica se o arquivo existe
    const info = await FileSystem.getInfoAsync(caminho);

    // Caso o arquivo não exista
    if (!info.exists) {
      // Cria a estrutura inicial do banco
      const bancoInicial = {
        fichas: [],
      };

      // Salva o arquivo vazio no dispositivo
      await FileSystem.writeAsStringAsync(
        caminho,
        JSON.stringify(bancoInicial, null, 2),
      );

      // Retorna o banco recém criado
      return bancoInicial;
    }

    // Lê o conteúdo do arquivo
    const conteudo = await FileSystem.readAsStringAsync(caminho);

    // Caso o arquivo esteja vazio
    if (!conteudo.trim()) {
      return { fichas: [] };
    }

    // Converte o JSON para objeto JavaScript
    return JSON.parse(conteudo);
  } catch (erro) {
    // Exibe erro no console
    console.log("ERRO AO LER BANCO");
    console.log(erro);

    // Retorna estrutura vazia para evitar travamentos
    return { fichas: [] };
  }
}

/* ==================================================
   FUNÇÃO: SALVAR BANCO
   Responsável por gravar os dados no JSON
================================================== */

export async function salvarBanco(banco) {
  try {
    // Converte o objeto para JSON e salva no arquivo
    await FileSystem.writeAsStringAsync(
      caminho,
      JSON.stringify(banco, null, 2),
    );

    console.log("BANCO SALVO");
  } catch (erro) {
    console.log("ERRO AO SALVAR");
    console.log(erro);
  }
}

/* ==================================================
   FUNÇÃO: CRIAR FICHA
   Cria uma nova ficha e adiciona ao banco
================================================== */

export async function criarFicha(dados) {
  try {
    // Carrega o banco atual
    const banco = await lerBanco();

    // Gera um ID simples baseado na quantidade de fichas
    const novoId = banco.fichas.length + 1;

    // Monta a estrutura completa da ficha
    const novaFicha = {
      // Identificador único
      id: novoId,

      // Data de criação
      // Atualmente está usando o ID
      // Pode ser substituído por new Date().toISOString()
      createdAt: new Date().toISOString(),

      // Data da última atualização
      updatedAt: new Date().toISOString(),

      // =====================================
      // DADOS DO PERSONAGEM
      // =====================================
      personagem: {
        nome: dados.nome || "",

        jogador: dados.jogador || "",

        classe: dados.classe || "",

        raca: dados.raca || "",

        origem: dados.origem || "",

        nivel: Number(dados.nivel || 1),

        descricaoFisica: dados.descricaoFisica || "",

        background: dados.background || "",
      },

      // =====================================
      // STATUS PRINCIPAIS
      // =====================================
      status: {
        vida: {
          atual: Number(dados.vida || 0),
          max: Number(dados.vida || 0),
        },

        energia: {
          atual: Number(dados.energia || 0),
          max: Number(dados.energia || 0),
        },

        sanidade: {
          atual: Number(dados.sanidade || 0),
          max: Number(dados.sanidade || 0),
        },
      },

      // =====================================
      // ATRIBUTOS BASE
      // =====================================
      atributos: {
        forca: Number(dados.forca || 0),

        agilidade: Number(dados.agilidade || 0),

        vigor: Number(dados.vigor || 0),

        intelecto: Number(dados.intelecto || 0),

        presenca: Number(dados.presenca || 0),
      },

      // Lista de perícias
      pericias: [],

      // =====================================
      // REAÇÕES E DEFESAS
      // =====================================
      reacoes: {
        ca: Number(dados.ca || 0),

        bloqueio: Number(dados.bloqueio || 0),

        esquiva: Number(dados.esquiva || 0),

        deslocamento: Number(dados.deslocamento || 0),
      },

      // =====================================
      // INVENTÁRIO
      // =====================================
      inventario: {
        // Quantidade de dinheiro
        dinheiro: [],

        // Lista de armas
        armas: [],

        // Lista de equipamentos
        equipamentos: [],

        // Lista de consumíveis
        consumiveis: [],

        // Lista de itens gerais
        itens: [],
      },

      // Lista de habilidades
      habilidades: [],
    };

    // Adiciona a nova ficha ao banco
    banco.fichas.push(novaFicha);

    // Salva o banco atualizado
    await salvarBanco(banco);

    // Retorna a ficha criada
    return novaFicha;
  } catch (erro) {
    console.log("ERRO AO CRIAR FICHA");

    console.log(erro);

    return null;
  }
}

/* ==================================================
   FUNÇÃO: LISTAR FICHAS
   Retorna todas as fichas cadastradas
================================================== */

export async function listarFichas() {
  // Lê o banco
  const banco = await lerBanco();
  console.log(banco);
  // Retorna apenas o array de fichas
  return banco.fichas;
}

/* ==================================================
   FUNÇÃO: BUSCAR FICHA
   Procura uma ficha pelo ID
================================================== */

export async function buscarFicha(id) {
  // Carrega o banco
  const banco = await lerBanco();

  // Procura a ficha correspondente
  return banco.fichas.find((ficha) => ficha.id === id);
}

/* ==================================================
   FUNÇÃO: EXCLUIR FICHA
   Remove uma ficha do banco pelo ID
================================================== */

export async function excluirFicha(id) {
  // Carrega o banco
  const banco = await lerBanco();

  // Mantém apenas as fichas
  // que possuem ID diferente do informado
  banco.fichas = banco.fichas.filter((ficha) => ficha.id !== id);

  // Salva o banco atualizado
  await salvarBanco(banco);
}

/* ==================================================
   FUNÇÃO: ATUALIZAR FICHA
   Atualiza uma ficha existente
================================================== */

export async function atualizarFicha(id, novosDados) {
  // Carrega o banco
  const banco = await lerBanco();

  // Procura a posição da ficha no array
  const index = banco.fichas.findIndex((ficha) => ficha.id === id);

  // Caso não encontre a ficha
  if (index === -1) {
    return false;
  }

  // Atualiza os dados mantendo os anteriores
  banco.fichas[index] = {
    // Mantém os dados atuais
    ...banco.fichas[index],

    // Sobrescreve com os novos dados
    ...novosDados,

    // Atualiza a data de modificação
    updatedAt: new Date().toISOString(),
  };

  // Salva o banco atualizado
  await salvarBanco(banco);

  return true;
}

/* ==================================================
   FUNÇÃO: ADICIONAR PERÍCIA
================================================== */

export async function adicionarPericia(id, nome, valor) {
  console.log("ID:", id, typeof id);

  console.log("NOME:", nome);

  console.log("VALOR:", valor);

  const banco = await lerBanco();

  const ficha = banco.fichas.find((ficha) => ficha.id == id);

  if (!ficha) {
    console.log(false);
    return false;
  }

  ficha.pericias.push({
    nome,
    valor: Number(valor || 0),
  });

  ficha.updatedAt = new Date().toISOString();

  await salvarBanco(banco);
  console.log(true);
  return true;
}

/* ==================================================
   FUNÇÃO: REMOVER ÚLTIMA PERÍCIA
================================================== */

export async function removerUltimaPericia(idFicha) {
  const banco = await lerBanco();

  const ficha = banco.fichas.find((ficha) => ficha.id == idFicha);

  if (!ficha) {
    return false;
  }

  if (ficha.pericias.length === 0) {
    return false;
  }

  ficha.pericias.pop();

  ficha.updatedAt = new Date().toISOString();

  await salvarBanco(banco);

  return true;
}

/*===========================================================
                  INVENTARIO
=============================================================*/

export async function adicionarItem(idFicha, dados) {
  const banco = await lerBanco();

  const ficha = banco.fichas.find((ficha) => ficha.id == idFicha);

  if (!ficha) {
    return false;
  }

  // Busca todos os itens do inventário
  const todosItens = [
    ...ficha.inventario.dinheiro,
    ...ficha.inventario.armas,
    ...ficha.inventario.equipamentos,
    ...ficha.inventario.consumiveis,
    ...ficha.inventario.itens,
  ];

  // Gera o próximo ID disponível
  const novoId =
    todosItens.length > 0
      ? Math.max(...todosItens.map((item) => item.id || 0)) + 1
      : 1;

  const item = {
    id: novoId,

    nome: dados.nome || "",

    tipo: dados.tipo || "Item",

    dano: dados.dano || "",

    quantidade: Number(dados.quantidade || 0),

    descricao: dados.descricao || "",
  };

  switch (dados.tipo) {
    case "Armamento":
      ficha.inventario.armas.push(item);
      break;

    case "Equipamento":
      ficha.inventario.equipamentos.push(item);
      break;

    case "Consumivel":
      ficha.inventario.consumiveis.push(item);
      break;

    case "Item":
      ficha.inventario.itens.push(item);
      break;

    case "Dinheiro":
      ficha.inventario.dinheiro.push({
        id: novoId,
        nome: dados.nome || "Dinheiro",
        tipo: "Dinheiro",
        quantidade: Number(dados.quantidade || 0),
        descricao: dados.descricao || "",
      });

      break;
  }

  ficha.updatedAt = new Date().toISOString();

  await salvarBanco(banco);

  return true;
}
//REMOVER

export async function removerItem(idFicha, tipo, idItem) {
  console.log("ID FICHA:", idFicha);
  console.log("TIPO:", tipo);
  console.log("ID ITEM:", idItem);

  const banco = await lerBanco();

  const ficha = banco.fichas.find((ficha) => ficha.id == idFicha);

  console.log("FICHA:", ficha);

  if (!ficha) {
    console.log("FICHA NÃO ENCONTRADA");
    return false;
  }

  switch (tipo) {
    case "Armamento":
      ficha.inventario.armas = ficha.inventario.armas.filter(
        (item) => item.id != idItem,
      );
      break;

    case "Equipamento":
      ficha.inventario.equipamentos = ficha.inventario.equipamentos.filter(
        (item) => item.id != idItem,
      );
      break;

    case "Consumivel":
      ficha.inventario.consumiveis = ficha.inventario.consumiveis.filter(
        (item) => item.id != idItem,
      );
      break;

    case "Item":
      ficha.inventario.itens = ficha.inventario.itens.filter(
        (item) => item.id != idItem,
      );

    case "Dinheiro":
      ficha.inventario.dinheiro = ficha.inventario.dinheiro.filter(
        (item) => item.id != idItem,
      );
      break;

    default:
      return false;
  }

  ficha.updatedAt = new Date().toISOString();

  await salvarBanco(banco);

  return true;
}

/*===========================================================
                  HABILIDADES
=============================================================*/

export async function adicionarHabilidade(idFicha, dados) {
  const banco = await lerBanco();

  const ficha = banco.fichas.find((ficha) => ficha.id == idFicha);

  if (!ficha) {
    return false;
  }

  const novoId = ficha.habilidades.length + 1;

  const habilidade = {
    id: novoId,

    nome: dados.nome || "",

    tipo: dados.tipo || "Ativa",

    dano: dados.dano || "",

    custo: dados.custo || "",

    alcance: dados.alcance || "",

    descricao: dados.descricao || "",
  };

  ficha.habilidades.push(habilidade);

  ficha.updatedAt = new Date().toISOString();

  await salvarBanco(banco);

  return true;
}

export async function removerHabilidade(idFicha, idHabilidade) {
  const banco = await lerBanco();

  const ficha = banco.fichas.find((ficha) => ficha.id == idFicha);

  if (!ficha) {
    return false;
  }

  ficha.habilidades = ficha.habilidades.filter(
    (habilidade) => habilidade.id != idHabilidade,
  );

  ficha.updatedAt = new Date().toISOString();

  await salvarBanco(banco);

  return true;
}
