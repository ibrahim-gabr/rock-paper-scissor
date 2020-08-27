<header class="mt-8 border border-white p-4 flex justify-between items-center ">
    <div class="tools text-white font-bold text-2xl h-full ">
        <div class="grid grid-flow-row grid-rows-3 row-gap-1 max-h-full">
            <div class="">ROCK</div>
            <div class="">PAPER</div>
            <div class=" ">SCISSORS</div>
        </div>
    </div>

    <div class="score bg-white w-20 text-center flex rounded flex-col justify-around p-1">
        <h3 class="text-base text-indigo-700">SCORE</h3>
        <h3 class="font-bold text-4xl">
            {#if yourScore}
            {yourScore}
                {:else}
                0
                {/if}
        </h3>
    </div>
</header>

<script>
    export let yourScore

</script>
