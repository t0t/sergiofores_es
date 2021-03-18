<script>
    import { afterUpdate } from 'svelte';
    import {clickOutside} from './clickOutside.js';
    import SiteLogo from './modulos/SiteLogo.svelte'

    const navOptions = [
        {
            name: 'ↂ Wellcome',
            href: '#01234'
        },
        {
            name: '༆ About',
            href: '#about'
        },
        {
            name: 'ᆅ Artwork',
            href: '#artwork'
        }
    ];
    let currentitem, y;
    let activemenu = false;
    
    afterUpdate(() => { if ( y > 100 && y < 500 ) { currentitem = "" }});
    
    function cuandoClick(event) {
        currentitem = event.path[0].hash
    }
    function contraeMainMenu() {
		activemenu = false
	}
</script>

<style lang="scss">
	@import '../sass/_global.scss';

    .MainNav {
        display: none;
        position: fixed;
        top: $h3*2;
        left: 0;
        z-index: 500;
        list-style: none;
        padding: $h2;
        @include type-setting(0);

        .NavItem {
            text-decoration: none;
            color: $black;
            padding: 3px 5px;
            &:hover {
                color: $grey;
            }
        }
    }
    .MainNavVisible {
        display: block;
        background-color: $light_2;
    }
    .ButtonNav {
        position: fixed;
        z-index: 1000;
        top: $h3;
        left: $h3;
    }
    .active {
        color: $white;
        background-color: $black;
        border-radius: 4px;
    }
</style>

<svelte:window bind:scrollY={y} />

<div use:clickOutside on:click_outside={contraeMainMenu}
>

<div class="ButtonNav"
    on:click={(event)=>{
        console.log(event)
        activemenu = !activemenu
        console.log(activemenu)
    }}>
    <SiteLogo />
</div>

<ul class="{activemenu ? "MainNav MainNavVisible" : "MainNav"}">
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
</div>