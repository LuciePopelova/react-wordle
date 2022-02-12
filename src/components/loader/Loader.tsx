import loader from '../../styles/icons/loader.svg';
import { LoaderWrapper } from './LoaderStyles';

const Loader = () => {
  return (
    <LoaderWrapper>
      <img alt="loading" src={loader} />
    </LoaderWrapper>
  );
};

export default Loader;
