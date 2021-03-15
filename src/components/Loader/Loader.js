import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spiner';

const Loader_spiner = () => (
  <Loader
    type="TailSpin"
    color="#00BFFF"
    height={100}
    width={100}
    timeout={3000}
  />
);

export default Loader_spiner;
