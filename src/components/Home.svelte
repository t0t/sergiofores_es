<script>
  // import { onMount } from "svelte";
  // import Layout from "./Layout.svelte";
  import Nav from "./Nav.svelte";
  import Cover from "./modulos/Cover.svelte";
  import T0T from "./modulos/T0T.svelte";
  import Slider from "./modulos/Slider.svelte";
  import ProductGallery from "./modulos/ProductGallery.svelte";
  import ThreeBanner from "./modulos/ThreeBanner.svelte";
  import BannerFull from "./modulos/BannerFull.svelte";
  import BannerHalf from "./modulos/BannerHalf.svelte";
  import BannerTexto from "./modulos/BannerTexto.svelte";
  import Links from './modulos/Links.svelte';
  import PhiSvg from './modulos/PhiSvg.svelte';
  import Button from "./modulos/Button.svelte";
</script>

<svelte:head>
  <title>Sergio Forés - Hermenéutica Holística +0+1234</title>
</svelte:head>

<style lang="scss">
  @import "../sass/_global.scss";

  :global(img) {
    width: 100%;
  }
  
  </style>
<Nav></Nav>
<!-- <Layout> -->
  <!-- <div slot="header"></div> -->
  <div id="01234">  
    <Cover 
    title="Hermenéutica Holística +0+1234" 
    subtitle="Sergio Forés Raga" 
    text="Practico el arte de descifrar la Creación, en la intersección de artes, tecnologías y saberes. Trato de sentir un cierto tipo de orden que conforma un cierto tipo de conexión." />
  </div>
    
  <BannerFull title="+0+1234" text='El fundamento de la Creación radica en un orden arquetípico universal. ...Percibir ese orden conforma la conexión trascendental.' img="02234-14.jpg"><h2>⟁</h2></BannerFull>

  <BannerHalf variante={1} 
  title="Desde la poesía de la materia" 
  text='Todo son formas de arte simbólicas en si mismas y, como tales, cumplen una <strong>función mediadora capaz de abrirle lo real a la conciencia.</strong>'>
    <span slot="hasvideo">
      <video poster="/img/cover3.jpg" loop playsinline controls="controls">
        <source src="/img/desdelapoesiadelamateria.webm" type="video/webm" />
        <source src="/img/desdelapoesiadelamateria.mp4" type="video/mp4" />
        <p>Ups! Su navegador no soporta vídeos HTML5.</p>
      </video>
    </span>
  </BannerHalf>

  <Slider />

  <div id="artwork">
    <ProductGallery titulo="Art works" texto="Cuadros tridimensionales de 1 metro de diámetro que representan fuerzas y vibraciones aplicadas sobre la superficie del agua. Me interesa recrear las condiciones necesarias para que las leyes de la física y el tiempo puedan quedar atrapadas en una forma." />
  </div>

  <BannerHalf variante={1} title="¿Deseas más información?" text="Puedes ponerte en contacto conmigo por Whatsapp e indicarme la referencia de la pieza que te gusta" img="../img/cover4.jpg">
    <Button variante={0} text="Chat-Whatsapp" url="https://api.whatsapp.com/send?phone=+34619549032" />
  </BannerHalf>

  <BannerHalf variante={2}
  title="Meta-Mapa +0+1234" 
  text='+0+1234 consiste en una hermenéutica de la Creación que observa experiencialmente sus principios universales. Ancestralmente estos 5 símbolos numéricos representan las partes del Todo.'>
  
  <nav>
    <a href="https://slides.com/sergiofores/" target="_blank">Slides</a>
    <a href="https://docs.google.com/document/d/15oUQRghNb_lihCFGJ9Ls0z1PyihD_a18v1V3AohVqQ4/edit?usp=sharing" target="_blank">Libro</a>
  </nav>

  <span slot="hasSVG"><T0T /></span>

  </BannerHalf>

  <ThreeBanner variante={3}
  title="Impresión 3D de datos." 
  text ="<strong>¿Podemos tocar los datos?</strong> En este proyecto me interesa explorar la mejor manera de traducir datos <code>JSON</code> a mallas 3D para poder ser impresos en el mundo real. Por medio de Three.js topografiamos los datos como coordenadas sobre un plano que luego se exporta a un archivo 3D" />

  <BannerHalf variante={3} title="Gematria App" text="He desarrollado una sencilla aplicación que traduce palabras en hebreo a su equivalente numérico. Creado en JS, Html, Sass y Svelte" img="../img/gematria.gif">
    <Button variante={1} text="Abrir App" url="https://gematriaapp.vercel.app/" />
  </BannerHalf>
  
  <PhiSvg variante={2} title="La Divina Proporción" text="Sentir el Orden da Forma a la Conexión. Diseño generativo en <code>JS</code> y <code>SVG</code> de la proporción áurea. <br> <small><i>Basado en una demo de Tan Li Hau.</i></small>" />

  <BannerHalf 
  title="Videos" 
  text='Haciendo mis pinitos como "Youtuber" :) Vuelco mis reflexiones en cápsulas en torno a metafísica, arte, símbolos, etc. Y, por supuesto desde la Hermenéutica +0+1234.'>

    <Button variante={1} text="Visitar Canal" url="https://www.youtube.com/channel/UC9C6HRn2RDG3bmWC4Soxtcw" />

    <div slot="hasvideo">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/7BtDRQuPjDg"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </BannerHalf>

<div id="about">
  <BannerTexto header="About me" texto="Cursé estudios de Artes Aplicadas y procedimientos pictóricos, luego Arte Electrónico y Diseño Digital. Desde 1999 ejerciendo como Diseñador Gráfico y Web. En 2010 me centré en Prototipado Frontend y desarrollo de UI. En 2020 incorporo la impresión 3D en mi proceso creativo y desarrollo una Hermenéutica Holística de la Creación (+0+1234) como vía trascendental y de autorealización.">
  </BannerTexto>
</div>
  
  <Links />
  <!-- <p>⟶ <small>Sergio Forés</small></p> -->
  <!-- <div slot="footer"></div> -->
<!-- </Layout> -->
