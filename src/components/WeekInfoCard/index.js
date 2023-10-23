import React, {useState, useEffect} from 'react';
import { UseWeatherAppContext } from "../../Context/Context";
import SingleCardComponents from '../SingleCard';
import { type } from '@testing-library/user-event/dist/type';

const WeekInfoCardComponents = ()=>{  
    const {state:{daily},dispatch} = UseWeatherAppContext();
    const [selectedCard, setSelectedCard] = useState(0);
    //console.log('daily',daily);

        const updateCurrent = ()=>{
            return (
                dispatch({
                    type:'SET_CURRENT',
                    payload:daily[selectedCard]
                })
            )
        }

       useEffect(() => {
            updateCurrent();
            // eslint-disable-next-line
          }, [daily, selectedCard]);
return (
        <>
            <div className='cardWrap'>
                <ul className='cardList'>
                    {
                        daily && daily.length > 0 ? daily.map((item, index)=>{
                            if(index < 7){
                                return (
                                <SingleCardComponents key={index} item={item} className= {index === selectedCard ? 'active': ''} onClick={()=>{
                                    setSelectedCard(index);
                                    updateCurrent();
                                }}/>
                                )
                            } 
                        }) : ''
                    }
                </ul>
            </div>
        </>
    )
}
export default WeekInfoCardComponents;