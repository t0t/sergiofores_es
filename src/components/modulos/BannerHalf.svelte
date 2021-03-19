<script>
    export let title = "";
    export let text = "";
    export let img = "";
    export let variante = 0;
    let modificador = [
        "Light",
        "Dark",
        "Colored",
        "Light2"
    ];
    
</script>
<style lang="scss">
    @import "../../sass/_global.scss";
    
    .BannerHalf {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas: "media" "texto";
        padding-top: 0;
        padding-right: $h3;
        padding-left: $h3;
        padding-bottom: $h2;

        img {
            width: 100%;
        }
        :global(video) {
            width: 100%;
            object-fit: cover;
            /* mix-blend-mode: luminosity; */
            /* border-radius: $h2; */
        }
        
        @include media(s2) {
            padding-bottom: 0;
            padding-right: 0;
            grid-template-columns: 1fr 1.62fr;
            grid-template-areas: "texto media";
        }

        .BannerMedia {
            display: grid;
            place-content: center;
            grid-area: media;
        }

        .BannerHalfText {
            display: grid;
            justify-items: start;
            align-self: center;
            justify-self: center;
            grid-area: texto;

            @include media(s2) {
                margin-bottom: 0;
                margin-right: $h2;
                max-width: $bp1;
            }
            h2 {
                font-weight: bold;
                margin-top: $h0;
                margin-right: 0;
                margin-bottom: $h0;
                margin-left: 0;
                @include media(s1) {
                    font-weight: inherit;
                }
            }
        }
    }
    .Light {
        background-color: $light_2;
        color: $dark_grey;
        p {
            color: $dark_grey;
        }
    }
    .Dark {
        background-color: $dark_grey;
    }
    .Colored {
        color: $black;
        background-color: $tertiary;
        min-height: 100vh;
    }
    .Light2 {
        background-color: $light;
        color: $dark;
        p {
            color: $dark;
        }
    }
</style>

<div class="BannerHalf {modificador[variante]}">

    <div class="BannerMedia">
        {#if img}
        <slot name="hasimage">
            <img src="{img}" alt="Imagen">
        </slot>
        {/if}
        <slot name="hasvideo"></slot>
        <slot name="hasSVG"></slot>
    </div>
    
    <div class="BannerHalfText">
        <h2>{title}</h2>
        <p>{@html text}</p>
        <slot></slot>
    </div>

</div>