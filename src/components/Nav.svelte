<script>
    import { afterUpdate } from 'svelte';
    const navOptions = [
        {
            name: 'ↂ',
            href: '#+0+1234'
        },
        {
            name: 'About',
            href: '#About'
        },
        {
            name: 'Artwork',
            href: '#Artwork'
        }
    ];
    let currentitem,
        y;
    
    afterUpdate(() => {
        if ( y > 100 && y < 500 ) {
            currentitem = ""
        } else if (y < 6000 || y > 1700) {
            console.log(`ARTWORK ${y}`)
        } else if ( y > 7600) {
            console.log(`ABOUT ${y}`)
        }
	});
    
    function cuandoClick(event) {
        currentitem = event.path[0].hash
        // windowscroll = event.view.scrollY
        // console.log(`Window scrollY: ${event.view.scrollY}`)
        // console.log(event.path[0].outerHTML)
        // console.log(currentitem)
    }

</script>

<style lang="scss">
	@import '../sass/_global.scss';

    .MainNav {
        position: fixed;
        z-index: 1000;
        list-style: none;
        padding: $h3;
        @include type-setting(0);

        .NavItem {
            text-decoration: none;
            color: $light_2;
            padding: 3px 5px;
            &:hover {
                color: $light;
            }
        }
    }
    .active {
        color: $black;
        background-color: $black;
    }
</style>

<svelte:window bind:scrollY={y} />

<ul class="MainNav">{y}
    {#each navOptions as link,i}
        <li>
            {#if y == i }
                <a href="{link.href}" class="NavItem active">{link.name}</a>
            {:else }
                <a on:click="{(event)=>cuandoClick(event)}" class="{
                link.href == currentitem ? 'NavItem active' : 'NavItem'}" href="{link.href}" id={i}>{link.name}</a>
            {/if}
        </li>
    {/each}

</ul>