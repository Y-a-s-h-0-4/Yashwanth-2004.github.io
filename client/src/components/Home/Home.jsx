import { Link } from 'react-router-dom';
import "./Home.css";
import articleImage from '../../Assets/Article-Writing-1.jpg';
import { useState } from 'react';

function Home() {

  let [home,setHome]=useState(false)

  function handleSetHome() {
    setHome(false);
  }

  function handleResetHome() {
    setHome(true);
  }

  return (
    <div className='container mt-5 main'>
      <div className='row content rounded-pill'>
        {
          home?(
            <>
              <div className='col-md-5 m-5 d-block mx-auto text-center'>
                <img src={articleImage} alt="Article Writing" className="artcleImage img-fluid" />
              </div>
            </>
          ):(
            <>
              <div className='col-md-7 p-5'>
                <h1 className="mb-4">Welcome to <span>Blog</span></h1>
                <p className="lead">
                Where Your Ideas Take Flight. Start Writing Your Story Today and Inspire the World.
                </p>
                <p>
                Blog is your ultimate destination for sharing your thoughts, passions, and stories with the world. Whether you're an experienced blogger or just starting out, Blog provides a user-friendly platform to express yourself, connect with like-minded individuals, and explore a wide range of topics. From technology and travel to fashion and food, there's something for everyone on Blog. Join our vibrant community today and let your voice be heard.
                </p>
                <p className='getstarted'> 
                  <Link to="/signin" className="btn btn-success">Get Started</Link> 
                </p>
              </div>
              <div className='col-md-5 text-center mt-5'>
                <img src={articleImage} alt="Article Writing" className="artcleImage img-fluid" />
              </div>
            </>
          )
        }
        
      </div>
      
    </div>
  );
}

export default Home;
