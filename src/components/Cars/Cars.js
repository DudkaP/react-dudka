import {useEffect, useState} from "react";
import {carService} from "../../services";
import {Car} from "../Car/Car";

export const Cars = ({newCar}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, []);

    useEffect(()=>{
        if(newCar){
            // setCars(...cars, cars)
            setCars(prevState => [...prevState, newCar])
        }
    },[newCar])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};