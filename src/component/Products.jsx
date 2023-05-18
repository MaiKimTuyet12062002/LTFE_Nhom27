import React, {useState, useEffect} from 'react'

function Products() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setloading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setloading(true);
            const respone = await fetch("http://fakestoreapi.com/products")
            if(componentMounted) {
                setData(await respone.clone().json());
                setFilter(await respone.json());
                setloading(false);
                console.log(filter)
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

  return (
    <div>
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">Sản phẩm mới nhất</h1>
                    <hr/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products