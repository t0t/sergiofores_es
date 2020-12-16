<script>
    import Button from './Button.svelte';
</script>

<style lang="scss">
    @import "../sass/_main.scss";
    
    .MainFeatures {
        padding-top: $h2;
        padding-right: $h2;
        padding-left: $h2;
        padding-bottom: 0;
        background-color: $quaternary;
        
        @include media(s1) {
            display: grid;
            gap: $h2;
            grid-template-columns: repeat(3, 1fr);
            grid-template-areas:
            "a a a"
            "b b b"
            "c c c"
            ;
            /* align-items: center;
            justify-items: center; */
        }
        
        @include media(s2) {
            grid-template-areas:
            "a b c"
            ;
            padding-top: $h4;
            padding-right: $h4;
            padding-left: $h4;
        }

        > article {
            img {
                border-radius: 50%;
                margin-bottom: $h2;
                width: 100%;
            }

            &:nth-child(1) {
                grid-area: a;
            }
            &:nth-child(2) {
                grid-area: b;
            }
            &:nth-child(3) {
                grid-area: c;
            }

        }
    }
    .MainFeature__caption {
        /* padding-left: $h2;
        padding-right: $h2; */
        padding-bottom: $h2;
        border-bottom: none;
        margin-bottom: $h2;
        display: grid;
        justify-items: center;
        
        @include media(s2) {
            justify-items: start;
            padding-bottom: $h2;
        }
        
        small {
            @include margin-bottom(1);
        }
    }
</style>
  
<section class="MainFeatures">
    <article>
        <figure class="MainFeature">
            <img src="img/grafico-nueve.jpg" alt="">
            <figcaption class="MainFeature__caption">
                <small>Las obras de arte son formas simbólicas en si mismas y, como tales, cumplen una función mediadora capaz de abrirle lo real a la conciencia.</small>
                <Button variante={2} text="Curators Portafolio" url="https://docs.google.com/presentation/d/1ZIZl5yvhs7ScW4BU9_Cj59YTcA01eiMr5oMEgb_Yr9Y/edit?usp=sharing" />
            </figcaption>   
        </figure>
    </article>
    <article>
        <figure class="MainFeature">
            <img src="img/grafico-siete.jpg" alt="">
            <figcaption class="MainFeature__caption">
                <small><strong>¡Nueva obra disponible!</strong> <br> 
                    Showroom en Mediona, Barcelona.</small>
                <Button variante={2} text="Consultar por Whatsapp" url="https://api.whatsapp.com/send?phone=+34619549032" />
            </figcaption>
        </figure>
    </article>
    <article>
        <figure class="MainFeature">
            <img src="img/malla2.gif" alt="">
            <figcaption class="MainFeature__caption">
                <small>Artefactos concebidos e imprimidos en 3D que finalmente entran en fase de acabado final en la que aplico diferentes materiales como arenas, resinas, óxidos, etc.</small>
            </figcaption>
        </figure>
    </article>
</section>