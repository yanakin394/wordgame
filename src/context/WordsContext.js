import { createContext } from "react";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import GET from './service/GET';

export const WordsContext = createContext();

export function WordsContextComponent({children}){
    //context
    const [words, setWords] = useState(false);
    const value = {words, setWords};
    useEffect(()=>{
            getWordsServer();
    },[])

    async function getWordsServer() {                 //функция для запроса слов с сервера, используем файл ГЕТ.джс
    const wordsServer =  await GET.getWords();
    setWords(wordsServer);
    }  
    if(!words)return <Loader/>  //пока не загрузились слова, отображается лоадер
    return (
        <WordsContext.Provider value={value}>
            {children}
        </WordsContext.Provider>
    )
}