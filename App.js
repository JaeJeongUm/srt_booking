import React from 'react';
import Login from './components/Login';
import ReservationList from './components/ReservationList';
import Footer from './components/Footer';
import './styles.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // 로그인 성공 시 콜백 함수
  const handleLogin = (credentials) => {
    // API를 통해 로그인 후, 성공 시 로그인 상태를 업데이트
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>SRT 예약 시스템</h1>
      </header>

      {isLoggedIn ? (
        <ReservationList />
      ) : (
        <Login onLogin={handleLogin} />
      )}

      <Footer />
    </div>
  );
}

export default App;
