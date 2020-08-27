<script>
    import {playerSelected} from './store'
    import {playerScore} from  './playerscore'
    import Paper from "./Paper.svelte";
    import Scissors from "./Scissors.svelte";
    import Rock from "./Rock.svelte";
    import {navigate} from "svelte-routing";
    import {onMount} from 'svelte'

    let cards = ['paper','scissors' , 'rock']
    let randomCard
    let pcPoints
    let playerPoints
    let winner
    setTimeout(function(){
         randomCard = cards[Math.floor(Math.random() * cards.length)];
        evaluate()
        playerScore.update(value => {
            value = playerPoints
            return value = playerPoints
        })
    },1000)

    let selectedImage
    playerSelected.subscribe(value => {
        selectedImage = value
    })

    function browse(){
        navigate("/", { replace: true })
    }

onMount(() => {
        playerScore.subscribe(value => {
            playerPoints = value
        })
    })

    function evaluate(){
        if(selectedImage === "paper" && randomCard==="scissors"){
            winner = "pc"
            pcPoints = pcPoints +1
        }
        if(selectedImage === "paper" && randomCard==="rock"){
            winner = "player"
            playerPoints = playerPoints + 1
        }
        if(selectedImage === "scissors" && randomCard==="paper"){
            winner = "player"
            playerPoints = playerPoints +1
        }
        if(selectedImage === "scissors" && randomCard==="rock"){
            winner = "pc"
            pcPoints = pcPoints +1
        }
        if(selectedImage === "rock" && randomCard==="paper"){
            winner = "pc"
            pcPoints = pcPoints +1
        }
        if(selectedImage === "rock" && randomCard==="scissors"){
            winner = "player"
            playerPoints = playerPoints + 1
        }
        if(selectedImage === randomCard){
            winner = "even"
        }


    }

</script>
<div class="picked flex flex-col justify-center items-center">

<div class="flex justify-between w-full h-full">

    <div class="flex flex-col justify-center items-center" >
        <h2 class="text-white mb-4">YOU PICKED</h2>
        {#if selectedImage==="paper"}
            <Paper />
        {:else if selectedImage==="scissors"}
            <Scissors />
        {:else if selectedImage==="rock"}
            <Rock />

        {/if}
    </div>

    <div class="flex flex-col justify-center items-center">
        <h2 class="text-white mb-4">THE HOUSE PICKED</h2>

        {#if randomCard==="paper"}
            <Paper />
        {:else if randomCard==="scissors"}
            <Scissors />
        {:else if randomCard==="rock"}
            <Rock />
        {:else}
            <div class=" pc-card w-16 h-16 md:w-24 md:h-24 rounded-full flex  justify-center items-center">
            </div>
        {/if}
    </div>

</div>
    {#if randomCard}
    <div class="result text-white font-bold ">
        <div class="winner text-4xl">
            <h3>YOU
                {#if winner==="pc"}
                    LOSE
                    {:else if winner==="player"}
                            WIN
                    {:else if winner==="even"}
                    ARE EVEN
                            {/if}
            </h3>
        </div>
        <div class="playagain text-center mt-4"  on:click={ () => browse()}>
            <a class="bg-gray-100  rounded-md text-gray-900 py-4 px-8">PLAY AGAIN</a>
        </div>
    </div>
        {/if}
</div>

<style>
    .pc-card{
        background-color: rgba(255,255,255,0.1);
    }
</style>