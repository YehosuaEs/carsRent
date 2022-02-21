import { Bloque, Loading, Lista } from "./loadingStyle";



const SpinLoad = () => {
    return (
        <Bloque>
            <Loading/> 
            <Lista  > Loading page... please wait  </Lista>
        </Bloque>
    )
};
export default SpinLoad;