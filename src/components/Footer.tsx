
export const Footer = () => {
  return (
    <footer className="bg-midnight-teal text-pale-sand py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-coral-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <h3 className="text-2xl font-poppins font-bold">SkillSwap Hub</h3>
            </div>
            <p className="text-pale-sand/80 mb-4 max-w-md">
              Connecting communities through skill sharing. Learn something new, teach what you know, 
              and build meaningful relationships along the way.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-pale-sand/60 hover:text-coral-orange transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-pale-sand/60 hover:text-coral-orange transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-pale-sand/80 hover:text-coral-orange transition-colors">How It Works</a></li>
              <li><a href="#" className="text-pale-sand/80 hover:text-coral-orange transition-colors">Browse Skills</a></li>
              <li><a href="#" className="text-pale-sand/80 hover:text-coral-orange transition-colors">Safety Tips</a></li>
              <li><a href="#" className="text-pale-sand/80 hover:text-coral-orange transition-colors">Community Guidelines</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-pale-sand/80 hover:text-coral-orange transition-colors">Help Center</a></li>
              <li><a href="#" className="text-pale-sand/80 hover:text-coral-orange transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-pale-sand/80 hover:text-coral-orange transition-colors">Report Issue</a></li>
              <li><a href="#" className="text-pale-sand/80 hover:text-coral-orange transition-colors">Feedback</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pale-sand/20 mt-8 pt-8 text-center">
          <p className="text-pale-sand/60">
            © 2024 SkillSwap Hub. All rights reserved. Built with ❤️ for the learning community.
          </p>
        </div>
      </div>
    </footer>
  );
};
