import React, {Component} from 'react';
import './KnowMAIT.css';

class KnowMAIT extends Component {
	render(){
		return(
				<div className="mait-container">
					<div className="grid">
						<div className="image-container">
							<img src={require('./headImage.png')} />
							<div className="head-text">
								<p className="main">IEEE MAIT</p>
								<p className="byline">A Playground of Innovations</p>
							</div>
						</div>
						<div className="about-us">
							<div className="what">
								<p className="heading">What We Do?</p>
								<div className="desc">
									We are a bunch of dedicated, inspired and zealous engineers in making, with constant endeavour
									 to usher and ignite new technological possibilities in the field of Engineering. Being one of 
									 the most active student branch of Delhi section, we, at IEEE MAIT try to blend technical as 
									 well fascinating aspects of learning. IEEE MAIT organises a plethora of stimulating events 
									 such as workshops on the buzzing and latest areas, competitions, 
									 SIG’s(Student interest groups) and much more, all throughout the year. Since it’s 
									 effective inception in 2015, we have tirelessly worked to earn the recognition as 
									 “one of the best student branches of delhi section” and have portrayed technical, social, 
									 humanitarian as well as managerial attributes of engineering. IEEE MAIT provides you a link 
									 to regional and national level and enables you to access brilliant opportunities there and 
									 make the best out of you. IEEE MAIT boasts a stern and passionate team of more than 80 
									 hardworking individuals, working towards the common target of achieving the best.
								</div>
							</div>
							<div className="why">
								<p className="heading">Why We Do?</p>
								<div className="desc">
									The main purpose of IEEE MAIT student branch is to plan and execute technical and non-technical 
									events, keeping in mind the best interest of IEEE members and other non-IEEE members of MAIT. 
									These events revolve around developing technologies, not belonging to any strict curriculum 
									and with sufficient resources from IEEE, these events help the participants develop an insight 
									into topics of science and engineering. Committee's agenda is to not only enhance technical 
									skills, but incubate valuable leadership experience in as many members as possible for the 
									growth of both individuals and the student branch.
								</div>
							</div>
							<div className="affinity">
								<p className="heading">Student Chapters</p>
								<div className="affinity-desc">
									<div className="wie">
										<div className="wie-heading">Women In Engineering</div>
										<div className="wie-desc">
											IEEE Women in Engineering (WIE) is one of the largest international professional 
											organizations dedicated to promoting women engineers and scientists and inspiring 
											girls around the world to follow their academic interests to a career in engineering.
										</div>
									</div>
									<div className="wie-img">
										<img src={require('./wie.png')} alt=""/>
									</div>
									<div className="know-more">Know more at:  wie.ieee.org</div>
								</div>
							</div>
						</div>
						<div className="members">
							<p className="heading">
								Members
							</p>
							<div className="wie">
								<div className="number">60</div>
								<img src={require('./wie.png')} alt=""/>
								<div className="head">WIE</div>
							</div>
							<div className="total">
								<div className="number">80</div>
								<img src={require('./total.png')} alt=""/>
								<div className="head">Total</div>
							</div>
							<div className="pes">
								<div className="number">15</div>
								<img src={require('./pes.png')} alt=""/>
								<div className="head">PES</div>
							</div>
							<div className="coordinator">
								<div className="number">12</div>
								<img src={require('./coordinator.png')} alt=""/>
								<div className="head">Core Team</div>
							</div>
							<div className="executives">
								<div className="number">9</div>
								<img src={require('./executives.png')} alt=""/>
								<div className="head">Execom</div>
							</div>
							<div className="volunteers">
								<div className="number">13</div>
								<img src={require('./volunteer.png')} alt=""/>
								<div className="head">Associates</div>
							</div>
						</div>
						<div className="footer">
							<img src={require('./footer.png')} alt=""/>
						</div>
					</div>
				</div>
			)
	}
}

export default KnowMAIT;