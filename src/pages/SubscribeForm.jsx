import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import iconList from '../assets/images/icon-list.svg';
import imgMobile from '../assets/images/illustration-sign-up-mobile.svg';
import imgDesktop from '../assets/images/illustration-sign-up-desktop.svg';
import Button from '../components/Button';

//https://script.google.com/macros/s/AKfycbyL6XRYReBIxKhb8kXH4mTAJB-Qnqjsb8g_88R028G-rPe4IoXO5x2ozn7jiqfkgg07/exec

const GOOGLE_SHEETS_API =
  'https://script.google.com/macros/s/AKfycbyL6XRYReBIxKhb8kXH4mTAJB-Qnqjsb8g_88R028G-rPe4IoXO5x2ozn7jiqfkgg07/exec';

const items = [
  { icon: iconList, text: 'Product discovery and building what matters' },
  {
    icon: iconList,
    text: 'Measuring to ensure updates are a success',
  },
  {
    icon: iconList,
    text: 'And much more!',
  },
];

function validateEmail(newEmail) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(newEmail);
}

function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleOnChange(e) {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setError(() => (validateEmail(newEmail) ? null : 'Valid email required'));
    setIsValidEmail(() => validateEmail(newEmail));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(isValidEmail);

    if (isValidEmail) {
      setError('');
      setLoading(true);
      const data = { email: email };
      const formData = new FormData();
      for (let key in data) {
        formData.append(key, data[key]);
      }
      try {
        const response = await fetch(GOOGLE_SHEETS_API, {
          method: 'POST',
          body: formData,
        });
        if (!response.ok)
          throw new Error(`HTTP ERROR! Status: ${response.status}`);
      } catch (error) {
        setError('Valid email required');
      }
      setLoading(false);
      navigate('/success', { state: { email: email } });
    } else {
      setError('Valid email required');
    }
  }

  return (
    <main className="flex items-center justify-center">
      <div className="flex h-full flex-col bg-white md:h-fit md:max-w-[840px] md:flex-row-reverse md:items-center md:rounded-3xl md:p-6">
        <picture>
          <source media="(max-width: 767px)" srcSet={imgMobile} />
          <img
            src={imgDesktop}
            alt="sing up illustration"
            className="w-full md:min-w-[350px]"
          />
        </picture>
        <div className="flex flex-col gap-4 p-8 md:px-14">
          <h1 className="text-4xl font-bold md:text-5xl">Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            {items.map((item, index) => (
              <li key={index} className="mb-4 flex items-start gap-3 md:mb-3">
                <img src={item.icon} className="pt-[1px]" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <form className="flex flex-col gap-4 md:mt-2" onSubmit={handleSubmit}>
            <div className="mb-[-0.5rem] flex justify-between">
              <label htmlFor="email" className="text-xs font-bold">
                Email Address
              </label>
              <span className="text-xs text-red-500">{error}</span>
            </div>
            <input
              id="email"
              name="email"
              type="text"
              value={email}
              onChange={handleOnChange}
              disabled={loading}
              className={`rounded-lg border p-4 pl-6 ${
                error ? 'border border-red-500 bg-red-100 text-red-500' : ''
              }`}
              placeholder="ash@loremcompany.com"
            />
            <Button disabled={!isValidEmail || loading} type="primary">
              Subscribe to monthly newsletter
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default SubscribeForm;
