import axios from 'axios'
import { useEffect, useRef, useState } from 'react';

const GetAllMovie = () => {
    const [movies, setMovies] = useState();

    useEffect(() => {
        axios
            .get('https://backendmoviebookingv001.herokuapp.com/movie/all')
            .then(function (res) {
                setMovies(res.data.data)
            })
            .catch((error) => console.log(error))
    }, []);
}

export var movies
export default GetAllMovie