import { FunctionComponent } from "react";
import styled from "styled-components";

const GroupChild = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 766px;
  object-fit: cover;
`;
const GroupItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-gray-500);
  width: 1920px;
  height: 766px;
`;
const TravelWithUs = styled.div`
  position: absolute;
  top: 306px;
  left: 547px;
  line-height: 223.68px;
`;
const SearchTour = styled.b`
  position: absolute;
  top: 292px;
  left: 888px;
  font-size: var(--font-size-lg);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: var(--font-poppins);
  color: var(--color-seashell);
`;
const VectorIcon = styled.img`
  position: absolute;
  top: 90px;
  left: 1024px;
  width: 11.6px;
  height: 7.5px;
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
  left: 478px;
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
  top: 63px;
  left: 277px;
  width: 1322px;
  height: 67.2px;
  font-size: var(--font-size-mid);
  font-family: var(--font-circular-std);
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 766px;
  font-size: var(--font-size-138xl-4);
  color: var(--white);
  font-family: var(--font-yesteryear);
`;
const PackagesArchivePageChild = styled.div`
  position: absolute;
  top: 829px;
  left: 277px;
  box-shadow: 0px 4px 48px 12px rgba(0, 0, 0, 0.09);
  background-color: var(--white);
  width: 1328px;
  height: 1641px;
`;
const Icon = styled.img`
  position: absolute;
  top: 1715px;
  left: 934px;
  width: 670px;
  height: 420px;
  object-fit: cover;
`;
const PackagesArchivePageItem = styled.div`
  position: absolute;
  top: 688px;
  left: 277px;
  background-color: var(--color-whitesmoke-100);
  width: 1328px;
  height: 141px;
`;
const PackagesArchivePageInner = styled.div`
  position: absolute;
  top: 688px;
  left: 277px;
  background-color: var(--color-whitesmoke-100);
  width: 318px;
  height: 141px;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 688px;
  left: 595px;
  background-color: var(--color-whitesmoke-100);
  width: 318px;
  height: 141px;
`;
const PackagesArchivePageChild1 = styled.div`
  position: absolute;
  top: 688px;
  left: 913px;
  background-color: var(--color-whitesmoke-100);
  width: 318px;
  height: 141px;
`;
const PriceHighTo = styled.b`
  position: absolute;
  top: 744px;
  left: 1001px;
  font-size: var(--font-size-xl);
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: var(--color-darkslategray-100);
`;
const PackagesArchivePageChild2 = styled.div`
  position: absolute;
  top: 688px;
  left: 1231px;
  background-color: var(--color-whitesmoke-100);
  width: 374px;
  height: 141px;
`;
const Date1 = styled.b`
  position: absolute;
  top: 744px;
  left: 428px;
  font-size: var(--font-size-xl);
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: var(--color-darkslategray-100);
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
  top: 2673px;
  left: 277px;
  width: 1643px;
  height: 484px;
  text-align: center;
  color: var(--color-gray-300);
  font-family: var(--font-manrope);
`;
const GroupChild3 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-whitesmoke-300);
  width: 481px;
  height: 728px;
`;
const Price = styled.div`
  position: absolute;
  top: 575px;
  left: 61px;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.56);
`;
const GroupChild4 = styled.div`
  position: absolute;
  top: 525px;
  left: 61px;
  background-color: var(--white);
  width: 359px;
  height: 41px;
`;
const GroupChild5 = styled.div`
  position: absolute;
  top: 525px;
  left: 61px;
  background-color: var(--color-salmon);
  width: 40px;
  height: 41px;
`;
const GroupChild6 = styled.div`
  position: absolute;
  top: 525px;
  left: 380px;
  background-color: var(--color-salmon);
  width: 40px;
  height: 41px;
`;
const FilterByPrice = styled.b`
  position: absolute;
  top: 482px;
  left: 61px;
  font-size: var(--font-size-xl);
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: var(--color-darkslategray-100);
`;
const GroupChild7 = styled.div`
  position: absolute;
  top: 210px;
  left: 61px;
  background-color: var(--white);
  width: 359px;
  height: 76px;
`;
const SearchTour1 = styled.div`
  position: absolute;
  top: 236px;
  left: 116px;
  line-height: 26px;
`;
const GroupChild8 = styled.div`
  position: absolute;
  top: 295px;
  left: 61px;
  background-color: var(--white);
  width: 359px;
  height: 76px;
`;
const WhereTo = styled.div`
  position: absolute;
  top: 320px;
  left: 116px;
  line-height: 26px;
