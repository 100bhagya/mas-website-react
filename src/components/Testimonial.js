import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import Data from "../data/Data";
import Rectangle from "../images/Rectangle 27.png";
import Comma from "../images/Vector.png";
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
    <div className="bg-back pt-1 mb-10">
      <h1 className="text-center justify-center my-14 text-4xl font-medium">
        Testimonials
      </h1>
      <div className="testimonial gradient">
        <div className=" relative left-36 pb-20 pt-20  card">
          <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />}>
            {Data.map((post) => {
              return (
                <div key={post.id}>
                  <div className="flex ">
                    <div className="mt-32 ml-14">
                      <img
                        src={Comma}
                        alt="comma"
                        className="relative md:right-14 md:bottom-32"
                      ></img>
                      <p className="text-4xl font-semibold relative md:bottom-28">
                        {post.name}
                      </p>
                      <p className="font-normal text-gray-500 text-2xl relative md:bottom-20">
                        {post.position}
                      </p>
                      <img
                        src={Rectangle}
                        alt="rectangle"
                        className="relative md:bottom-12 md:left-16"
                      ></img>
                      <p className="w-10/12  text-sm   leading-9">
                        {post.about}
                      </p>
                    </div>
                    <img
                      src={post.image}
                      alt="pic"
                      className="border-8 h-96 w-96 relative top-20 rounded-full border-solid border-white"
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
