import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: "url(images/About.jpg)"}} />
              <h1 id="colorlib-logo"><a href="index.html">Dipneet Kaur</a></h1>
              <span className="email"><i className="icon-mail"></i> dipneet.mca19.du@gmail.com</span>
              <span className="email"><i className="icon-mail"></i> dipneet.kaur@byjusteachers.com</span><br/>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/dipneet-kaur-1aa5b416a/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/DIPNEET" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://www.instagram.com/dipneet_kaur/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <br/>
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> by Dipneet 
                 <br/>
      
                 
                 <p style={{fontSize:9.2}}> Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration & <a href="https://giphy.com" target="_blank" rel="noopener noreferrer">GIPHY</a> for GIFs ! 
                 </p>
                 </small></p> 
              
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
