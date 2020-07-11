import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { View } from '../components/Themed';
import { MonoText } from '../components/StyledText';
export default function ProfileScreen() {
  return (
    <SafeAreaView>
      <View style={styles.avatar}>
        <View style={{ width: '100%', height: 90 }}>
          <MonoText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            tempore blanditiis fugit sint minima dolores, saepe impedit
            possimus, quibusdam culpa odio deserunt harum maiores rerum
            consequuntur nesciunt! Dicta, facere sint.
          </MonoText>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  avatar: {
    flex: 1,
    flexDirection: 'column',
  },
});
