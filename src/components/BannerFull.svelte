<script>
    import Button from './Button.svelte';
</script>

<style lang="scss">
    @import "../sass/_main.scss";

    .BannerFull {
        padding: $h2;
        background-color: $primary;
        
        @include media(s1) {
            display: grid;
            gap: $h1;
            grid-template-columns: 1fr;
            justify-items: center;
            @include padding-top(4);
            @include padding-bottom(4);
        }
        @include media(s2) {
            padding: $h4;
            grid-template-columns: repeat(2, 1fr);
        }

        .BannerFullImg {}

        .BannerFullText {
            align-self: center;
            p {
                color: $black;
                text-align: center;
                margin-left: $h1;
                margin-right: $h1;
                @include margin-bottom(2);
                @include media(s1) {
                    margin-left: $h3;
                    margin-right: $h3;
                }
                @include media(s2) {
                    margin-left: $h4;
                    margin-right: $h4;
                }
            }
        }
    }
</style>

<section class="BannerFull">
    <img class="BannerFullImg" src="../img/libro.svg" alt="Portada de mi libro">
    <div class="BannerFullText">
        <h1>Hermenéutica Universal</h1>
        <p>Es un Libro work in progress sobre mi Cosmovisión y el proyecto <em>+0+1234.</em> Aún no sé si finalmente será en formato ebook, en papel o un audiolibro. El tiempo dirá...</p>
        <Button variante={3} text="Leer libro" url="https://docs.google.com/document/d/15oUQRghNb_lihCFGJ9Ls0z1PyihD_a18v1V3AohVqQ4/edit?usp=sharing" />
    </div>
</section>