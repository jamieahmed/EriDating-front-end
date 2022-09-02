import React from "react";
import "./Landing.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";

const BgImage =
  "https://www.nsbpictures.com/wp-content/uploads/2019/03/fire-heart.jpg";

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

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px auto;
  width: 100%;
`;

const Logo = styled.div`
  height: 30px;
  width: 70px;
  position: absolute;
  top: 8px;
  left: 26px;
`;

const SignIn = styled.div`
  height: 30px;
  width: 70px;
  position: absolute;
  top: 8px;
  right: 156px;
`;

const Language = styled.div`
  height: 30px;
  width: 70px;
  position: absolute;
  top: 8px;
  right: 86px;
`;
const DarkMode = styled.span`
  height: 30px;
  width: 70px;
  position: absolute;
  top: 8px;
  right: 0px;
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
`;
const HomeTitle = styled.h2`
  text-align: center;
  font-weight: bolder;
  position: absolute;
  bottom: 150px;
  left: 70px;
`;
const HomeDetails = styled.p`
  font-weight: bolder;
  text-align: start;
  padding: 20px;
  position: absolute;
  bottom: 100px;
  left: 50px;
`;

const HomeButton = styled.button`
  text-align: center;
  position: absolute;
  bottom: 50px;
  left: 15%;
  border: none;
  background-color: white;
`;

const SmallNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-itmes: center;
  border-bottom: 3px solid #660042;
`;
const RecommendedLinks = styled.button`
  font-size: 17px;
  margin: 10px 15px;
  border: none;
  background-color: transparent;
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
`;
const IntroCardsDetails = styled.p`
  font-weight: bolder;
  text-align: start;
  padding: 20px;
`;
const IntroVideo = styled.video`
  width: 100%;
  height: 235px;
`;

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
        <NavbarContainer>
          <Logo>EriDating</Logo>
          <SignIn>
            <Link className="login-link" to="/login">
              Log In
            </Link>
          </SignIn>
          <Language>Language</Language>
          <DarkMode>
            <Brightness4OutlinedIcon />
          </DarkMode>
        </NavbarContainer>
        <HomeContainer>
          <HomeImage src={BgImage} />
          <HomeTitle>Meet Eritrean Singles</HomeTitle>
          <HomeDetails>
            Leading Eritrean Dating Site With Over 500K Members
          </HomeDetails>
          <HomeButton>ስንግላት ረአ ሕጂ</HomeButton>
        </HomeContainer>
        <SmallNavContainer>
          <RecommendedLinks>Women</RecommendedLinks>
          <RecommendedLinks>Men</RecommendedLinks>
          <RecommendedLinks>Men & women </RecommendedLinks>
        </SmallNavContainer>
        <IntroContainer>
          <IntroCards>
            <IntroCardsTitle>why choose Eri singles</IntroCardsTitle>
            <IntroCardsDetails>
              With over 500 K singles available online, you have more chances of
              meeting the Eritrean woman or man of your dreams on EriSingles
              than anywhere else. Whether you are interested in finding someone
              local or overseas, you can easily browse through 1000s of singles
              to find the perfect partner for you. Sign up to EriSingles today,
              your Eritrean romance is just a click away.just click{" "}
              <Link to="/go-somewhere">here</Link> to sign up today with
              erisignles
            </IntroCardsDetails>
          </IntroCards>
          <IntroCards>
            <IntroCardsTitle>why choose Eri singles</IntroCardsTitle>
            <IntroCardsDetails>
              With over 500 K singles available online, you have more chances of
              meeting the Eritrean woman or man of your dreams on EriSingles
              than anywhere else. Whether you are interested in finding someone
              local or overseas, you can easily browse through 1000s of singles
              to find the perfect partner for you. Sign up to EriSingles today,
              your Eritrean romance is just a click away.just click{" "}
              <Link to="/go-somewhere">here</Link> to sign up today with
              erisignles
            </IntroCardsDetails>
          </IntroCards>
          <IntroCards>
            <IntroCardsTitle>Short Introduction</IntroCardsTitle>
            <IntroVideo></IntroVideo>
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
