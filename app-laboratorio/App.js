import { StyleSheet, Text, View } from 'react-native';

const nome = 'Bora LULA';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
