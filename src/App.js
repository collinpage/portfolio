// import logo from './logo.svg';
import i18next from 'i18next';
import { Trans, useTranslation } from 'react-i18next';


function App() {
  const { t } = useTranslation('home');

  return (
    <div className="App flex flex-col min-h-full">
      <header className="App-header sticky top-0 border-b-2 border-slate-50 p-3 flex-0 z-50 bg-white shadow">
        <div className="container flex items-center justify-between">
          <p className="text-5xl">CP</p>

          <nav>
            <ul className="flex items-center gap-x-3">
              <li>
                <a href="#about" className="hover:underline text-lg">{t('menu.about')}</a>
              </li>

              <li>
                <a href="#work" className="hover:underline text-lg">{t('menu.work')}</a>
              </li>

              <li>
                <a href="#skills" className="hover:underline text-lg">{t('menu.skills')}</a>
              </li>

              <li>
                {i18next.language === 'fr' ? (
                  <button onClick={() => i18next.changeLanguage('en')} className="hover:underline text-lg">EN</button>
                ) : (
                  <button onClick={() => i18next.changeLanguage('fr')}>FR</button>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow min-h-full">
        <section className="h-screen flex items-center">
          <div className="container flex gap-10 items-center">
            <h1 className="prose text-9xl w-3/5">
              {t('presentation')} <span className="text-teal-800">Collin</span>
            </h1>

            <div className="w-2/5">
              <p>Image</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="flex-0">
        Copyright Collin Pagé
      </footer>
    </div >
  );
}

export default App;
