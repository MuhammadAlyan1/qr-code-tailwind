import React from 'react';
import qrCodeImg from '../../assets/images/image-qr-code.png';

const QrCode = () => {
  return (
    <div className="font-['Outfit'] bg-white p-4 rounded-2xl mx-auto max-w-[300px] md:max-w-[450px]">
      <div className="rounded-2xl overflow-hidden w-fit">
        <img src={qrCodeImg} alt="qr code" />
      </div>
      <div className="mt-5 mb-5">
        <h2 className="font-bold text-2xl text-center text-slate-800 mb-3">
          Improve your front-end skills by building projects
        </h2>
        <p className="text-center text-slate-500">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QrCode;
