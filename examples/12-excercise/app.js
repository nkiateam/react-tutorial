import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class ContactsApp extends Component {
    //엑서사이즈로 이름바꾸기 .................완료리뷰는 readme보여주고 코드위주로 ... 각챕터마다 구성해서... 사내에서 하루2~3시간 3회과정 으로 ....

    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.object)
    }

    constructor() {
        super();
        this.state={
            filterText: ''
        };
    }

    handleUserInput(searchTerm){
        this.setState({filterText:searchTerm})
    }

    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText}
                        onUserInput={this.handleUserInput.bind(this)} />
                <ContactList contacts={this.props.contacts}
                        filterText={this.state.filterText} />
            </div>
        )
    }
}

class SearchBar extends Component {

    static propTypes = {
        onUserInput: PropTypes.func.isRequired,
        filterText: PropTypes.string.isRequired
    }

    handleChange(event){
        this.props.onUserInput(event.target.value)
    }

    render() {
        return <input type="search" placeholder="search"
                value={this.props.filterText}
                onChange={this.handleChange.bind(this)} />
    }
}



class ContactList extends Component {

    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.object)
    }

    render() {
        let filteredContacts = this.props.contacts.filter(
            (contact) => contact.name.indexOf(this.props.filterText) !== -1
        )
        return (
            <ul>
                {filteredContacts.map(
                    (contact) => <ContactItem key={contact.email}
                                            name={contact.name}
                                            email={contact.email} />
                )}
            </ul>
        )
    }
}



class ContactItem extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }

    render() {
        return <li>{this.props.name} - {this.props.email}</li>
    }
}

let contacts = [
    {name: "Cassio Zen", email: "cassiozen@gmail.com"},
    {name: "Dan Abramov", email: "gaearon@somewhere.com"},
    {name: "Peter Hunt", email: "floydophone@somewhere.com"},
    {name: "Paul O'Shannessy", email: "zpao@somewhere.com"},
    {name: "Ryan Florence", email: "rpflorence@somewhere.com"},
    {name: "Sebastian Markbage", email: "sebmarkbage@here.com"}
]

ReactDOM.render(<ContactsApp contacts={contacts} />, document.getElementById('app'));
