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
						{articleOverviews}
					</div>
				</div>
			</div>
		)
	}
}
