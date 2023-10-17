import { Text, View } from './Themed';
import { FontAwesome } from '@expo/vector-icons';


export type ContactProps = {
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
};

export default function ContactInfo({ contact }: { contact: ContactProps }) {
    return (
      <View style={{flexDirection:'row', margin:10}}>
        <FontAwesome size={30} name="user"/>
        <View style={{flexDirection:'column', marginLeft:10}}>
            <Text>{contact.firstname}</Text>
            <Text>{contact.lastname}</Text>
            <Text>{contact.phone}</Text>
            {contact.email?
                <Text>{contact.email}</Text>: <Text></Text>}
        </View>
       
      </View>
    )
}
