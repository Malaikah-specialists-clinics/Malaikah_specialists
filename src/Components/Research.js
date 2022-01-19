import React from "react";
import { Row, Col, Button } from "react-bootstrap";
// import { useMediaQuery } from 'react-responsive';


function Research() {
  // const [width, setWindowWidth] = useState(0);

  // const updateDimensions = () => {
  //   const width = window.innerWidth;
  //   setWindowWidth(width);
  // };


  // useEffect(() => { 

  //    updateDimensions();

  //    window.addEventListener("resize", updateDimensions);
  //    return () => 
  //      window.removeEventListener("resize", updateDimensions);
  //   }, [])

   
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-device-width: 1224px)',
  // });
  // const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' });
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  // const isTabletOrMobileDevice = useMediaQuery({
  //   query: '(max-device-width: 1224px)',
  // });
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return (
    <>
      <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '85%' }}>
        <h2 style={{ textAlign: 'center' }}>Our Research</h2>
        <Row >
          <Col md>
            {/* {isDesktopOrLaptop && isTabletOrMobileDevice && isBigScreen && isTabletOrMobile && <> */}
                <p style={{ marginTop: '4%' }}>
                  Meow all night head nudges . Cat not kitten around get scared
                  by sudden appearance of cucumber, bawl under human beds so eat
                  owner's food. I am the best try to jump onto window and fall
                  while scratching at wall yet while happily ignoring when being
                  called. Stare at the wall, play with food and get confused by
                  dust. Meow all night head nudges . Cat not kitten around get
                  scared by sudden appearance of cucumber, bawl under human beds
                  so eat owner's food. I am the best try to jump onto window and
                  fall while scratching at wall yet while happily ignoring when
                  being called. Stare at the wall, play with food and get
                  confused by dust.
                </p>
              {/* </>} */}
            <Button href="#rscreen" id="Btn" style={{ marginTop: '0' }}>
              LEARN MORE
            </Button>
          </Col>
          <Col md>
            <div id="pic">
              <img
                src="/images/rsrch.jpg"
                alt="research"
                style={{
                  width: '600px',
                  height: '290px',
                  borderRadius: '5% 0% 0% 5%',
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Research;