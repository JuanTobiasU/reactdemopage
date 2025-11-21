function App() {
  return (
    <div className="contenedor-principal">
     
      <h1>Mi primera página</h1>


 {/*Barra de navegacion*/}
      <nav className="barranav">

<h2>Inventario</h2>

<ul className="menu">

  <li>home</li>
  <li>products</li>
  <li>contact</li>



</ul>

      </nav>

      <div className="Contenido">
<h2>Bienvenido al inventario</h2>

<div className="grid-product">

{/*cajas de los productos1*/}

<div className="product-box">

<h3>chocolate</h3>
<p>how many?</p>
<p> Price 1.99$</p>
</div>

{/*cajas de los productos2*/}

<div className="product-box">

<h3>candy bars</h3>
<p>how many?</p>
<p> Price 5.99$</p>
</div>

{/*cajas de los productos3*/}

<div className="product-box">

<h3>gum</h3>
<p>how many?</p>
<p> Price 3.99$</p>
</div>


</div>


      </div>

    </div>

  )
}

export default App