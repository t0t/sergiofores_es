<script>
    import Button from './Button.svelte';
</script>
<style lang="scss">
    @import "../sass/_main.scss";
    /* :global(h1) {
        color: $light_grey;
    } */

    video {
        width: 100%;
        object-fit: cover;
    }

    .VideoContainer {
        color: $dark;
        background-color: $dark;

        .VideoContainerText {
            margin-bottom: $h2;

            @include media(s2) {
                margin-bottom: 0;
                margin-right: $h2;
                max-width: $bp1;
            }
        }
    }
</style>

<div class="VideoContainer">
    <video 
        poster="/img/cover2.jpg"
        loop
        playsinline
        controls="controls"
    >
        <source src="/img/desdelapoesiadelamateria.webm" type="video/webm" />
        <source src="/img/desdelapoesiadelamateria.mp4" type="video/mp4" />
        <p>Su navegador no soporta vídeos HTML5.</p>
    </video>

</div>

