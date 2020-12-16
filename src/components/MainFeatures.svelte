<script>

</script>

<style lang="scss">
    @import "../sass/_main.scss";
    
    .MainFeatures {
        padding: $h2;
        background-color: #4d443e;
        
        @include media(s1) {
            display: grid;
            padding: $h3;
            gap: $h3;
            grid-template-areas:
            "a a a"
            "b b b"
            "c c c"
            ;
        }
        
        @include media(s2) {
            grid-template-areas:
            "a b c"
            ;
        }

        > div {
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
        padding-left: $h2;
        padding-right: $h2;
        padding-bottom: $h2;
        border-bottom: none;
        margin-bottom: $h2;
        border-right: 1px solid $tertiary;
        border-left: 1px solid $tertiary;
        border-bottom: 1px solid $tertiary;
        
        small {
            font-style: normal;
            font-weight: 500;
        }
        
        @include media(s1) {
            padding-bottom: $h2;
            background-color: reds;
        }
    }
</style>
  
<div class="MainFeatures">
    <div>
        <figure class="MainFeature">
            <img src="img/grafico-nueve.jpg" alt="">
            <figcaption class="MainFeature__caption">
                <small>Las cosas que hago son artefactos cuyas geometrías son concebidas y modeladas desde un plano virtual; construyo una serie de mallas o estructuras poliédricas sobre las que aplico una serie de fuerzas y vibraciones que interactúan entre sí.</small>
            </figcaption>   
        </figure>
    </div>
    <div>
        <figure class="MainFeature">
            <img src="img/grafico-siete.jpg" alt="">
            <figcaption class="MainFeature__caption">
                <small>Showroom en Mediona, Barcelona. Encantado de recibirte si te apetece visitar mi estudio</small>
            </figcaption>
        </figure>
    </div>
    <div>
        <figure class="MainFeature">
            <img src="img/malla2.gif" alt="">
            <figcaption class="MainFeature__caption">
                <small>En mi cabeza, en el ordenador y luego manifestada en la materia con una impresora 3D de gran formato. Finalmente entran en fase de acabados finales en los que aplico diferentes materiales como arenas, resinas, óxidos, etc.</small>
            </figcaption>
        </figure>
    </div>
    
</div>