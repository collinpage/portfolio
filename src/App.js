// import logo from './logo.svg';
import { useTranslation } from 'react-i18next';


function App() {
  const { t } = useTranslation('home');

  return (
    <div className="App bg-black">
      <header className="App-header flex item-center justify-between p-3">
        <h1>CP</h1>

        <nav>
          <ul className="flex item-center">
            <li>
              <a href="#">{t('menu.about')}</a>
            </li>

            <li>
              <a href="#">{t('menu.work')}</a>
            </li>

            <li>
              <a href="#">{t('menu.skills')}</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>{t('title')}</h1>

      </main>
    </div>
  );
}

export default App;
