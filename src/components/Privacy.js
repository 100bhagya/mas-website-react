import React from "react";
import CloseIcon from "../images/cross_head.png";

const Privacy = ({ setIsShowPrivacy }) => {
  const updateIsShowPrivacy = (event) => {
    event.preventDefault();
    setIsShowPrivacy(false);
  };
  return (
    <div>
      <div className="bg-white lg:w-[55%] md:w-[80%] absolute text-[10px] md:text-sm top-[6700px] md:top-[7000px] md:left-[100px] lg:top-[5500px] lg:left-[500px] p-2 md:p-10 z-50 rounded-2xl shadow-2xl">
        <div className="flex">
          <h1 className="font-bold text-lg mb-5">Privacy Policy</h1>
          <img
            src={CloseIcon}
            onClick={updateIsShowPrivacy}
            alt="close"
            className="w-4 h-4 relative top-2 md:top-0 left-[55%] md:left-[80%] cursor-pointer"
          />
        </div>
        <div className="">
          MAS is all about data and we understand how important data and data
          privacy is for everyone. By visiting this Website you agree to be
          bound by the terms and conditions of this Privacy Policy. By mere use
          of the Website, you expressly consent to our use and disclosure of
          your personal information in accordance with this Privacy Policy. This
          Privacy Policy is incorporated into and subject to the Terms of Use.
          When you use our Website, we collect and store your personal
          information which is provided by you from time to time. Our primary
          goal in doing so is to provide you a safe, efficient, smooth and
          customized experience. This allows us to provide services and features
          that most likely meet your needs, and to customize our Website to make
          your experience safer and easier. More importantly, while doing so we
          collect personal information from you that we consider necessary for
          achieving this purpose. In general, you can browse the Website without
          telling us who you are or revealing any personal information about
          yourself. Once you give us your personal information, you are not
          anonymous to us. Where possible, we indicate which fields are required
          and which fields are optional. You always have the option to not
          provide information by choosing not to use a particular service or
          feature on the Website. We may automatically track certain information
          about you based upon your behaviour on our Website. We use this
          information to do internal research on our users' demographics,
          interests, and behaviour to better understand, protect and serve our
          users. This information is compiled and analysed on an aggregated
          basis. This information may include the URL that you just came from
          (whether this URL is on our Website or not), which URL you next go to
          (whether this URL is on our Website or not), your computer browser
          information, and your IP address. We use data collection devices such
          as "cookies" on certain pages of the Website to help analyse our web
          page flow, measure promotional effectiveness, and promote trust and
          safety. "Cookies" are small files placed on your hard drive that
          assist us in providing our services. We offer certain features that
          are only available through the use of a "cookie". We also use cookies
          to allow you to enter your password less frequently during a session.
          Cookies can also help us provide information that is targeted to your
          interests. Most cookies are "session cookies," meaning that they are
          automatically deleted from your hard drive at the end of a session.
          You are always free to decline our cookies if your browser permits,
          although in that case you may not be able to use certain features on
          the Website and you may be required to re-enter your password more
          frequently during a session. Additionally, you may encounter "cookies"
          or other similar devices on certain pages of the Website that are
          placed by third parties. We do not control the use of cookies by third
          parties. If you choose to buy on the Website, we collect information
          about your buying behaviour. If you transact with us, we collect some
          additional information, such as a billing address, a credit / debit
          card number and a credit / debit card expiration date and/ or other
          payment instrument details and tracking information from cheques or
          money orders. We collect personally identifiable information (email
          address, name, phone number, credit card / debit card / other payment
          instrument details, etc.) from you when you set up a free account with
          us. While you can browse some sections of our Website without being a
          registered member, certain activities (such as placing an order) do
          require registration. We do use your contact information to send you
          offers based on your previous orders and your interests. We use
          personal information to provide the services you request. To the
          extent we use your personal information to market to you, we will
          provide you the ability to opt-out of such uses. We use your personal
          information to resolve disputes; troubleshoot problems; help promote a
          safe service; collect money; measure consumer interest in our products
          and services, inform you about online and offline offers, products,
          services, and updates; customize your experience; detect and protect
          us against error, fraud and other criminal activity; enforce our terms
          and conditions; and as otherwise described to you at the time of
          collection. In our efforts to continually improve our product and
          service offerings, we collect and analyse demographic and profile data
          about our users' activity on our Website. We identify and use your IP
          address to help diagnose problems with our server, and to administer
          our Website. Your IP address is also used to help identify you and to
          gather broad demographic information. We will occasionally ask you to
          complete optional online surveys. These surveys may ask you for
          contact information and demographic information (like zip code, age,
          or income level). We use this data to tailor your experience at our
          Website, providing you with content that we think you might be
          interested in and to display content according to your preferences. We
          may share personal information with our other corporate entities and
          affiliates to help detect and prevent identity theft, fraud and other
          potentially illegal acts; correlate related or multiple accounts to
          prevent abuse of our services; and to facilitate joint or co-branded
          services that you request where such services are provided by more
          than one corporate entity. Those entities and affiliates may not
          market to you as a result of such sharing unless you explicitly
          opt-in. We may disclose personal information if required to do so by
          law or in the good faith belief that such disclosure is reasonably
          necessary to respond to subpoenas, court orders, or other legal
          process. We may disclose personal information to law enforcement
          offices, third party rights owners, or others in the good faith belief
          that such disclosure is reasonably necessary to: enforce our Terms or
          Privacy Policy; respond to claims that an advertisement, posting or
          other content violates the rights of a third party; or protect the
          rights, property or personal safety of our users or the general
          public. We and our affiliates will share / sell some or all of your
          personal information with another business entity should we (or our
          assets) plan to merge with, or be acquired by that business entity, or
          reorganization, amalgamation, restructuring of business. Should such a
          transaction occur that another business entity (or the new combined
          entity) will be required to follow this privacy policy with respect to
          your personal information. Our Website links to other websites that
          may collect personally identifiable information about you. My
          Analytics School is not responsible for the privacy practices or the
          content of those linked websites.
        </div>
      </div>
    </div>
  );
};

export default Privacy;
