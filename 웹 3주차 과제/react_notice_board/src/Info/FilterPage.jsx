import React from "react";
import Buttonall from "./Buttonall";
import Navy_all from "../componants/NavyAll";

const FilterPage = () => {
  return (
    <div>
      <Navy_all />
      <div className="withNav">
        <section>
          <article className="header_article">
            <div>
              <button>
                <span>개발</span>
                <span>
                  <i className="fa-solid fa-circle-down"></i>
                </span>
              </button>
              <p> | </p>
              <button>
                <span>개발 전체</span>
                <span>
                  <i className="fa-solid fa-circle-down"></i>
                </span>
              </button>
            </div>
          </article>
          <section>
            <div className="Header_article_buttoncenter">
              <div className="header_article_buttonflex">
                <div>
                  <button>
                    <span className="header_article_buttonflex_span">지역</span>
                    <span>
                      한국 <i className="fa-solid fa-circle-down"></i>
                    </span>
                  </button>
                  <button>
                    <span className="header_article_buttonflex_span">경력</span>
                    <span>
                      전체 <i className="fa-solid fa-circle-down"></i>
                    </span>
                  </button>
                  <button>
                    <span className="header_article_buttonflex_span">
                      기술스택 <i className="fa-solid fa-circle-down"></i>
                    </span>
                  </button>
                </div>
                <div>
                  <button>
                    <span>
                      응답률순 <i className="fa-solid fa-circle-down"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <Buttonall />
        </section>
      </div>
    </div>
  );
};

export default FilterPage;
