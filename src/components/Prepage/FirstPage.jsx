import React from "react";
import "../../pages/Landing/Landing/Landing.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BgImage =
  "https://wallpapercave.com/wp/wp5561202.jpg";

const PrivateImage =
  "https://tse4.mm.bing.net/th?id=OIP.blkH2IoD1_3huHun3emAYQHaFd&pid=Api&P=0";

const PublicImage =
  "https://tse1.mm.bing.net/th?id=OIP.P3nppK2dWIXJYW2I94Q6uQHaE7&pid=Api&P=0";

const Testimonialsreviewpic =
  "http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-4/256/couple-icon.png";

const GeneralContainer = styled.div`
  background-color: #f80039;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  overflow-y: auto;
  position: relative;
  padding: 10px;
`;

const HomeContainer = styled.div`
  margin: 10px auto;
  width: 100%;
  position: relative;
  text-align: center;
  color: white;
  position: relative;
`;
const HomeImage = styled.img`
  font-size: cover;
  height: 500px;
  width: 100%;
  background-color: red;
  margin-top: 0px;
  border-radius: 5px;
`;
const HomeTitle = styled.h2`
  text-align: center;
  font-weight: bolder;
  position: absolute;
  bottom: 150px;
  left: 70px;
`;
const HomeDetails = styled.p`
  text-align: start;
  position: absolute;
  bottom: 100px;
  left: 50px;
  font-family: "Times New Roman", Times, serif;
  font-size: 25px;
  letter-spacing: 2px;
  word-spacing: 2px;
  font-weight: normal;
`;

const HomeButton = styled.button`
  text-align: center;
  position: absolute;
  bottom: 50px;
  left: 15%;
  border: none;
  border-radius: 5px;
  background-color: red;
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: white;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  padding: 7px;
`;

const SmallNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-itmes: center;
  border-bottom: 3px solid tomato;
`;
const RecommendedLinks = styled.button`
  font-size: 20px;
  margin: 10px 15px;
  border: none;
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 2px;
  font-weight: bolder;
  color: #ffffff;
  background: transparent;
`;
const IntroContainer = styled.div`
  margin: 10px auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  border-bottom: 3px solid #660042;
`;
const IntroCards = styled.div`
  width: 33%;
  height: 300px;
  margin: 20px;
  border-radius: 3%;
`;
const IntroCardsTitle = styled.h2`
  text-align: center;
  font-weight: bolder;
  color: #ffffff;
  background: transparent;
  text-shadow: 3px 5px 2px #474747;
`;
const IntroCardsDetails = styled.p`
  font-weight: bolder;
  text-align: start;
  padding: 20px;
  color: #d9d9d9;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
`;
// const IntroVideo = styled.video`
//   width: 100%;
//   height: 235px;
// `;

const HowItWorksContainer = styled.h4`
  margin: 10px auto;
  width: 100%;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 3px solid #660042;
`;
const HowItWorksImage = styled.img`
  width: 100%;
  height: 300px;
`;
const HowItWorksCard = styled.div`
  flex: 50%;
  margin: 25px;
  padding: 25px;
`;

const HowItWorksTitle = styled.div`
  width: 100%;
  text-align: center;
  padding: 15px 0px;
`;
const HowItWorksDesc = styled.div`
  width: 100%;
`;

const HowItWorksButton = styled.button`
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 20px auto;
`;

const TestimonialsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
`;
const HeaderTitle = styled.h2`
  text-align: center;
  font-weight: bolder;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
`;
const TestimonialsCard = styled.div`
  width: 25%;
  height: 300px;
  margin: 20px;
  border-radius: 3%;
`;
const TestimonialsImage = styled.img`
  width: 150px;
  height: 150px;
  border: 1px solid white;
  border-radius: 50%;
`;

const TestimonialsDesc = styled.p`
  font-size: 15px;
  padding: 10px;
`;

const TestimonialsName = styled.h4`
  font-weight: bolder;
  font-size: 15px;
  text-align: center;
`;
const TestimonialsButton = styled.button`
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 70px auto;
  border: none;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  width: 100%;
  margin: 10px auto;
  border-top: 3px solid #660042;
