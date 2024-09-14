import { FunctionComponent } from "react";
import styled from "styled-components";

const GroupChild = styled.img`
  position: absolute;
  top: 1px;
  left: 0px;
  width: 1920px;
  height: 767px;
  object-fit: cover;
`;
const Landscapes = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  line-height: 223.68px;
  display: inline-block;
  width: 605px;
  height: 222px;
`;
const Explore = styled.b`
  position: absolute;
  top: 0px;
  left: 258px;
  font-size: var(--font-size-lg);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: var(--font-poppins);
  color: var(--color-seashell);
`;
const LandscapesParent = styled.div`
  position: absolute;
  top: 270px;
  left: 658px;
  width: 605px;
  height: 222px;
`;
const Untitled11Icon = styled.img`
  position: absolute;
  top: 409px;
  left: 885px;
  width: 434px;
  height: 204px;
  object-fit: cover;
`;
const VectorIcon = styled.img`
  position: absolute;
  top: 91px;
  left: 1024px;
  width: 11.6px;
  height: 7.5px;
`;
const GroupItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-gray-500);
  width: 1920px;
  height: 768px;
`;
const Home = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 500;
`;
const About = styled.div`
  position: absolute;
  top: 0px;
  left: 97px;
  font-weight: 500;
`;
const Services = styled.div`
  position: absolute;
  top: 0px;
  left: 196px;
  font-weight: 500;
`;
const UpcommingPackages = styled.div`
  position: absolute;
  top: 0px;
  left: 312px;
  font-weight: 500;
`;
const NavElements = styled.div`
  position: absolute;
  top: 18px;
  left: 0px;
  width: 485px;
  height: 22px;
`;
const GroupInner = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-3xs);
  width: 152px;
  height: 58px;
`;
const GetInTouch = styled.div`
  position: absolute;
  top: 18px;
  left: 26px;
  font-weight: 500;
`;
const VectorParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 152px;
  height: 58px;
`;
const SignIn = styled.div`
  position: absolute;
  top: 0px;
  left: 692px;
  width: 152px;
  height: 58px;
`;
const NavBar = styled.div`
  position: absolute;
  top: 0px;
  left: 434px;
  width: 844px;
  height: 58px;
`;
const Travel = styled.b`
  position: absolute;
  top: 0px;
  left: 0px;
  text-transform: capitalize;
`;
const LogoChild = styled.img`
  position: absolute;
  top: 26px;
  left: 28px;
  width: 98.6px;
  height: 38.1px;
  overflow: hidden;
  object-fit: contain;
`;
const Logo = styled.div`
  position: absolute;
  top: 3px;
  left: 0px;
  width: 126.6px;
  height: 64.2px;
  text-align: center;
  font-size: var(--font-size-12xl-6);
  font-family: var(--font-volkhov);
`;
const TopNavBar = styled.div`
  position: absolute;
  top: 64px;
  left: 321px;
  width: 1278px;
  height: 67.2px;
  font-size: var(--font-size-mid);
  font-family: var(--font-circular-std);
`;
const RectangleParent = styled.div`
  position: absolute;
  top: -1px;
  left: 0px;
  width: 1920px;
  height: 768px;
  font-size: var(--font-size-138xl-4);
  color: var(--white);
  font-family: var(--font-yesteryear);
`;
const PackageDetailPageTourGalChild = styled.div`
  position: absolute;
  top: 695px;
  left: 913px;
  background-color: var(--color-whitesmoke-100);
  width: 374px;
  height: 141px;
`;
const PackageDetailPageTourGalItem = styled.div`
  position: absolute;
  top: 836px;
  left: 277px;
  box-shadow: 0px 4px 48px 12px rgba(0, 0, 0, 0.09);
  background-color: var(--white);
  width: 1328px;
  height: 1629px;
`;
const Image921Icon = styled.img`
  position: absolute;
  top: 2189px;
  left: 277px;
  width: 416px;
  height: 276px;
  object-fit: contain;
`;
const Image922Icon = styled.img`
  position: absolute;
  top: 2213px;
  left: 277px;
  width: 380px;
  height: 252px;
  object-fit: cover;
`;
const Div = styled.div`
  position: absolute;
  top: 0px;
  left: 38px;
  text-transform: capitalize;
`;
const Div1 = styled.div`
  position: absolute;
  top: 0px;
  left: 61px;
  text-transform: capitalize;
