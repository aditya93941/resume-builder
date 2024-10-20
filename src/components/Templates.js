import React, { Component } from 'react';

class Templates extends Component {
  state = {
    selectedTemplate: 'template1',
  };

  handleTemplateSelect = (template) => {
    this.setState({ selectedTemplate: template }, () => {
      this.props.onTemplateChange(this.state.selectedTemplate);
    });
  };

  render() {
    const { selectedTemplate } = this.state;

    return (
      <section className="templates-section">
        <h2>Choose a Template</h2>
        <div className="templates">
          <div 
            className={`template ${selectedTemplate === 'template1' ? 'selected' : ''}`}
            onClick={() => this.handleTemplateSelect('template1')}
          >
            <img src="https://res.cloudinary.com/dcbyjmsdq/image/upload/v1729441096/Screenshot_2024-10-20_214541_mbb4hg.png" alt="Template 1" />
            <p>Template 1</p>
          </div>
          <div 
            className={`template ${selectedTemplate === 'template2' ? 'selected' : ''}`}
            onClick={() => this.handleTemplateSelect('template2')}
          >
            <img src="https://res.cloudinary.com/dcbyjmsdq/image/upload/v1729441185/Screenshot_2024-10-20_214930_odkwvk.png" alt="Template 2" />
            <p>Template 2</p>
          </div>
          <div 
            className={`template ${selectedTemplate === 'template3' ? 'selected' : ''}`}
            onClick={() => this.handleTemplateSelect('template3')}
          >
            <img src="https://res.cloudinary.com/dcbyjmsdq/image/upload/v1729441237/Screenshot_2024-10-20_215025_klinjp.png" alt="Template 3" />
            <p>Template 3</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Templates;
