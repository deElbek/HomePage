# Landing-Page
import '../style/home.scss';
import Img from '../../image/singer.jpg';
import './script';
function Home() {

        function scrollWin(){
            window.scrollTo(0, 0)
        }

    return ( 
        <>
        <div className="home">
                <div className="page">
                    <div className="figma">
                        <h1>Learn How To Launch a Successful Podcast</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At earum necessitatibus ipsum qui ratione beatae laborum praesentium recusandae placeat! </p>
                        <p className='p'><b>$189</b> <strike>$399</strike></p>
                        <button className='btn'>Enroll Now</button>
                        <button className='btn1'><i className="fa-solid fa-arrow-down-right"></i>Watch Trailer</button>
                    </div>
                    <img src={Img} alt="" />
                </div>
                <div className="icon">
                    <div className="row">
                        <div className="card">
                            <div className="ico">
                          <i className="fa-solid fa-microphone-lines"></i>
                            </div>
                              <p className='p1'>Learn what the best gear is and where to get it</p>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, blanditiis impedit vel quam quod inventore architecto placeat?</p>
                        </div>
                        <div className="card">
                            <div className="ico">
                            <i className="fa-solid fa-user-group"></i>
                            </div>
                              <p className='p1'>Learn what the best gear is and where to get it</p>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, blanditiis impedit vel quam quod inventore architecto placeat?</p>
                        </div>
                        <div className="card">
                            <div className="ico">
                            <i className="fa-solid fa-coins"></i>
                            </div>
                              <p className='p1'>Learn what the best gear is and where to get it</p>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, blanditiis impedit vel quam quod inventore architecto placeat?</p>
                        </div>
                    </div>
                </div>
        </div>
         <main>  <button className='button' onClick={()=>scrollWin()}><i className="fa-solid fa-angle-up"></i></button></main>
         </>
     );
}

export default Home;


import Img2 from '../../image/large.jpg';
import Img3 from '../../image/close.webp';
import '../style/about.scss';
function About() {
    return ( 
        <>
         <div className="about">
             <div className="about1">
                    <img src={Img2} />
                    <div className="bout">
                        <h2>Learch with Joyce and Rob, your podcast teachers</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis cumque dolor numquam commodi delectus dolores hic? Reprehenderit dicta praesentium itaque maxime optio velit porro, eveniet nobis minima culpa animi ratione accusantium iure eligendi?</p>
                    </div>
                </div>
                <div className="services">
                    <div className="studio">
                        <h2>Get the editing skills you need to thrive</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nisi impedit beatae dolore, ipsam magni provident minima, esse reprehenderit facere numquam quam quo consectetur qui deleniti iure voluptas rerum. Odit?</p>
                    </div>
                    <img src={Img3} alt="" />
                </div>
             </div>
        </>
     );
}

export default About;


import '../style/any.scss';
function Any() {
    return ( 
        <div className="any">
              <div className="any1">
                  <div className="logo">
                    <h1>Any Question?</h1>
                  </div>
                  <div className="how">
                      <div className="long">
                        <select name="" id="">
                            <option value="">How long is the course?</option>
                        </select>
                      </div>
                      <div className="long">
                        <select name="" id="">
                            <option value="">When does  the next intake start? </option>
                        </select>
                      </div>
                      <div className="long">
                        <select name="" id="">
                            <option value="">I'm not sure if this course is suitable for me?</option>
                        </select>
                      </div>
                      <div className="long">
                        <select name="" id="">
                            <option value="">How long do I have to complete the course?</option>
                        </select>
                      </div>
                  </div>
               </div>
                  <div className="buy">
                      <div className="logo">
                        <h3>It's Time to Start Your Podcast</h3>
                      </div>
                      <div className="time">
                      <div className="essential">
                            <div className="icon">
                            <i className="fa-solid fa-book-bookmark"></i>
                                <h3>Essential</h3>
                            <p><b>$189</b> $399</p>
                            </div>
                              <div className="but">
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                              <button>Get Access Now</button>
                              </div>
                              <div className="subjec">
                                   <p><i className="fa-solid fa-check"></i>24 video</p>
                                   <p><i className="fa-solid fa-check"></i>1 month free access</p>
                                   <p><i className="fa-solid fa-check"></i>Helpful templates and resourse</p>
                                   <p><i className="fa-solid fa-check"></i>All course updates for free</p>
                              </div>
                        </div>
                        <div className="essential1">
                            <div className="icon">
                            <i className="fa-solid fa-book-atlas"></i>
                                <h3>Premium</h3>
                            <p><b>$399</b> $899</p>
                            </div>
                              <div className="but">
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                              <button>Get Access Now</button>
                              </div>
                              <div className="subjec">
                                   <p><i className="fa-solid fa-check"></i>24 video</p>
                                   <p><i className="fa-solid fa-check"></i>1 month free access</p>
                                   <p><i className="fa-solid fa-check"></i>Helpful templates and resourse</p>
                                   <p><i className="fa-solid fa-check"></i>All course updates for free</p>
                                   <p><i className="fa-solid fa-check"></i>Access to all future course </p>
                                   <p><i className="fa-solid fa-check"></i>1-on-1 help  width the tutors</p>
                                   <p><i className="fa-solid fa-check"></i>Monthly catch-ups</p>
                              </div>
                        </div>
                      </div>
                  </div>
        </div>
     );
}

