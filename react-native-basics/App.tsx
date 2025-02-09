import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from "twrnc";

export default function App() {
  return (
      <View style={tw`flex-1 bg-white justify-center items-center`}>
        <Text style={tw`text-blue-500 text-lg`}>Shut up CSS!</Text>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
