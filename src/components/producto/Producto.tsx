import React, { useState } from 'react';
import styles from './producto.module.css';

type ProductoSp = {
    id: Number;
    name: String;
    stock: Number;
    price: Number;
    img: string;
}


const Producto = ({ name, stock, price, img, id, }: ProductoSp) => {

    const [cant, setCant] = useState(0);
    

    return (
        <div className={styles.cardProduct}>
            <div className="card animate__animated animate__fadeInUp">
                <img src={img} alt=""></img>
                <div className="card-body">
                    <h4 className="card-title text-center">{name}</h4>
                    <p className="card-text text-secondary">Stock:  {stock}</p>
                    <p className="card-text text-secondary">$ {price} /Kg.</p>
                    <div className="row align-content-center align-items-center">
                        <div className="col-6 ">
                            <input type="number" placeholder="cantidad" className="mx-1 w-50" value={cant}  />Kg.
                        </div>
                        <div className="col-6">
                            <button className="btn btn-success mx-1 text-align-end" >Comprar</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Producto
