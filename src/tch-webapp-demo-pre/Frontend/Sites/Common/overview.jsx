import './overview.css';
import moment from 'moment';

import OverviewItem from '../Components/overviewItem';

let images = {
	first: require('Assets/square-image.png'),
}

export default class Content extends React.Component {
	componentDidMount () {
		$('.article').transition({ animation: 'fade up', duration: 400, interval: 200 });
	}

	render() {
		return (
			<div>
				<div className="ui text container">
					<div className="ui divided relaxed link items">
						<OverviewItem to="/articles/1" title="Semantic-Org/Semantic-UI" titleImg={images.first} date={moment().add(-2, 'days')}>
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</OverviewItem>

						<OverviewItem to="/articles/1" title="Semantic-Org/Semantic-UI" titleImg={images.first} date={moment().add(-2, 'days')}>
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</OverviewItem>
					</div>
				</div>
			</div>
		)
	}
}
