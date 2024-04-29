import React, { useState } from 'react';

const OtpVerify = ({ expectedOTP }) => {
  const [userOTP, setUserOTP] = useState('');
  const [verificationResult, setVerificationResult] = useState('');

  const verifyOTP = () => {
    if (userOTP === expectedOTP) {
      setVerificationResult('OTP Verified!');
    } else {
      setVerificationResult('Incorrect OTP!');
    }
  };

  return (
    <div>
      <input type="text" value={userOTP} onChange={(e) => setUserOTP(e.target.value)} />
      <button onClick={verifyOTP}>Verify OTP</button>
      <p>{verificationResult}</p>
    </div>
  );
};

export default OtpVerify;