`;
const FoooterCard = styled.p`
  flex:33%
  text-align: center;
  margin auto;
`;
const FoooterLink = styled.p`
  display: flex;
  justify-content: flex-start;
  flex: 33%;
`;

const FoooterText = styled.p`
  text-align: center;
  margin 10px;
`;

const FirstPage = () => {
  return (
    <>
      <GeneralContainer>
        <HomeContainer>
          <HomeImage src={BgImage} />
          <HomeTitle>Find Your Life Partner</HomeTitle>
          <HomeDetails>
            Leading Eritrean Dating Site With Over 500K Members
          </HomeDetails>
          <HomeButton>View singles now</HomeButton>
        </HomeContainer>
        <SmallNavContainer>
          <RecommendedLinks>Women</RecommendedLinks>
          <RecommendedLinks>Men</RecommendedLinks>
          <RecommendedLinks>Men & women </RecommendedLinks>
        </SmallNavContainer>
        <IntroContainer>
          <IntroCards>
            <IntroCardsTitle>why choose Eri Dating</IntroCardsTitle>
            <IntroCardsDetails>
              With over 500K singles available online, you have more chances of
              meeting the Eritrean woman or man of your dreams on EriDating than
              anywhere else. Whether you are interested in finding someone local
              or overseas, you can easily browse through 1000s of singles to
              find the perfect partner for you. Sign up to EriDating today, your
              Eritrean romance is just a click away just click{" "}
              <Link to="/go-somewhere">here</Link> to sign up today with
              EriDating
            </IntroCardsDetails>
          </IntroCards>
          <IntroCards>
            <IntroCardsTitle>Premium Service – Eritrean Dating</IntroCardsTitle>
            <IntroCardsDetails>
              EriDating is part of the well-established Media network that
              operates over 20 reputable niche dating sites. With a commitment
              to connecting Eritrean singles worldwide, we bring Eritrea to you.
              <p>
                Not many other sites can promise to connect you with 1000s of
                men and women from Eritrea. Whether you’re looking for love
                locally or internationally, we are committed to helping you find
                the perfect match, no matter where in the world they may be.
                <p>
                  For more info please click{" "}
                  <Link to="/go-somewhere">here</Link>
                </p>
              </p>
            </IntroCardsDetails>
          </IntroCards>
          <IntroCards>
            <IntroCardsTitle>Start Your Success Story On</IntroCardsTitle>
            {/* <IntroVideo></IntroVideo> */}
            <IntroCardsDetails>
              As the leading Eritrean dating site, we successfully bring
              together singles from around the world. For over 2 years,
              thousands of happy men and women have met their soul mates on
              EriDating and have shared their stories with us. Check out the
              many success stories
              <p>
                For a fun, safe and uniquely Eritrean dating experience,{" "}
                <Link to="/go-somewhere"> join free today</Link>
              </p>
            </IntroCardsDetails>
          </IntroCards>
        </IntroContainer>
        <HeaderTitle>How It Works</HeaderTitle>
        <HowItWorksContainer>
          <Link to="/go-to-private" className="howWorksCardLink">
            <HowItWorksCard>
              <HowItWorksImage src={PrivateImage} />
              <HowItWorksTitle>Private</HowItWorksTitle>
              <HowItWorksDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Etiam sit amet nisl purus. Diam sollicitudin tempor id eu nisl
                nunc. Nunc scelerisque viverra mauris in aliquam sem fringilla
                ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Etiam sit amet nisl purus. Diam sollicitudin tempor id eu nisl
                nunc. Nunc scelerisque viverra mauris in aliquam sem fringilla
                ut
              </HowItWorksDesc>
              <HowItWorksButton>let's start</HowItWorksButton>
            </HowItWorksCard>
          </Link>
          <Link to="go-to-public" className="howWorksCardLink">
            <HowItWorksCard>
              <HowItWorksImage src={PublicImage} />
              <HowItWorksTitle>Public</HowItWorksTitle>
              <HowItWorksDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Etiam sit amet nisl purus. Diam sollicitudin tempor id eu nisl
                nunc. Nunc scelerisque viverra mauris in aliquam sem fringilla
                ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Etiam sit amet nisl purus. Diam sollicitudin tempor id eu nisl
                nunc. Nunc scelerisque viverra mauris in aliquam sem fringilla
                ut
              </HowItWorksDesc>
              <HowItWorksButton>let's start</HowItWorksButton>
            </HowItWorksCard>
          </Link>
        </HowItWorksContainer>
        <section>
          <HeaderTitle>Members Who Have Found Love</HeaderTitle>
          <TestimonialsContainer>
            <TestimonialsCard>
              <TestimonialsImage src={Testimonialsreviewpic} />
              <TestimonialsName>Name</TestimonialsName>
              <TestimonialsDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Etiam sit amet nisl purus. Diam sollicitudin tempor id eu nisl
                nunc. Nunc scelerisque viverra mauris in aliquam sem fringilla
                ut
              </TestimonialsDesc>
            </TestimonialsCard>
            <TestimonialsCard>
              <TestimonialsImage src={Testimonialsreviewpic} />
              <TestimonialsName>Name</TestimonialsName>
              <TestimonialsDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Etiam sit amet nisl purus. Diam sollicitudin tempor id eu nisl
                nunc. Nunc scelerisque viverra mauris in aliquam sem fringilla
                ut
              </TestimonialsDesc>
            </TestimonialsCard>
            <TestimonialsCard>
              <TestimonialsImage src={Testimonialsreviewpic} />
              <TestimonialsName>Name</TestimonialsName>
              <TestimonialsDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Etiam sit amet nisl purus. Diam sollicitudin tempor id eu nisl
                nunc. Nunc scelerisque viverra mauris in aliquam sem fringilla
                ut
              </TestimonialsDesc>
            </TestimonialsCard>
            <TestimonialsCard>
              <TestimonialsImage src={Testimonialsreviewpic} />
              <TestimonialsName>Name</TestimonialsName>
              <TestimonialsDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Etiam sit amet nisl purus. Diam sollicitudin tempor id eu nisl
                nunc. Nunc scelerisque viverra mauris in aliquam sem fringilla
                ut
              </TestimonialsDesc>
            </TestimonialsCard>
          </TestimonialsContainer>
          <TestimonialsButton>Read More</TestimonialsButton>
        </section>
        <section>
          <FooterContainer>
            <FoooterCard>
              <FoooterLink>
                <strong>Company & Information</strong>
              </FoooterLink>
              <FoooterLink>
                <Link to="#"></Link>About Us
              </FoooterLink>
              <FoooterLink>
                <Link to="#"></Link>Contact us
              </FoooterLink>
              <FoooterLink>
                <Link to="#"></Link>How to use site
              </FoooterLink>
              <FoooterLink>
                <Link to="#"></Link>Sucess stories
              </FoooterLink>
            </FoooterCard>
            <FoooterCard>
              <FoooterLink>
                <strong>Legal & Safety </strong>
              </FoooterLink>
              <FoooterLink>
                <Link to="#"></Link>Dating safety
              </FoooterLink>
              <FoooterLink>
                <Link to="#"></Link>Terms of use
              </FoooterLink>
              <FoooterLink>
                <Link to="#"></Link>Privacy
              </FoooterLink>
              <FoooterLink>
                <Link to="#"></Link>Community Guidelines
              </FoooterLink>
            </FoooterCard>
            <FoooterCard>
              <FoooterLink>
                <strong>Follow Us</strong>
              </FoooterLink>
              <FoooterLink>
                <Link to="#"></Link>FaceBook
              </FoooterLink>
              <FoooterLink>
                <Link to="#"></Link>Tik Tok
              </FoooterLink>
              <FoooterLink>
                <Link to="#"></Link>Instigram
              </FoooterLink>
              <FoooterLink>
                <Link to="#"></Link>Linkiden
              </FoooterLink>
            </FoooterCard>
          </FooterContainer>
          <FoooterText>©️Copy write 2022 EriSingles</FoooterText>
        </section>
      </GeneralContainer>
    </>
  );
};

export default FirstPage;
