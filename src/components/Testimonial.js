import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import Data from "../data/Data";
import Rectangle from "../images/Rectangle 27.png";
import Comma from "../images/Vector.png";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  const useStyles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
        backgroundColor: "black",
        color: "white",
        borderRadius: "9999px",
        height: "40px",
        position: "relative",
        left: "55px",
        bottom: "230px",
        paddingLeft: "11px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "60px",
        backgroundColor: "black",
        color: "white",
        borderRadius: "9999px",
        height: "60px",
        position: "relative",
        bottom: "270px",
        left: "125px",
        paddingLeft: "17px",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "60px",
        backgroundColor: "black",
        color: "white",
        borderRadius: "9999px",
        height: "60px",
        position: "relative",
        left: "5px",
        paddingLeft: "16px",
      },
    },
  }));

  const classes = useStyles();
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos className={classes.root} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  const useStyles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
        backgroundColor: "black",
        color: "white",
        borderRadius: "9999px",
        height: "40px",
        position: "relative",
        right: "60px",
        bottom: "230px",
        paddingRight: "-3px",
        paddingLeft: "9px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "60px",
        backgroundColor: "black",
        color: "white",
        borderRadius: "9999px",
        height: "60px",
        position: "relative",
        bottom: "270px",
        right: "75px",
        paddingLeft: "17px",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "60px",
        backgroundColor: "black",
        color: "white",
        borderRadius: "9999px",
        height: "60px",
        position: "relative",
        right: "50px",
        paddingRight: "3px",
        paddingLeft: "12px",
      },
    },
  }));

  const classes = useStyles();
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos className={classes.root} />
    </div>
  );
};
const Testimonial = () => {
  return (
    <div className="bg-back pt-1 lg:mb-10">
      <h1 className="text-center justify-center my-14 text-4xl font-medium">
        Testimonials
      </h1>
      <div className="testimonial gradient">
        <div className=" relative left-36 md:pb-20 md:pt-20  card pt-16">
          <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />}>
            {Data.map((post) => {
              return (
                <div key={post.id}>
                  <div className="flex flex-col-reverse lg:flex-row">
                    <div className="mt-32 ml-14">
                      <div className="flex flex-col-reverse lg:block">
                        <img
                          src={Comma}
                          alt="comma"
                          className="relative lg:right-14 md:right-1 lg:bottom-32 md:h-14 md:w-20 h-5 w-8 right-[54px] bottom-16"
                        ></img>
                        <div className="relative bottom-24 left-6 w-[170px] text-center md:w-full md:text-left md:bottom-0 md:left-0">
                          <p className="lg:text-4xl text-center lg:text-left text-2xl md:text-3xl font-semibold relative md:bottom-28">
                            {post.name}
                          </p>
                          <p className="font-normal text-center lg:text-left text-gray-500 text-sm md:text-lg lg:text-2xl relative md:bottom-20">
                            {post.position}
                          </p>
                        </div>
                      </div>
                      <img
                        src={Rectangle}
                        alt="rectangle"
                        className="relative md:bottom-12 md:left-16 w-0 lg:w-[600px]"
                      ></img>
                      <p className="lg:w-10/12 md:w-11/12 text-sm md:text-lg md:leading-9 relative right-5 bottom-16 lg:top-8 lg:left-2 md:top-0 md:left-14 overflow-y-auto h-[30vh] md:[15vh] lg:h-[37vh]">
                        {post.about}
                      </p>
                    </div>
                    <img
                      src={post.image}
                      alt="pic"
                      className="border-8 lg:h-96 lg:w-96 md:h-72 md:w-72 h-56 w-56 left-[14%] md:left-1/3 lg:left-0 justify-center relative lg:top-20 rounded-full border-solid border-white"
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
