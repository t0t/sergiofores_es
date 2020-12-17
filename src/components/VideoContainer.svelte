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
        gap: $h2;
        justify-items: center;
        align-items: center;
        padding: $h2;
        
        @include media(s1) {
            header {
                padding-left: $h3;
            }
            text-align: left;
            p {
                text-align: left;
            }
        }
        @include media(s2) {
            grid-template-columns: 1fr 1fr;
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
        <h1>Todo opera desde un mismo orden universal (+0+1234)</h1> <br>
        <p>Desde su esencia el Arte, el prototipado web, la impresión 3D y toda la Creación son lo mismo. Eso es lo que he venido a recordar.</p>
    </header>
    <video poster="/img/cover3.jpg" loop playsinline controls="controls">
        <source src="/img/desdelapoesiadelamateria.webm" type="video/webm" />
        <source src="/img/desdelapoesiadelamateria.mp4" type="video/mp4" />
        <p>Ups! Su navegador no soporta vídeos HTML5.</p>
    </video>
    

</section>

