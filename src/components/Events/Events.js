import React, {Component} from 'react';
import './Events.css';

class Events extends Component {
	constructor(){
		super();
		this.state = {
			current: 2016,
			2016: [
					{name: 'IEEE Day', date: 'October 4', image: './events.png'}
				  ],
			2017: [
					{name: 'IEEE Day', date: 'October 6', image: './events.png'},
					{name: 'PCB Designing Workshop', date: 'February 15', image: './pcbDesigning2017.jpg'},
					{name: 'Game Dev workshop', date: 'September 10', image: './gameDev.jpg'},
					{name: 'Cyber Security Workshop', date: 'October 24', image: './cyberSecurity.jpg'},
					{name: 'The SALVOR (RGB LFR)', date: 'April 6', image: './salvor.jpg'},
					{name: 'CAD 360 (AutoCAD)', date: 'April 8', image: './cad360.jpg'},
					{name: 'League of Bots (RoboSoccer)', date: 'April 7', image: './leagueOfBots.jpg'},
					{name: 'A-mazed(robo race)', date: 'April 7', image: './amazed.jpg'},
					{name: 'CODIFICA CONCORRENZA (Online Coding)', date: 'April 5', image: './codifica.jpg'}
				   ],
			2018: [
					{name: 'PCB Designing', date: 'February 15', image: './pcbDesigning.jpg'},
					{name: 'INTERACTIVE SESSION FOR MS AND MBA ASSPIRANTS', date: 'April 12', image: './interactiveSession.jpg'}, 
					{name: 'Game of Bots 2.0', date: 'March 23', image: './gameOfBots.jpg'},
					{name: 'El-Robotico 2.0', date: 'October 6', image: './elRobotico.jpg'},
					{name: 'The road not taken', date: 'March 22', image: './roadNotTaken.jpg'},
					{name: 'Nautilus- Aquabot competition', date: 'March 23', image: './nautilius.jpg'},
					{name: 'Nexus 2.0- Graphics Designing competition', date: 'March 22', image: './nexus.jpg'},
					{name: 'Ampere- Circuit Designing competition', date: 'March 23', image: './ampere.jpg'},
					{name: 'Codesense', date: 'March 22', image: './codesense.jpg'}
				  ]
		}

		this.findYear = this.findYear.bind(this);
		this.eventCreator = this.eventCreator.bind(this);
	}

	findYear = (year) => {
		return this.state.current === year ? "selected": "not-selected"
	}

	eventCreator = (name, date, image, index) => {
		return(
				<div className="event" key={index}>
					<img src={require(`${image}`)} />
					<div className="event-overlay">
						<div className="content">
							<p className="name">{name}</p>
							<p className="date">{date}</p>
						</div>
					</div>
				</div>
			)
		
	}

	render() {
		let arr = [];
		this.state[(this.state.current)].map((current, index) => {
			arr.push(this.eventCreator(current.name, current.date, current.image, index))
		})
		return(
				<div className="overlay events-container">
					<div className="grid">
						<div className="header">
                        	<div className={this.findYear(2016)} onClick = {() => this.setState({current: 2016})}><span>2016</span></div>
                        	<div className={this.findYear(2017)} onClick = {() => this.setState({current: 2017})}><span>2017</span></div>
                        	<div className={this.findYear(2018)} onClick = {() => this.setState({current: 2018})}><span>2018</span></div>
						</div>
						{arr}
					</div>
				</div>
			)
	}
}

export default Events;