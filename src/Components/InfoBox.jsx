import React from "react";
import {Card,CardContent,Typography} from "@material-ui/core"



const InfoBox = ({title,currentCasesType,cassesType,casses,total,danger,onInfoClick}) => {
    return (
        <div className={`infoBox__element ${cassesType === currentCasesType ? "infoBox__element__selected" :"" }`} onClick={()=> onInfoClick(cassesType)}>

        <Card className="infoBox">
            <CardContent>
              <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
              <h2 className={`infoBox__casses ${danger?"infoBox__danger":"infoBox__info"}`}>+{casses}</h2>
              <Typography className="infoBox__total" color="textSecondary">{total}</Typography>
            </CardContent>
        </Card>
        </div>
    );
}
export default InfoBox;