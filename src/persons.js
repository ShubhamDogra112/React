import React, { Component } from 'react';
import Person from './person';
import './App.css';

class Persons extends Component {
	state = {
		persons: [
			{ name: 'Shubham', age: 20, id: 'asdf' },
			{ name: 'Akshat', age: 21, id: 'qwts' },
			{ name: 'Anubhav', age: 20, id: 'gfhj' }
		],
		showPersons: false
	};

	switchChangeHandler = () => {
		let index = Math.floor(Math.random() * this.state.persons.length);
		let title = this.state.persons[index].name;

		this.setState({
			persons: [ { name: title, age: 20 }, { name: 'Akshat', age: 21 }, { name: 'Anubhav', age: 20 } ]
		});
	};

	nameChangedHandler = (event, id) => {

        let personIndex = this.state.persons.findIndex(p=>{
            return p.id===id
        })

        let person =  { ... this.state.persons[personIndex]}

        person.name = event.target.value

        const persons = [...this.state.persons]

        persons[personIndex] = person;

		this.setState({
			persons: persons
		});
	};

	togglePersonHandler = () => {
		let doesShow = this.state.showPersons;
		this.setState({
			showPersons: !doesShow
		});
	};

	render() {
		const persons = this.state.persons.map((person, index) => (
			<Person key={index} {...person} changed={(event) => this.nameChangedHandler(event, person.id)} />
		));

		let Persons = null;
		if (this.state.showPersons) {
			Persons = persons;
		} else {
			Persons = null;
		}

		return (
			<div className="container">
				{Persons}

				<button onClick={this.switchChangeHandler}>CLick</button>

				<button onClick={this.togglePersonHandler}>toggle person</button>
			</div>
		);
	}
}
export default Persons;
