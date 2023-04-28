<template>

    <section className="bg-white bg-opacity-80 fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center">

        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>

    </section>

</template>

<style>

.lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid rgb(16, 99, 16);
    border-radius: 50%;
    animation: lds-ring 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: rgb(16, 99, 16) transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  

</style>