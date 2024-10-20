import React, { Component } from 'react';

class ResumePreview extends Component {
  render() {
    const { name, email, phone, education, experience, skills, selectedTemplate } = this.props;

    // Template 1 - Classic Layout (Vertical)
    if (selectedTemplate === 'template1') {
      return (
        <section className="resume-preview template1">
          <h2>Resume Preview</h2>
          <div className="resume-header">
            <h3>{name}</h3>
            <p>{email} | {phone}</p>
          </div>
          <div className="resume-body">
            <div className="section">
              <h4>Education</h4>
              <p>{education}</p>
            </div>
            <div className="section">
              <h4>Experience</h4>
              <p>{experience}</p>
            </div>
            <div className="section">
              <h4>Skills</h4>
              <p>{skills}</p>
            </div>
          </div>
        </section>
      );
    }

    // Template 2 - Two-Column Layout
    if (selectedTemplate === 'template2') {
      return (
        <section className="resume-preview template2">
          <h2>Resume Preview</h2>
          <div className="resume-header">
            <h3>{name}</h3>
            <p>{email} | {phone}</p>
          </div>
          <div className="resume-body">
            <div className="left-column">
              <div className="section">
                <h4>Education</h4>
                <p>{education}</p>
              </div>
              <div className="section">
                <h4>Experience</h4>
                <p>{experience}</p>
              </div>
            </div>
            <div className="right-column">
              <div className="section">
                <h4>Skills</h4>
                <p>{skills}</p>
              </div>
            </div>
          </div>
        </section>
      );
    }

    // Template 3 - Horizontal Layout
    if (selectedTemplate === 'template3') {
      return (
        <section className="resume-preview template3">
          <h2>Resume Preview</h2>
          <div className="resume-header">
            <div className="header-left">
              <h3>{name}</h3>
            </div>
            <div className="header-right">
              <p>{email} | {phone}</p>
            </div>
          </div>
          <div className="resume-body">
            <div className="section">
              <h4>Education</h4>
              <p>{education}</p>
            </div>
            <div className="section">
              <h4>Experience</h4>
              <p>{experience}</p>
            </div>
            <div className="section">
              <h4>Skills</h4>
              <p>{skills}</p>
            </div>
          </div>
        </section>
      );
    }

    return null;
  }
}

export default ResumePreview;
