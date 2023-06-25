import { useState, useEffect } from "react";
import Loading from "../components/Loading";

const Planets = () => {
  const [planetsData, setPlanetsData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("https://swapi.dev/api/planets")
      .then(res => res.json())
      .then(data => {
        setPlanetsData(data.results)
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])

  console.log("Planets data: ", planetsData);

  return (
    <div>
      {isLoading ? <Loading /> : (
        <>
          <div className="m-auto">
            {
              isLoading ? <Loading /> :
                planetsData.length ? <div className="flex flex-wrap justify-start">
                  {planetsData.map((planet, id) => {
                    return (
                      <PlanetsCard
                        key={id}
                        name={planet.name}
                        population={planet.population}
                        diameter={planet.diameter}
                        climate={planet.climate}
                        terrain={planet.terrain}
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


const PlanetsCard = ({ name, population, diameter, climate, terrain }) => {
  return (
    <div className="w-screen sm:max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Population: {parseInt(population) ? parseInt(population).toLocaleString():  population}</p>
        <p className='text-gray-700 text-base'>Diameter: {parseInt(diameter).toLocaleString()}</p>
        <p className='text-gray-700 text-base'>Climate: {climate}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{terrain}</span>
      </div>
    </div>
  )
}

export default Planets