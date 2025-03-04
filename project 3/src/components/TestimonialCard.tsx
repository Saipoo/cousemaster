import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative">
      <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-100" />
      
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            fill={i < testimonial.rating ? "#FBBF24" : "none"} 
            className="text-yellow-400 mr-0.5"
          />
        ))}
      </div>
      
      <p className="text-gray-700">{testimonial.text}</p>
      
      <div className="mt-4 text-sm text-gray-500">
        <span>Course: </span>
        <span className="font-medium text-gray-700">{testimonial.course}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;