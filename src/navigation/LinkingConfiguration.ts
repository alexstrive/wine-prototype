import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Profile: '/Profile',
          Shop: '/Shop',
        },
      },
      Quiz: '/Quiz',
      NotFound: '*',
    },
  },
};
