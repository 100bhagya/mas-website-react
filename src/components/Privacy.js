import React from "react";
import CloseIcon from "../images/cross_head.png";

const Privacy = (isShowPrivacy, closePrivacy) => {
  return (
    <div className={`${isShowPrivacy ? "active" : ""} show`}>
      <div className="bg-white">
        <div className="flex">
          <h1 className="font-bold text-lg mt-5">Register.</h1>
          <img
            src={CloseIcon}
            onClick={closePrivacy}
            alt="close"
            className="w-4 h-4 relative left-[70%] top-5 cursor-pointer"
          />
        </div>
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          distinctio beatae in corporis aperiam aspernatur mollitia ullam
          inventore maiores aliquam officiis necessitatibus eos modi, excepturi
          deleniti iure tenetur doloribus? Similique, repellat earum itaque sint
          perspiciatis ullam fuga sequi id mollitia labore unde inventore, in
          quo consectetur magni accusamus dolores repellendus, quibusdam aperiam
          quisquam ducimus qui. Blanditiis placeat et impedit aut animi, est
          minima vero quae hic voluptates ab amet dolore cupiditate, ipsa
          suscipit, in laboriosam. Alias ipsam esse laboriosam sint culpa
          quibusdam omnis vero nobis doloribus delectus dolores quae, quo error
          ad consectetur nesciunt, consequatur excepturi ipsa at. Sint minima
          perspiciatis iusto quibusdam, aliquam, aperiam nesciunt, quos
          molestias nam ad vel a asperiores veritatis! Officiis praesentium eos
          voluptatum esse possimus enim quod id accusamus. Culpa dignissimos
          voluptas reprehenderit iusto fugit, ipsam nostrum, voluptate odit
          blanditiis at totam voluptatem placeat commodi officia amet dolore
          earum vero ut hic officiis. Consequuntur fuga voluptates voluptas
          inventore culpa labore quo rem corrupti, consectetur natus id dolor
          incidunt, blanditiis pariatur
        </div>
      </div>
    </div>
  );
};

export default Privacy;
