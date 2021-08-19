import React, { Component } from 'react'

export default class Timeline extends Component {
  // constructor(){
  //   super()
    
  //   //Get the button
  //   this.mybutton = document.getElementById("myBtn");
    
  // }
  //   // When the user scrolls down 20px from the top of the document, show the button
    
    
  //   scrollFunction=()=> {
  //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //       this.mybutton.style.display = "block";
  //     } else {
  //       this.mybutton.style.display = "none";
  //     }
  //   }
    
  //   // When the user clicks on the button, scroll to the top of the document
  //   topFunction=()=> {
  //     window.onscroll = function() {this.scrollFunction()};
  //     document.body.scrollTop = 0;
  //     document.documentElement.scrollTop = 0;
  //   }
   
  // }
  render() {
    return (
      <div>
        
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Coding Instructor <span>BYJU'S FUTURE SCHOOL</span></h2>
                        {/* <h2>Coding Instructor</h2> */}
                        <p><small>Teaching young minds, inspiring & helping  them to write their first codes.</small> </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Master of Computer Applications <span>Department Of Computer Science, University Of Delhi</span></h2>
                        <p><small>I have taken subjects like DSA, OOPs, Computer Networks, ML over the years to have better understanding.</small></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>B.Sc. (Hons) Computer Science <span>Sri Guru Gobind Singh College Of Commerce, University Of Delhi</span></h2>
                        <p><small>I have spent 3 years in gathering knowledge about Operating System, Programming Languages (like C++, Python ), Database, Computer Networks, Computer System Architecture, Software Engineering, Data Sciences, Data Mining, AI & Computer Graphics.</small></p> 
                      </div>
                    </div>
                  </article>
                  {/* <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                      <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <h2>B.Sc. (Hons) Computer Science <span>Sri Guru Gobind Singh College Of Commerce, University Of Delhi</span></h2>
                      </div>
                      </div>
                    
                  </article> */}

                </div>
              </div>
            </div>
          </div>
        

  <button style={{  position: 'fixed',
  bottom: 20,
  right: 20,
  
  border: 'none',
  outline: 'none',
  backgroundColor: 'purple',
  color: '#fff',
  cursor: 'pointer',
  padding: 8,
  borderRadius: 50,
  fontSize: 16,
  fontFamily:'cursive',
  fontWeight:'bold',
  alignItems:"center"
  
}} 
  onClick={ function top() {
 
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}}
>
  Move to top !
  </button>              


</section>
    {/* Rotaract */}
    <div class="container" style={{position:'relative',marginBottom:150}}>

        <img  height='320'src="images/img_bg.jpg" alt="Rotaract" style={{width:'calc(100% - 100px)',marginLeft:50}}/>
        <div class="text-block" style={{position: 'absolute',
  top:30,
  // right: 150,
  bottom:20,
  left:100,
  width:1000,
  height:500,
  color: 'white',
  // paddingLeft: 20,
  // paddingRight: 20,
display:'flex',
flexDirection:'row'}}>
        <img  height='210'src="images/rotaract.jpg" alt="Rotaract" style={{width:'130',borderRadius:100,paddingBottom:0,paddingTop:0}}/>
        
        <div style={{marginLeft:30}}>

        <h4 style={{marginLeft:40,fontWeight:'bolder'}}>POSITIONS OF RESPONSIBILITY</h4>
        <ul >
        <li style={{color:'black',fontSize:20,fontWeight:'bold'}}><small>Club Literacy Committee Chairman, Rotaract Club, S.G.G.S.C.C, DU (2017-2018)</small></li>
        <small style={{color:'green',fontSize:16}}>Project ‘SANKALP-Digital Literacy Center’ in collaboration with Navjyoti India Foundation, Delhi (2018)</small>
        <li style={{color:'black',fontSize:20,fontWeight:'bold'}}><small>Décor Head, Rotaract Club, S.G.G.S.C.C, DU (2016-2017)</small></li>
        <small style={{color:'green',fontSize:16}}>Project ‘SYAHI 4.0: Adult Literacy Center’ at Faridabad & ‘GURUKUL - Adult Literacy Center & Sewing Stitching Centre’ at Gurugram in collaboration with Divya Jyoti Jagran Sansthan (2017)</small>
        <br/><small style={{color:'black',fontSize:16}}>Rotaract Club, SGGSCC under Rotaract District 3011, Delhi</small>

</ul>
        </div>
        
           
            
        </div>
        </div>
            {/* Rotaract */}
      </div>
    )
  }
}
