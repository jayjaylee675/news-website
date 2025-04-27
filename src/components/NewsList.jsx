import './NewsList.css';
import thumbnail from '../assets/thumbnail1.jpg';  // 예시 이미지

function NewsList() {
  return (
    <section className="news-list-box">
      <div className="news-list-title">
        <h1>&gt; 전체뉴스</h1>
      </div>
      <div className="news-item">
        <div className="news-thumbnail">
          <img src={thumbnail} alt="뉴스 썸네일" />
        </div>
        <div className="news-info">
          <h2 className="news-item-title">뉴스 제목 1</h2>
        </div>  
      </div>

      <div className="news-item">
        <div className="news-thumbnail">
          <img src={thumbnail} alt="뉴스 썸네일" />
        </div>
        <div className="news-info">
          <h2 className="news-item-title">뉴스 제목 2</h2>
        </div>
      </div>

      {/* 필요하면 더 추가 */}
    </section>
  );
}

export default NewsList;
