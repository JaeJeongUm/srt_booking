import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // App 컴포넌트를 불러옵니다.
import './styles.css';    // 전체 스타일을 불러옵니다.

// React 18의 새로운 `createRoot` 사용하여 렌더링
const root = ReactDOM.createRoot(document.getElementById('root'));

// App 컴포넌트를 `root` DOM 요소에 렌더링
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
