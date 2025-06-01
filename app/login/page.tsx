import React from 'react';
// import './TaxiHeXAHome.css';

const TaxiHeXAHome = () => {
  return (
    <div className="taxi-container">
      <header className="taxi-header">
        <div className="logo">TaxiHeXA</div>
        <nav className="nav-links">
          <a href="#about">소개</a>
          <a href="#features">기능</a>
          <a href="#faq">FAQ</a>
          <a href="#mypage">마이페이지</a>
        </nav>
      </header>

      <main className="main-section">
        <h1 className="main-title">UNIST 택시 동승 매칭 서비스</h1>
        <p className="main-description">
          UNIST 구성원 간의 택시 동승을 간편하게 매칭하고, 정산까지 한 번에 해결하세요.
        </p>
        <div className="cta-buttons">
          <a href="/search" className="cta-button">방 검색</a>
          <a href="/create" className="cta-button">방 만들기</a>
        </div>
      </main>

      <section className="features-section" id="features">
        <h2>주요 기능</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>동승 방 검색</h3>
            <p>출발지, 도착지, 시간을 설정하여 원하는 조건의 방을 검색할 수 있습니다.</p>
          </div>
          <div className="feature-card">
            <h3>방 개설</h3>
            <p>출발지, 도착지, 시간을 설정하여 새로운 동승 방을 개설할 수 있습니다.</p>
          </div>
          <div className="feature-card">
            <h3>채팅 기능</h3>
            <p>동승자들과 채팅을 통해 시간과 장소를 조율할 수 있습니다.</p>
          </div>
          <div className="feature-card">
            <h3>정산 관리</h3>
            <p>동승 후 간편하게 정산 현황을 확인하고 관리할 수 있습니다.</p>
          </div>
        </div>
      </section>

      <footer className="taxi-footer">
        <p>© 2025 TaxiHeXA - UNIST</p>
      </footer>
    </div>
  );
};

export default TaxiHeXAHome;
