import { useLocation, useNavigate } from 'react-router-dom';
import successIcon from '../assets/images/icon-success.svg';
import Button from '../components/Button';

function Success() {
  const location = useLocation();
  const email = location?.state.email;
  const navigate = useNavigate();

  function handleOnClick(e) {
    e.preventDefault();
    navigate('/');
  }

  return (
    <main className="flex items-center justify-center">
      <div className="flex h-full flex-col gap-6 bg-white p-10 sm:max-w-screen-lg md:h-fit md:w-[440px] md:gap-8 md:rounded-3xl md:p-14">
        <div className="mt-20 md:mt-0">
          <img src={successIcon} className="w-1/6" />
        </div>
        <div className="grow">
          <h1 className="mb-5 text-3xl font-bold md:text-5xl">
            Thanks for
            <br />
            subscribing!
          </h1>
          <p className="text-sm font-medium">
            A confirmation email has been sent to{' '}
            <span className="font-bold">{email}</span> Please open it and click
            the button inside to confirm your subscription.{' '}
          </p>
        </div>
        <Button onClick={handleOnClick} type="hover">
          Dismiss message
        </Button>
      </div>
    </main>
  );
}

export default Success;
