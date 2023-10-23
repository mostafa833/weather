import React from "react";
import ChooseStateComponents from "../../components/ChooseState";
import WeekInfoCardComponents from "../../components/WeekInfoCard";
import HumidityComponents from "../../components/HUMIDITY";
import LeftComponents from "../../components/Left";

const HomeComponents = () => {
    return (
        <>
        <div className="homeWrap">
            <div className="weatherSection">
                    <LeftComponents/>
                  <div className="rightSide">
                    <ChooseStateComponents/>
                    <WeekInfoCardComponents/>
                    <HumidityComponents/>
                </div>
            </div>
        </div>
        </>
    )
}
export default HomeComponents;