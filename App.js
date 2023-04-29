import { useState } from 'react';
import { 
  Button,
  TextInput,
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [lembretes, setLembretes] = useState([]);
  const [lembrete, setLembrete] = useState('');

  const capturar = (text) => {
    setLembrete(text)
  }

  const addLembrete = () => {
    setLembretes(lembretes => [...lembretes, lembrete])
    setLembrete('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          onChangeText={capturar}
          placeholder='Digite algo para lembrar aqui...'
          value={lembrete}
        />
        <Button
          onPress={addLembrete}
          style={styles.button}
          title='Ok'
        />
      </View>
      <View style={styles.lembreteArea}>
        {lembretes?.map((texto) => (
          <View style={styles.lembrete}>
            <Text>{texto}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: '800px',
    padding: 40,
    alignItems: 'center',
    gap: 20,
  },
  inputArea: {
    width: '80%',
    gap: 10,
  },
  input: {
    width: '100%',
    border: '1px solid black',
    padding: 10,
    borderRadius: 8,
    border: 'none',
  }, 
  lembreteArea: {
    width: '80%',
    gap: 5,
  },
  lembrete: {
    backgroundColor: '#CACCD1',
    border: '1px solid #ADAFB4',
    width:'100%',
    padding: 12,
    color: 'black',
    alignItems: 'center',
    borderRadius: 8,
  }
})