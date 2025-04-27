import './NewsList.css';
import articles from '../data/articles.json';
import { Link } from 'react-router-dom';


function NewsList() {
  return (
    <section className="news-list-box">
      <div className="news-list-title">
        <h1>&gt; 전체뉴스</h1>
      </div>
      {
        articles.map(article => (
          <Link to={`/news/${article.id}`} key={article.id} className="news-item-link">
            <div key={ article.id } className="news-item">
              <div className="news-thumbnail">
                <img src={`/assets/${article.thumbnail}`}/>
              </div>
              <div className="news-info">
                <h2 className="news-item-title">
                  { article.title }
                </h2>
                <a class="news-item-summary">{ article.summary }</a>
              </div>
            </div>
          </Link>
        ))}
    </section>
  );
}

export default NewsList;