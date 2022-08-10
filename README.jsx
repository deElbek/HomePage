# HomePage
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
