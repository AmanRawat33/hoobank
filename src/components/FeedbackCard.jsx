import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex flex-col px-10 py-12 max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card rounded-[20px] ">
    <img
      src={quotes}
      alt="quote"
      className="w-[42px] h-[27px] object-contain"
    />
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
      {content}
    </p>
    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4>{name}</h4>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
