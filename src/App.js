import { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import s from './fadeModules/fadeAppTitle.module.css';
// import fadeAlert from './fadeModules/fadeAppAlert.module.css';
// import fadeFilter from './fadeModules/fadeFilter.module.css';
import * as contactsOperations from './redux/contacts/contacts-operations';

// //////////////////////////////////////////////////////////////////////////

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className={s.page}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={s}
          unmountOnExit
        >
          <h1 className={s.phoneBookTitle}>Phonebook</h1>
        </CSSTransition>
        {this.props.isLoadingContacts && (
          <h3 className={s.loading}>Loading...</h3>
        )}
        <ContactForm />
        {/* <CSSTransition
          in={contacts.length > 1}
          appear={true}
          timeout={250}
          unmountOnExit
          classNames={fadeFilter}
        > */}
        <div className={s.findContacts}>
          <h2 className={s.findContactsTitle}>Find contacts</h2>
          <Filter />
        </div>
        {/* </CSSTransition> */}
        <ContactList />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoadingContacts: state.contacts.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// //////////////////////////////////////////////////////////////////////////

// function App() {
//   return (
//     <div className={s.page}>
//       <CSSTransition
//         in={true}
//         appear={true}
//         timeout={500}
//         classNames={s}
//         unmountOnExit
//       >
//         <h1 className={s.phoneBookTitle}>Phonebook</h1>
//       </CSSTransition>

//       <ContactForm />

//       {/* <CSSTransition
//         in={contacts.length > 1}
//         appear={true}
//         timeout={250}
//         unmountOnExit
//         classNames={fadeFilter}
//       > */}
//       <div className={s.findContacts}>
//         <h2 className={s.findContactsTitle}>Find contacts</h2>
//         <Filter />
//       </div>
//       {/* </CSSTransition> */}

//       <ContactList />
//     </div>
//   );
// }

// export default App;
