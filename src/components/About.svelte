<script>
  import SiteLogo from './SiteLogo.svelte';
</script>

<style lang="scss">
  @import "../sass/_main.scss";

  .About {
    background-color: $grey;
    padding-top: $h4;
    padding-right: $h2;
    padding-bottom: $h2;
    padding-left: $h2;
  }
  .Bio {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;

    @include media(s2) {
      grid-template-columns: 1fr 1.62fr;
      justify-items: center;
    }
    
    .SiteLogo {
      justify-self: start;
      margin-right: $h2;
      margin-bottom: $h2;
      opacity: .7;
      
      @include media(s2) {
        justify-self: end;
      }
    }
  }
  .Links {
    padding-top: $h5;
    padding-bottom: $h0;

    svg {
      padding-top: $h1;
      margin-left: $h-1;
      margin-right: $h-1;
      fill: $quaternary;
      &:hover {
        fill: $grey_2;
      }
      @include media(s2) {
        margin-left: $h1;
        margin-right: $h1;
      }
    }
    small {
      color: $quaternary;
    }
  }
</style>

<section class="About">
  <main class="Bio">
    <div class="SiteLogo">
      <SiteLogo/>
    </div>
    <!-- <img src="/img/logo-footer.svg" alt="Imagen"> -->
    <p><strong>Sergio Forés Raga</strong><br> Se forma en Bellas Artes, Arte Electrónico y Diseño Digital. Ha ejercido desde 1999 como Diseñador Gráfico y Web. Desde 2010 especializado en Prototipado Frontend y UID. En 2020 adopta el mundo de la impresión 3D en su proceso creativo. Paralelamente desarrolla una <i>Hermenéutica Holística de la Creación</i>, como vía de autoconocimiento, que denomina TODH, Función TOT ó +0+1234.</p>
  </main>

  <aside class="Links">
    <small>REDES DONDE COMPARTE:</small>
    <ul>
      <li>
        <a href="https://www.instagram.com/t.o.d.h/" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <title>Instagram</title>
            <circle cx="12.145" cy="3.892" r="0.96" />
            <path d="M8,12c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S10.206,12,8,12zM8,6C6.897,6,6,6.897,6,8s0.897,2,2,2s2-0.897,2-2S9.103,6,8,6z" />
            <path d="M12,16H4c-2.056,0-4-1.944-4-4V4c0-2.056,1.944-4,4-4h8c2.056,0,4,1.944,4,4v8C16,14.056,14.056,16,12,16zM4,2C3.065,2,2,3.065,2,4v8c0,0.953,1.047,2,2,2h8c0.935,0,2-1.065,2-2V4c0-0.935-1.065-2-2-2H4z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/sergiofores/" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <title>Linkedin</title>
            <path d="M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16h14.7c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z M4.7,13.6H2.4V6h2.4V13.6zM3.6,5C2.8,5,2.2,4.3,2.2,3.6c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C4.9,4.3,4.3,5,3.6,5zM13.6,13.6h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6h2.3v1h0c0.3-0.6,1.1-1.2,2.2-1.2c2.4,0,2.8,1.6,2.8,3.6V13.6z" />
          </svg>
        </a>
        <a href="https://medium.com/@todh" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <title>Algunos artículos en Medium</title>
            <path d="M15,0H1A1,1,0,0,0,0,1V15a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V1A1,1,0,0,0,15,0ZM13.292,3.791l-.858.823a.251.251,0,0,0-.1.241V10.9a.251.251,0,0,0,.1.241l.838.823v.181H9.057v-.181l.868-.843c.085-.085.085-.11.085-.241V5.993L7.6,12.124H7.271l-2.81-6.13V10.1a.567.567,0,0,0,.156.472l1.129,1.37v.181h-3.2v-.181l1.129-1.37a.547.547,0,0,0,.146-.472V5.351A.416.416,0,0,0,3.683,5l-1-1.209V3.61H5.8L8.2,8.893,10.322,3.61h2.971Z" />
          </svg>
        </a>
        <a href="https://twitter.com/t0tinspire" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <title>Twitter</title>
            <path d="M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z" />
          </svg>
        </a>
        <a href="https://github.com/t0t" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <title>Mi repositorio en Github</title>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z" />
          </svg>
        </a>
        <a href="https://www.facebook.com/TODH-2139705836275088" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <title>Facebook</title>
            <path d="M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16H8v-5H6V8h2V6c0-2.1,1.2-3,3-3 c0.9,0,1.8,0,2,0v3h-1c-0.6,0-1,0.4-1,1v1h2.6L13,11h-2v5h4.3c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z" />
          </svg>
        </a>
      </li>
    </ul>
  </aside>
</section>