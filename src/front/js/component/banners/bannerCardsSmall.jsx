import React from "react";
import Card from "react-bootstrap/Card";
import Fade from "react-reveal/Fade";

export const BannerCardsSmall = () => {
  return (
    <>
      <div className="d-flex flex-row ">
        <Fade bottom>
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://www.autozone.com/cdn/images/B2C/US/media/FY20/P05/MobileFirst/fy20p0506-2split9col-ocs-d.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay>
              {/* <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text> */}
            </Card.ImgOverlay>
          </Card>

          <Card className="bg-dark text-white">
            <Card.Img
              src="https://www.autozone.com/cdn/images/B2C/US/media/FY22/P07/BrakeAssets/2split-brakeJob-lockup-15-d.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay>
              {/* <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text> */}
            </Card.ImgOverlay>
          </Card>
        </Fade>
      </div>


    </>
  );
};
