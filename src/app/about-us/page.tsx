import "../../app/globals.css";
import Cover from "@/app/components/containers/Cover";
import Testimonial from "../components/containers/Testimonials";
import { TestimonialProps } from "../interfaces";
const AboutUs = () => {

  return (
    <>
       < Cover title={"About Us"}     srcMobile={"/images/about-us/mobile/cover.png"} srcDesktop={"/images/about-us/desktop/cover.png "}/>
        <Testimonial name="Lorem Ipsum?" text="I ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC at Hampden-Sydney" />
    </>
  );
}
export default AboutUs;
