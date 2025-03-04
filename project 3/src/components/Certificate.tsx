import React from 'react';
import { Award, Download } from 'lucide-react';

interface CertificateProps {
  studentName: string;
  courseName: string;
  completionDate: string;
  instructorName: string;
}

const Certificate: React.FC<CertificateProps> = ({
  studentName,
  courseName,
  completionDate,
  instructorName
}) => {
  return (
    <div className="relative border-8 border-blue-900 p-8 bg-white text-center">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-200 m-2 pointer-events-none"></div>
      
      <div className="mb-6">
        <div className="flex justify-center mb-4">
          <Award className="h-16 w-16 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-blue-900 mb-1">CERTIFICATE OF COMPLETION</h1>
        <p className="text-gray-600">This certifies that</p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-200 inline-block px-4 py-1">
          {studentName}
        </h2>
      </div>
      
      <div className="mb-8">
        <p className="text-gray-600 mb-2">has successfully completed the course</p>
        <h3 className="text-xl font-bold text-blue-800 mb-2">{courseName}</h3>
        <p className="text-gray-600">on {completionDate}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-8 mb-6">
        <div className="text-center">
          <div className="h-px bg-gray-400 mb-2"></div>
          <p className="text-gray-700 font-medium">ConnectBook</p>
          <p className="text-sm text-gray-600">Issuing Authority</p>
        </div>
        <div className="text-center">
          <div className="h-px bg-gray-400 mb-2"></div>
          <p className="text-gray-700 font-medium">{instructorName}</p>
          <p className="text-sm text-gray-600">Instructor</p>
        </div>
      </div>
      
      <div className="text-sm text-gray-500">
        <p>Certificate ID: CB-{Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
        <p>Verify at connectbook.com/verify</p>
      </div>
    </div>
  );
};

export default Certificate;