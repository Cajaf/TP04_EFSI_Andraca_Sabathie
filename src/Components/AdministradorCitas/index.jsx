import Cita from "../Cita";
import "./administradorCitas.css"

const AdministradorCitas = () => 
{

return(

<div className="one-half column">
    <h2>Administra tus citas</h2>
        <Cita nombre={"Sifon"} dueño={"Flecha"} fecha={"2023-08-05"} hora={"16:15"} sintoma={"Duerme mucho"}/>
        <Cita nombre={"Floki"} dueño={ "Ari"} fecha={"2023-08-05"} hora={"16:15"} sintoma={"No está comiendo"}/>

</div>
)
}
export default AdministradorCitas;