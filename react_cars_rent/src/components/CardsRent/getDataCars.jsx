import { collection, getDocs } from "firebase/firestore";
import { Fragment, useState, useEffect } from "react";
import { db } from "../../firebase/firebaseconfig";



export function GetDataCars () {
    const [cars, setCars] = useState ([]);
    const carsCollectionRef = collection(db,  "cars")

    useEffect(() => {
        const getData = async () => {
            const datos = await getDocs(carsCollectionRef);
            //console.log(datos.docs[0].data().doors)
            console.log(datos)
               /* datos.forEach((doc) => {
                //console.log(doc.data());
                setCars(doc.data())
              }); */
        }
        getData();
    }, [])
    return (
        <Fragment>
        
            
        </Fragment>
    )

};


/* METODOD CON DATA HARDCODEADA */
 /* const DescripcionCar =  data.map ((items, id) => {
     
        return (
            <Fragment>
                    <Card key={id} >
                        <CardSectionA  >
                            <CardSectionA estilo={"CardSectionA_1"}>
                                <ImgCar  src={items.img}></ImgCar>
                                <Botones estilo={"BotonBook"}>Book vehicle</Botones>
                            </CardSectionA>
                            
                            <CardSectionA estilo={"CardSectionA_2"}>
                                <CardSectionA> 
                                    <Texto estilo={"Modelo"}>{items.model} {items.manufacturer}</Texto>
                                </CardSectionA>  
                                <CardSectionA>
                                    <Texto estilo={"Price"}>{items.price} MXN </Texto>
                                </CardSectionA>
                            </CardSectionA> 
                           
                        </CardSectionA>
                       
                    </Card>
            </Fragment>
        )
     });  */