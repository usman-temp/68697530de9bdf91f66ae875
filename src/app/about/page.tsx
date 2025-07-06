export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Usman</h1>
        
        <div className="space-y-4 text-gray-600">
          <p className="text-lg">
            Hello! I'm Usman, currently pursuing a Bachelor's degree in Computer Science 
            while working as a Backend Engineer at promptSTART.
          </p>
          
          <p className="text-lg">
            My academic focus and professional expertise revolve around backend development,
            system architecture, and cloud technologies. I'm passionate about building
            scalable and efficient solutions for complex problems.
          </p>
          
          <div className="mt-6 border-t pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Current Focus</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>BS Computer Science Studies</li>
              <li>Backend System Development</li>
              <li>Cloud-Native Applications</li>
              <li>API Design & Microservices</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}