export default Any;


import '../style/skills.scss';
function Skills() {
    return ( 
        <div className="skills">
              <div className="skills1">
                    <div className="h1">
                        <h2>What's Included?</h2>
                        <div className="wor">
                        <div className="son">
                            <h1>6</h1>
                            <p>Chapter</p>
                        </div>
                        <div className="son">
                            <h1>56+</h1>
                            <p>Podcast Ideas</p>
                        </div>
                        <div className="son">
                            <h1>28</h1>
                            <p>Video</p>
                        </div>
                        <div className="son">
                            <h1>4</h1>
                            <p>Free Resources</p>
                        </div>
                        <div className="son">
                            <h1>$8k</h1>
                            <p>Worth of Value</p>
                        </div>
                        </div>
                    </div>
                </div>  
               <div className="contacts">
                  <div className="logo">
                    <h1>The Course Curriculum</h1>
                  </div>
                  <div className="roow">
                <div className="section">
                     <select name="" id="">
                     <option value="">Outline your Idea</option>
                        </select> 
                  </div>
                  <div className="section">
                     <select name="" id="">
                     <option value="">Finding Guests</option>
                        </select> 
                  </div>
                  <div className="section">
                     <select name="" id="">
                     <option value="">Growing & Connecting</option>
                     </select> 
                  </div>
                  <div className="section">
                     <select name="" id="">
                     <option value="">Profiting From Your Podcast</option>
                        </select> 
                  </div>
                  <div className="section">
                     <select name="" id="">
                     <option value="">Building Your Brand</option>
                        </select> 
                  </div>
                  <div className="section">
                     <select name="" id="">
                     <option value="">Outline your Idea</option>
                        <option value="">Outline your Idea</option> 
                        </select> 
                  </div>
               </div>
                  </div>
        </div>
     );
}

export default Skills;


import '../style/work.scss';
import Img4 from '../../image/senior.png';
function Work() {
    return ( 
        <div className="work">
              <div className="work1">
                    <div className="logo">
                        <h2>By the end of the 4-week course...</h2>
                    </div>
                    <div className="row">
                        <div className="card">
                            <div className="icon">
                            <i className="fa-solid fa-microphone"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni autem culpa sequi, deserunt veritatis </p>
                        </div>
                        <div className="card">
                            <div className="icon1">
                            <i className="fa-solid fa-image"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni autem culpa sequi, deserunt veritatis </p>
                        </div>
                        <div className="card">
                            <div className="icon2">
                            <i className="fa-solid fa-tv"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni autem culpa sequi, deserunt veritatis </p>
                        </div>
                        <div className="card">
                            <div className="icon3">
                            <i className="fa-solid fa-coins"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni autem culpa sequi, deserunt veritatis </p>
                        </div>
                        <div className="card">
                            <div className="icon4">
                            <i className="fa-solid fa-music"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni autem culpa sequi, deserunt veritatis </p>
                        </div>
                        <div className="card">
                            <div className="icon5">
                            <i className="fa-solid fa-user-group"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni autem culpa sequi, deserunt veritatis </p>
                        </div>
                        <div className="card">
                            <div className="icon6">
                            <i className="fa-solid fa-camera-rotate"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni autem culpa sequi, deserunt veritatis </p>
                        </div>
                        <div className="card">
                            <div className="icon7">
                            <i className="fa-solid fa-message"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni autem culpa sequi, deserunt veritatis </p>
                        </div>
                    </div>
               </div>
               <div className="theme">
                    <div className="qwerty">
                    <h1>"<b>"</b></h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem mollitia laudantium fuga, nemo, vel quis quae fugiat nobis. <b>Labore deleniti voluptate quod perspiciatis repudiandae cupiditate.</b></p>
                        <img src={Img4} alt="" />
                        <p>Anna Matthem</p>
                    </div>
               </div>
        </div>
     );
}

export default Work;
