import { ScrollView, StyleSheet } from 'react-native';
import ContactForm from '../../components/ContactsForm';
import { Text, View } from '../../components/Themed';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import {NativeStackNavigationProp} from "@react-navigation/native-stack";


export default function ContactFormScreen() {

    
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
        {/* pour dire que quand je sauvegarde je fait quelque chose*/}
      <ContactForm onSave={()=>{
        navigation.navigate("index")
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});



