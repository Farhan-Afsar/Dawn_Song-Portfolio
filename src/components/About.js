import Counter from "./Counter";
const About = ({ dark }) => {
  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img src={`img/about/${dark ? 2 : 1}.jpg`} alt="image" />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={10} />+
                    </h3>
                    <span className="name">
                      Awards
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={100} />+
                    </h3>
                    <span className="name">
                      Total
                      <br />
                      Paper
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`Biography`}</span>
                <h3></h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  {`Dawn Song is a Professor in the Department of Electrical Engineering and Computer Science at UC Berkeley.
                   Her research interest lies in deep learning and security. She is the recipient of various awards including the MacArthur Fellowship,
                    the Guggenheim Fellowship, the NSF CAREER Award, the Alfred P. Sloan Research Fellowship,
                    the MIT Technology Review TR-35 Award, the George Tallman Ladd Research Award, the Okawa Foundation Research Award, 
                    and Best Paper Awards from top conferences. She obtained her Ph.D. degree from UC Berkeley. Prior to joining UC Berkeley as a faculty, she was an Assistant Professor at Carnegie Mellon University from 2002 to 2007.`}
                </p>
              </div>
              <div
                className="dizme_tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <a className="anchor" href="https://www2.eecs.berkeley.edu/Pubs/Faculty/song.html">
                  <span>Publications</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default About;
