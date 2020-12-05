import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {IntlProvider} from 'react-intl';
import App from './App';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <IntlProvider locale={window.navigator.language} messages= {window.navigator.language.toLowerCase().includes("es") ? localeEsMessages: localeEnMessages}>
		<App/>
	</IntlProvider>, document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
