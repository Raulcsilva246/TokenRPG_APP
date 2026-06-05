import { StyleSheet  } from "react-native";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView
} from 'react-native';
import {g_styles} from '../../global_CSS'
import {styles, input, status} from './style'

import { useState } from 'react';

import { criarFicha, atualizarFicha, buscarFicha } from '../../services/Banco';
  
  



  export default function Edit({ navigation, route }) {

  const { id } = route.params;

  const [nome, setNome] = useState('');
  const [jogador, setJogador] = useState('');
  const [classe, setClasse] = useState('');
  const [raca, setRaca] = useState('');
  const [nivel, setNivel] = useState('');
 

  const [descricaoFisica, setDescricaoFisica] = useState('');
  const [background, setBackground] = useState('');

  const [vida, setVida] = useState('');
  const [energia, setEnergia] = useState('');
  const [sanidade, setSanidade] = useState('');

  const [forca, setForca] = useState('');
  const [agilidade, setAgilidade] = useState('');
  const [vigor, setVigor] = useState('');
  const [intelecto, setIntelecto] = useState('');
  const [presenca, setPresenca] = useState('');

  const [ca, setCa] = useState('');
  const [bloqueio, setBloqueio] = useState('');
  const [esquiva, setEsquiva] = useState('');
  const [deslocamento, setDeslocamento] = useState('');

  async function salvarFicha() {

  try {

    console.log("BOTÃO CLICADO");
    console.log("ID:", id);

    const fichaAtual = await buscarFicha(Number(id));

    console.log("FICHA:", fichaAtual);

   const dadosAtualizados = {
  ...fichaAtual,

  personagem: {
    ...fichaAtual.personagem,

    nome: nome || fichaAtual.personagem.nome,
    jogador: jogador || fichaAtual.personagem.jogador,
    classe: classe || fichaAtual.personagem.classe,
    raca: raca || fichaAtual.personagem.raca,
    nivel: nivel || fichaAtual.personagem.nivel,
    descricaoFisica:
      descricaoFisica || fichaAtual.personagem.descricaoFisica,
    background:
      background || fichaAtual.personagem.background,
  },

  status: {
    ...fichaAtual.status,

     vida: {
    atual: fichaAtual.status.vida.atual,
    max: vida || fichaAtual.status.vida.max,
  },

  energia: {
    atual: fichaAtual.status.energia.atual,
    max: energia || fichaAtual.status.energia.max,
  },

  sanidade: {
    atual: fichaAtual.status.sanidade.atual,
    max: sanidade || fichaAtual.status.sanidade.max,
  },
  },

  atributos: {
    ...fichaAtual.atributos,

    forca: forca || fichaAtual.atributos.forca,
    agilidade: agilidade || fichaAtual.atributos.agilidade,
    vigor: vigor || fichaAtual.atributos.vigor,
    intelecto: intelecto || fichaAtual.atributos.intelecto,
    presenca: presenca || fichaAtual.atributos.presenca,
  },

  reacoes: {
    ...fichaAtual.reacoes,

    ca: ca || fichaAtual.reacoes.ca,
    bloqueio: bloqueio || fichaAtual.reacoes.bloqueio,
    esquiva: esquiva || fichaAtual.reacoes.esquiva,
    deslocamento: deslocamento || fichaAtual.reacoes.deslocamento,
  },

  inventario: fichaAtual.inventario,
  habilidades: fichaAtual.habilidades,
  pericias: fichaAtual.pericias,
};

    console.log("SALVANDO...");

    await atualizarFicha(
      Number(id),
      dadosAtualizados
    );

    console.log("SALVO!");

    navigation.navigate('Home');

  } catch (erro) {

    console.log("ERRO:");
    console.log(erro);

  }
}

    return (
  <View style={styles.container}>
    <ScrollView>

      <View style={styles.header}>

        <TouchableOpacity
          style={g_styles.returnBottom}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={g_styles.text}>⇽Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.title}>
          Edição de Personagem
        </Text>

      </View>

      <View style={input.container}>

        {/* INFORMAÇÕES BÁSICAS */}
        <View style={input.containerBasicInfo}>

          <Text style={styles.title}>
            Informações Básicas
          </Text>

          <Text style={input.textInput}>
            Nome do personagem
          </Text>

          <TextInput
            placeholder="Nome do personagem"
            style={input.input}
            value={nome}
            onChangeText={setNome}
          />

          <Text style={input.textInput}>
            Nome do Jogador
          </Text>

          <TextInput
            placeholder="Nome do Jogador"
            style={input.input}
            value={jogador}
            onChangeText={setJogador}
          />

          <Text style={input.textInput}>
            Classe
          </Text>

          <TextInput
            placeholder="Classe"
            style={input.input}
            value={classe}
            onChangeText={setClasse}
          />

          <Text style={input.textInput}>
            Raça
          </Text>

          <TextInput
            placeholder="Raça"
            style={input.input}
            value={raca}
            onChangeText={setRaca}
          />

          <Text style={input.textInput}>
            Level
          </Text>

          <TextInput
            placeholder="Level"
            keyboardType="numeric"
            style={input.input}
            value={nivel}
            onChangeText={setNivel}
          />
        </View>

        {/* DESCRIÇÃO */}
        <View style={input.containerBasicInfo}>

          <Text style={styles.title}>
            Descrição
          </Text>

          <Text style={input.textInput}>
            Descrição Física
          </Text>

          <TextInput
            placeholder="Descrição Física"
            style={input.input}
            multiline
            numberOfLines={6}
            textAlignVertical="top"
            value={descricaoFisica}
            onChangeText={setDescricaoFisica}
          />

          <Text style={input.textInput}>
            Background
          </Text>

          <TextInput
            placeholder="Background"
            style={input.input}
            multiline
            numberOfLines={6}
            textAlignVertical="top"
            value={background}
            onChangeText={setBackground}
          />

        </View>

        {/* STATUS */}
        <View style={input.containerBasicInfo}>

          <Text style={styles.title}>
            Status
          </Text>

          <View style={status.containerAlpha}>
            <Text style={status.textInput}>
              Vida Max:
            </Text>

            <TextInput
              keyboardType="numeric"
              style={status.input}
              value={vida}
              onChangeText={setVida}
            />
          </View>

          <View style={status.containerAlpha}>
            <Text style={status.textInput}>
              Energ. Max:
            </Text>

            <TextInput
              keyboardType="numeric"
              style={status.input}
              value={energia}
              onChangeText={setEnergia}
            />
          </View>

          <View style={status.containerAlpha}>
            <Text style={status.textInput}>
              San. Max:
            </Text>

            <TextInput
              keyboardType="numeric"
              style={status.input}
              value={sanidade}
              onChangeText={setSanidade}
            />
          </View>

        </View>

        {/* ATRIBUTOS */}
        <View style={input.containerBasicInfo}>

          <Text style={styles.title}>
            Atributos
          </Text>

          <View style={status.containerAlpha}>

            <Text style={status.textInput}>
              FOR:
            </Text>

            <TextInput
              keyboardType="numeric"
              style={status.input}
              value={forca}
              onChangeText={setForca}
            />

            <Text style={status.textInput}>
              AGL:
            </Text>

            <TextInput
              keyboardType="numeric"
              style={status.input}
              value={agilidade}
              onChangeText={setAgilidade}
            />

          </View>

          <View style={status.containerAlpha}>

            <Text style={status.textInput}>
              VIG:
            </Text>

            <TextInput
              keyboardType="numeric"
              style={status.input}
              value={vigor}
              onChangeText={setVigor}
            />

            <Text style={status.textInput}>
              INT:
            </Text>

            <TextInput
              keyboardType="numeric"
              style={status.input}
              value={intelecto}
              onChangeText={setIntelecto}
            />

          </View>

          <View style={status.containerAlpha}>

            <Text style={status.textInput}>
              PRE:
            </Text>

            <TextInput
              keyboardType="numeric"
              style={status.input}
              value={presenca}
              onChangeText={setPresenca}
            />

          </View>

        </View>

        {/* REAÇÕES */}
        <View style={input.containerBasicInfo}>

          <Text style={styles.title}>
            Reações
          </Text>

          <View style={status.containerAlpha}>
            <Text style={status.textInput}>
              CA Base:
            </Text>

            <TextInput
              keyboardType="numeric"
              style={status.input}
              value={ca}
              onChangeText={setCa}
            />
          </View>

          <View style={status.containerAlpha}>
            <Text style={status.textInput}>
              Bloqueio:
            </Text>

            <TextInput
              keyboardType="numeric"
              style={status.input}
              value={bloqueio}
              onChangeText={setBloqueio}
            />
          </View>

          <View style={status.containerAlpha}>
            <Text style={status.textInput}>
              Esquiva:
            </Text>

            <TextInput
              keyboardType="numeric"
              style={status.input}
              value={esquiva}
              onChangeText={setEsquiva}
            />
          </View>

          <View style={status.containerAlpha}>
            <Text style={status.textInput}>
              Deslocamento:
            </Text>

            <TextInput
              keyboardType="numeric"
              style={status.input}
              value={deslocamento}
              onChangeText={setDeslocamento}
            />
          </View>

        </View>

        <TouchableOpacity
          style={styles.bottom}
          onPress={salvarFicha}
        >
          <Text style={styles.B_text}>
            Salvar
          </Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  </View>





    )
  }
