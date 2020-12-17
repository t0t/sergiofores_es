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
        <h1>Toda la Creación, en su esencia, opera en base a un mismo orden arquetípico universal; <i>+0+1234</i>. Detectarlo, interpretarlo, descifrarlo y experimentarlo son funciones de mi <i>arte holístico.</i>, un arte que crea desde el reconocimiento de lo idéntico en lo diferente.</h1>
    </header>
    <video poster="/img/cover3.jpg" loop playsinline controls="controls">
        <source src="/img/desdelapoesiadelamateria.webm" type="video/webm" />
        <source src="/img/desdelapoesiadelamateria.mp4" type="video/mp4" />
        <p>Ups! Su navegador no soporta vídeos HTML5.</p>
    </video>
    

</section>

