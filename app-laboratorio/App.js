import { StyleSheet, Text, View } from 'react-native';

const eu = {
  nome: 'Débora',
  idade: 17,
  cidade: 'Cascavel',
  nota1: 8,
  nota2: 7,
};

function calcularMedia(aluno) {
  return (aluno.nota1 + aluno.nota2) / 2;
}

function situacao(media) {
  if (media >= 6) {
    return 'Aprovado';
  }

  return 'Em recuperacao';
}

export default function App() {
  const media = calcularMedia(eu);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu aplicativo</Text>

      <Text>Nome: {eu.nome}</Text>
      <Text>Idade: {eu.idade}</Text>
      <Text>Cidade: {eu.cidade}</Text>
      <Text>Nota 1: {eu.nota1}</Text>
      <Text>Nota 2: {eu.nota2}</Text>
      <Text>Média: {media}</Text>
      <Text>Situação: {situacao(media)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#454db3ce',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
