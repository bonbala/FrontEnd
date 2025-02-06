import { createContext, useState,useEffect } from "react";
import axios from "axios";
export const ThemeContext = createContext(null)



export const ThemeProvider = ({children}) => {
    const [listShoes, setlistShoes] = useState([])
    const [user, setUser] = useState({name:'', image:''})
    const [theme,setTheme] = useState(true)
    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get("https://shop.cyberlearn.vn/api/Product");
            const data = response.data.content.filter((p,index) => index < 10)
            localStorage.setItem("Products", JSON.stringify(data))
            setlistShoes(data)
          } catch (error) {
            console.error("error:", error);
          }
        };
    
        getData();
      }, []);
    return  <ThemeContext.Provider value={{listShoes,user,setUser,theme,setTheme}}>{children}</ThemeContext.Provider>
}