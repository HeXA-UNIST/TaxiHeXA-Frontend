'use client';

const days = ['일', '월', '화', '수', '목', '금', '토'];

function getTodaySortedDays() {
  const today = new Date().getDay(); // 오늘 요일 (0 ~ 6)
  return [...days.slice(today), ...days.slice(0, today)];
}

const sortedDays = getTodaySortedDays();

const taxiData = [
  {
    id: 1,
    title: 'UNIST → 태화강역',
    date: '2025-05-27T18:00:00',
    people: '2명 / 4명',
  },
  {
    id: 2,
    title: 'UNIST → 공업탑',
    date: '2025-05-27T21:30:00',
    people: '1명 / 4명',
  },
  {
    id: 3,
    title: 'UNIST → 태화강역',
    date: '2025-05-28T19:00:00',
    people: '3명 / 4명',
  },
  {
    id: 4,
    title: 'UNIST → 시외버스터미널',
    date: '2025-05-29T16:00:00',
    people: '1명 / 4명',
  },
];

function groupByDay(data: typeof taxiData) {
  const result: Record<string, typeof taxiData> = {};
  data.forEach((item) => {
    const day = days[new Date(item.date).getDay()];
    if (!result[day]) result[day] = [];
    result[day].push(item);
  });

  // 각 요일 내 정렬
  for (const day in result) {
    result[day].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }

  return result;
}

export default function PageFunctionName() {
  const grouped = groupByDay(taxiData);

  return (
    <>
      {/* 상단 고정 네비 */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#111',
          color: 'white',
          padding: '12px 20px',
          fontSize: '20px',
          fontWeight: 'bold',
          textAlign: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 999,
        }}
      >
        TaxiHeXA
      </div>

      {/* 본문 */}
      <div
        style={{
          background: '#fff',
          minHeight: '100vh',
          padding: '20px',
          color: 'black',
          textAlign: 'center',
        }}
      >
        <h1 style={{ marginBottom: '20px' }}>요일별 출발하는 방</h1>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '30px',
          }}
        >
          {sortedDays.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {sortedDays.map((day) =>
          grouped[day] ? (
            <section key={day} style={{ marginBottom: '40px' }}>
              <h2 style={{ marginBottom: '10px', color: '#333' }}>{day}요일</h2>
              {grouped[day].map((item) => (
                <div key={item.id} style={cardStyle}>
                  <h3>{item.title}</h3>
                  <p>
                    {new Date(item.date).toLocaleString('ko-KR', {
                      dateStyle: 'full',
                      timeStyle: 'short',
                    })}
                  </p>
                  <p>인원: {item.people}</p>
                </div>
              ))}
            </section>
          ) : null
        )}
      </div>
    </>
  );
}

const cardStyle = {
  backgroundColor: 'white',
  borderRadius: '10px',
  padding: '15px 20px',
  boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
  marginBottom: '15px',
  textAlign: 'left' as const,
};
