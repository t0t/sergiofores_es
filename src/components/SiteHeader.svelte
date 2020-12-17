<script>
    import SiteLogo from './SiteLogo.svelte';
</script>

<style lang="scss">
    @import "../sass/_main.scss";
    header {
        background-image: url("../img/cover1.jpg");
        background-position: right center;
        background-size: cover;
        background-repeat: no-repeat;
        
        display: grid;
        grid-template-areas: 
        "brand"
        "slogan"
        ;
        align-items: center;
        justify-items: start;
        padding-top: $h1;
        padding-bottom: $h1;

        .SiteBrand {
            grid-area: brand;
            /* text-align: center; */
        }
        .SiteSlogan {
            grid-area: slogan;
        }

        @include media(s1) {
            padding-left: $h2;
            padding-top: $h3;
            padding-bottom: $h3;
        }
        @include media(s2) {
            padding-left: $h4;
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
</header>