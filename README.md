# MselectJs
  .

> Para usar mselect agregue unicamente el script a su html
> este seria la ubicacin de la carpeta select y el archivo
> select.js `<script src="./mselectjs/mselect.js"></script>`
> Esta aregará automaticamente la oja de estilos en su html de
> Forma que pueda modificarla con otra oja de estilos


> Mselect es un pequeño framework que permite crear inputs parecidos
> a los de tipo select, con la diferencia que en estos podemos
> seleccionar mas de uno a la vez
___
#
#
#

La forma de crear un mselect es parecida a la de un select de html
con la diferencia de que agregamos la m. Ejemplo:
> select = mselect
> option = moption
___
#
#### Veamos como hacer un mselect
```html
<!Doctype html>
<html lang="es">
  <head>
    <title></title>
  <head>
  <body>
  <!---- Construccion del mselec--->

   <mselect name="">
     <moption label="true">Animales...</moption>
     <moption value="Opcion1">Gato</moption>
     <moption value="Opcion2">Perro</moption>
     <moption value="Opcion3">Vaca</moption>
     <moption value="Opcion4">Burro</moption>
   </mselect>
  </body>
</html>
```

Todos los elementos heredan el name del mselect. 
Podemos agregar el atributo type="radio" Y solo permitira seleccionar 1 a la vez de lo contrario se podran seleccionar varios


El primer moption debe de llevar el atributo label en true (label="true") pues este sera el nombre de nuestro input.
No es seleccionable y sera donde veremos:
la cantidad seleccionada en caso de haber seleccionado mas de uno
El nombre del seleccionado en caso de haber solo uno seleccionado
El nombre de nuestro input en caso de no haber ninguno seleccionado

```html
   <moption label="true">Animales...</moption>
```
El nombre de nuestro input sera lo que coloquemos dentro de el moption con el label="true". En este caso  "Animales..."

**Segun el lang de nuestro html la palabra "seleccionados" se mostrara en español (lang="es") o en ingles (lang="en")**
#### Así se veria nuestro input
![Imagen de mselect cerrado](https://www.mediafire.com/convkey/20ba/vl8bwegzjdjsbq1zg.jpg "Mselect cerrado")

Cuando el mselect esta cerrado luce así, sin embargo al tener opciones seleccionadas mostrara la cantidad acompañada de la palabra seleccionada o selected si el lang esta en ingles

![mselect](https://www.mediafire.com/convkey/9776/imh6qmq9fcdtgm3zg.jpg "Mselect abierto 0 seleccionados")

Nuestro mselect con deplegado

![Imagen de mselect](https://www.mediafire.com/convkey/49c4/56qzow6yzptlpi0zg.jpg "Uno seleccionadp")

Cuando tenemos solo una opcion seleccionada podremos ver su contenido en el label (moption label="true")
En este caso elegimos la opcion gato, por lo que vemos Gato en el label

![Imagen del un mselect](https://www.mediafire.com/convkey/b001/68nh0kzifzw62d4zg.jpg "dos seleccionados")

Cuando tenemos mas de una opcion seleccionada se muestra la cantidad acompañada de la palabra seleccionados.
___

En caso de que nuestro html no tenga el atributo `lang="es"` o lo tenga en inlges `lang="en"`
Se mostrará la palabra selected y no seleccionados.

Nuestro mselect es personalizable. Podemos cambiar su tamaño desplegado, colores, background, hover, etc.

##### Veamos como

Para hacer mas o menos ancho nuestro mselect debemos agregar los estilos como a cualquier otro elemento html
Por ejemplo
```css
mselect{
    width: 300px
}
```
Sin embargo no podemos cambiar el alto en el mselect. Ese lo cambiamos en el moption ya que así todas las opciones tendran el mismo alto incluyendo el label.

Cambiar el alto lo logramos de la siguiente forma
Por ejemplo:
```css
.moptions, mselect moption{
    height: 60px
}
```

podemos camiar tambien el alto que tendra al estar desplegado. Eso simplemente colocando
Por ejemplo:
```css
.moptions.mselectOpen {
  height: 100px;
  }
```

Tambien el background y el color de las opciones.
Para esto simplemente le damos los estilos a mselect moption
Por ejemplo: Para cambiar el background a purpura y el color a azul de las opciones hariamos lo siguiente

```css
    mselect moption{
        color: blue;
        background: purple
    }
```
> de la misma forma podemos agregar los efectos con la pseodo clase :hover
> simplemente agregandola como siempre
```css
    mselect moption:hover{
        color: purple;
        background: blue
    }
```
Asi de simple. Con la pseudo clase invertimos los colores al pasar el mause como puede notarse.

Esto cambia las moption pero no el que tiene el label.

##### EL moption de tipo label
#
#

> Este tiene un color de texto al no tener nada seleccionado y este
> cambia al tener algo seleccionado. Por defecto viene con un color
> negro un poco transparente y al haber algo seleccionado cambia por
> un negro un poco mas fuerte. Sin embargo tambien podemos cambiar
> ambos colores

Para dar estilos a nuestro moption de tipo label lo hacemos de la siguiente forma
```css
mselect moption.mlabel{
    color: red;
    background: aqua
}
```
Esto cambiaria los colores de fondo y de texto tal como le indicamos
el color será el que tendra al no haber nada seleccionado. Para cambiar el color debemos de agregar una regla css a ***.mlabel.colorselec*** especificando el color que queremos se de al estar una o mas opciones seleccionadas

```css
.mlabel.colorselec{
    color: green;
}
```
Esto cambiaria el color del texto del option de tipo label al tener una o mas opciones seleccionadas.

> Gracias por ver
