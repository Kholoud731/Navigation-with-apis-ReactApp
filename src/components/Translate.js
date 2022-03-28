import React, {useState} from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
    {
        lable:'Afrokaans',
        value:'af'
    },
    {
        lable:'Arabic',
        value:'ar'
    },
    {
        lable:'Hindi',
        value:'hi'
    },

]

const Translate = () => {

    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')
    


    const onChangeHandeler = (e)=>{
        e.preventDefault()
        setText(e.target.value)
    }

    return ( 
        <div>
            <div className="ui segment">
                <div className="ui form">
                    <div className="field">
                        <label>Enter Your Text</label>
                        <input value={text} onChange={(e)=>onChangeHandeler(e)} />
                    </div>
                </div>
            </div>

            <div className="ui segment">
                <Dropdown 
                label="Select A Language"
                selected = {language}
                onSelectedChange = {setLanguage}
                options = {options}/>
            </div>

            <div className="ui segment">
                <h3 className="ui header">Out Put</h3>
                <Convert
                        language={language}
                        text={text}
                        />
            </div>
        </div>
     );
}
 
export default Translate;