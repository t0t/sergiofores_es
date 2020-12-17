<script>
    import Button from './Button.svelte';
</script>
<style lang="scss">
    @import "../sass/_main.scss";

    .VideoContainer {
        @include gradient(left, $list1);
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        align-items: start;
        padding: $h2;
        gap: $h2;
        text-align: left;

        main {
            display: grid;
            padding-bottom: $h1;
            a {
                align-items: end;
            }
            header {
                padding-bottom: $h2;
            }

            @include media(s1) {
                /* background-color: red; */
            }

            @include media(s2) {
                gap: $h4;
                grid-template-columns: 1fr 1fr;
                main {
                    padding-left: $h3;
                    padding-bottom: $h3;
                    /* align-self: center; */
                }
            }
        }
       

        video {
            width: 100%;
            object-fit: cover;
            mix-blend-mode: luminosity;
            border-radius: $h2;
        }
    }
</style>

<section class="VideoContainer">
    <main>
        <header>
            <h1>La Creación se fundamenta, esencialmente, en base a un mismo orden arquetípico universal; <i>+0+1234</i>. Detectarlo, interpretarlo, descifrarlo y experimentarlo son funciones de un <i>arte holístico</i> que crea desde el reconocimiento de que lo idéntico atraviesa a lo diferente.</h1>
        </header>
            <Button variante={2} text="Chat-Whatsapp" url="https://api.whatsapp.com/send?phone=+34619549032" />
    </main>
    <video poster="/img/cover3.jpg" loop playsinline controls="controls">
        <source src="/img/desdelapoesiadelamateria.webm" type="video/webm" />
        <source src="/img/desdelapoesiadelamateria.mp4" type="video/mp4" />
        <p>Ups! Su navegador no soporta vídeos HTML5.</p>
    </video>
    

</section>

