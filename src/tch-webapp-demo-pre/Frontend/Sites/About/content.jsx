import './content.css';

let images = {
	me: require('../../Assets/me-dummy.jpg'),
	cpos: require('../../Assets/c-pos.png'),
	ll: require('../../Assets/ll.png'),
	tch: require('../../Assets/tch.png'),
}


export default class About extends React.Component {
		contextTypes: {
				router: React.PropTypes.object.isRequired
		}

	componentDidMount () {
		// lazy load images
		$('.image').visibility({
			type: 'image',
			transition: 'vertical flip in',
			duration: 800
		});

		$('.ui.accordion')
		  .accordion()
		;

		$('.listing').transition('fade right', 700);
	}

	render() {
		return (
			<div>
				<div className="ui text container">
						<div className="ui equal width grid">
								<div className="equal width row">
										<div className="column">
											<img className="ui fluid image middle aligned" src={images.me}/>
										</div>
										<div className="column ui items">
												<div className="item">
														<div className="meta ui piled segment">
															<h3 className="ui header">
																Me and this blog in a nutshell
															</h3>
															<div className="meta">Project Manager, Process Team<br />Microsoft Studentpartner</div><br />
															<p>Getting into a software development company early in age, I've been able to collect lots of valuable information regarding professional development and project management.<br /><br />
														    </p>
														</div>
												</div>
										</div>
								</div>

								<div className="equal width row ui segment" style={{marginTop: 20 + 'px', marginBottom: 20 + 'px'}}>
									<div className="column">
										<h4 className="ui header">.NET</h4>
										<div className="ui link list">
											<a href="#" className="item">C# 6</a>
											<a href="#" className="item">ASP.NET Core | Entity Framework | Apps</a>
										</div>
									</div>
									<div className="column">
										<h4 className="ui header">JavaScript</h4>
										<div className="ui link list">
											<a href="#" className="item">ES 7</a>
											<a href="#" className="item">AngularJS | React | Webpack | Node</a>
										</div>
									</div>
								</div>

								<div className="ui divider">
								</div>

								<div className="equal width row">
									<div className="column ui items">
										<h1 className="ui icon header center aligned">
										  <i className="settings icon"></i>
										  <div className="content">
										    Projects
										    <div className="sub header">Things I've been contributing to lately.</div>
										  </div>
										</h1>
									</div>
								</div>

								{/* logistics live */}
								<div className="equal width row">
									<div className="column ui items">
											<div className="items">
													<div className="content">
														<h2 className="ui header center aligned ">
															<div className="content">
																Logistics Live
																<div className="sub header">Development of a generic logistics management system with live tracking functionality.</div>
															</div>
														</h2>
														<div className="ui horizontal piled segments">
															<div className="ui segment center aligned">
																<span>Process Team Operations</span>
															</div>
															<div className="ui segment center aligned">
																<span>Status: Live</span>
															</div>
														</div>

														<img className="ui fluid image middle aligned transition visible" data-src={images.ll}  src={images.ll}/>
													</div>
											</div>
										</div>
								</div>

								<div className="ui divider">
								</div>

								{/* c-pos */}
								<div className="equal width row">
									<div className="column ui items">
											<div className="items">
													<div className="content">
														<h2 className="ui header center aligned ">
															<div className="content">
																Commercial Plant Operating System
																<div className="sub header">Management and development for a production management and controlling system taylored to highly modernized plastic recycling plants.</div>
															</div>
														</h2>
														<div className="ui horizontal piled segments">
														  <div className="ui segment center aligned ">
																<span>Process Team Operations</span>
														  </div>
															<div className="ui segment center aligned ">
																<span>Status: In Development</span>
															</div>
														</div>

														<img className="ui fluid image middle aligned transition visible" data-src={images.cpos}  src={images.cpos}/>
													</div>
											</div>
										</div>
								</div>

								<div className="ui divider">
								</div>

								{/* tch */}
								<div className="equal width row">
									<div className="column ui items">
											<div className="items">
													<div className="content">
														<h2 className="ui header center aligned ">
															<div className="content">
																Technology Conference Hamburg
																<div className="sub header">Event management and website for the northern Microsoft Studentpartners team.</div>
															</div>
														</h2>
														<div className="ui horizontal piled segments">
															<div className="ui segment center aligned ">
																<span>Microsoft Studentpartners</span>
															</div>
															<div className="ui segment center aligned ">
																<span>Status: Live</span>
															</div>
														</div>

														<img className="ui fluid image middle aligned transition visible" data-src={images.tch}  src={images.tch}/>
													</div>
											</div>
										</div>
								</div>
						</div>
				</div>
			</div>
		)
	}
}
