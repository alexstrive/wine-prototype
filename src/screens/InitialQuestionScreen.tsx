import React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  Alert,
  StyleSheet,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';

const InitialQuestionScreen = ({ navigation }: any) => {
  const handleComplete = React.useCallback(() => {
    navigation.navigate('Root');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Привет 👋</Text>
      <Text style={styles.description}>
        Чтобы нам легче было помочь тебе в выборе, ответь на пару вопросов
      </Text>
      <Text style={styles.question}>Какое 🍷 тебе нравится?</Text>
      <Slider
        style={{ width: '70%', height: 50 }}
        minimumValue={0}
        maximumValue={4}
        step={1}
      />
      <Text>Легкое</Text>

      <Slider
        style={{ width: '70%', height: 50 }}
        minimumValue={0}
        maximumValue={4}
        step={1}
      />
      <Text>Сухое</Text>
      <Slider
        style={{ width: '70%', height: 50 }}
        minimumValue={0}
        maximumValue={4}
        step={1}
      />
      <Text>Совсем не кислящее</Text>
      <View style={styles.submit}>
        <Button title="Готово!" onPress={handleComplete} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    color: '#555',
    fontWeight: 'bold',
    width: '90%',
    fontSize: 36,
    marginTop: 58,
    marginBottom: 24,
  },
  description: {
    fontWeight: '200',
    width: '90%',
    fontSize: 24,
    lineHeight: 24,
  },
  question: {
    marginTop: 96,
    fontSize: 20,
  },
  submit: {
    marginTop: 96,
  },
});

export default InitialQuestionScreen;
