"use client"

import React, { useState, ChangeEvent } from "react";
import style from "./style.module.css";


function LoginPageView() {
    const [email, setEmail] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [isCodeFieldVisible, setIsCodeFieldVisible] = useState(false);
  
    // 이메일 입력값 변경
    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
  
    // 인증번호 입력값 변경
    const handleVerificationCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
      setVerificationCode(event.target.value);
    };
  
    // "인증번호 받기" 버튼 클릭 시
    const handleSendVerificationCode = () => {
      // TODO: 여기서 백엔드로 인증번호 요청 로직(axios, fetch 등)을 호출
      // 예: axios.post("/api/send-code", { email }).then(...).catch(...);
  
      // 인증번호 입력창을 보이도록 상태 변경
      setIsCodeFieldVisible(true);
    };
  
    return (
      <div className={style.container}>

        {
            !isCodeFieldVisible ?
            <h2>UNIST 교내 메일 주소를 입력해주세요.</h2>
            :
            <h2>학교 메일로 받은 인증번호를 입력해주세요.</h2>
            
        }
        <div style={{height:"100px"}}></div>
        <input
          type="email"
          placeholder="unknown@unist.ac.kr"
          value={email}
          onChange={handleEmailChange}
          className={style.inputField}
          disabled={isCodeFieldVisible}
        />
  
        {/* 인증번호 입력창: isCodeFieldVisible=true 일 때만 표시 */}
        {isCodeFieldVisible && (
          <div className={style.verificationContainer}>
            <input
              type="text"
              placeholder="000000"
              value={verificationCode}
              onChange={handleVerificationCodeChange}
              className={style.inputField}
            />
            {/* 인증 완료 로직이 필요하다면 아래 버튼 등을 만들어 처리하세요. */}
            {/* <button className={style.verifyButton}>인증하기</button> */}
          </div>
        )}

        <button
          onClick={handleSendVerificationCode}
          className={style.sendButton}
        >
          인증번호 받기
        </button>
      </div>
    );
  }

export default LoginPageView;