import { StyleSheet, Text, View } from 'react-native';

const eu = {
  nome: 'Débora Dias',
  idade: 17,
  cidade: 'Cascavel',
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nome: {eu.nome}</Text>
      <Text>Idade: {eu.idade}</Text>
      <Text>Cidade: {eu.cidade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#57f0b8b4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
