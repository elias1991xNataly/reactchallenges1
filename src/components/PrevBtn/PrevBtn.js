import React, { useContext} from 'react';
import { UserContext } from '../Counter/Counter';



export default function NextBtn() {
	const {count, setCount} = useContext(UserContext);
	return (
		<button onClick={()=> setCount((count)=>count - 1)}> -</button>

	)

};
