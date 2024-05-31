export const metadata = {
    title: "Standex traders | Enabling Cookies Tutorial",
    description: "This is Enabling Cookies Tutorial page of standex traders",
  };
const EnableCookiesPage = () => {
    return (
      <div className="my-container min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <h1 className="heading text-gradient mb-4">Enable Third-Party Cookies</h1>
          <div className="text-left mb-12">
            <h2 className="text-3xl heading text-gradient my-8">Google Chrome</h2>
            <ol className="para list-decimal ml-4">
              <li>Click the menu button (three dots) at the top-right corner.</li>
              <li>Select &quot;Settings&quot;.</li>
              <li>Scroll down and click &quot;Advanced&quot;.</li>
              <li>Under &quot;Privacy and security&quot;, click &quot;Site settings&quot;.</li>
              <li>Click &quot;Cookies&quot;.</li>
              <li>Toggle &quot;Allow third-party cookies&quot;.</li>
            </ol>
          </div>
          <div className="text-left mb-8">
            <h2 className="text-3xl heading text-gradient mb-2">Mozilla Firefox</h2>
            <ol className="para list-decimal ml-4">
              <li>Click the menu button (three lines) at the top-right corner.</li>
              <li>Select &quot;Options&quot;.</li>
              <li>Click &quot;Privacy & Security&quot; on the left side.</li>
              <li>Under &quot;Cookies and Site Data&quot;, select &quot;Accept cookies and site data from websites&quot;.</li>
              <li>Check &quot;Accept third-party cookies&quot;.</li>
            </ol>
          </div>
         
        </div>
      </div>
    );
  };
  
  export default EnableCookiesPage;
  