`;
const GroupChild9 = styled.div`
  position: absolute;
  top: 380px;
  left: 61px;
  background-color: var(--white);
  width: 359px;
  height: 76px;
`;
const Date2 = styled.div`
  position: absolute;
  top: 405px;
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
const PlanYourTrip = styled.b`
  position: absolute;
  top: 39px;
  left: 89px;
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
  top: 627px;
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
const AkarIconssearch = styled.img`
  position: absolute;
  top: 239px;
  left: 87px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const Fluentlocation28RegularIcon = styled.img`
  position: absolute;
  top: 323px;
  left: 87px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const RectangleContainer = styled.div`
  position: absolute;
  top: 868px;
  left: 1085px;
  width: 481px;
  height: 728px;
  font-size: var(--font-size-lg);
  color: var(--color-gray-600);
`;
const AkarIconspeopleGroup = styled.div`
  position: absolute;
  top: 1124px;
  left: 230px;
  width: 16px;
  height: 16px;
  overflow: hidden;
`;
const GroupChild10 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  box-shadow: 0px 4.3px 51.9px 12.97px rgba(0, 0, 0, 0.09);
  border-radius: var(--br-2xl);
  background-color: var(--white);
  width: 370.8px;
  height: 514.6px;
`;
const QuiTemporeVoluptate = styled.div`
  position: absolute;
  top: 373px;
  left: 22.7px;
  text-transform: capitalize;
  text-align: left;
  display: inline-block;
  width: 328.7px;
  height: 78.9px;
`;
const RectangleIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-2xl) var(--br-2xl) 0px 0px;
  width: 328.7px;
  height: 256.2px;
  object-fit: cover;
`;
const GroupChild11 = styled.div`
  position: absolute;
  top: 256.2px;
  left: 0px;
  background-color: var(--color-salmon);
  width: 328.7px;
  height: 36.8px;
`;
const Switzerland = styled.b`
  position: absolute;
  top: 318.9px;
  left: 22.7px;
  font-size: 34.2px;
  text-transform: capitalize;
  font-family: var(--font-volkhov);
  text-align: left;
`;
const Div = styled.div`
  position: absolute;
  top: 437.9px;
  left: 24.7px;
  text-transform: capitalize;
  font-weight: 500;
  color: var(--color-gray-200);
`;
const Div1 = styled.div`
  position: absolute;
  top: 437.9px;
  left: 118px;
  text-transform: capitalize;
  font-weight: 500;
  color: var(--color-gray-200);
`;
const September = styled.div`
  position: absolute;
  top: 266px;
  left: 48.7px;
  font-size: var(--font-size-smi);
  text-transform: capitalize;
  font-weight: 500;
  color: var(--white);
`;
const People = styled.div`
  position: absolute;
  top: 266px;
  left: 228.1px;
  font-size: var(--font-size-smi);
  text-transform: capitalize;
  font-weight: 500;
  color: var(--white);
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 3.49%;
  width: 4.92%;
  top: 95.32%;
  right: 67.39%;
  bottom: 1.19%;
  left: 27.69%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const BicalendarDateIcon = styled.img`
  position: absolute;
  top: 266px;
  left: 22.7px;
  width: 17.3px;
  height: 17.3px;
  overflow: hidden;
`;
const GroupIcon = styled.img`
  position: absolute;
  height: 3.1%;
  width: 4.35%;
  top: 57.58%;
  right: 37.79%;
  bottom: 39.32%;
  left: 57.85%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const QuiTemporeVoluptateQuiQuiaParent = styled.div`
  position: absolute;
  top: 21.6px;
  left: 21.6px;
  width: 351.4px;
  height: 463.9px;
`;
const GroupDiv = styled.div`
  position: absolute;
  top: 828.7px;
  left: 259px;
  width: 373px;
  height: 514.6px;
  text-align: center;
  font-size: var(--font-size-mid-3);
`;
const QuiTemporeVoluptate1 = styled.div`
  position: absolute;
  top: 345px;
  left: 21px;
  text-transform: capitalize;
  text-align: left;
  display: inline-block;
  width: 304px;
  height: 73px;
