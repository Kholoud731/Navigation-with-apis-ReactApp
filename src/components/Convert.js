import React, {useState, useEffect} from "react";
import axios from "axios";

const Convert = ({language, text}) => {

    const [translation, setTranslation] = useState('')
    const [debounce, setDebounce] = useState('')

    useEffect(()=>{
        const timerID = setTimeout(()=>{
            setDebounce(text)
        },500);

        return ()=>{
            clearTimeout(timerID)
        };},[text]);

    useEffect(()=>{
        axios.post('https://translation.googleapis.com/language/translate/v2',{},{
                params:{
                    q:debounce,
                    target:language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
    
                }
            }).then(resp => {
                setTranslation(resp.data.data.translations[0].translatedText)
            })        
    },[language, debounce])

    return ( 

        <div>
            {translation}
        </div>
     );
}
 
export default Convert;