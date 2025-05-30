import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I'm always excited to discuss new opportunities, collaborate on projects, or share insights about engineering and technology.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="bg-gray-800 backdrop-blur-sm shadow-xl border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Send Me a Message</CardTitle>
            <CardDescription className="text-gray-300">
              Whether you have a project idea, or are reaching out about ajob opportunity!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">First Name</label>
                <Input placeholder="John" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Last Name</label>
                <Input placeholder="Doe" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-300 mb-2 block">Email</label>
              <Input type="email" placeholder="john.doe@example.com" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-300 mb-2 block">Subject</label>
              <Input placeholder="Project Collaboration Opportunity" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-300 mb-2 block">Message</label>
              <Textarea 
                placeholder="Tell me about your project or opportunity..."
                className="min-h-[120px] bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
            
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3">
              Send Message
            </Button>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-8">
          <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Get In Touch</CardTitle>
              <CardDescription className="text-blue-100">
                Ready to start a conversation? Here are the best ways to reach me.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-blue-100">your.email@university.edu</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-blue-100">University of Saskatchewan, Saskatoon, SK</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gray-800 backdrop-blur-sm shadow-lg border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <a 
                  href="https://github.com/ISoSpitefull"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <Github className="h-8 w-8 mx-auto mb-3 text-gray-300" />
                  <h3 className="font-semibold text-white mb-1">GitHub</h3>
                  <p className="text-sm text-gray-400">View my code</p>
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 backdrop-blur-sm shadow-lg border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <a 
                  href="https://www.linkedin.com/in/nikhil-p-ba1581281/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="h-8 w-8 mx-auto mb-3 text-blue-400" />
                  <h3 className="font-semibold text-white mb-1">LinkedIn</h3>
                  <p className="text-sm text-gray-400">Professional network</p>
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30">
            <CardContent className="p-6">
              <h3 className="font-semibold text-white mb-2">Open to Opportunities</h3>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                Currently seeking internships, co-op positions, and collaborative projects in Electrical engineering and Mechatronics technology.
              </p>
              <Button variant="outline" className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900">
                Download Resume
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
