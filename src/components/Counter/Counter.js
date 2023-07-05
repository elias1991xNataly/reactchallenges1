import React, { createContext, useState } from "react";

export const UserContext = createContext(0);

export default function UserContextProvider({ children }) {
	const [count, setCount] = useState(0);

	return (
		<UserContext.Provider value={{ count, setCount }}>
			<p>{count}</p>
			{children}
		</UserContext.Provider>
	)
}
