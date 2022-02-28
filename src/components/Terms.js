import React, { useEffect } from "react";
import CloseIcon from "../images/cross_head.png";

const Terms = ({ setIsShowTerms, isShowPrivacy }) => {
  const updateIsShowTerms = (event) => {
    event.preventDefault();
    setIsShowTerms(false);
  };
  useEffect(() => {
    if (isShowPrivacy) {
      setIsShowTerms(false);
    }
  });
  return (
    <div>
      <div className="bg-back lg:w-[55%] md:w-[80%] absolute text-[10px] md:text-sm top-[7200px] md:top-[7050px] md:left-[100px] lg:top-[6200px] lg:left-[500px] p-2 md:p-10 px-5 py-10 z-50 rounded-2xl shadow-2xl">
        <div className="flex">          
          <img
            src={CloseIcon}
            onClick={updateIsShowTerms}
            alt="close"
            className="w-4 h-4 relative -top-3 md:-top-3 lg:bottom-2 left-[90%] cursor-pointer"
          />
        </div>
        <div className="overflow-y-auto h-[60vh]">
        <h1 className="font-bold text-lg mb-5">Terms Of Use</h1>
          <div>
            By signing up on the My Analytics School Website you are agreeing to be bound by the following terms and conditions (“Terms of Use”). As the original purchaser of content sold on My Analytics School, you are entitled to access and use the content which is identified in the course and which is on the My Analytics School website, at www.myanalyticsschool.com ("Website"). In order to access and use this content, you must register with My Analytics School and create a password to use in accessing the content on the Website. Your password is unique and exclusive to you, and you may not transfer your password to any other person or allow any other person to use your password to access or use the content on the Website. You agree to notify My Analytics School immediately if any other person makes unauthorized use of your password. My Analytics School reserves the right to suspend or revoke your password in the event of any misuse of your password or any use of your password in violation of these Terms and Conditions. In the event of any such suspension or revocation, you will not be entitled to any refund or payment. These Terms of Use govern your access to and use of the Website and the content on the Website. By accessing and using the Website, you agree to these Terms of Use. If you do not agree to any of these Terms of Use, you may not access or use the site. My Analytics School reserves the right to modify these Terms of Use at any time and in its sole discretion. Your use of the site following any modification will constitute your assent to and acceptance of the modifications. Upon registration, My Analytics School grants you a non-exclusive, non-transferable, non-assignable, personal license to access and use the My Analytics School content identified in the content you purchased via an online/offline reader. My Analytics School will not be liable for any delay or interruption in your access to the site or any content located on the site, or for any transmission errors, equipment or software incompatibilities, force majeure or other failure of performance. My Analytics School will use reasonable efforts to correct any failure of performance, but My Analytics School will not be required to make any changes to any equipment or software used by My Analytics School or its contractors or agents to ensure compatibility with any equipment or software used by you. You may not use the site or the content on the site for any commercial purpose, including but not limited to the use of any of the content to market or sell goods or services to any person. You agree not to launch any automated system, including without limitation, "robots," "spiders," or "offline readers," to access the site. My Analytics School reserves the right to change, suspend access to, or remove any or all of the content on the Website at any time, for any reason, in its sole discretion. My Analytics School also reserves the right to discontinue the Website at any time, either temporarily or permanently. In the event of the removal of any content from the Website or the termination of the Website, you will not be entitled to any refund or payment. YOU AGREE THAT YOUR USE OF THE SITE SHALL BE AT YOUR SOLE RISK, AND My Analytics School WILL NOT BE HELD LIABLE IN ANY WAY FOR YOUR USE OF THE SITE OR FOR ANY INFORMATION CONTAINED ON THE SITE. ALL CONTENT CONTAINED IN OR REFERRED TO ON THE SITE IS PROVIDED "AS IS," WITHOUT ANY REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, My Analytics School DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. My Analytics School MAKES NO WARRANTIES THAT THE SITE WILL BE ERROR-FREE, OR THAT ANY ERRORS WILL BE CORRECTED, OR THAT THE SITE OR THE SERVER FROM WHICH THE SITE IS OPERATED WILL BE FREE OF VIRUSES OR OTHER POTENTIALLY HARMFUL CODES. UNDER NO CIRCUMSTANCES, INCLUDING NEGLIGENCE, SHALL My Analytics School BE HELD LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES AND EXPENSES OF ANY KIND (INCLUDING, WITHOUT LIMITATION, PERSONAL INJURY OR PROPERTY DAMAGE, LOST PROFITS, AND DAMAGES ARISING FROM COMPUTER VIRUSES, BUSINESS INTERRUPTION, LOST DATA, UNAUTHORIZED ACCESS TO OR USE OF SITE SERVERS OR ANY PERSONAL INFORMATION STORED THEREIN, OR ANY INTERRUPTION OR CESSATION OF OPERATION OF THE SITE) ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF THE SITE OR ANY INFORMATION CONTAINED ON THE SITE, WHETHER SUCH DAMAGES ARE BASED ON CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. You agree to indemnify, hold harmless and defend My Analytics School from and against any and all claims, damages, losses, liabilities, judgments, awards, settlements, costs and expenses (including attorney's fees and court costs) arising out of or resulting from your use of this Website or the violation by you of any of these Terms of Use. YOU AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THIS SITE OR YOUR USE OF THIS SITE MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES, AND WILL THEREAFTER BE PERMANENTLY BARRED. These Terms of Use constitute the entire agreement between you and My Analytics School concerning your use of the Website and the contents of the Website. If any provision is deemed invalid by a court of competent jurisdiction, the remaining provisions shall remain in full force and effect. No waiver of any the Terms of Use shall be deemed a further or continuing waiver of such term or condition or any other term or condition, and any failure by My Analytics School to assert any right or provision under these Terms of Use shall not constitute a waiver of such right or provision.

          </div>
          <br />
          <h1 className="font-bold text-lg mb-5">Refund Policy</h1>
          <div>
            Returns and Refunds Policy. Thank you for shopping at www.myanalyticsschool.com
            Non-tangible irrevocable goods ("Digital products")
            We do not issue refunds for non-tangible irrevocable goods ("digital products") once the order is confirmed and the product is sent. We recommend contacting us for assistance if you experience any issues receiving or downloading our products. If you have any questions about our Returns and Refunds Policy, please email us at admin@myanalyticsschool.com
          </div>        
        </div>
      </div>
    </div>
  );
};

export default Terms;
