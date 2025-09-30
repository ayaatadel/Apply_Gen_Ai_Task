import React from "react";

const Register: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md p-8 bg-card rounded-lg shadow-lg border border-border">
        <div className="flex flex-col items-center mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-accent mb-2">
            {/* Use Sparkles icon from lucide-react for logo */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>
          </div>
          <span className="text-xl font-bold text-gradient">InterviewAI</span>
        </div>
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Name</label>
            <input id="name" type="text" className="w-full px-3 py-2 border rounded-md" placeholder="Enter your name" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input id="email" type="email" className="w-full px-3 py-2 border rounded-md" placeholder="Enter your email" required />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">Password</label>
            <input id="password" type="password" className="w-full px-3 py-2 border rounded-md" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="w-full bg-primary text-primary-foreground py-2 rounded-md font-semibold hover:bg-primary/90 transition">Register</button>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account? <a href="/login" className="text-primary underline">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
