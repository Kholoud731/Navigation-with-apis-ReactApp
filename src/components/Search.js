import React, {useState, useEffect} from "react";
import axios from "axios";


const Search = () => {

    const [term, setTerm] = useState("Programming")
    const [results, setResults] = useState([])
    
    useEffect(()=>{

        axios.get("https://en.wikipedia.org/w/api.php",{
            params:{
                action: 'query',
                list:'search',
                origin:'*',
                format:'json',
                srsearch : term
            }

        }).then(resp => {
            setResults(resp.data.query.search)
        }).catch(error => {
            console.log(error)
        })


    }, [term])

    const onChangeHandeler =(e)=>{
        setTerm(e.target.value)
    }

    const resultData = results.map(item => {
        return <div key={item.pageid} className="item ui segment">

                <div className="ui header"> {item.title}</div>
                <div className="ui content">
                    <span dangerouslySetInnerHTML={{__html: item.snippet}}></span>
                </div>
                <div className="right floated content">
                    <a
                    className="ui button"
                    href={`https://en.wikipedia.org?curid=${item.pageid}`}
                    >Go</a>
                </div>


        </div>
    })

    return ( 
        <div className="ui segment">
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Keys:</label>
                    <input 
                    className="input"
                    value = {term}
                    onChange={onChangeHandeler}
                    />
                </div>
            </div>
            {resultData}
        </div>
     );
}
 
export default Search;