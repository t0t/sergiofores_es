<script>
    import Button from './Button.svelte';
</script>

<style lang="scss">
    @import "../sass/_main.scss";
    /* :global(h1) {
        color: $light_grey;
    } */

    .BannerFull {
        background-color: $primary;
        padding: $s0;
        min-height: 100vh;

        @include media(s1) {
            @include padding-top(3);
            @include padding-bottom(3);
        }
        @include media(s2) {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        p {
            margin-left: $h1;
            margin-right: 0;
            @include margin-bottom(2);
        }
        .BannerFullText {
            align-self: center;
        }
    }
</style>

<div class="BannerFull">
    <img src="../img/01234.svg" alt="">
    <div class="BannerFullText">
        <h1>Hermenéutica Universal</h1>
        <p>Es un Libro work in progress sobre mi Cosmovisión y el proyecto +0+1234. Aún no sé si finalmente será en formato ebook, en papel o un audiolibro. El tiempo dirá...</p>
        <Button variante={2} text="Leer borrador en Google Docs" url="https://docs.google.com/document/d/15oUQRghNb_lihCFGJ9Ls0z1PyihD_a18v1V3AohVqQ4/edit?usp=sharing" />
    </div>
</div>