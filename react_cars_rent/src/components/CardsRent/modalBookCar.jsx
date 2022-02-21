import { Fragment } from "react";
import { Overlay, ModalContent, CloseModal, Inputs, FormBody, ErrorModal} from "./modalBookCarStyles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";



const ModalBooking =  ({showModal, setShowModal, cars}) => {
    const navigate = useNavigate();
     /* Para detener el scroll del fondo del Modal*/    
    if(showModal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }   
   /* Para setear el placeholder del la fecha a la fecha del día en curso */
    const today = new Date();
    const date = today.setDate(today.getDate()); 
    const defaultValue = new Date(date).toISOString().split('T')[0] // yyyy-mm-dd
    /* Handle del el submit del formulario de fecha y hora de la reserva */
    const {register, formState: {errors}, handleSubmit} = useForm();
    const onSubmit = (data,e) => {
        e.preventDefault();
        console.log("la hora seleccionada ha sido "+ data.time + " para el día " + data.date)
        navigate("/renta")
    };
    

    return (
        <Fragment>
            { 
                showModal ? 
                <>
                    <Overlay onClick={() => setShowModal (prev => !prev)} ></Overlay>   
                    <ModalContent>
                        <FormBody onSubmit={handleSubmit(onSubmit)}>
                            
                            <h3> BOOK YOUR CAR </h3>
                             <p>{ cars.model }</p>  
                            <label htmlFor={"date"} >Choose a date</label>
                            {errors.date && <ErrorModal >{errors.date.message}</ErrorModal>}
                            <Inputs type={"date"} 
                                id={"date"} 
                                min={defaultValue}  
                                defaultValue={""}
                                {...register('date', {required: 'Please select a date'})} 
                            />

                            <label htmlFor={"time"} >Choose an hour to get it!</label>
                            {errors.time && <ErrorModal >{errors.time.message}</ErrorModal>}
                            <Inputs type={"time"} 
                                id={"time"}   
                                min="07:00" 
                                max="24:00"
                                {...register('time', {required: 'Please select an hour'})}
                            /> 
                            <Inputs type="submit"  value="Booking"  estilo={"Booking"} />

                            <CloseModal  onClick={() => setShowModal (prev => !prev)}>
                            <i className="fa fa-times" aria-hidden="true"></i>
                            </CloseModal>
                        </FormBody>
                    </ModalContent>  
                </>  
                : null
            } 
        </Fragment>
    )
};
export default ModalBooking;