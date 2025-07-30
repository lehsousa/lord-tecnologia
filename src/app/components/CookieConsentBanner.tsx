"use client";

import React from 'react';
import Link from 'next/link';
import CookieConsent from "react-cookie-consent";

const CookieConsentBanner: React.FC = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Eu entendi"
      cookieName="lordTecnologiaCookieConsent"
      style={{ background: "#030030", fontSize: "14px" }}
      buttonStyle={{ color: "#030030", background: "#fff", fontSize: "14px", borderRadius: "8px", padding: "10px 20px" }}
      expires={150}
    >
      Este site utiliza cookies para melhorar a experiência do usuário. Ao continuar a navegar, você concorda com a nossa{" "}
      <Link href="/privacidade" className="text-gray-300 hover:text-white font-bold underline">
        Política de Privacidade
      </Link>
      .
    </CookieConsent>
  );
};

export default CookieConsentBanner;
