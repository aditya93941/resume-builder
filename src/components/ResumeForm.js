import React, { Component } from 'react';

class ResumeForm extends Component {
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.props.handleChange({ [name]: value });
  };

  render() {
    return (
      <section className="resume-form">
        <h2>Fill out your details</h2>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Education:
            <textarea
              name="education"
              placeholder="Enter your education details"
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Experience:
            <textarea
              name="experience"
              placeholder="Enter your work experience"
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Skills:
            <textarea
              name="skills"
              placeholder="Enter your skills"
              onChange={this.handleInputChange}
            />
          </label>
        </form>
      </section>
    );
  }
}

export default ResumeForm;
