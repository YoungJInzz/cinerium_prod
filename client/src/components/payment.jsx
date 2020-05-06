import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";

const Payment = ({ pointInfo }) => {
  const [totalFee, setTotalFee] = useState(10000);
  const [step, setStep] = useState("");
  const [coupon, setCoupon] = useState("");
  const [giftcon, setGiftcone] = useState("");
  const [point, setPoint] = useState("");
  const [disCountByCoupons, setDisCountByCoupons] = useState(0);
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [isPointApplied, setIsPointApplied] = useState(false);
  const [pointValue, setPointValue] = useState(0);
  const handleStep = (x) => {
    if (step === x) {
      setStep("");
    } else setStep(x);
  };
  const handleCheckbox = () => {
    let checkedBoxes = document.querySelectorAll(
      "input[type=checkbox]:checked"
    );
    setDisCountByCoupons(checkedBoxes.length * 1000);
  };
  const applyCoupon = () => {
    let checkedBoxes = document.querySelectorAll(
      "input[type=checkbox]:checked"
    );
    let initCheckbox = () => {
      for (let item of checkedBoxes) {
        item.checked = false;
      }
    };
    if (checkedBoxes.length === 0) {
      alert("쿠폰을 선택해주세요");
    } else {
      if (totalFee === 0) {
        alert("이미 최종금액이 0원입니다");
      } else {
        if (isCouponApplied) {
          if (
            window.confirm("이미쿠폰이 적용되었습니다 초기화 하시겠습니까?")
          ) {
            setIsCouponApplied(false);
            setTotalFee(totalFee + disCountByCoupons);
            setDisCountByCoupons(0);
            initCheckbox();
          }
        } else {
          if (totalFee - disCountByCoupons < 0) {
            setTotalFee(0);
            setIsCouponApplied(true);
            for (let item of checkedBoxes) {
              item.checked = false;
            }
          } else setTotalFee(totalFee - disCountByCoupons);
          setIsCouponApplied(true);
          initCheckbox();
        }
      }
    }
  };
  const resetCoupon = () => {
    let checkedBoxes = document.querySelectorAll(
      "input[type=checkbox]:checked"
    );
    for (let item of checkedBoxes) {
      item.checked = false;
    }
    setTotalFee(totalFee + disCountByCoupons);
    setDisCountByCoupons(0);
  };

  const handlePoint = (e) => {
    let val = e.target.value;
    if (val > pointInfo.giftCards[0].giftCardBalance) {
      alert("포인트잔액을 초과하였습니다");
    } else {
      if (totalFee === 0) {
        alert("이미 최종결제금액이 0원입니다.");
      }
    }
  };
  return (
    <div>
      <div className="pay-method">
        <div className="pay-step">
          <div className="pay-titlebar">
            <span>STEP 1</span>
            <span
              className="again"
              onClick={() => {
                resetCoupon();
              }}
            >
              다시하기
              <IoMdRefresh className="refresh-icon2" />
            </span>
          </div>
          <div className="pay-header" onClick={() => handleStep(1)}>
            <span>할인쿠폰</span>
            <FaChevronDown className="down-icon" />
          </div>
          <div className={"pay-body" + (step === 1 ? " show" : " hide")}>
            <div className="select-discount">
              <div
                className={
                  "discount-item" + (coupon === 1 ? " couponSelected" : "")
                }
                onClick={() => setCoupon(1)}
              >
                cgv할인쿠폰 <FaChevronRight className="right-icon" />{" "}
              </div>
              <div
                className={
                  "discount-item" + (coupon === 2 ? " couponSelected" : "")
                }
                onClick={() => setCoupon(2)}
              >
                CJ one할인쿠폰 <FaChevronRight className="right-icon" />
              </div>
            </div>
            <div
              className={"select-form " + (coupon === 1 ? " show" : " hide")}
            >
              <div className="discount-list-header">
                <span className="col1">사용가능 쿠폰</span>
                <span className="col2">유효기간</span>
              </div>
              <div className="discount-list-body">
                {pointInfo.movieCoupons.map((item) => (
                  <div className="coupone-item">
                    <input
                      type="checkbox"
                      className="couponCheckBox"
                      onClick={() => handleCheckbox()}
                    />
                    <span className="col1">1000원 할인 쿠폰</span>
                    <span className="col2">{item.movieCouponEndDate}</span>
                  </div>
                ))}
                <div>
                  <div className="result-form">
                    <button
                      class="coupon-applyButton"
                      onClick={() => applyCoupon()}
                    >
                      적용하기
                    </button>{" "}
                    <span>할인금액{disCountByCoupons}원</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={"select-form " + (coupon === 2 ? " show" : " hide")}
            >
              <div className="NoCoupon">사용가능한 쿠폰이 없습니다</div>
            </div>
          </div>
        </div>
        <div className="pay-step">
          <div className="pay-titlebar">
            <span>STEP 2</span>
            <span className="again">
              다시하기
              <IoMdRefresh className="refresh-icon2" />
            </span>
          </div>
          <div className="pay-header" onClick={() => handleStep(2)}>
            <span>관람권/기프트콘</span>
            <FaChevronDown className="down-icon" />
          </div>
          <div className={"pay-body" + (step === 2 ? " show" : " hide")}>
            <div className="select-discount">
              <div
                className={
                  "discount-item" + (giftcon === 1 ? " couponSelected" : "")
                }
                onClick={() => setGiftcone(1)}
              >
                영화관람권 <FaChevronRight className="right-icon" />{" "}
              </div>

              <div
                className={
                  "discount-item" + (giftcon === 2 ? " couponSelected" : "")
                }
                onClick={() => setGiftcone(2)}
              >
                CGV기프트콘 <FaChevronRight className="right-icon" />
              </div>
            </div>
            <div
              className={"select-form " + (giftcon === 1 ? " show" : " hide")}
            >
              <div className="NoCoupon">사용가능한 쿠폰이 없습니다</div>
            </div>
            <div
              className={"select-form " + (giftcon === 2 ? " show" : " hide")}
            >
              <div className="NoCoupon">사용가능한 쿠폰이 없습니다</div>
            </div>
          </div>
        </div>
        <div className="pay-step">
          <div className="pay-titlebar">
            <span>STEP 3</span>
            <span className="again">
              다시하기
              <IoMdRefresh className="refresh-icon2" />
            </span>
          </div>
          <div className="pay-header" onClick={() => setStep(3)}>
            <span>포인트</span>
            <FaChevronDown className="down-icon" />
          </div>
          <div className={"pay-body" + (step === 3 ? " show" : " hide")}>
            <div className="select-discount">
              <div
                className={
                  "discount-item" + (point === 1 ? " couponSelected" : "")
                }
                onClick={() => setPoint(1)}
              >
                CJ ONE포인트 <FaChevronRight className="right-icon" />{" "}
              </div>

              <div
                className={
                  "discount-item" + (point === 2 ? " couponSelected" : "")
                }
                onClick={() => setPoint(2)}
              >
                CJ 기프트카드 <FaChevronRight className="right-icon" />
              </div>
            </div>
            <div className={"select-form " + (point === 1 ? " show" : " hide")}>
              <div className="NoCoupon">사용가능한 쿠폰이 없습니다</div>
            </div>
            <div className={"select-form " + (point === 2 ? " show" : " hide")}>
              <div className="giftCard">
                <span className="col1">카드보유금액</span>
                <span className="col2">
                  {pointInfo.giftCards[0].giftCardBalance} 원
                </span>
                <span className="col3">적용금액</span>
                <input
                  className="cardValue"
                  defaultValue="20000"
                  className="col4"
                  size="4"
                  onChange={(e) => handlePoint(e)}
                ></input>
                <span className="col4">원</span>
                <button className="pointApplyButton">적용하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
