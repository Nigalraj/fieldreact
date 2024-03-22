import React from "react";
import { Link } from "react-router-dom";

function Faqs() {
  return (
    <div className="mx-lg-5 mt-lg-5 ">
      <div className="row">
        <div className="col-lg-6">
          <div className="pb-3">
            <span className="try_1 fw-semibold">
              Will my card on file be charged?
            </span>
          </div>
          <div>
            <span>
              We don't charge anything at all before or during the trail period.
              The card on file is simply so we kmow you're a person, not a
              robot.
            </span>
          </div>
          <hr className="mt-4" />
        </div>
        <div className=" col-lg-6">
          <div className="pb-3">
            <span className="try_1 fw-semibold">
              Can I cancel my free trial at any time?
            </span>
          </div>
          <div>
            <span>
              Absolutely. All we ask is that you give FieldGroove a fair shot,
              because it is rare that we can't improve your business!
            </span>
          </div>
          <hr className="mt-4" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="pb-3">
            <span className="try_1 fw-semibold">
              How long is my free trial?
            </span>
          </div>
          <div>
            <span>The free trail is for 7 days</span>
          </div>
          <hr className="mt-4" />
        </div>
        <div className=" col-lg-6">
          <div className="pb-3">
            <span className="try_1 fw-semibold">
              Can I change or cancel my plan later on?
            </span>
          </div>
          <div>
            <span>
              You have control in the customizable settings over the number of
              users, which you can change at any time., You can cancel your plan
              with 30 day's notice
            </span>
          </div>
          <hr className="mt-4" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="pb-3">
            <span className="try_1 fw-semibold">
              Do you have customer representatives to answer questions during my
              trial?
            </span>
          </div>
          <div>
            <span>
              We have several resources (documents and videos) for training. The
              portal has a button you can click to send instant questions, and
              you will be assigned a personal point of contact who will be
              available to assist as needed.
            </span>
          </div>
          <hr className="mt-4" />
        </div>
        <div className=" col-lg-6">
          <div className="pb-3">
            <span className="try_1 fw-semibold ">
              What happens after my trial ends?
            </span>
          </div>
          <div>
            <span>
              Typically, you'll find that you can't live without us! Before the
              end of the trial, we will be poviding you with a quote for
              continuing the subsciption. We will also be working closely with
              you towards a seamless transition. After the initial 7 days trial,
              with your acceptance of our quote and your approval, we will start
              charging for the monthly subsciption. We will provide you with all
              the tools necessary for on-boarding as well.
            </span>
          </div>
          <hr className="mt-4" />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="d-flex flex-lg-row flex-column ">
          <div className="d-flex">
            <div className="d-flex">
              <div className="try_1">FEATURES</div>
              <div className="vertical-line"></div>
            </div>
            <div className="d-flex">
              <div className="try_1">FAQS</div>
              <div className="vertical-line"></div>
            </div>
          </div>
          <div className="d-flex">
            <div className="d-flex">
              <div className="try_1">CONTACT US</div>
              <div className="vertical-line"></div>
            </div>
            <div className="d-flex">
              <Link to="/" className="text-decoration-none">
                <div className="try_1 text-decoration-none">LOGIN</div>
              </Link>
              <div className="vertical-line"></div>
            </div>
            <div className="d-flex">
              <Link to="/register" className="text-decoration-none">
                <div className="try_1 ">REGISTER</div>
              </Link>
              <div className="vertical-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