`;
const GroupChild12 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 304px;
  height: 237px;
  object-fit: cover;
`;
const GroupChild13 = styled.div`
  position: absolute;
  top: 271px;
  left: 0px;
  background-color: var(--color-salmon);
  width: 304px;
  height: 34px;
`;
const Berlin = styled.b`
  position: absolute;
  top: 295px;
  left: 21px;
  font-size: var(--font-size-12xl-6);
  text-transform: capitalize;
  font-family: var(--font-volkhov);
  text-align: left;
`;
const Div2 = styled.div`
  position: absolute;
  top: 405px;
  left: 22px;
  text-transform: capitalize;
  font-weight: 500;
  color: var(--color-gray-200);
`;
const Div3 = styled.div`
  position: absolute;
  top: 405px;
  left: 110px;
  text-transform: capitalize;
  font-weight: 500;
  color: var(--color-gray-200);
`;
const September1 = styled.div`
  position: absolute;
  top: 246px;
  left: 45px;
  font-size: var(--font-size-xs);
  text-transform: capitalize;
  font-weight: 500;
  color: var(--white);
`;
const People1 = styled.div`
  position: absolute;
  top: 246px;
  left: 211px;
  font-size: var(--font-size-xs);
  text-transform: capitalize;
  font-weight: 500;
  color: var(--white);
`;
const VectorIcon2 = styled.img`
  position: absolute;
  height: 3.5%;
  width: 4.92%;
  top: 95.34%;
  right: 67.38%;
  bottom: 1.17%;
  left: 27.69%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const BicalendarDateIcon1 = styled.img`
  position: absolute;
  top: 246px;
  left: 21px;
  width: 16px;
  height: 16px;
  overflow: hidden;
`;
const GroupIcon1 = styled.img`
  position: absolute;
  height: 3.1%;
  width: 4.37%;
  top: 57.58%;
  right: 37.78%;
  bottom: 39.32%;
  left: 57.85%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const QuiTemporeVoluptateQuiQuiaGroup = styled.div`
  position: absolute;
  top: 888px;
  left: 709px;
  width: 325px;
  height: 429px;
  text-align: center;
`;
const Div4 = styled.div`
  position: absolute;
  top: 405px;
  left: 19px;
  text-transform: capitalize;
  font-weight: 500;
  color: var(--color-gray-200);
`;
const QuiTemporeVoluptateQuiQuiaContainer = styled.div`
  position: absolute;
  top: 1389px;
  left: 324px;
  width: 325px;
  height: 429px;
  text-align: center;
`;
const Div5 = styled.div`
  position: absolute;
  top: 405px;
  left: 21px;
  text-transform: capitalize;
  font-weight: 500;
  color: var(--color-gray-200);
`;
const QuiTemporeVoluptateQuiQuiaParent1 = styled.div`
  position: absolute;
  top: 1883px;
  left: 324px;
  width: 325px;
  height: 429px;
  text-align: center;
`;
const QuiTemporeVoluptateQuiQuiaParent2 = styled.div`
  position: absolute;
  top: 1389px;
  left: 709px;
  width: 325px;
  height: 429px;
  text-align: center;
`;
const Div6 = styled.div`
  position: absolute;
  top: 405px;
  left: 24px;
  text-transform: capitalize;
  font-weight: 500;
  color: var(--color-gray-200);
`;
const QuiTemporeVoluptateQuiQuiaParent3 = styled.div`
  position: absolute;
  top: 1883px;
  left: 709px;
  width: 325px;
  height: 429px;
  text-align: center;
`;
const EllipseDiv = styled.div`
  position: absolute;
  top: 2375px;
  left: 616px;
  border-radius: 50%;
  background-color: #ebebeb;
  width: 30px;
  height: 30px;
`;
const Div7 = styled.div`
  position: absolute;
  top: 0px;
  left: 38px;
  text-transform: capitalize;
`;
const Div8 = styled.div`
  position: absolute;
  top: 0px;
  left: 61px;
  text-transform: capitalize;
`;
const Div9 = styled.div`
  position: absolute;
  top: 0px;
  left: 88px;
  text-transform: capitalize;
`;
const Div10 = styled.div`
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
  top: 2378px;
  left: 590px;
  width: 164px;
  height: 24px;
`;
const BicalendarDateIcon2 = styled.img`
  position: absolute;
  top: 746px;
  left: 387px;
  width: 26px;
  height: 26px;
  overflow: hidden;
`;
const PriceLowTo = styled.b`
  position: absolute;
  top: 0px;
  left: 41px;
  letter-spacing: 0.1em;
  text-transform: capitalize;
`;
const BiuploadIcon = styled.img`
  position: absolute;
  top: 2px;
  left: 0px;
  width: 26px;
  height: 26px;
  overflow: hidden;
`;
const PriceLowToHighParent = styled.div`
  position: absolute;
  top: 744px;
  left: 630px;
  width: 249px;
  height: 30px;
  font-size: var(--font-size-xl);
  color: var(--color-darkslategray-100);
`;
const BiuploadIcon1 = styled.img`
  position: absolute;
  top: 746px;
  left: 960px;
  width: 26px;
  height: 26px;
  overflow: hidden;
`;
const NameAZParent = styled.div`
  position: absolute;
  top: 744px;
  left: 1327px;
  width: 183px;
  height: 30px;
  font-size: var(--font-size-xl);
  color: var(--color-darkslategray-100);
`;
const BicalendarDateIcon3 = styled.img`
  position: absolute;
  top: 1276px;
  left: 1172px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const Image920Icon = styled.img`
  position: absolute;
  top: 974px;
  left: 1645px;
  width: 230px;
  height: 161px;
  object-fit: cover;
