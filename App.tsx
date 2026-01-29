
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LegalPage from './pages/LegalPage';
import Pricing from './pages/Pricing';
import Builder from './pages/Builder';

const App: React.FC = () => {
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/builder" element={<Builder />} />
          <Route 
            path="/privacy" 
            element={
              <LegalPage 
                title="Privacy Policy" 
                content={`
                  1. Information Collection: We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services. This includes names, email addresses, and resume data.
                  
                  2. Use of Information: We use the information we collect to provide, operate, and maintain our Services; to improve, personalize, and expand our Services; and to process your transactions.
                  
                  3. Data Security: We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
                  
                  4. Third-Party Disclosure: We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website.
                  
                  5. Cookies: We use cookies to help us remember and process the items in your shopping cart and understand and save user's preferences for future visits.
                `} 
              />
            } 
          />
          <Route 
            path="/terms" 
            element={
              <LegalPage 
                title="Terms and Conditions" 
                content={`
                  1. Acceptance of Terms: By accessing or using the Resume Flux website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.
                  
                  2. Use License: Permission is granted to temporarily download one copy of the materials (information or software) on Resume Flux's website for personal, non-commercial transitory viewing only.
                  
                  3. User Content: You are solely responsible for the content of the resumes you build using our platform. You represent that you have the right to use any information you provide.
                  
                  4. Intellectual Property: The Service and its original content, features, and functionality are and will remain the exclusive property of Resume Flux and its licensors.
                  
                  5. Limitation of Liability: In no event shall Resume Flux, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages.
                  
                  6. Governing Law: These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of law provisions.
                `} 
              />
            } 
          />
          <Route 
            path="/refund" 
            element={
              <LegalPage 
                title="Cancellation & Refund Policy" 
                content={`
                  1. Digital Product Nature: Due to the nature of digital products and the immediate access provided to our resume building tools and premium templates, all sales are final.
                  
                  2. Strict No Refund Policy: Resume Flux offers a strict no-refund policy. Once a payment is processed and access to the premium features is granted, we cannot offer a refund, return, or exchange.
                  
                  3. Order Review: Users are encouraged to utilize the free version of our tool to ensure it meets their needs before upgrading to a paid plan. Please review your order carefully before completing the transaction.
                  
                  4. Service Access: If you experience technical issues accessing the paid features, please contact our support team immediately at support@resumeflux.com, and we will work to resolve the issue as a priority.
                  
                  5. Exceptions: Any exceptions to this policy are at the sole discretion of Resume Flux management and will be handled on a case-by-case basis.
                `} 
              />
            } 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
