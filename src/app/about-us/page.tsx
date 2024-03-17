import "../../app/globals.css";
import Cover from "@/app/components/containers/Cover";

const AboutUs = () => {

  return (
    <>
      < Cover title={"About Us"} srcMobile={"/images/about-us/mobile/cover.png"} srcDesktop={"/images/about-us/desktop/cover.png "} />
    </>
  );
}
export default AboutUs;
