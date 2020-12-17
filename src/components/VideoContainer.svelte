<script>
    import Button from './Button.svelte';
</script>
<style lang="scss">
    @import "../sass/_main.scss";

    .VideoContainer {
        background-color: $dark;
        background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
        display: grid;
        grid-template-columns: 1fr;
        /* gap: $h2; */
        justify-items: center;
        align-items: center;
        padding-bottom: $h2;
        @include media(s2) {
            padding: $h2;
        }

        video {
            width: 100%;
            object-fit: cover;
            mix-blend-mode: overlay;
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
    <video poster="/img/cover3.jpg" loop playsinline controls="controls">
        <source src="/img/desdelapoesiadelamateria.webm" type="video/webm" />
        <source src="/img/desdelapoesiadelamateria.mp4" type="video/mp4" />
        <p>Ups! Su navegador no soporta vídeos HTML5.</p>
    </video>
    <p>Desde la poesía de la materia</p>

</section>

