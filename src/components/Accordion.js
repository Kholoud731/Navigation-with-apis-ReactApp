import React, {useState} from "react";

const Accordion = ({items}) => {

    const [activeIndex, setIndex] = useState(null)

    const onClickHandeler = (index)=>{

        setIndex(index)
    }


    return ( 
        <div className="ui styled accordion">

            {items.map((elm, index) => {
                const active = index === activeIndex ? 'active' : ''
                return <React.Fragment key={elm.title}> 
                    <div 
                    className={`title ${active}`}
                    onClick={() => onClickHandeler(index)}
                    > 
                        <i className="dropdown icon" />
                        {elm.title}
                    </div>
                    <div className={`content ${active}`}>
                        <p>{elm.content}</p>
                        </div>
                </ React.Fragment >
            })}

        </div>
     );
}
 
export default Accordion;