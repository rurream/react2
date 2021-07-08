import Producto from '../../components/producto/Producto';
import styles from './productos.module.css';

type ProductoSp = {
    id: Number;
    name: String;
    stock: Number;
    price: Number;
    img: string;
}


interface ProductosProps {
    productos: ProductoSp[];
    
}
function Productos({ productos }: ProductosProps) {

    return (
        <div className={styles.productosContainer}>
        {
            <div className="container mt-0">
            <div className="row">
                {
                    productos.map((prod, index)=>
                    <div key={index} className="col-md-4 p-3">
                        <Producto name={prod.name} stock={prod.stock} price={prod.price} img={prod.img} id={prod.id} />
                    </div>
                    )
                }
            </div>
        </div>
        }
        </div>
    )


}

export default Productos;