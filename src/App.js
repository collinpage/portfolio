// import logo from './logo.svg';
import i18next from 'i18next';
import { Trans, useTranslation } from 'react-i18next';


function App() {
  const { t } = useTranslation('home');

  return (
    <div className="App bg-black flex flex-col min-h-full">
      <header className="App-header sticky top-0 flex item-center justify-between p-3 flex-0 z-50 bg-white">
        <h1>CP</h1>

        <nav>
          <ul className="flex item-center gap-x-3">
            <li>
              <a href="#about">{t('menu.about')}</a>
            </li>

            <li>
              <a href="#work">{t('menu.work')}</a>
            </li>

            <li>
              <a href="#skills">{t('menu.skills')}</a>
            </li>

            <li>
              {i18next.language === 'fr' ? (
                <button onClick={() => i18next.changeLanguage('en')}>EN</button>
              ) : (
                <button onClick={() => i18next.changeLanguage('fr')}>FR</button>
              )}
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow min-h-full">
        <h1 className="text-white text-9xl">
          {t('presentation')} <span>Collin</span>
        </h1>

      </main>

      <footer className="flex-0">
        Copyright Collin Pagé
      </footer>
    </div>
  );
}

export default App;
