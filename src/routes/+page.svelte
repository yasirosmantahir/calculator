<script>
  import Button from "$lib/components/button.svelte";
  import Screen from "$lib/components/screen.svelte";
</script>

<div class="calculator">
  <Screen></Screen>

  <div class="numbers">
    <div class="row">
      <Button class="col" label="AC"></Button>
      <Button class="col" label="C"></Button>
      <Button class="col" label="%"></Button>
      <Button class="col" label="/" bg="orange"></Button>
    </div>
    <div class="row">
      <Button class="col" label="1"></Button>
      <Button class="col" label="2"></Button>
      <Button class="col" label="3"></Button>
      <Button class="col" label="*"  bg="orange"></Button>
    </div>

    <div class="row">
      <Button class="col" label="4"></Button>
      <Button class="col" label="5"></Button>
      <Button class="col" label="6"></Button>
      <Button class="col" label="-"  bg="orange"></Button>
    </div>

    <div class="row">
      <Button class="col" label="7"></Button>
      <Button class="col" label="8"></Button>
      <Button class="col" label="9"></Button>
      <Button class="col" label="+"  bg="orange"></Button>
    </div>
    <div class="row">
      <Button class="col" label="."></Button>
      <Button class="col" label="0"></Button>
      <Button class="col" label="=" width="130px"  bg="orange"></Button>
    </div>
  </div>
</div>

<style>

  .calculator {
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 500px;
    margin: 7% auto;
    padding-left: 11px;
    padding-right: 11px;

    justify-content: center;
    border-radius: 20px;
    background-color: black;
  }

 

  .row {
    display: flex;
    gap: 5px;
    margin: 5px auto;
    
  }

  .col {
    color: white;
    text-align: center;
    border-radius: 5px;
  }
</style>
