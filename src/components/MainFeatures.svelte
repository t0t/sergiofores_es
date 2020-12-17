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
                mix-blend-mode: exclusion; 
                &:hover {
                    mix-blend-mode: inherit; 
                }
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

        video {
            width: 100%;
            object-fit: cover;
            border-radius: 50%;
            margin-bottom: $h2;
        }
    }
    .MainFeature__caption {
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
            <video loop playsinline autoplay>
                <source src="/img/cuadro-anim.webm" type="video/webm" />
                <source src="/img/cuadro-anim.mp4" type="video/mp4" />
                <p>Ups! Su navegador no soporta vídeos HTML5.</p>
            </video>
            <figcaption class="MainFeature__caption">
                <small><i>Creaturas</i> concebidas e impresas en 3D que finalmente entran en una fase de acabado con diferentes materiales (arenas, resinas, óxidos, etc.)</small>
            </figcaption>
        </figure>
    </article>
    <article>
        <figure class="MainFeature">
            <img src="img/grafico-nueve.jpg" alt="">
            <figcaption class="MainFeature__caption">
                <small>Todo son formas de arte simbólicas en si mismas y, como tales, cumplen una función mediadora capaz de abrirle lo real a la conciencia.</small>
                <Button variante={2} text="Portafolio" url="https://docs.google.com/presentation/d/1ZIZl5yvhs7ScW4BU9_Cj59YTcA01eiMr5oMEgb_Yr9Y/edit?usp=sharing" />
            </figcaption>   
        </figure>
    </article>
    <article>
        <figure class="MainFeature">
            <img src="img/grafico-siete.jpg" alt="">
            <figcaption class="MainFeature__caption">
                <small><strong>¡Nueva obra disponible!</strong> <br> 
                    Showroom en Mediona, Barcelona.</small>
                <Button variante={2} text="Chat-Whatsapp" url="https://api.whatsapp.com/send?phone=+34619549032" />
            </figcaption>
        </figure>
    </article>
</section>