import {useState,useEffect} from 'react'

function useRandomJoke (firstName,lastName) {
    const [joke, setJoke] = useState("");
    useEffect(() => {
        const fetchJokes = async()=>
         await fetch(`https://official-joke-api.appspot.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)
          .then((response) => response.json())
          .then((data) => setJoke(`${data.setup} - ${data.punchline}`))
          fetchJokes();
      }, [firstName,lastName]);
  return joke;
}

export default useRandomJoke
