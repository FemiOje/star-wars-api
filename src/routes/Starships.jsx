import { useState, useEffect } from 'react';
import Loading from '../components/Loading';

const Starships = () => {
  const [starshipsData, setstarshipsData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("https://swapi.dev/api/starships")
      .then(res => res.json())
      .then(data => {
        setstarshipsData(data.results)
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])

  console.log("starships data: ", starshipsData);

  return (
    <div>
      {isLoading ? <Loading /> : (
        <>
          <div className="m-auto">
            {
              isLoading ? <Loading /> :
                starshipsData.length ? <div className="flex flex-wrap justify-start">
                  {starshipsData.map((starship, id) => {
                    return (
                      <StarshipsCard
                        key={id}
                        name={starship.name}
                        max_atmosphering_speed={starship.max_atmosphering_speed}
                        model={starship.model}
                        passengers={starship.passengers}
                        starship_class={starship.starship_class}
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

const StarshipsCard = ({ name, max_atmosphering_speed, model, passengers, starship_class }) => {
  return (
    <div className="w-screen sm:max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Max Speed: {max_atmosphering_speed}</p>
        <p className='text-gray-700 text-base'>Model: {model}</p>
        <p className='text-gray-700 text-base'>Passengers: {passengers}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{starship_class}</span>
      </div>
    </div>
  )
}

export default Starships