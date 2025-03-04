import React from 'react';
import Hero from '../components/Hero';
import StatsBanner from '../components/StatsBanner';
import FeaturedCourses from '../components/FeaturedCourses';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import { featuredCourses, testimonials, courses } from '../data/courses';

const HomePage: React.FC = () => {
  // Get popular courses (highest number of students)
  const popularCourses = [...courses]
    .sort((a, b) => b.students - a.students)
    .slice(0, 4);

  // Get newest courses (by lastUpdated date)
  const newestCourses = [...courses]
    .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
    .slice(0, 4);

  return (
    <div>
      <Hero />
      <StatsBanner />
      <FeaturedCourses 
        courses={featuredCourses} 
        title="Featured Courses" 
        subtitle="Our most popular and highly-rated courses"
        viewAllLink="/courses"
      />
      <FeaturedCourses 
        courses={popularCourses} 
        title="Most Popular" 
        subtitle="Join thousands of students learning these in-demand skills"
        viewAllLink="/courses"
      />
      <Testimonials testimonials={testimonials} />
      <FeaturedCourses 
        courses={newestCourses} 
        title="Newly Added" 
        subtitle="Stay ahead with our latest course offerings"
        viewAllLink="/courses"
      />
      <CTABanner />
    </div>
  );
};

export default HomePage;