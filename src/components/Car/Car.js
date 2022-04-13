import {carService} from "../../services";

export const Car = ({car, setUserForUpdate,setDelCar}) => {

    const {id, model, price, year} = car;

    const deleteCar = async () => {
        await carService.deleteById(id)
        setDelCar(id)
    }

    return (
        <div>
            <div>Id.........{id}</div>
            <div>Model..{model}</div>
            <div>Price....{price}</div>
            <div>Year.....{year}</div>
            <br/>
            <button onClick={() => deleteCar()}>Delete this Car</button>
            <button onClick={()=>setUserForUpdate(car)}>Update</button>
        </div>
    );
};