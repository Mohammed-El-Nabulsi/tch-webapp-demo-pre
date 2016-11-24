import 'semantic-ui-css/semantic.css';
import 'semantic-ui-css/semantic.js';

import 'semantic-ui-css/components/dropdown.js'
import 'semantic-ui-css/components/transition.js'
import 'semantic-ui-css/components/visibility.js'
import 'semantic-ui-css/components/accordion.js'

import './layout.css';

import { Link } from 'react-router';
let images = {
    logo: require('./Assets/logo.png'),
}

export default class Layout extends React.Component {
    contextTypes: {
        router: React.PropTypes.object.isRequired
    }

    constructor(props) {
		super(props);
	}

    componentDidMount () {
        // fix main menu to page on passing
        $('.main.menu').visibility({
            type: 'fixed'
        });
        $('.overlay').visibility({
            type: 'fixed',
            offset: 80
        });

        // show dropdown on hover
		$('.main.menu  .ui.dropdown').dropdown({
			on: 'hover'
		});
    }


	render() {
			let Content = this.props.content;

			return (
				<div className="layout" style={{ marginTop: '30px' }}>
					<div className="ui main text container">
						<h1 className="ui header">{'Mo\'s Blog'}</h1>
						<p>Software engineering tutorials, tips and tricks as well as management learning in a nutshell.</p>
					</div>
					<div className="ui borderless main menu">
						<div className="ui text container">
							<div className="header item">
								<img className="logo" src={images.logo}/>
								Home
							</div>
							<a href="#" className="item">Blog</a>
                  <Link to="/about" className="right floated item">About</Link>
						</div>
					</div>
					<div>
						{ Content }
					</div>
					<div className="ui inverted vertical footer segment">
						<div className="ui center aligned container">
							<div className="ui stackable inverted divided grid">
								<div className="three wide column">
									<h4 className="ui inverted header">Group 1</h4>
									<div className="ui inverted link list">
										<a href="#" className="item">Link One</a>
										<a href="#" className="item">Link Two</a>
										<a href="#" className="item">Link Three</a>
										<a href="#" className="item">Link Four</a>
									</div>
								</div>
								<div className="three wide column">
									<h4 className="ui inverted header">Group 2</h4>
									<div className="ui inverted link list">
										<a href="#" className="item">Link One</a>
										<a href="#" className="item">Link Two</a>
										<a href="#" className="item">Link Three</a>
										<a href="#" className="item">Link Four</a>
									</div>
								</div>
								<div className="three wide column">
									<h4 className="ui inverted header">Group 3</h4>
									<div className="ui inverted link list">
										<a href="#" className="item">Link One</a>
										<a href="#" className="item">Link Two</a>
										<a href="#" className="item">Link Three</a>
										<a href="#" className="item">Link Four</a>
									</div>
								</div>
								<div className="seven wide column">
									<h4 className="ui inverted header">Footer Header</h4>
									<p>Extra space for a call to action inside the footer that could help re-engage users.</p>
								</div>
							</div>
							<div className="ui inverted section divider"></div>
							<img src={images.logo} className="ui centered mini image"/>
							<div className="ui horizontal inverted small divided link list">
								<a className="item" href="#">Site Map</a>
								<a className="item" href="#">Contact Us</a>
								<a className="item" href="#">Terms and Conditions</a>
								<a className="item" href="#">Privacy Policy</a>
							</div>
						</div>
					</div>
				</div>
			)
	}
}