`;
const Div2 = styled.div`
  position: absolute;
  top: 0px;
  left: 88px;
  text-transform: capitalize;
`;
const Div3 = styled.div`
  position: absolute;
  top: 0px;
  left: 115px;
  text-transform: capitalize;
`;
const BichevronDownIcon = styled.img`
  position: absolute;
  top: 4px;
  left: 148px;
  width: 16px;
  height: 16px;
  overflow: hidden;
  object-fit: contain;
`;
const BichevronDownIcon1 = styled.img`
  position: absolute;
  top: 4px;
  left: 0px;
  width: 16px;
  height: 16px;
  overflow: hidden;
  object-fit: contain;
`;
const Parent = styled.div`
  position: absolute;
  top: 2064px;
  left: 604px;
  width: 164px;
  height: 24px;
  font-size: var(--font-size-base);
  color: var(--color-darkslateblue-100);
`;
const Icon = styled.img`
  position: absolute;
  top: 1913px;
  left: 934px;
  width: 670px;
  height: 420px;
  object-fit: cover;
`;
const PackageDetailPageTourGalInner = styled.div`
  position: absolute;
  top: 695px;
  left: 277px;
  background-color: var(--color-whitesmoke-100);
  width: 1328px;
  height: 141px;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 695px;
  left: 1256px;
  background-color: var(--white);
  width: 349px;
  height: 141px;
`;
const PackageDetailPageTourGalChild1 = styled.div`
  position: absolute;
  top: 695px;
  left: 277px;
  background-color: var(--color-whitesmoke-100);
  width: 318px;
  height: 141px;
`;
const PackageDetailPageTourGalChild2 = styled.div`
  position: absolute;
  top: 695px;
  left: 595px;
  background-color: var(--color-whitesmoke-100);
  width: 318px;
  height: 141px;
`;
const Gallery = styled.b`
  position: absolute;
  top: 751px;
  left: 1395px;
  letter-spacing: 0.1em;
  text-transform: capitalize;
`;
const Information = styled.b`
  position: absolute;
  top: 0px;
  left: 40px;
  letter-spacing: 0.1em;
  text-transform: capitalize;
`;
const BiinfoCircleIcon = styled.img`
  position: absolute;
  top: 2px;
  left: 0px;
  width: 26px;
  height: 26px;
  overflow: hidden;
`;
const InformationParent = styled.div`
  position: absolute;
  top: 751px;
  left: 345px;
  width: 183px;
  height: 30px;
`;
const FooterImgIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 967px;
  width: 676px;
  height: 484px;
  object-fit: cover;
`;
const CopyrightXpro = styled.div`
  position: absolute;
  top: 320px;
  left: 456px;
  letter-spacing: -0.02em;
  line-height: 26px;
  font-weight: 500;
`;
const FooterChild = styled.div`
  position: absolute;
  top: 278px;
  left: 0px;
  background-color: var(--color-gainsboro-100);
  width: 1200px;
  height: 2px;
`;
const Company = styled.b`
  position: absolute;
  top: 0px;
  left: 0px;
  line-height: 24px;
`;
const AboutUs = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;
const AboutUsParent = styled.div`
  position: absolute;
  top: 48px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lg);
  font-size: var(--font-size-base);
`;
const NavListItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 97px;
  height: 198px;
`;
const MaldivesParent = styled.div`
  position: absolute;
  top: 48px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  font-size: var(--font-size-base);
`;
const NavListItem1 = styled.div`
  position: absolute;
  top: 0px;
  left: 234px;
  width: 132px;
  height: 180px;
`;
const JoinOurNewsletter = styled.b`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: var(--font-size-2xl);
  line-height: 24px;
