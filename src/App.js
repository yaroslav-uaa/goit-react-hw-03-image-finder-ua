import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from 'react-loader-spinner';
import Modal from './components/Modal/Modal';
import fetchImg from './services/Pixabay';
import './App.css';

class App extends Component {
  state = {
    search: '',
    page: 1,
    gallery: [],
    loading: false,
    showModal: false,
    currentImgURL: '',
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search } = this.state;
    if (prevState.search !== search) {
      this.getImgs();
    }
  }

  handleSubmit = newSearch => {
    this.setState({
      gallery: [],
      search: newSearch,
      page: 1,
      currentImgURL: '',
      showModal: false,
      error: null,
    });
  };

  getImgs = () => {
    const { search, page } = this.state;

    const query = {
      search,
      page,
    };

    this.setState({ loading: true });

    setTimeout(() => {
      fetchImg(query)
        .then(response => {
          if (response.length === 0) {
            alert(`Sorry! ${query} is not found`);
          }
          this.setState(prevState => ({
            gallery: [...prevState.gallery, ...response.data.hits],
            loading: false,
            page: prevState.page + 1,
          }));
        })
        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ loading: false });

          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        });
    }, 200);
  };

  getLargeImg = img => {
    this.setState({ currentImgURL: img.largeImgURL });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { loading, gallery, showModal, currentImgURL } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery getLargeImg={this.getLargeImg} gallery={gallery} />
        {loading && <Loader />}
        {gallery.length > 0 && !loading && <Button getImg={this.getImgs} />}
        {showModal && (
          <Modal largeImgURL={currentImgURL} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}

export default App;
