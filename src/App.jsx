import { Component } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			person: {
				fullName: "John Doe",
				bio: "A passionate developer with a love for React",
				imgSrc: "https://via.placeholder.com/150",
				profession: "Software Engineer",
			},
			shows: false,
			intervalSinceMount: 0,
		};
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState((prevState) => ({
				intervalSinceMount: prevState.intervalSinceMount + 1,
			}));
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	toggleShow = () => {
		this.setState((prevState) => ({
			shows: !prevState.shows,
		}));
	};

	render() {
		const { person, shows, intervalSinceMount } = this.state;

		return (
			<Container className='mt-5'>
				<Row className='justify-content-center'>
					<Col md={8}>
						<h1 className='text-center mb-4'>Profile Toggler</h1>
						<div className='d-flex justify-content-center mb-4'>
							<Button variant='primary' onClick={this.toggleShow}>
								{shows ? "Hide Profile" : "Show Profile"}
							</Button>
						</div>

						{shows && (
							<Card className='mb-4'>
								<Card.Img
									variant='top'
									src={person.imgSrc}
									alt={person.fullName}
								/>
								<Card.Body>
									<Card.Title>{person.fullName}</Card.Title>
									<Card.Text>{person.bio}</Card.Text>
									<Card.Text>
										<strong>Profession:</strong> {person.profession}
									</Card.Text>
								</Card.Body>
							</Card>
						)}

						<p className='text-center'>
							Time since mount: {intervalSinceMount} seconds
						</p>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
