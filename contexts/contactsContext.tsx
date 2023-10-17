import React from 'react';
import { ContactProps } from '../components/ContactInfo'; // recupere les propriete de contact pour le type
// nous servire a ajouter un contexte

// en general on defini un init context 
const initContactsState= {
    contacts: [{firstname:"Joan", lastname:"François",
            phone:"0143417250", email:"j.francois@cfa-insta.fr"},
            {firstname:"Mounira", lastname:"Coste",
            phone:"0143417250", email:"j.francois@cfa-insta.fr"},
            {firstname:"Faizah", lastname:"Badabhai",
            phone:"0143417250", email:"f.badabhai@cfa-insta.fr"},
            {firstname:"Selin", lastname:"Sert",
            phone:"0143417250", email:"s.sert@cfa-insta.fr"}]
}

const contactsContextWrapper = (component?: React.Component) => ({
    ...initContactsState,
    addContact:(contact: ContactProps)=>{
        // provider pour donner l'état initial , prends en param un contact 
        initContactsState.contacts= [...initContactsState.contacts, contact];
        component?.setState({ context: contactsContextWrapper(component) });
    }
});

type Context = ReturnType<typeof contactsContextWrapper>;

export const ContactsContext = React.createContext<Context>(contactsContextWrapper());

interface State {
  context: Context;
}

// on utilise les classes quand on a des fonctions d'heritage
// pour l'utiliser un peu par tout, on 
export class ContactsContextProvider extends React.Component<{children?: React.ReactNode;}, {}> {
  state: State = {

    context: contactsContextWrapper(this),
  };

  render() {
    return (
      <ContactsContext.Provider value={this.state.context}>
        {this.props.children}
      </ContactsContext.Provider>
    );
  }
}

