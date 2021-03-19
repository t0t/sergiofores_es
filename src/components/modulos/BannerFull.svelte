<script>
    export let title = ""
    export let text = ""
    export let img;   
</script>

<style lang="scss">
    @import "../../sass/_global.scss";

    .BannerFull {
        background-color: $grey_4;
        
        @include media(s1) {
            height: 100vh;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 0.5fr;
            justify-items: center;
        }
        @include media(s2) {
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 1fr;
        }

        .BannerFullImg {
            background-size: cover;
            background-position: right center;
            background-repeat: no-repeat;
            width: 100%;
            min-height: $h6;
        }

        .BannerFullText {
            align-self: center;
            display: grid;
            justify-items: center;
            padding-top: $h2;
            padding-bottom: $h2;
            .title {
                font-weight: normal;
                color: inherit;
            }
            h2 {
                color: $grey_2;
                margin-left: $h4;
                margin-right: $h4;
                
                @include margin-bottom(0);
                @include margin-top(0);
                @include media(s2) {
                    @include type-setting(1);
                }
            }
        }
    }
</style>

<section class="BannerFull">

    <div class="BannerFullImg"
    style="background-image:url('../img/{img}');"
    ></div>
    <div class="BannerFullText">
        <slot />
        <h2 class="title">{title}</h2>
        <h2>{text}</h2>
    </div>
</section>