import React from 'react';
import HeroSection from 'src/component/HeroSection/HeroSection';
import CourseOverView from 'src/component/courseOverView/CourseOverView';
import Footer from 'src/component/Footer/Footer';
const courses = () => {
	return (
		<>
			<HeroSection />
			<CourseOverView />
			<Footer />
		</>
	);
};

export default courses;
