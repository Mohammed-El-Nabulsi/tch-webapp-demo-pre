import moment from 'moment';

import { Link } from 'react-router';

export default class OverviewItem extends React.Component {
	constructor(props) {
		super(props);
		this.title = props.title;
		this.titleImg = props.titleImg;
		this.to = props.to;
		this.date = props.date;
		this.children = props.children;
	}

	render() {
		let images = {
				me: require('../../Assets/me-dummy.jpg'),
		}

		return (
			<Link to={this.to} className="item article transition hidden">
				<div className="image">
					<img className="" src={this.titleImg}></img>
				</div>
				<div className="content">
					<div className="header">{this.title}</div>
					<div className="description">
						{this.children}
					</div>

					<div className="extra">

						<span className="left floated">
							{moment(this.date).fromNow()}
						</span>
						<span className="right floated author">
				      <img className="ui avatar image" src={images.me}/> Mo
				    </span>
					</div>
				</div>
			</Link>
		)
	}
}

OverviewItem.propTypes = {
	children: React.PropTypes.string.isRequired,

	title: React.PropTypes.string.isRequired,
	titleImg: React.PropTypes.object.isRequired,
	to: React.PropTypes.string.isRequired,
	date: React.PropTypes.instanceOf(moment),
}
