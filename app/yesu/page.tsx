'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './style.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { ko, enUS } from 'date-fns/locale';

const date = new Date();

const formattedKo = format(date, 'PPP', { locale: ko });
const formattedEn = format(date, 'PPP', { locale: enUS });

console.log('한국어:', formattedKo);
console.log('영어:', formattedEn);

const translations = {
  ko: {
    title: 'UNIST 택시 매칭',
    subtitle: 'UNIST 학생들을 위한 빠르고 쉬운 택시 동승 플랫폼',
    origin: '출발지',
    destination: '도착지',
    search: '방 검색',
    estimate: '예상 요금 및 시간',
    fee: '요금: 약 ₩12,000 | 소요 시간: 약 25분',
    recent: '최근 열린 방',
    create: '방 만들기',
    review: '동승자 후기',
    reviewText: '⭐⭐⭐⭐☆ | "매너 좋고 편했습니다!"',
    login: '로그인',
    from: '출발',
    people: '인원',
    currency: '₩',
    locations: {
      unist: 'UNIST',
      ulsan: '울산역',
      airport: '공항',
    },
  },
  en: {
    title: 'UNIST Taxi Matching',
    subtitle: 'A fast and easy taxi sharing platform for UNIST students',
    origin: 'Departure',
    destination: 'Destination',
    search: 'Search Rooms',
    estimate: 'Estimated Fare & Time',
    fee: 'Fare: ~KRW 12,000 | Duration: ~25 min',
    recent: 'Recently Opened Rooms',
    create: 'Create Room',
    review: 'Passenger Review',
    reviewText: '⭐⭐⭐⭐☆ | "Polite and comfortable ride!"',
    login: 'Login',
    from: 'Departure',
    people: 'people',
    currency: 'KRW',
    locations: {
      unist: 'UNIST',
      ulsan: 'Ulsan Station',
      airport: 'Airport',
    },
  },
};

const MainPage = () => {
  const [language, setLanguage] = useState('ko');
  const [filters, setFilters] = useState({
    origin: '',
    destination: '',
    time: '',
  });
  const [selectedDate, setSelectedDate] = useState(null);

  const router = useRouter();
  const t = translations[language];

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleRoomClick = (roomId) => {
    router.push(`/room/${roomId}`);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo} onClick={() => router.push('/yesu')}>
          🚖 TaxiHeXA
        </h1>
        <select
          className={styles.langSelect}
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="ko">한국어</option>
          <option value="en">English</option>
        </select>
        <button className={styles.loginBtn} onClick={() => router.push('/login')}>
          {t.login}
        </button>
      </header>

      <section className={styles.intro}>
        <h2>{t.title}</h2>
        <p>{t.subtitle}</p>
      </section>

      <section className={styles.filters}>
        <input
          type="text"
          name="origin"
          placeholder={t.origin}
          value={filters.origin}
          onChange={handleChange}
        />
        <input
          type="text"
          name="destination"
          placeholder={t.destination}
          value={filters.destination}
          onChange={handleChange}
        />
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
            setFilters({ ...filters, time: date.toISOString() });
          }}
          showTimeSelect
          timeIntervals={10}
          dateFormat="Pp"
          placeholderText={language === 'ko' ? '날짜와 시간을 선택하세요' : 'Select date and time'}
          locale={language === 'ko' ? ko : enUS}
        />
        <button className={styles.searchBtn} onClick={() => router.push('/search')}>
          {t.search}
        </button>
      </section>

      {/* ✅ 클릭 시 /fare 페이지로 이동 */}
      <section
        className={styles.estimation}
        onClick={() => router.push('/fare')}
        style={{ cursor: 'pointer' }}
      >
        <h3>{t.estimate}</h3>
        <p>{t.fee}</p>
      </section>

      <section className={styles.recentRooms}>
        <h3>{t.recent}</h3>
        <div className={styles.roomBox} onClick={() => handleRoomClick(1)}>
          {t.locations.unist} → {t.locations.ulsan} | 15:30 {t.from} | 3/4 {t.people}
        </div>
        <div className={styles.roomBox} onClick={() => handleRoomClick(2)}>
          {t.locations.unist} → {t.locations.airport} | 16:10 {t.from} | 2/4 {t.people}
        </div>
      </section>

      <section className={styles.actions}>
        <button className={styles.createBtn} onClick={() => router.push('/create')}>
          {t.create}
        </button>
      </section>

      {/* ✅ 클릭 시 /review 페이지로 이동 */}
      <section
        className={styles.rating}
        onClick={() => router.push('/review')}
        style={{ cursor: 'pointer' }}
      >
        <h3>{t.review}</h3>
        <p>{t.reviewText}</p>
      </section>

      <footer className={styles.footer}>
        © 2025 TaxiHeXA - UNIST
      </footer>
    </div>
  );
};

export default MainPage;
