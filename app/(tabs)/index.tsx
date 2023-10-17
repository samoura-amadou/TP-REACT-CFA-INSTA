import { ScrollView, StyleSheet } from 'react-native';
import ContactInfo, { ContactProps } from '../../components/ContactInfo';
import { useContext } from 'react';
import { Text, View } from '../../components/Themed';
import ContactForm from '../../components/ContactsForm';
import { ContactsContext } from '../../contexts/contactsContext';
import { useContextKey } from 'expo-router/build/Route';
//import { RootTabScreenProps } from '../../types';

//export default function ContactScreen({ navigation }: RootTabScreenProps<'Contacts'>) {
export default function ContactScreen() {

  const {contacts} = useContext(ContactsContext);

  // const contacts= Array<ContactProps>();
  // contacts.push({firstname:"Joan", lastname:"François",
  //                 "phone":"0143417250", email:"j.francois@cfa-insta.fr"})
  // contacts.push({firstname:"Mounira", lastname:"Coste",
  //                 "phone":"0143417250", email:"j.francois@cfa-insta.fr"})
  // contacts.push({firstname:"Faizah", lastname:"Badabhai",
  //                 "phone":"0143417250", email:"f.badabhai@cfa-insta.fr"})
  // contacts.push({firstname:"Selin", lastname:"Sert",
  //                 "phone":"0143417250", email:"s.sert@cfa-insta.fr"})
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView contentContainerStyle={{flex:1}}>
        {contacts.map((item: ContactProps, index)=>{
            return <ContactInfo contact={item} key={index}/>
        })}
      </ScrollView>
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



