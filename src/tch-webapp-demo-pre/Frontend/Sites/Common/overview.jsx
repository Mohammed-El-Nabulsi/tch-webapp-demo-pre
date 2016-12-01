import './overview.css';
import moment from 'moment';

import OverviewItem from '../Components/overviewItem';

let images = {
	first: require('Assets/square-image.png'),
}

var myPlayer = null;

export default class Content extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			articles: [],
		}
	}

	componentWillMount() {
		fetch('/api/articles').then(async res => {
			this.setState({ articles: await res.json() });
		})
	}
	componentDidMount () {
		if (!!myPlayer) {
		    myPlayer.dispose();
		}

		myPlayer = amp('vid1', {
			nativeControlsForTouch: false,
			autoplay: false,
			controls: true,
			width: "640",
			height: "400",
			poster: ""
		}, function() {
			this.addEventListener('play', function() {
				this.currentTime(60);
			});
		});

		myPlayer.src([{
    		src: "http://pocaccount.streaming.mediaservices.windows.net/11d59137-fe76-4f8e-acbf-4ba4849f4de8/Stundenplaner App Präsentation.ism/manifest",
    		type: "application/vnd.ms-sstr+xml"
		}]);
	}

	render() {


		return (
			<div>
				<div className="ui text container">
					<div className="ui divided relaxed link items">
						<video id="vid1" className="azuremediaplayer amp-default-skin">
						    <p className="amp-no-js">
						        To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video
						    </p>
						</video>
					</div>
				</div>
			</div>
		)
	}
}
