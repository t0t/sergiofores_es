<script>
    import { pages } from './Routes.svelte';
    import { afterUpdate } from 'svelte';
    import { clickOutside } from './clickOutside.js';
    import SiteLogo from '../SiteLogo.svelte';

    let y, currentitem;
    let activemenu = false;

    afterUpdate(() => {
        if (y > 100 && y < 500) {
            currentitem = '';
        }
    });

    // function cuandoClick(event) {
    //     currentitem = event.path[0].hash;
    // }

    function contraeMainMenu() {
        activemenu = false;
    }

    let currentPage = pages[0];
    let intSelected = 0;
    let current_page_name = currentPage.page;

    function changeComponent(event) {
        currentPage = pages[event.srcElement.id];
        intSelected = event.srcElement.id;
        current_page_name = currentPage.page;
    }
</script>

<svelte:window bind:scrollY={y} />

<div use:clickOutside on:click_outside={contraeMainMenu}>
    <div
        class="ButtonNav"
        on:click={() => {
            activemenu = !activemenu;
        }}
    >
        <SiteLogo />
    </div>

    <nav class={activemenu ? ' MainNav MainNavVisible' : 'MainNav'}>
        {#each pages as link, i}
            <a
                class={intSelected == i ? 'NavItem active' : 'NavItem'}
                on:click={changeComponent}
                id={i}
                role="navigation"
                href="#{link.page}"
            >
                {link.name}
            </a>
        {/each}
    </nav>
</div>

<svelte:component this={currentPage.component} {current_page_name} />

<style lang="scss">
    @use "../../../sass/_index.scss"as *;

    .MainNav {
        display: none;
        position: fixed;
        top: $h4 + $h1;
        left: $h0;
        z-index: 500;
        list-style: none;
        padding-top: $h0;
        padding-bottom: $h0;
        @include type-setting(0);
        background-color: rgba(0, 0, 0, 0.75);

        .NavItem {
            text-decoration: none;
            user-select: none;
            padding: $h0 $h2;
            display: block;
            border: none;

            &:hover {
                color: $white;
            }
        }
    }

    .MainNavVisible {
        display: flex;
        flex-wrap: wrap;
        /* min-height: 150px; */
        justify-content: space-between;
        flex-direction: column;
        @include animation(slide);
    }

    .ButtonNav {
        position: fixed;
        z-index: 1000;
        top: $h2;
        left: $h2;

        &:hover {
            cursor: pointer;
        }
    }

    .active {
        color: $white;
    }

    button {
        color: $grey_1;
    }
</style>
