import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type Styles = {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
};

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 0,
    textAlign: 'center',
  },
  description: {
    marginTop: 42,
    textAlign: 'center',
  },
});
