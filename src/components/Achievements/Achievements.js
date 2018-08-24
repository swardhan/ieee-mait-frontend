import React, {Component} from 'react';
import './Achievements.css';

class Achievements extends Component {
	constructor(props){
		super(props);
		this.state = {
			current: props.current
		}

		this.otherAchievements = this.otherAchievements.bind(this);
		this.ieeeAchievements = this.ieeeAchievements.bind(this);
		this.otherNav = this.otherNav.bind(this);
		this.ieeeNav = this.ieeeNav.bind(this);
		this.findNav = this.findNav.bind(this);
		this.findCurrent = this.findCurrent.bind(this);
	}

	otherAchievements = () => {
		return(
			<div className="otherAchievements">
				<div className="achievements">
					<img src={require('./other.png')} />
					<p className="title">Smart India Hackathon, 2017</p>
					<div className="award-overlay">
						<div className="desc">
							Smart India Hackathon 2017 Winner
						</div>
					</div>
				</div>
				<div className="achievements">
					<img src={require('./design360.jpg')} />
					<p className="title">Design 360 at IIIT Delhi, 2018</p>
					<div className="award-overlay">
						<div className="desc">
							Samraj and Aman were part of the team that were Runner's Up at Design360 Esya, 2018 held at IIIT Delhi.
						</div>
					</div>
				</div>
			</div>
			)
	}

	ieeeAchievements = () => {
		return(
			<div className="ieeeAchievements">
				<div className="achievements">
					<img src={require('./ieee1.png')} />
					<p className="title">Outstanding Volunteer Award</p>
					<div className="award-overlay">
						<div className="desc">
							Deepanshu Gupta was awarded with outstanding volunteer award for his invaluable cotribution to IEEE MAIT student branch for the past 3 years.
						</div>
					</div>
				</div>
				<div className="achievements">
					<img src={require('./ieee6.png')} />
					<p className="title">Best Student Award</p>
					<div className="award-overlay">
						<div className="desc">
							Ikjot Singh was awarded Best Student Award for his invaluable contribution to IEEE MAIT student branch.
						</div>
					</div>
				</div>
				<div className="achievements">
					<img src={require('./ieee4.png')} />
					<p className="title">JK Pal Award</p>
					<div className="award-overlay">
						<div className="desc">
							Swati Bansal was awarded JK Pal award for outstanding contribution towards the upliftment of IEEE MAIT student branch.
						</div>
					</div>
				</div>
				<div className="achievements">
					<img src={require('./ieee5.png')} />
					<p className="title">Outstanding WIE Volunteer Award</p>
					<div className="award-overlay">
						<div className="desc">
							Srishti was awarded Outstanding WIE volunteer award for outstanding contribution towards the WIE.
						</div>
				</div>
				</div>
				<div className="achievements">
					<img src={require('./ieee2.png')} />
					<p className="title">Best SB Counsellor Award</p>
					<div className="award-overlay">
						<div className="desc">
							Ms. Monika Gupta was awarded Best Branch Counsellor for her valuable guidance and support.
						</div>
					</div>
				</div>
				<div className="achievements">
					<img src={require('./ieee3.png')} />
					<p className="title">Delhi SSN Award</p>
					<div className="award-overlay">
						<div className="desc">
							Samraj Agarwal was awarded with The Delhi SSN award for his invaluable cotribution to Delhi SSN.
						</div>
					</div>
				</div>
			</div>
			)
	}

	otherNav = () => {
		return(
				<div className="header otherNav">
					<div className="two not-selected" onClick = {() => this.setState({current: "ieee"})}><span>ACHIEVEMENTS UNDER IEEE</span></div>
					<div className="three selected"><span>OTHER ACHIEVEMENTS</span></div>
				</div>
			)

	}

	ieeeNav = () => {
		return(
				<div className="header ieeeNav">
					<div className="two selected"><span>ACHIEVEMENTS UNDER IEEE</span></div>
					<div className="three not-selected" onClick = {() => this.setState({current: "other"})}><span>OTHER ACHIEVEMENTS</span></div>
				</div>
			)

	}

	findCurrent = () => {
		return this.state.current === "ieee" ? this.ieeeAchievements(): this.otherAchievements()
	}

	findNav = () => {
		return this.state.current === "ieee" ? this.ieeeNav(): this.otherNav() 
	}

	render() {
		return(
				<div className="overlay achievements-container">
					<div className="grid">
						{this.findNav()}
						{this.findCurrent()}
					</div>
				</div>
			)
	}
}

export default Achievements;