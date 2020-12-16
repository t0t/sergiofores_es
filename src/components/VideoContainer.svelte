<script>
    import Button from './Button.svelte';
</script>
<style lang="scss">
    @import "../sass/_main.scss";

    .VideoContainer {
        background-color: $dark;
        
        @include media(s2) {
            padding: $h5;
        }

        video {
            width: 100%;
            object-fit: cover;
        }
    }
</style>

<section class="VideoContainer">

    <video poster="/img/cover3.jpg" loop playsinline controls="controls">
        <source src="/img/desdelapoesiadelamateria.webm" type="video/webm" />
        <source src="/img/desdelapoesiadelamateria.mp4" type="video/mp4" />
        <p>Ups! Su navegador no soporta vídeos HTML5.</p>
    </video>

</section>

