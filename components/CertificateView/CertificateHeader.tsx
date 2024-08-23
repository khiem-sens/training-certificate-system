import React from 'react';

interface CertificateHeaderProps {
  title: string;
  subtitle: string;
}

const CertificateHeader: React.FC<CertificateHeaderProps> = ({ title, subtitle }) => (
  <div className="flex flex-col w-full font-NotoSans">
    <h1 className="gap-2 self-center text-3xl font-bold leading-10">
      {title}
    </h1>
    <p className="mt-2 text-base leading-6 text-center">
      {subtitle}
    </p>
  </div>
);

export default CertificateHeader;