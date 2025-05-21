import { Users, Calendar, Lightbulb } from "lucide-react";
import { useState } from "react";

export default function CommunitySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit form data to backend
    console.log("Form submitted:", formData);
  };

  return (
    <section id="community" className="py-6 px-4 bg-primary text-white">
      <h2 className="font-montserrat font-bold text-xl mb-4">Join Our Community</h2>
      
      <div className="space-y-4">
        <div className="bg-white/10 rounded-lg p-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <Users className="h-5 w-5 text-white" />
            </div>
            <div className="ml-3">
              <h3 className="font-montserrat font-bold text-sm">Find Playing Partners</h3>
              <p className="text-xs text-white/80 mt-0.5">Connect with players at your level</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 rounded-lg p-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <Calendar className="h-5 w-5 text-white" />
            </div>
            <div className="ml-3">
              <h3 className="font-montserrat font-bold text-sm">Local Events</h3>
              <p className="text-xs text-white/80 mt-0.5">Tournaments and social gatherings near you</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 rounded-lg p-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <Lightbulb className="h-5 w-5 text-white" />
            </div>
            <div className="ml-3">
              <h3 className="font-montserrat font-bold text-sm">Skill Development</h3>
              <p className="text-xs text-white/80 mt-0.5">Tips, tricks and training resources</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="bg-white/10 rounded-lg p-4">
          <h3 className="font-montserrat font-bold text-sm">Quick Sign Up</h3>
          <form className="mt-3" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 touch-target"
                required
              />
            </div>
            <div className="mb-3">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 touch-target"
                required
              />
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full bg-accent text-white font-montserrat font-semibold rounded-full py-3 touch-target text-center shadow-lg"
              >
                Join Community
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