`;
const PackagesArchivePageRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--white);
  height: 3157px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-darkslateblue-100);
  font-family: var(--font-poppins);
`;

const PackagesArchivePage: FunctionComponent = () => {
  return (
    <PackagesArchivePageRoot>
      <RectangleParent>
        <GroupChild alt="" src="/rectangle-192903@2x.png" />
        <GroupItem />
        <TravelWithUs>Travel With Us</TravelWithUs>
        <SearchTour>Search tour</SearchTour>
        <VectorIcon alt="" src="/vector.svg" />
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
            <LogoChild alt="" src="/arrow-052@2x.png" />
          </Logo>
        </TopNavBar>
      </RectangleParent>
      <PackagesArchivePageChild />
      <Icon alt="" src="/273-1@2x.png" />
      <PackagesArchivePageItem />
      <PackagesArchivePageInner />
      <RectangleDiv />
      <PackagesArchivePageChild1 />
      <PriceHighTo>Price High to low</PriceHighTo>
      <PackagesArchivePageChild2 />
      <Date1>Date</Date1>
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
                <TwooIcon alt="" src="/097twoo.svg" />
              </MessengerParent>
            </TravelHelpsCompaniesManageParent>
          </NavWrapParent>
          <Logo1>
            <Travel>Travel</Travel>
            <LogoChild alt="" src="/arrow-053@2x.png" />
          </Logo1>
        </Footer>
      </Footer1>
      <RectangleContainer>
        <GroupChild3 />
        <Price>Price: $12 - $3600</Price>
        <GroupChild4 />
        <GroupChild5 />
        <GroupChild6 />
        <FilterByPrice>Filter by price</FilterByPrice>
        <GroupChild7 />
        <SearchTour1>Search Tour</SearchTour1>
        <GroupChild8 />
        <WhereTo>Where To?</WhereTo>
        <GroupChild9 />
        <Date2>Date</Date2>
        <ExOptioSequi>
          Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto
          aut magni nesciunt? Quo quidem neque iste expedita est dolo.
        </ExOptioSequi>
        <PlanYourTrip>Plan Your Trip</PlanYourTrip>
        <ButtonSearch>
          <BookNow>Book Now</BookNow>
        </ButtonSearch>
        <AkarIconssearch alt="" src="/akariconssearch.svg" />
        <Fluentlocation28RegularIcon
          alt=""
          src="/fluentlocation28regular.svg"
        />
      </RectangleContainer>
      <AkarIconspeopleGroup />
      <GroupDiv>
        <GroupChild10 />
        <QuiTemporeVoluptateQuiQuiaParent>
          <QuiTemporeVoluptate>
            Qui tempore voluptate qui quia commodi rem praesentium alias et.
          </QuiTemporeVoluptate>
          <RectangleIcon alt="" src="/rectangle-19377@2x.png" />
          <GroupChild11 />
          <Switzerland>Switzerland</Switzerland>
          <Div>1,100 $</Div>
          <Div1>5.0</Div1>
          <September>12, September 2022</September>
          <People>120+ People</People>
          <VectorIcon1 alt="" src="/vector3.svg" />
          <BicalendarDateIcon alt="" src="/bicalendardate1.svg" />
          <GroupIcon alt="" src="/group.svg" />
        </QuiTemporeVoluptateQuiQuiaParent>
      </GroupDiv>
      <QuiTemporeVoluptateQuiQuiaGroup>
        <QuiTemporeVoluptate1>
          Qui tempore voluptate qui quia commodi rem praesentium alias et.
        </QuiTemporeVoluptate1>
        <GroupChild12 alt="" src="/rectangle-193771@2x.png" />
        <GroupChild13 />
        <Berlin>{`Berlin `}</Berlin>
        <Div2>1,230 $</Div2>
        <Div3>4.9</Div3>
        <September1>12, September 2022</September1>
        <People1>120+ People</People1>
        <VectorIcon2 alt="" src="/vector4.svg" />
        <BicalendarDateIcon1 alt="" src="/bicalendardate2.svg" />
        <GroupIcon1 alt="" src="/group1.svg" />
      </QuiTemporeVoluptateQuiQuiaGroup>
      <QuiTemporeVoluptateQuiQuiaContainer>
        <QuiTemporeVoluptate1>
          Qui tempore voluptate qui quia commodi rem praesentium alias et.
        </QuiTemporeVoluptate1>
        <GroupChild12 alt="" src="/rectangle-193772@2x.png" />
        <GroupChild13 />
        <Berlin>Maldives</Berlin>
        <Div4>3,000 $</Div4>
        <Div3>5.0</Div3>
        <September1>12, September 2022</September1>
        <People1>120+ People</People1>
        <VectorIcon2 alt="" src="/vector4.svg" />
        <BicalendarDateIcon1 alt="" src="/bicalendardate2.svg" />
        <GroupIcon1 alt="" src="/group1.svg" />
      </QuiTemporeVoluptateQuiQuiaContainer>
      <QuiTemporeVoluptateQuiQuiaParent1>
        <QuiTemporeVoluptate1>
          Qui tempore voluptate qui quia commodi rem praesentium alias et.
        </QuiTemporeVoluptate1>
        <GroupChild12 alt="" src="/rectangle-193773@2x.png" />
        <GroupChild13 />
        <Berlin>Baku</Berlin>
        <Div5>1,440 $</Div5>
        <Div3>5.0</Div3>
        <September1>12, September 2022</September1>
        <People1>120+ People</People1>
        <VectorIcon2 alt="" src="/vector4.svg" />
        <BicalendarDateIcon1 alt="" src="/bicalendardate2.svg" />
        <GroupIcon1 alt="" src="/group1.svg" />
      </QuiTemporeVoluptateQuiQuiaParent1>
      <QuiTemporeVoluptateQuiQuiaParent2>
        <QuiTemporeVoluptate1>
          Qui tempore voluptate qui quia commodi rem praesentium alias et.
        </QuiTemporeVoluptate1>
        <GroupChild12 alt="" src="/rectangle-193774@2x.png" />
        <GroupChild13 />
        <Berlin>Torronto</Berlin>
        <Div4>2,000 $</Div4>
        <Div3>4.6</Div3>
        <September1>12, September 2022</September1>
        <People1>120+ People</People1>
        <VectorIcon2 alt="" src="/vector4.svg" />
        <BicalendarDateIcon1 alt="" src="/bicalendardate2.svg" />
        <GroupIcon1 alt="" src="/group1.svg" />
      </QuiTemporeVoluptateQuiQuiaParent2>
      <QuiTemporeVoluptateQuiQuiaParent3>
        <QuiTemporeVoluptate1>
          Qui tempore voluptate qui quia commodi rem praesentium alias et.
        </QuiTemporeVoluptate1>
        <GroupChild12 alt="" src="/rectangle-193775@2x.png" />
        <GroupChild13 />
        <Berlin>Chinese</Berlin>
        <Div6>1,210 $</Div6>
        <Div3>4.0</Div3>
        <September1>12, September 2022</September1>
        <People1>120+ People</People1>
        <VectorIcon2 alt="" src="/vector4.svg" />
        <BicalendarDateIcon1 alt="" src="/bicalendardate2.svg" />
        <GroupIcon1 alt="" src="/group1.svg" />
      </QuiTemporeVoluptateQuiQuiaParent3>
      <EllipseDiv />
      <Parent>
        <Div7>1</Div7>
        <Div8>2</Div8>
        <Div9>3</Div9>
        <Div10>4</Div10>
        <BichevronDownIcon alt="" src="/bichevrondown@2x.png" />
        <BichevronDownIcon1 alt="" src="/bichevrondown1@2x.png" />
      </Parent>
      <BicalendarDateIcon2 alt="" src="/bicalendardate3.svg" />
      <PriceLowToHighParent>
        <PriceLowTo>price low to High</PriceLowTo>
        <BiuploadIcon alt="" src="/biupload.svg" />
      </PriceLowToHighParent>
      <BiuploadIcon1 alt="" src="/biupload1.svg" />
      <NameAZParent>
        <PriceLowTo>Name (A-z)</PriceLowTo>
        <BiuploadIcon alt="" src="/evaedit2outline.svg" />
      </NameAZParent>
      <BicalendarDateIcon3 alt="" src="/bicalendardate4.svg" />
      <Image920Icon alt="" src="/image-920@2x.png" />
    </PackagesArchivePageRoot>
  );
};

export default PackagesArchivePage;
