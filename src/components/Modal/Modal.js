import React, { Component } from 'react';
import { creatPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImgURL } = this.props;
    return creatPortal(
      <div className="Overlay" onClick={this.handleClickBackdrop}>
        <div className="Modal">
          <img src={largeImgURL} alt="айтем" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
