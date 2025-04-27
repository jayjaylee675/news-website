import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-content">
        <a href="#">일반</a>
        <a href="#">스포츠</a>
        <a href="#">학술</a>
        <a href="#">문화</a>
        <a href="#">교내정치</a>
        <a href="#">교외정치</a>
        <a href="#">칼럼</a>
        <a href="#">홍보자료</a>
        <a href="#">만화</a>

        <div className="divider" />
      
        <a href = "#"> 기사 만들기 </a>
      </div>


    </nav>
  );
}

export default Nav;
