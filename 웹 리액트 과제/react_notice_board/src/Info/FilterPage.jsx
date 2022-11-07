import React from "react";
import Buttonall from "./Buttonall";
import Navy_all from "../componants/NavyAll";
import { useSearchParams } from "react-router-dom";
import dummy from "../data.json";
import ImgNewInfo from "./ImgNewsInfo";

const FilterPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchKeyword = searchParams.get("query");

  const filtered = dummy.company.filter((cp) => cp.job.includes(searchKeyword));

  return (
    <div>
      <Navy_all />
      <div className="searchKeyword">
        <div>
          <h1>{searchKeyword}</h1>
        </div>
      </div>
      <div></div>
      <div className="withNav">
        <section>
          <article className="header_article">
            <div>
              <button>
                <span>포지션 16</span>
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
      <div className="ImgNewsInfoFlexFlex">
        <ul className="ImgNewsInfoFlex">
          {filtered.map((cp) => {
            return (
              <ImgNewInfo
                key={cp.id}
                id={cp.id}
                src={cp.src}
                job={cp.job}
                is={cp.is}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FilterPage;
