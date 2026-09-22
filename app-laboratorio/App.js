import { StyleSheet, Text, View } from 'react-native';

const eu = {
  nome: 'Débora Dias',
  idade: 17,
  cidade: 'Cascavel',
  nota1: 8,
  nota2: 7,
};

function calcularMedia(aluno) {
  return (aluno.nota1 + aluno.nota2) / 2;
}

export default function App() {
  const media = calcularMedia(eu);

  return (
    <View style={styles.container}>
      <Text>Nome: {eu.nome}</Text>
      <Text>Idade: {eu.idade}</Text>
      <Text>Cidade: {eu.cidade}</Text>
      <Text>Nota 1: {eu.nota1}</Text>
      <Text>Nota 2: {eu.nota2}</Text>
      <Text>Média: {media}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d06fd7dc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
