import styles from "../style";
import { robot, discount } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} overflow-hidden` }>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div
        className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}
      >
        <img src={discount} alt="discount" className={`w-[32px] h-[32px]`} />
        <p className={`${styles.paragraph}`}>
          <span className={`text-white`}>20%</span> Discount for
          <span className={`text-white`}>1 Month</span> Account
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white  ss:leading-[100px] leading-[72px]">
          The next <br className="sm:block hidden" />
          <span className="text-gradient">Generation</span> <br />
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] text-white  ss:leading-[100px] leading-[72px]">
        Payment Method
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`} >
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine the annual percentage rates, annual
        fees.
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} >
      <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
    {/* <div className="absolute top-0 w-[40%] h-[35%] pink__gradient z-[0]" /> */}
    {/* <div className="absolute bottom-40 w-[80%] h-[80%] rounded-full white__gradient z-[1]" /> */}
    {/* <div className="absolute right-20 bottom-20 w-[50%] h-[50%] blue__gradient z-[0]" /> */}
    </div>
    <div className={ `ss:hidden ${styles.flexCenter}`} ><GetStarted/></div>
  </section>
);

export default Hero;
