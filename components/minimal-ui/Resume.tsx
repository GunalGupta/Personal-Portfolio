import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto my-4">
      <CardContent className="p-6">
        {/* PDF preview for larger screens with download button */}
        <div className="hidden sm:block">
          <iframe
            src="_static/Gunal_Gupta_IIIT_Vadodara_ICD_Resume.pdf"
            className="w-full h-[calc(100vh-200px)]"
            title="Resume PDF"
          />
          <Button asChild className='mt-4 hover:scale-105 transform transition duration-200'>
            <Link href="_static/Gunal_Gupta_IIIT_Vadodara_ICD_Resume.pdf" download="Gunal_Gupta_IIIT_Vadodara_ICD_Resume.pdf" target='_blank'>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Link>
          </Button>
        </div>

        {/* Only Download button for mobile devices */}
        <div className="sm:hidden flex flex-col items-center justify-center space-y-4">
          <p className="text-center text-lg font-medium">
            For better viewing experience on mobile, please download the resume.
          </p>
          <Button asChild>
            <Link href="_static/Gunal_Gupta_IIIT_Vadodara_ICD_Resume.pdf" download="resume.pdf">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Resume;