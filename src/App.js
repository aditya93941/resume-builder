import React, { Component } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Templates from './components/Templates';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import './index.css';

class App extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: '',
    selectedTemplate: 'template1',
  };

  handleFormChange = (data) => {
    this.setState({ ...data });
  };

  handleTemplateChange = (template) => {
    this.setState({ selectedTemplate: template });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <HeroSection />
        <Templates onTemplateChange={this.handleTemplateChange} />
        <div className="content-container">
          <ResumeForm handleChange={this.handleFormChange} />
          <ResumePreview {...this.state} selectedTemplate={this.state.selectedTemplate} />
        </div>
        <Features />
        <Testimonials />
        <Footer />
      </div>
    );
  }
}

export default App;
