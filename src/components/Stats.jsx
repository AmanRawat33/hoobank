import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <div className={`${styles.flexCenter} flex-row sm:mb-20 mb-6 flex-wrap`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex flex-row justify-start items-center m-3`}>
        <h4 className="font-poppins text-white xs:text-[40px] text-[30px] font-semibold  xs:leading-[53px] leading-[43px]">
          {stat.value}
        </h4>
        <p className="font-poppins text-gradient ml-3 uppercase xs:text-[20px] text-[15px] font-normal  xs:leading-[26px] leading-[21px]">
          {stat.title}
        </p>
      </div>
    ))}
  </div>
);

export default Stats;
