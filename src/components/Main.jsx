import './Main.css';
import thumbnail from "/assets/thumbnail1.jpg"
import NewsList from "./NewsList"

function Main() {
  return (
    <main className="main">
      <section className="featured-news">
        <div className="featured-news-title">
          <h1>&gt; 주요뉴스</h1>
        </div>
        <div className="featured-news-content">
          <div className="featured-thumbnail">
            <img src={ thumbnail } />
          </div>
          <div className="news-content">
            <h2 className="news-title">대법 '이재명 사건' 결론 언제…대선후보 등록 전? 5월22일?</h2>
            <p className="news-summary">5월 전원합의체 심리일은 22일…별도기일 지정해 선고 가능 / 정치권 영향 고려시 더 빨리…합의·판단 물리적 시간 변수</p>
          </div>
        </div>
      </section>
      <NewsList />
    </main>
  );
}

export default Main;
