import { Fragment } from "react";
import { Overlay, ModalContent, CloseModal, Inputs, FormBody, Error} from "./modalBookCarStyles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";



const ModalBooking =  ({showModal, setShowModal}) => {
    const navigate = useNavigate();
     /* Para detener el scroll del fondo */    
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
    const onSubmit = (data) => {
        //alert("Youa have made a reservation!"+ defaultValue)
    };

    return (
        <Fragment>
            { 
                showModal ? 
                <>
                    <Overlay onClick={() => setShowModal (prev => !prev)} ></Overlay>   
                    <ModalContent>
                        <FormBody onSubmit={handleSubmit(onSubmit)}>
                            
                            <h2> BOOK YOUR CAR </h2>
                            
                            <label htmlFor={"date"} >Choose a date</label>
                            {errors.date && <Error >{errors.date.message}</Error>}
                            <Inputs type={"date"} id={"date"} min={defaultValue}  placeholder={defaultValue} 
                                {...register('date', {required: 'Please select a date'})} 
                            />

                            <label htmlFor={"time"} >Choose an hour to get it!</label>
                            {errors.time && <Error >{errors.time.message}</Error>}
                            <Inputs type={"time"} id={"time"} 
                                {...register('time', {required: 'Please select an hour'})}
                            /> 

                            <Inputs type="submit" /* value="Booking" */ estilo={"BtnSignIn"} />

                            <CloseModal  onClick={() => setShowModal (prev => !prev)}>
                                close
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