import "./PageHeader.scss";

function PageHeader() {
  return (
    <div className="pageheader">
      <div className="top">
        <h1>SALE</h1>
        <button className="button" type="button">
          SET A BUDGET
        </button>
      </div>
      <div className="bottom">
        <div className="bottom-left">
          <p1>Filter by</p1>
          <div>
            <p2 className="tags">&#9679;Deals</p2>
            <p2 className="tags">&#9679;Bought Before</p2>
          </div>
        </div>
        <div className="bottom-right">
          <p1>Sort by</p1>
          <p2>Relevance</p2>
        </div>
      </div>
    </div>
  );
}
export default PageHeader;
