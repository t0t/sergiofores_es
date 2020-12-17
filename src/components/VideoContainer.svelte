<script>
    import Button from './Button.svelte';
</script>
<style lang="scss">
    @import "../sass/_main.scss";

    .VideoContainer {
        background-color: $dark;
        @include gradient(left, $list1);
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        align-items: start;
        padding: $h2;
        gap: $h2;
        
        @include media(s1) {
            text-align: left;
            p {
                text-align: left;
            }
        }
        @include media(s2) {
            gap: $h5;
            grid-template-columns: 1fr 1fr;
            header {
                padding-left: $h3;
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
    <header>
        <h1>La Creación opera desde un mismo orden universal siempre: <i>+0+1234</i>, de modo que lo que hago es básicamente detectar, interpretar, descifrar y experimentar eso que es idéntico en lo diferente a través de un <i>arte holístico.</i></h1>
    </header>
    <video poster="/img/cover3.jpg" loop playsinline controls="controls">
        <source src="/img/desdelapoesiadelamateria.webm" type="video/webm" />
        <source src="/img/desdelapoesiadelamateria.mp4" type="video/mp4" />
        <p>Ups! Su navegador no soporta vídeos HTML5.</p>
    </video>
    

</section>

