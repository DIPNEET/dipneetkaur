import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Work </span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/universe.webp)'}}>
									<div className="desc">
										<div className="con">
											<h3><b>Unveiled Universe</b></h3>
											<span style={{color:"purple"}}>Application</span>
											<p className="icon">
												<span><a target="_blank" href="https://github.com/DIPNEET/unveiledUniverse"><i className="icon-github" /></a></span>
												{/* <span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/pred.webp)'}}>
									<div className="desc">
										<div className="con">
											<h3><b>Predictor</b></h3>
											<span  style={{color:"purple"}}>Machine Learning</span>
											<p className="icon">
											<span><a target="_blank" href="https://github.com/DIPNEET/predictor"><i className="icon-github" /></a></span>
												{/* <span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/cam.webp)'}}>
									<div className="desc">
										<div className="con">
											<h3><b>PicSto</b></h3>
											<span  style={{color:"purple"}}>Coming Soon!</span>
											<p className="icon">
												{/* <span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							
						
						</div>
					</div>
				</section>
      </div>
    )
  }
}
