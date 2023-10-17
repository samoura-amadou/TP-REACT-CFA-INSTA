import { Text, View } from './Themed';
import { TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import Colors from '../constants/Colors';
import { useState, useContext } from 'react';
import { verifEmail, verifFirstname, verifName, verifPhone } from '../helper/ContactHelpers';
import { ContactsContext } from '../contexts/contactsContext';


export type ContactFormProps = {
    onSave: ()=>void
}

export default function ContactForm(props: ContactFormProps) {
    // declaration de'attribus
    const [firstname, setFirstname]= useState("")
    const [lastname, setLastname]= useState("")
    const [email, setEmail]= useState("")
    const [phone, setPhone]= useState("")
    // tabelau d'erreurs
    const [errors, setErrors]= useState(Array<String>())


    // utiliser si on a pas d'erreur 
    const {addContact} = useContext(ContactsContext)
    
    const saveContact= ()=>{
        let errorName= verifName(lastname),
        errorFirstname= verifFirstname(firstname),
        errorPhone= verifPhone(phone),
        errorEmail= verifEmail(email);
        let errorsForm= [];
        if(errorName!="") errorsForm.push(errorName);
        if(errorFirstname!="") errorsForm.push(errorFirstname);
        if(errorPhone!="") errorsForm.push(errorPhone);
        if(errorEmail!="") errorsForm.push(errorEmail);
        setErrors(errorsForm);
        if(errorsForm.length==0){
            // 2- ajouter un contact
            addContact({firstname: firstname, lastname: lastname, email: email, phone: phone});
            // 1- si les erreurs sont vides on ne fait on save
            props.onSave();
        }
    }

    return (
        <View>
            <View style={styles.inputLine}>
                <Text style={styles.labelText}>Nom:</Text>
                <TextInput  style={styles.textInput}
                    value={lastname}
                    onChangeText={setLastname}/>
            </View>
            <View style={styles.inputLine}>
                <Text style={styles.labelText}>Prénom:</Text>
                <TextInput  style={styles.textInput}
                    value={firstname}
                    onChangeText={setFirstname}/>
            </View>
            <View style={styles.inputLine}>
                <Text style={styles.labelText}>Téléphone:</Text>
                <TextInput  style={styles.textInput}
                    value={phone}
                    onChangeText={setPhone}/>
            </View>
            <View style={styles.inputLine}>
                <Text style={styles.labelText}>Email:</Text>
                <TextInput  style={styles.textInput}
                    value={email}
                    onChangeText={setEmail}/>
            </View>
            {errors.map((item:String, index)=>{
                return <Text key={index} lightColor='red' darkColor='red'>{item}</Text>
            })}
            <TouchableHighlight style={styles.button}
                onPress={saveContact}>
                <Text style={styles.buttonText}>Ajouter</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    inputLine: {
      flexDirection:'row',
      margin:10,
      flex:1
    },
    labelText: {
      margin:10,
      flex:1
    },
    textInput: {
        // modifier la couleur car j'ai le theme dark
      color: 'white',
      borderBottomWidth:2,
      flex:1
    },
    button:{
        backgroundColor: Colors.light.tint,
        padding:10,
        marginTop:20
    },
    buttonText:{
        color: 'white',
        textAlign:'center'
    }
});