`;
const GroupChild1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-lavender);
  width: 389px;
  height: 52px;
`;
const YourEmailAddress = styled.div`
  position: absolute;
  top: 14px;
  left: 15px;
  letter-spacing: -0.02em;
  line-height: 26px;
  font-weight: 500;
  opacity: 0.2;
`;
const GroupChild2 = styled.div`
  position: absolute;
  top: 0px;
  left: 240px;
  box-shadow: 0px 20px 35px rgba(223, 105, 81, 0.15);
  border-radius: var(--br-3xs);
  background-color: var(--color-salmon);
  width: 149px;
  height: 52px;
`;
const Subscribe = styled.div`
  position: absolute;
  top: 13px;
  left: 283px;
  letter-spacing: -0.02em;
  line-height: 26px;
  font-weight: 500;
  color: var(--white);
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 389px;
  height: 52px;
`;
const NavListItemInner = styled.div`
  position: absolute;
  top: 48px;
  left: 0px;
  width: 389px;
  height: 52px;
`;
const WillSendYou = styled.p`
  margin: 0;
  white-space: pre-wrap;
`;
const TourPackages = styled.p`
  margin: 0;
`;
const WillSendYouContainer = styled.div`
  position: absolute;
  top: 121px;
  left: 0px;
  letter-spacing: -0.02em;
  line-height: 26px;
  font-weight: 500;
  opacity: 0.5;
`;
const NavListItem2 = styled.div`
  position: absolute;
  top: 0px;
  left: 522px;
  width: 389px;
  height: 173px;
  font-size: var(--font-size-base);
`;
const NavWrap = styled.div`
  position: absolute;
  top: 0px;
  left: 289px;
  width: 911px;
  height: 198px;
`;
const TravelHelpsCompanies = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: -0.02em;
  line-height: 28px;
  font-weight: 500;
  display: inline-block;
  width: 213px;
`;
const MessengerIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 36px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const LinkedinIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const TwitterIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 72px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const TwooIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 108px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const MessengerParent = styled.div`
  position: absolute;
  top: 87px;
  left: 0px;
  width: 128px;
  height: 20px;
`;
const TravelHelpsCompaniesManageParent = styled.div`
  position: absolute;
  top: 45px;
  left: 0px;
  width: 213px;
  height: 107px;
  font-size: var(--font-size-base);
  color: var(--color-slategray-100);
`;
const NavWrapParent = styled.div`
  position: absolute;
  top: 21px;
  left: 2px;
  width: 1200px;
  height: 198px;
  text-align: left;
  font-size: var(--font-size-2xl);
`;
const Logo1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 126.6px;
  height: 64.2px;
  font-size: var(--font-size-12xl-6);
  color: var(--color-darkslateblue-100);
  font-family: var(--font-volkhov);
`;
const Footer = styled.div`
  position: absolute;
  top: 94px;
  left: 0px;
  width: 1202px;
  height: 346px;
`;
const Footer1 = styled.div`
  position: absolute;
  top: 2495px;
  left: 277px;
  width: 1643px;
  height: 484px;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color-gray-300);
  font-family: var(--font-manrope);
`;
const UilcalenderIcon = styled.img`
  position: absolute;
  top: 753px;
  left: 678px;
  width: 26px;
  height: 26px;
  overflow: hidden;
`;
const AkarIconslocation = styled.img`
  position: absolute;
  top: 753px;
  left: 1001px;
  width: 26px;
  height: 26px;
  overflow: hidden;
`;
const ClarityimageGalleryLineIcon = styled.img`
  position: absolute;
  top: 753px;
  left: 1355px;
  width: 26px;
  height: 26px;
  overflow: hidden;
`;
const GroupChild3 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-whitesmoke-300);
  width: 481px;
  height: 977px;
`;
const GroupChild4 = styled.div`
  position: absolute;
  top: 210px;
  left: 61px;
  background-color: var(--white);
  width: 359px;
  height: 76px;
`;
const Name = styled.div`
  position: absolute;
  top: 236px;
  left: 116px;
  line-height: 26px;
`;
const GroupChild5 = styled.div`
  position: absolute;
  top: 295px;
  left: 61px;
  background-color: var(--white);
  width: 359px;
  height: 76px;
`;
const Email = styled.div`
  position: absolute;
  top: 320px;
  left: 116px;
  line-height: 26px;
`;
const GroupChild6 = styled.div`
  position: absolute;
  top: 380px;
  left: 61px;
  background-color: var(--white);
  width: 359px;
  height: 76px;
