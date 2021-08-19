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
        
          </section>
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


  {/* <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom"> */}
   {/* <div className="timeline-entry-inner"> */}
      {/* <div className="timeline-icon color-2"> */}
    {/* Rotaract */}
    <div class="container" style={{position:'relative',marginBottom:130,height:'100%'}}>

        <img  height='400'src="images/img_bg.jpg" alt="Rotaract" style={{width:'calc(100% - 100px)',marginLeft:50}}/>
        <div class="text-block" style={{position: 'absolute',
  top:50,
  // right: 150,
  bottom:0,
  left:90,
  width:'calc(100% - 200px)',
  height:'100%',
 
  // paddingLeft: 20,
  // paddingRight: 20,
display:'flex',
flexDirection:'row'}}>
   
        <img  height='210'src="images/rotaract.jpg" alt="Rotaract" style={{width:'calc(100% - 600px)',borderRadius:100,paddingBottom:0,paddingTop:0}}/>
        {/* <div className="timeline-label"> */}
        <div style={{marginLeft:30}}>

        <h3 style={{marginLeft:0,fontWeight:'bold'}}>POSITIONS OF RESPONSIBILITY</h3>
        <p style={{color:'black',fontSize:14}}>Rotaract Club, SGGSCC under Rotaract District 3011, Delhi</p>
        {/* <ul > */}
        <p style={{color:'black',fontSize:18,fontWeight:'bold'}}>Club Literacy Committee Chairman, Rotaract Club, S.G.G.S.C.C, DU (2017-2018)</p>
        <p style={{color:'green',fontSize:14}}>Project ‘SANKALP-Digital Literacy Center’ in collaboration with Navjyoti India Foundation, Delhi (2018)</p>
        <p style={{color:'black',fontSize:18,fontWeight:'bold'}}>Décor Head, Rotaract Club, S.G.G.S.C.C, DU (2016-2017)</p>
        <p style={{color:'green',fontSize:14}}>Project ‘SYAHI 4.0: Adult Literacy Center’ at Faridabad & ‘GURUKUL - Adult Literacy Center & Sewing Stitching Centre’ at Gurugram in collaboration with Divya Jyoti Jagran Sansthan (2017)</p>
       

{/* </ul> */}
        </div>
        {/* </div> */}
           
            
        {/* </div> */}
        {/* </div> */}
           
           
        </div>
        </div>
      {/* </article> */}
      {/* Rotaract */}
           
      </div>
      
    )
  }
}
