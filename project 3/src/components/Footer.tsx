import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">ConnectBook</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering freshers and engineering students with the skills they need to succeed in today's competitive job market.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-gray-300 hover:text-white">All Courses</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Web Development</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Data Science</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Machine Learning</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Cloud Computing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Partners</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Become an Instructor</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300 hover:text-white">Help Center</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
              <li>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Mail size={16} />
                  <span>support@connectbook.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ConnectBook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;