`;
const ClarityemailLineIcon = styled.img`
  position: absolute;
  top: 408px;
  left: 86px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const ConfirmEmail = styled.div`
  position: absolute;
  top: 405px;
  left: 116px;
  line-height: 26px;
`;
const GroupChild7 = styled.div`
  position: absolute;
  top: 465px;
  left: 61px;
  background-color: var(--white);
  width: 359px;
  height: 76px;
`;
const Phone = styled.div`
  position: absolute;
  top: 490px;
  left: 116px;
  line-height: 26px;
`;
const GroupChild8 = styled.div`
  position: absolute;
  top: 550px;
  left: 61px;
  background-color: var(--white);
  width: 359px;
  height: 76px;
`;
const GroupChild9 = styled.div`
  position: absolute;
  top: 635px;
  left: 61px;
  background-color: var(--white);
  width: 359px;
  height: 76px;
`;
const NumberOfTicket = styled.div`
  position: absolute;
  top: 660px;
  left: 116px;
  line-height: 26px;
`;
const GroupChild10 = styled.div`
  position: absolute;
  top: 720px;
  left: 61px;
  background-color: var(--white);
  width: 359px;
  height: 76px;
`;
const Message = styled.div`
  position: absolute;
  top: 732px;
  left: 116px;
  line-height: 26px;
`;
const ExOptioSequi = styled.div`
  position: absolute;
  top: 102px;
  left: 38px;
  font-size: var(--font-size-base);
  line-height: 26px;
  color: var(--black1);
  text-align: center;
  display: inline-block;
  width: 401px;
  height: 76px;
`;
const BookThisTour = styled.b`
  position: absolute;
  top: 39px;
  left: 82px;
  font-size: var(--font-size-23xl);
  font-family: var(--font-volkhov);
  color: var(--color-darkslateblue-100);
  text-align: center;
`;
const BookNow = styled.div`
  position: absolute;
  top: calc(50% - 12.2px);
  left: calc(50% - 41.3px);
  font-weight: 600;
`;
const ButtonSearch = styled.div`
  position: absolute;
  top: 892px;
  left: 153px;
  box-shadow: 0px 20px 35px rgba(223, 105, 81, 0.15);
  border-radius: var(--br-3xs);
  background-color: var(--color-salmon);
  width: 176.6px;
  height: 56.4px;
  text-align: center;
  font-size: var(--font-size-base-7);
  color: var(--white);
`;
const CheckAvailability = styled.div`
  position: absolute;
  top: calc(50% - 12.2px);
  left: calc(50% - 77.3px);
  font-weight: 600;
`;
const ButtonSearch1 = styled.div`
  position: absolute;
  top: 816px;
  left: 153px;
  box-shadow: 0px 20px 35px rgba(223, 105, 81, 0.15);
  border-radius: var(--br-3xs);
  background-color: var(--color-salmon);
  width: 176.6px;
  height: 56.4px;
  text-align: center;
  font-size: var(--font-size-base-7);
  color: var(--white);
`;
const DdMmYy = styled.div`
  position: absolute;
  top: 575px;
  left: 116px;
  line-height: 26px;
`;
const LineIcon = styled.img`
  position: absolute;
  top: 783px;
  left: 407px;
  width: 10px;
  height: 10px;
  object-fit: contain;
`;
const GroupChild11 = styled.img`
  position: absolute;
  top: 773px;
  left: 397px;
  width: 20px;
  height: 20px;
  object-fit: contain;
`;
const OouiuserAvatarOutlineIcon = styled.img`
  position: absolute;
  top: 238px;
  left: 86px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const ClarityemailLineIcon1 = styled.img`
  position: absolute;
  top: 323px;
  left: 86px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const CarbonphoneIcon = styled.img`
  position: absolute;
  top: 493px;
  left: 86px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const CiltagsIcon = styled.img`
  position: absolute;
  top: 663px;
  left: 86px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const BicalendarDateIcon = styled.img`
  position: absolute;
  top: 578px;
  left: 86px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const AntDesignmessageOutlinedIcon = styled.img`
  position: absolute;
  top: 735px;
  left: 86px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const RectangleContainer = styled.div`
  position: absolute;
  top: 875px;
  left: 1085px;
  width: 481px;
  height: 977px;
  font-size: var(--font-size-lg);
  color: var(--color-gray-600);
`;
const RectangleIcon = styled.img`
  position: absolute;
  top: 875px;
  left: 316px;
  width: 244px;
  height: 208.6px;
  object-fit: cover;
`;
const PackageDetailPageTourGalChild3 = styled.img`
  position: absolute;
  top: 1104px;
  left: 316px;
  width: 244px;
  height: 208.6px;
  object-fit: cover;
`;
const PackageDetailPageTourGalChild4 = styled.img`
  position: absolute;
  top: 1333px;
  left: 316px;
  width: 244px;
  height: 208.6px;
  object-fit: cover;
`;
const PackageDetailPageTourGalChild5 = styled.img`
  position: absolute;
  top: 1562px;
  left: 812px;
  width: 244px;
  height: 208.6px;
  object-fit: cover;
`;
const PackageDetailPageTourGalChild6 = styled.img`
  position: absolute;
  top: 1562px;
  left: 316px;
  width: 473px;
  height: 208.6px;
  object-fit: cover;
`;
const PackageDetailPageTourGalChild7 = styled.img`
  position: absolute;
  top: 1791px;
  left: 316px;
  width: 740px;
  height: 208.6px;
  object-fit: cover;
`;
const PackageDetailPageTourGalChild8 = styled.img`
  position: absolute;
  top: 875px;
  left: 580px;
  width: 476px;
  height: 663px;
  object-fit: cover;
`;
const TourPlan = styled.b`
  position: absolute;
  top: 751px;
  left: 718px;
  letter-spacing: 0.1em;
  text-transform: capitalize;
`;
const Location = styled.b`
  position: absolute;
  top: 751px;
  left: 1041px;
  letter-spacing: 0.1em;
  text-transform: capitalize;
`;
const PackageDetailPageTourGalRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--white);
  height: 2979px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-darkslategray-100);
  font-family: var(--font-poppins);
