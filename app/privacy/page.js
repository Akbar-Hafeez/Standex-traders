
export const metadata = {
    title: "Standex traders | Privacy Policy",
    description: "This is Privacy Policy page of standex traders",
  };
const PrivacyPolicy = () => {
  return (
    <div className="my-container  min-h-screen">
     <div className="container mx-auto py-8 px-4">
        <h1 className="heading text-gradient mb-4">Privacy Policy</h1>
        <p className="para mb-4">
          Your privacy is important to us. It is our policy to respect your
          privacy regarding any information we may collect from you across our
          website.
        </p>
        <h2 className="text-3xl heading text-gradient mb-2">Information We Collect</h2>
        <ul className="para list-disc ml-6 mb-4">
          <li>Personal Information</li>
          <li>Usage Data</li>
          <li>Cookies</li>
        </ul>
        <h2 className="text-3xl heading text-gradient mb-2">How We Use Your Information</h2>
        <p className="para mb-4">
          We use the information we collect in various ways, including to:
        </p>
        <ul className="para list-disc ml-6 mb-4">
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
        </ul>
        <h2 className="text-3xl heading text-gradient   mb-2">Cookies</h2>
        <p className="mb-4 para ">
          We use cookies for the following purposes:
        </p>
        <ul className="para list-disc ml-6 mb-4">
          <li>Authentication - to keep you logged in</li>
          <li>Security - to prevent fraudulent activity</li>
          <li>Preferences - to remember your settings</li>
        </ul>
        <h2 className="text-3xl heading text-gradient   mb-2">Your Privacy Rights</h2>
        <p className="para mb-4">
          If you have any questions about our privacy policy, please contact us.
        </p>
        <p className='para'>This privacy policy was last updated on June 1, 2024.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
