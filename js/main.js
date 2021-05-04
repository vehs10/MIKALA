$("#Envio").append(` <button id="BtnEnvio">ENVIOS</button>`);
$("#Envio").append(`<p style="display: none" class=" p-envio" > Realizamos envíos a todo el país a través de correo argentino.
Si queres que el envío sea por nuestra mensajería privada (solo disponible para CABA y alrededores) seleccionarlo a la hora de la compra, y en caso de no estar seguro que nuestras motos lleguen, ¡hablanos por privado y te decimos!</p>`);



$("#BtnEnvio").click(function(e) {

    $(".p-envio").toggle("slow");


});

$("#Devolucion").append(` <button id="BtnDevoluciones">DEVOLUCIONES</button>`);
$("#Devolucion").append(`<div style="display: none" class="p-Devoluciones">
<p>
Todos nuestros productos cuentan con un mes de garantía. Es importante tener en cuenta que para que la devolución se lleve a cabo debes:</p>
<ul class="lista-devo">
<li>- Presentar el producto en las mismas condiciones que fue recibido</li>
<li>- El producto no debe haber sido usado</li>
<li>- Debes conservar la bolsa MIKALA original en la cual recibiste el producto</li>
</ul>

<p>IMPORTANTE: En caso de recibir un producto fallado se cuenta con un tiempo de aviso (mediante fotos y/o videos) de 48 hs una vez recibido el pedido.</p>


</div>`);

$("#BtnDevoluciones").click(function(e) {

    $(".p-Devoluciones").toggle("slow");


});