`;

const PackageDetailPageTourGallery: FunctionComponent = () => {
  return (
    <PackageDetailPageTourGalRoot>
      <RectangleParent>
        <GroupChild alt="" src="/rectangle-192904@2x.png" />
        <LandscapesParent>
          <Landscapes>Landscapes</Landscapes>
          <Explore>Explore</Explore>
        </LandscapesParent>
        <Untitled11Icon alt="" src="/untitled1-1@2x.png" />
        <VectorIcon alt="" src="/vector.svg" />
        <GroupItem />
        <TopNavBar>
          <NavBar>
            <NavElements>
              <Home>Home</Home>
              <About>About</About>
              <Services>Services</Services>
              <UpcommingPackages>Upcomming Packages</UpcommingPackages>
            </NavElements>
            <SignIn>
              <VectorParent>
                <GroupInner alt="" src="/rectangle-12.svg" />
                <GetInTouch>Get in Touch</GetInTouch>
              </VectorParent>
            </SignIn>
          </NavBar>
          <Logo>
            <Travel>Travel</Travel>
            <LogoChild alt="" src="/arrow-054@2x.png" />
          </Logo>
        </TopNavBar>
      </RectangleParent>
      <PackageDetailPageTourGalChild />
      <PackageDetailPageTourGalItem />
      <Image921Icon alt="" src="/image-921@2x.png" />
      <Image922Icon alt="" src="/image-922@2x.png" />
      <Parent>
        <Div>1</Div>
        <Div1>2</Div1>
        <Div2>3</Div2>
        <Div3>4</Div3>
        <BichevronDownIcon alt="" src="/bichevrondown@2x.png" />
        <BichevronDownIcon1 alt="" src="/bichevrondown1@2x.png" />
      </Parent>
      <Icon alt="" src="/273-1@2x.png" />
      <PackageDetailPageTourGalInner />
      <RectangleDiv />
      <PackageDetailPageTourGalChild1 />
      <PackageDetailPageTourGalChild2 />
      <Gallery>Gallery</Gallery>
      <InformationParent>
        <Information>Information</Information>
        <BiinfoCircleIcon alt="" src="/biinfocircle.svg" />
      </InformationParent>
      <Footer1>
        <FooterImgIcon alt="" src="/footer-img1@2x.png" />
        <Footer>
          <CopyrightXpro>
            Copyright @ Xpro 2022. All Rights Reserved.
          </CopyrightXpro>
          <FooterChild />
          <NavWrapParent>
            <NavWrap>
              <NavListItem>
                <Company>Company</Company>
                <AboutUsParent>
                  <AboutUs>About Us</AboutUs>
                  <AboutUs>Careers</AboutUs>
                  <AboutUs>Blog</AboutUs>
                  <AboutUs>Pricing</AboutUs>
                </AboutUsParent>
              </NavListItem>
              <NavListItem1>
                <Company>Destinations</Company>
                <MaldivesParent>
                  <AboutUs>Maldives</AboutUs>
                  <AboutUs>Los Angelas</AboutUs>
                  <AboutUs>Las Vegas</AboutUs>
                  <AboutUs>Torronto</AboutUs>
                </MaldivesParent>
              </NavListItem1>
              <NavListItem2>
                <JoinOurNewsletter>Join Our Newsletter</JoinOurNewsletter>
                <NavListItemInner>
                  <RectangleGroup>
                    <GroupChild1 />
                    <YourEmailAddress>Your email address</YourEmailAddress>
                    <GroupChild2 />
                    <Subscribe>Subscribe</Subscribe>
                  </RectangleGroup>
                </NavListItemInner>
                <WillSendYouContainer>
                  <WillSendYou>
                    * Will send you weekly updates for your better
                  </WillSendYou>
                  <TourPackages>tour packages.</TourPackages>
                </WillSendYouContainer>
              </NavListItem2>
            </NavWrap>
            <TravelHelpsCompaniesManageParent>
              <TravelHelpsCompanies>
                Travel helps companies manage payments easily.
              </TravelHelpsCompanies>
              <MessengerParent>
                <MessengerIcon alt="" src="/025messenger.svg" />
                <LinkedinIcon alt="" src="/052linkedin.svg" />
                <TwitterIcon alt="" src="/096twitter.svg" />
                <TwooIcon alt="" src="/097twoo1.svg" />
              </MessengerParent>
            </TravelHelpsCompaniesManageParent>
          </NavWrapParent>
          <Logo1>
            <Travel>Travel</Travel>
            <LogoChild alt="" src="/arrow-054@2x.png" />
          </Logo1>
        </Footer>
      </Footer1>
      <UilcalenderIcon alt="" src="/uilcalender1.svg" />
      <AkarIconslocation alt="" src="/akariconslocation1.svg" />
      <ClarityimageGalleryLineIcon alt="" src="/clarityimagegalleryline.svg" />
      <RectangleContainer>
        <GroupChild3 />
        <GroupChild4 />
        <Name>Name</Name>
        <GroupChild5 />
        <Email>Email</Email>
        <GroupChild6 />
        <ClarityemailLineIcon alt="" src="/clarityemailline.svg" />
        <ConfirmEmail>Confirm Email</ConfirmEmail>
        <GroupChild7 />
        <Phone>Phone</Phone>
        <GroupChild8 />
        <GroupChild9 />
        <NumberOfTicket>Number of ticket</NumberOfTicket>
        <GroupChild10 />
        <Message>Message</Message>
        <ExOptioSequi>
          Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto
          aut magni nesciunt? Quo quidem neque iste expedita est dolo.
        </ExOptioSequi>
        <BookThisTour>Book This Tour</BookThisTour>
        <ButtonSearch>
          <BookNow>Book Now</BookNow>
        </ButtonSearch>
        <ButtonSearch1>
          <CheckAvailability>Check Availability</CheckAvailability>
        </ButtonSearch1>
        <DdMmYy>dd-mm-yy</DdMmYy>
        <LineIcon alt="" src="/path/to/line-icon.svg" />
        <GroupChild11 alt="" src="/path/to/group-child-11.svg" />
        <OouiuserAvatarOutlineIcon alt="" src="/oouiuseravataroutline1.svg" />
        <ClarityemailLineIcon1 alt="" src="/clarityemailline.svg" />
        <CarbonphoneIcon alt="" src="/carbonphone.svg" />
        <CiltagsIcon alt="" src="/ciltags.svg" />
        <BicalendarDateIcon alt="" src="/bicalendardate.svg" />
        <AntDesignmessageOutlinedIcon
          alt=""
          src="/antdesignmessageoutlined.svg"
        />
      </RectangleContainer>
      <RectangleIcon alt="" src="/rectangle-19321@2x.png" />
      <PackageDetailPageTourGalChild3 alt="" src="/rectangle-193211@2x.png" />
      <PackageDetailPageTourGalChild4 alt="" src="/rectangle-193212@2x.png" />
      <PackageDetailPageTourGalChild5 alt="" src="/rectangle-193213@2x.png" />
      <PackageDetailPageTourGalChild6 alt="" src="/rectangle-193214@2x.png" />
      <PackageDetailPageTourGalChild7 alt="" src="/rectangle-193215@2x.png" />
      <PackageDetailPageTourGalChild8 alt="" src="/rectangle-193216@2x.png" />
      <TourPlan>Tour Plan</TourPlan>
      <Location>Location</Location>
    </PackageDetailPageTourGalRoot>
  );
};

export default PackageDetailPageTourGallery;
