import { useState, useEffect } from 'react';
import Loading from '../components/Loading';

const Films = () => {

  const [filmsData, setFilmsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((res) => res.json())
      .then((data) => {
        setFilmsData(data.results)
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])

  console.log("FilmsData", filmsData);


  return (
    <div>
      {isLoading ? <Loading /> : (
        <>
          <div className="m-auto">
            {
              isLoading ? <Loading /> :
                filmsData.length ? <div className="flex flex-wrap justify-start">
                  {filmsData.map((film, id) => {
                    return (
                      <FilmsCard
                        key={id}
                        title={film.title}
                        opening_crawl={film.opening_crawl}
                        producer={film.producer}
                        director={film.director}
                        release_date={film.release_date}
                      />)
                  })}
                </div> : <p className='text-center text-gray-500 font-semibold my-[20vh]'>Please check your internet connection and try again.</p>

            }
          </div>
        </>
      )
      }
    </div>
  )

}

const FilmsCard = ({ title, opening_crawl, director, producer, release_date }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-5">
          {opening_crawl}
        </p>
        <p className='text-gray-700 text-base'><strong>Director: </strong> {director}</p>
        <p className='text-gray-700 text-base'><strong>Producers: </strong> {producer}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Release: {release_date}</span>
      </div>
    </div>
  )
}

export default Films