import './overview.css';
import moment from 'moment';

import OverviewItem from '../Components/overviewItem';

let images = {
	first: require('Assets/square-image.png'),
}

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
		$('.article').transition({ animation: 'fade up', duration: 400, interval: 200 });

		const myPlayer = amp('vid1', {}, function() {
			this.addEventListener('play', function() {
				this.currentTime(60);
			});
		});
	}

	render() {
		var articleOverviews = [];

		var i = 0;
		for (const article of this.state.articles) {
			i++;
			articleOverviews.push(<OverviewItem key={i} to={article.to} title={article.title} titleImg={images.first} date={moment().add(-2, 'days')}>{article.teaser}</OverviewItem>)
		}

		return (
			<div>
				<div className="ui text container">
					<div className="ui divided relaxed link items">
						<video id="vid1" className="azuremediaplayer amp-default-skin" autoplay controls width="640" height="400" poster="poster.jpg" data-setup='{"techOrder": ["azureHtml5JS", "flashSS", "html5FairPlayHLS","silverlightSS", "html5"], "nativeControlsForTouch": false}'>
						    <source src="http://pocaccount.streaming.mediaservices.windows.net/11d59137-fe76-4f8e-acbf-4ba4849f4de8/Stundenplaner App Präsentation.ism/manifest" type="application/vnd.ms-sstr+xml" />
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
