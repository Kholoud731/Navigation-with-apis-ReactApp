import React, {useState, useEffect} from "react";

const Dropdown = ({options, selected, onSelectedChange, label}) => {

    const [open, setOpen] = useState(false)

    useEffect(()=>{
        const onBodyClick = ()=>{
            console.log('body clicked')
            setOpen(false)
        }
        document.body.addEventListener('click',onBodyClick)
        return ()=>{
            document.body.removeEventListener('click', onBodyClick)
        }
    },[])

    const renderedOptions = options.map((option) => {
        if(option.value === selected.value){
            return null
        } else {
            return <div 
                key= {option.value} 
                onClick={()=>onSelectedChange(option)}
                className="item">
                    {option.lable}
                </div>
        }

    })

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div 
                className={`ui selection dropdown ${open? 'visible active': ''}`}
                onClick={(e)=>{
                    setOpen(!open)
                    e.stopPropagation()
                }
                    
                }
                
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.lable}</div>
                    <div 
                    className={`menu ${open ? 'visible transition': ''}`}
                    >
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default Dropdown;