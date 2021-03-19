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
  let data = [
    {
      id: "0",
      block: "Cover",
      title: "Hermenéutica Holística +0+1234",
      subtitle: "Sergio Forés Raga",
      text: "Practico el arte de descifrar la Creación, en la intersección de artes, tecnologías y saberes. Trato de sentir un cierto tipo de orden que conforma un cierto tipo de conexión."
    },
    {
      id: "1",
      block: "Banner text",
      title: "+0+1234",
      subtitle: "El fundamento de la Creación radica en un orden arquetípico universal. ...Percibir ese orden conforma un tipo de conexión trascendental.",
      img: "02234-14.jpg"
    },
    {
      id: "2",
      block: "Video",
      title: "Desde la poesía de la materia",
      subtitle: "Todo son formas de arte simbólicas en si mismas y, como tales, cumplen una <strong>función mediadora capaz de abrirle lo real a la conciencia.</strong>",
    },
    {
      id: "3",
      block: "Product Gallery",
      title: "Art works",
      subtitle: "Cuadros tridimensionales de 1 metro de diámetro que representan fuerzas y vibraciones aplicadas sobre la superficie del agua. Me interesa recrear las condiciones necesarias para que las leyes de la física y el tiempo puedan quedar atrapadas en una forma.",
    },
    {
      id: "4",
      block: "Chat-Whatsapp",
      title: "¿Deseas más información?",
      subtitle: "Puedes ponerte en contacto conmigo por Whatsapp e indicarme la referencia de la pieza que te gusta",
      buttontext: "Chat-Whatsapp"
    },
    {
      id: "5",
      block: "Meta-Mapa",
      title: "Meta-Mapa +0+1234",
      subtitle: "+0+1234 consiste en una hermenéutica de la Creación que observa experiencialmente sus principios universales. Ancestralmente estos 5 símbolos numéricos representan las partes del Todo."
    },
    {
      id: "6",
      block: "impresion datos",
      title: "Impresión 3D de datos.",
      subtitle: "<strong>¿Podemos tocar los datos?</strong> En este proyecto me interesa explorar la mejor manera de traducir datos <code>JSON</code> a mallas 3D para poder ser impresos en el mundo real. Por medio de Three.js topografiamos los datos como coordenadas sobre un plano que luego se exporta a un archivo 3D"
    },
    {
      id: "7",
      block: "gematria",
      title: "Gematria App",
      subtitle: "He desarrollado una sencilla aplicación que traduce palabras en hebreo a su equivalente numérico. Creado en JS, Html, Sass y Svelte",
      img: "../img/gematria.gif",
      button: "Abrir App"
    },
    {
      id: "8",
      block: "phi",
      title: "La Divina Proporción",
      subtitle: "Sentir el Orden da Forma a la Conexión. Diseño generativo en <code>JS</code> y <code>SVG</code> de la proporción áurea. <br> <small><i>Basado en una demo de Tan Li Hau.</i></small>"
    },
    {
      id: "9",
      block: "youtube",
      title: "Videos",
      subtitle: "Haciendo mis pinitos como 'Youtuber' :) Vuelco mis reflexiones en cápsulas en torno a metafísica, arte, símbolos, etc. Y, por supuesto desde la Hermenéutica +0+1234",
      buttontext: "Visitar Canal",
      buttonurl: "https://www.youtube.com/channel/UC9C6HRn2RDG3bmWC4Soxtcw"
    },
    {
      id: "10",
      block: "aboutme",
      title: "About me",
      subtitle: "Cursé estudios de Artes Aplicadas y procedimientos pictóricos, luego Arte Electrónico y Diseño Digital. Desde 1999 ejerciendo como Diseñador Gráfico y Web. En 2010 me centré en Prototipado Frontend y desarrollo de UI. En 2020 incorporo la impresión 3D en mi proceso creativo y desarrollo una Hermenéutica Holística de la Creación (+0+1234) como vía trascendental y de autorealización."
    },
  ]
</script>

<svelte:head> <title>Sergio Forés - Hermenéutica Holística +0+1234</title></svelte:head>

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
    <Cover title={data[0].title} subtitle={data[0].subtitle} text={data[0].text} />
  </div>
    
  <BannerFull title={data[1].title} text={data[1].subtitle} img={data[1].img}>
    <h2>⟁</h2>
  </BannerFull>

  <BannerHalf variante={1} title={data[2].title} text={data[2].text}>
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
    <ProductGallery titulo={data[3].title} texto={data[3].subtitle} />
  </div>

  <BannerHalf variante={1} title={data[4].title} text={data[4].subtitle} img="../img/cover4.jpg">
    <Button variante={0} text={data[4].buttontext} url="https://api.whatsapp.com/send?phone=+34619549032" />
  </BannerHalf>

  <BannerHalf variante={2} title={data[5].title} text={data[5].subtitle}>
  <nav>
    <a href="https://slides.com/sergiofores/" target="_blank">Slides</a>
    <a href="https://docs.google.com/document/d/15oUQRghNb_lihCFGJ9Ls0z1PyihD_a18v1V3AohVqQ4/edit?usp=sharing" target="_blank">Libro</a>
  </nav>
  <div slot="hasSVG"><T0T /></div>
  </BannerHalf>

  <ThreeBanner variante={3} title={data[6].title} text ={data[6].subtitle} />

  <BannerHalf variante={3} title={data[7].title} text={data[7].subtitle} img={data[7].img}>
    <Button variante={1} text="{data[7].button}" url="https://gematriaapp.vercel.app/" />
  </BannerHalf>
  
  <PhiSvg variante={2} title={data[8].title} text="{data[8].subtitle}" />

  <BannerHalf title={data[9].title} text={data[9].subtitle}>
    <Button variante={1} text={data[9].buttontext} url={data[9].buttonurl} />
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
  <BannerTexto header={data[10].title} texto={data[10].subtitle}>
  </BannerTexto>
</div>
  
  <Links />
  <!-- <p>⟶ <small>Sergio Forés</small></p> -->
  <!-- <div slot="footer"></div> -->
<!-- </Layout> -->
