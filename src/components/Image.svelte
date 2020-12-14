<script>
    export let variante = 0;
    export let src = "#";
    // export let caption = false;
    export const modificadorImg = [
        "Default",
        "floatedleft",
        "floatedright"
    ];
</script>

<style lang="scss">
    @import "../sass/_main.scss";  

    .floatedright {
        float: none;
        max-width: 100%;
        margin-bottom: $h2;
        border-radius: 50%;
        
        @include media(s2) {
            float: right;
            margin-left: $h3;
            max-width: 400px;
        }
    }
    .floatedleft {
        float: none;
        max-width: 100%;
        margin-bottom: $h2;
        border-radius: 50%;

        @include media(s2) {
            float: left;
            margin-right: $h3;
            max-width: 400px;
        }
    }
</style>

<img class="{modificadorImg[variante]}" src={src} alt="Imagen de Obra Grafica"/>