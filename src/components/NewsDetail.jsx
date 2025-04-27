import './NewsDetail.css';
import { useParams } from 'react-router-dom';
import articles from '../data/articles.json';

function NewsDetail() {
  const { id } = useParams();
  const article = articles.find((item) => item.id === parseInt(id));

  if (!article) return <div>기사를 찾을 수 없습니다.</div>;

  return (
    <main className="news-detail">
      <div className="news-detail-thumbnail">
        <img src={`/assets/${article.thumbnail}`} alt={article.title} />
      </div>
      <div className="news-detail-content">
        <h1 className="news-detail-title">{article.title}</h1>
        <p className="news-detail-body">{article.content}</p>
      </div>
    </main>
  );
}

export default NewsDetail;
