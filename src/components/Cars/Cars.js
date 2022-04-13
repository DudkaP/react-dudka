import {useEffect, useState} from "react";
import {carService} from "../../services";
import {Car} from "../Car/Car";


export const Cars = ({newCar, setUserForUpdate, userForUpdate}) => {

    const [cars, setCars] = useState([]);
    const [delCar, setDelCar] = useState(null);

    useEffect(() => {
        if (delCar) {
            // console.log(delCar)
            carService.getAll().then(({data}) => setCars(data));
        }
    }, [delCar])

useEffect(() => {
        if (userForUpdate == null) {
            carService.getAll().then(({data}) => setCars(data));
        }
    }, [userForUpdate==null])


    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, []);

    useEffect(() => {
        if (newCar) {
            // setCars(...cars, cars)
            setCars(prevState => [...prevState, newCar])
        }
    }, [newCar])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setUserForUpdate={setUserForUpdate} setDelCar={setDelCar}/>)}
        </div>
    );
};