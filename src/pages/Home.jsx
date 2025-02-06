import React from 'react'
import Productos from '../component/Productos'
import { useState, useEffect } from "react";
import img1 from '../img/RECETA2.jpg';
import img2 from '../img/RECETA3.jpg';
import img3 from '../img/RECETA4.jpg';
import img4 from '../img/RECETA5.jpg';
import img5 from '../img/RECETA6.jpg';
import img6 from '../img/RECETA7.jpg';
import  {productList}  from '../service/productos';
import Consultas from '../service/consultas';
import { useUser } from '../context/UserContext';
import { useCarrito } from '../context/CarritoContext';
const Filter = ({ render }) => {
  // 1. useState para manejar el valor del input
  const [value, setValue] = useState("");

  // 2. Función para manejar cambios en el input y actualizar el estado
  const handleChange = (e) => setValue(e.target.value);



  return (
    <div>
      
      {/* 3. Input controlado que actualiza el estado "value" */}
      <h2>Buscar</h2>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Buscar..."
        key="input"
      />

      {/* 4. Renderiza lo que se pasa en la prop "render", enviándole el valor actual */}
      {render(value)}
    </div>
  );
};
const Home = () => {

const [product, setProduct] =useState([]);
const [loading,setLoading] = useState(false);
const _consultas = new Consultas();
const { user, login, logout } = useUser();
const { carrito, addCarrito, eliminarCarrito} = useCarrito();

const deleteProducto = (index) =>{
  eliminarCarrito(index);
}

const handleLoginLogout = () => {
  if (user?.isLoggedIn) {
    logout();
    console.log("Usuario deslogueado");
  } else {
    login({ name: "Cesar Gallego", isLoggedIn: true });
    console.log("Usuario logueado");
  }
};

const addProducts = () =>{
  productList.forEach(async (element) => {
    await _consultas.addProduct(element);
  });
  setTimeout(()=>{
    AllProcts();
  }, 100)
 
}

const deleteAllProducts = async ()=>{
  Swal.fire('Eliminando productos...');
  Swal.showLoading();
  await _consultas.deleteallProduct();
  Swal.fire(`Se elimino Todos los productos`)
  setProduct([]);
}

const deletedProduct =async  (productd)=>{
  Swal.fire('Eliminando producto...');
  Swal.showLoading();
  await _consultas.deleteProduct(productd);
 const  productsFilter = product.filter(f=>f.id != productd.id);
  setProduct(productsFilter)
  Swal.fire(`Se elimino correctamente el producto`)
}

const AllProcts = async () =>{
  setLoading(true);
  let producst = await _consultas.allProducts()
  console.log(producst);
  setProduct(producst);
  setLoading(false);
}

const handleAddToCart = (quantity,img,titulo) => {
  addCarrito({ quantity, img, titulo })
  //alert(`Has agregado ${quantity} producto(s) al carrito`);
  Swal.fire(`Has agregado ${quantity} producto(s) al carrito`);
};

useEffect(()=>{
  AllProcts();
},[]);



  return (
    <>

<button key="btnlo" className="btn btn-info m-2" onClick={handleLoginLogout}>
  { user?.isLoggedIn  ? 'Cerrar' :"Iniciar" }
</button>

{
  user?.isLoggedIn
  &&
  <div>
    Bienvenido {user.name}  
  </div>
}



{
  user?.isLoggedIn && 
  <>
  <button className="btn btn-info" onClick={addProducts}>Cargar Productos</button>
  <button className="btn btn-danger" onClick={deleteAllProducts}>Eliminar todos los productos</button>
  </>
}

   {
    carrito.length > 0
    &&
    <div>
      Tabla del carrito de compras
      <table className='table table-striped'>
        <tbody>

       
        <tr>
          <td>Imagen</td>
          <td>Titulo</td>
          <td>Cantidad</td>
          <td>Acción</td>
        </tr>
      {carrito.map((pro, index)=>{
        return <tr
        key={index + '_table'}
        >
            <td><img width={100} height={100} src={pro.img} /></td>
            <td>{pro.titulo}</td>
            <td>{pro.quantity}</td>
            <td><button className='btn btn-primary' onClick={()=>deleteProducto(index)}>Eliminar del carrito</button></td>
            </tr>
      })
      
 
      }
      </tbody>
      </table>
    </div>
   }

      <div className="ContainerFoto">
        <div className="fotoA">
          {/* <img src={img1} alt="Plato 3" /> */}
        </div>
      </div>
      {/* <div className='card'>
    <div className='card-body'>
    Esta es la pagina de <b>HOME</b>
    </div>
    </div> */}

    {loading ?
     <>Cargando productos</> :

    
      <Filter
        render={(filterValue) => (
          <div className="container" key="container">
            {product
              .filter((prod) =>
                prod.titulo.toLowerCase().includes(filterValue.toLowerCase())
              )
              .map((producto, index) => (
                <>
                <Productos stock={10} initial={1} onAdd={handleAddToCart}
                  img={producto.img}
                  key={index}
                  titulo={producto.titulo}
                  titulo2={producto.titulo2}
                  descripcion={producto.descripcion} />
                  { user?.isLoggedIn && <button key={index+'_button'} className="btn btn-danger" onClick={()=>{deletedProduct(producto)}}>Eliminar</button>  }
                  
                  </>
              ))}
          </div>
        )}
      />
      }

{
    carrito.length > 0
    &&
    <div style={{
      height: "70px",
      width: "70px",
      position: "fixed",
      bottom: "10px",
      right: "10px",
      background: "red",
      borderRadius: "50%",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div style={{    
        position: "absolute",
    background: "#2f75a5",
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    left: "-4px",
    top:"0px"}}>{carrito.length}</div>
      CC
    </div>
   }

    </>
  )
}

export default Home