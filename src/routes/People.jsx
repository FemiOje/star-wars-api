import { useState, useEffect } from 'react'
import Loading from '../components/Loading'

const People = () => {
  const [peopleData, setPeopleData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => {
        setPeopleData(data.results)
        setIsLoading(false)
      })
      .catch(error=> {
        console.log(error)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="m-auto">
      {
        isLoading ? <Loading /> : 
          peopleData.length ? <div className="flex flex-wrap justify-start">
            {peopleData.map((person, id) => {
              return (
                <PeopleCard
                  key={id}
                  name={person.name}
                  birth_year={person.birth_year}
                  eye_color={person.eye_color}
                />)
            })}
          </div> : <p className='text-center text-gray-500 font-semibold my-[20vh]'>Please check your internet connection and try again.</p>
        
      }
    </div>
  )
}

const PeopleCard = ({ name, birth_year, eye_color }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
        <p className='text-gray-700 text-base'>Born: {birth_year}</p>
        <p className='text-gray-700 text-base'>Eye color: {eye_color}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
  )
}

export default People