<script>
   import { data } from"../data/data.js";

   import { onMount, onDestroy } from "svelte";

   import ThreeBanner from "../components/modulos/ThreeBanner.svelte";
   import BannerHalf from "../components/modulos/BannerHalf.svelte";
   import PhiSvg from '../components/modulos/PhiSvg/PhiSvg.svelte';
   import T0T from "../components/modulos/T0T/T0T.svelte";

   import Button from "../components/modulos/Button.svelte";
   export let current_page_name;

    onMount(() => {
       console.log("MOUNTED COMPONENT") 
    })
    
    onDestroy(() => {
       console.log("DESTROYED COMPONENT") 
    })
</script>

{current_page_name}

<section id="playground">
   <BannerHalf variante={2} title={data[5].title} text={data[5].subtitle}>
     <nav>
       <a href="https://slides.com/sergiofores/" target="_blank">Slides</a>
       <a href="https://docs.google.com/document/d/15oUQRghNb_lihCFGJ9Ls0z1PyihD_a18v1V3AohVqQ4/edit?usp=sharing" target="_blank">Libro</a>
     </nav>
   <div slot="hasSVG"><T0T /></div>
   </BannerHalf>
   
   <ThreeBanner variante={3} title={data[6].title} text ={data[6].subtitle} />
   
   <BannerHalf variante={3} title={data[7].title} text={data[7].subtitle} img={data[7].img}>
     <Button variante={1} text="{data[7].button}" url="{data[7].buttonurl}" />
   </BannerHalf>
   
   <PhiSvg variante={2} title={data[8].title} text="{data[8].subtitle}" />
 </section>

<slot></slot>