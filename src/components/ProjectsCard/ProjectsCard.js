import React from 'react';
import Modal from 'react-modal';
import github from '../../assets/github_circle.png';
import world from '../../assets/navigation.png';

class ProjectsCard extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };
 
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
    
    render() {
      
      const imgUrl = require(`../../assets/${this.props.projects.media.title}`)
      return (
        
        <>
        <div className="projects-card">

          <figure>
            <img
              onClick={this.handleOpenModal}
              src={imgUrl}
              alt={this.props.projects.media.alt}
              title={this.props.projects.media.title}
            />
          </figure>

        </div>

        <Modal 
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          className="Modal"
          overlayClassName="Overlay"
          closeTimeoutMS={1000}
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
        >

        <div id="image-social">
          <div id="image-container">
          <img
            src={imgUrl}
            alt={this.props.projects.media.alt}
            title={this.props.projects.media.title}
          />
          </div>

          <div id="social-icons">
              <button className="social" onClick={this.handleCloseModal}>X</button>
              <a  target="_blank" rel="noopener noreferrer" href={this.props.projects.links[1].href}><img alt="" className="social" src={github}/></a>
              <a target="_blank" rel="noopener noreferrer" href={this.props.projects.links[0].href}><img alt=''  className="social" src={world} /></a>
          </div>
        </div>

          <div id="description">
            <p>
              {this.props.projects.copy}
            </p>
          </div>

        </Modal>
        </>
      );
    }
  
};

export default ProjectsCard;