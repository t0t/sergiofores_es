<script>
    import SiteLogo from './SiteLogo.svelte';
</script>

<style lang="scss">
    @import "../sass/_main.scss";
    header {
        /* background-image: url("../img/cover1.png");
        background-position: top right;
        background-size: contain;
        background-repeat: no-repeat; */
        position: relative;
        background-color: $quaternary;
        
        display: grid;
        grid-template-areas: 
        "brand"
        "slogan"
        ;
        align-items: center;
        justify-items: start;
        padding-top: $h1;
        padding-bottom: $h1;
        overflow: hidden;
        padding-left: $h2;

        @include media(s1) {
            padding-top: $h2;
            padding-bottom: $h2;
        }
        @include media(s2) {
            padding-left: $h4;
        }

        .SiteBrand {
            grid-area: brand;
            z-index: 0;
        }
        .SiteSlogan {
            grid-area: slogan;
        }

        img {
            right: 0;
            object-fit: cover;
            position: absolute;
            mix-blend-mode: luminosity;
            opacity: .6;

            &:hover {
                animation: none;
            }
        }
    }
</style>

<header>
    <div class="SiteBrand">
        <SiteLogo/>
        <h1>Sergio Forés</h1>
    </div>
    <div class="SiteSlogan">
        <i>Sentir Orden y Crear Conexión</i>
    </div>
    <img src="../img/cover1.png" alt="">
</header>