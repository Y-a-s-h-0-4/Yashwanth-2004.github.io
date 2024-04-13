import { useState, useEffect } from 'react';
import { axiosWithToken } from '../../axiosWithToken';
import { useNavigate, Outlet } from 'react-router-dom'
import img from '../../Assets/no-posts.jpg'

function Articles() {

  const [articlesList, setArticlesList] = useState([]);
  let navigate = useNavigate()

  const getArticlesOfCurrentAuthor = async () => {
    let res = await axiosWithToken.get(`http://localhost:4000/user-api/articles`)
    setArticlesList(res.data.payload)
  }


  const readArticleByArticleId = (articleObj) => {
    navigate(`../article/${articleObj.articleId}`, { state: articleObj })
  }


  useEffect(() => {
    getArticlesOfCurrentAuthor()
  }, [])



  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-5">
        {
          articlesList.length === 0 ? (
            <>
          <img src={img} alt="" className="w-50 d-block mx-auto"/>
            </>
          ) : (
            <>
              {articlesList.map((article) => (
                <div className="col" key={article.articleId}>
                  <div className="card articles-card h-100">
                    <div className="card-body articles-card">
                      <h5 className="card-title">{article.title}</h5>
                      <p className="card-text">
                        {article.content.substring(0, 80) + "...."}
                      </p>
                      <p>~{article.username}</p>
                      <button className="btn btn-light" onClick={() => readArticleByArticleId(article)}>
                        <span>Read More</span>
                      </button>
                    </div>
                    <div className="card-footer">
                      <small className="text-body-secondary">
                        Last updated on {article.dateOfModification.substring(0,10)}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )
        }
      </div>
      <Outlet />
    </div>
  )
}

export default Articles