<script>
    import Button from './Button.svelte';
</script>
<style lang="scss">
    @import "../sass/_main.scss";

    .VideoContainer {
        /* min-height: $h8; */
        background-color: $dark;
        @include gradient(left, $list1);
        display: grid;
        grid-template-columns: 1fr;
        gap: $h2;
        justify-items: end;
        align-items: start;
        padding-bottom: $h2;
        @include media(s2) {
            grid-template-columns: 1fr 1fr;
            padding: $h2;
        }

        video {
            min-width: 100%;
            /* height: 100%; */
            object-fit: cover;
            mix-blend-mode: luminosity;
            @include media(s2) {
                border-radius: $h2;
                width: 50%;
            }
        }

        p {
            padding-top: $h1;
            color: $light;
        }
    }
</style>

<section class="VideoContainer">
    <p>
        <strong>Todo opera desde un mismo orden universal (+0+1234)</strong> <br>
        Desde su esencia el Arte, el prototipado web, la impresión 3D y la Creación son lo mismo. Eso es lo que he venido a recordar.
    </p>
        <video poster="/img/cover3.jpg" loop playsinline controls="controls">
        <source src="/img/desdelapoesiadelamateria.webm" type="video/webm" />
        <source src="/img/desdelapoesiadelamateria.mp4" type="video/mp4" />
        <p>Ups! Su navegador no soporta vídeos HTML5.</p>
    </video>
    

</section>

