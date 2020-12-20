<script>
    // import SiteNav from './SiteNav.svelte';
    import SiteLogo from './SiteLogo.svelte';
</script>

<style lang="scss">
    @import "../sass/_main.scss";
    header {
        position: relative;
        background-color: $dark_grey;  
        display: grid;
        grid-template-columns: $h4 1fr;
        grid-template-areas: 
            "logo brand"
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
            /* height: $h6; */
        }

        .SiteBrand {
            grid-area: brand;
            z-index: 2;
            /* h1 {
                line-height: inherit;
            } */
        }
        .SiteLogo {
            grid-area: logo;
            z-index: 101;
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
    <div class="SiteLogo">
        <a href="/">
            <SiteLogo/>
        </a>
    </div>
    <div class="SiteBrand">
        <h1>Sergio Forés</h1>
        <em>Sentir Orden y Crear Conexión</em>
    </div>
    <!-- <img src="../img/cover1.png" alt=""> -->
</header>