import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import Picture from "./images/image 1.png";
import Rectangle from "./images/Rectangle 27.png";
import Comma from "./images/Vector.png";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos
        style={{
          fontSize: "60px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "9999px",
          height: "60px",
          position: "relative",
          left: "5px",
          paddingLeft: "16px",
        }}
      />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos
        style={{
          fontSize: "60px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "9999px",
          height: "60px",
          position: "relative",
          right: "50px",
          paddingRight: "3px",
          paddingLeft: "12px",
        }}
      />
    </div>
  );
};
const Testimonial = () => {
  return (
    <div className="bg-gray-50 pt-1 mb-10">
      <h1 className="text-center justify-center my-14 text-4xl font-medium">
        Testimonials
      </h1>
      <div className="testimonial gradient">
        <div className=" relative left-36 pb-20 pt-20  card">
          <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />}>
            <Card img={Picture} />
            <Card img={Picture} />
            <Card img={Picture} />
          </Slider>
        </div>
      </div>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div className="flex ">
      <div className="mt-32 ml-14">
        <img
          src={Comma}
          alt="comma"
          className="relative md:right-14 md:bottom-32"
        ></img>
        <p className="text-4xl font-semibold relative md:bottom-28">
          Rose Paradiso
        </p>
        <p className="font-normal text-2xl relative md:bottom-20">
          UI/UX Designer
        </p>
        <img
          src={Rectangle}
          alt="rectangle"
          className="relative md:bottom-12 md:left-16"
        ></img>
        <p className="w-10/12  text-2xl   leading-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <img
        src={img}
        alt="pic"
        className="border-8 border-solid border-white rounded-xl"
      />
    </div>
  );
};

export default Testimonial;
