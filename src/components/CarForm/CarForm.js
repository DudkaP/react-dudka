import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi"
import {carValidator} from "../../validators";

export const CarForm = ({setNewCar, userForUpdate, setUserForUpdate}) => {
    // const [formError, setFormError] = useState({});
    const {register, reset, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onTouched"
    });

    useEffect(() => {
        if (userForUpdate) {
            const {model, price, year} = userForUpdate;
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
    }, [userForUpdate])

    const mySubmit = async (car) => {
        if (userForUpdate) {
            // await console.log(car);
            await carService.updateById(userForUpdate.id, car);
            await setUserForUpdate(null);
            reset();


        } else {
            const {data} = await carService.create(car);
            setNewCar(data);
            reset();
        }
    }

    return (
        <form onSubmit={handleSubmit(mySubmit)}>
            <div>{userForUpdate && userForUpdate.id}</div>
            <div><label>Model:<input type="text" {...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            {/*{formError.model && <span>{formError.model[0]}</span>}*/}
            <div><label>Price:<input type="number" {...register('price', {valueAsNumber: true})}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            {/*{formError.price && <span>{formError.price[0]}</span>}*/}
            <div><label>Year:<input type="number" {...register('year', {valueAsNumber: true})}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            {/*{formError.year && <span>{formError.year[0]}<br/></span>}*/}
            <button>Save</button>
        </form>
    );
};