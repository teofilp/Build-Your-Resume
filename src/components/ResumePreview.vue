<template>
    <div id="preview_wrapper">
        <div id="resume_preview"></div>
        <ul class="options">
            <li><div><h2>Share</h2></div></li>
            <li><button class="download">Download</button></li>
            <li><div><h2>Preview</h2></div></li>
            
        </ul>
    </div>
</template>
<script>
export default {
    mounted(){
        let resume_preview =  document.querySelector("#resume_preview"); 
        resume_preview.style.height = resume_preview.offsetWidth * 1.41 + "px";
    }
}
</script>
<style>
    #preview_wrapper {
        position: absolute;
        left: 50%;
        top: 0;
        height: 100%;
        width: 50%;
        background: #aaa;
        overflow-y: auto;
    }

    #resume_preview {
        position: relative;
        width: 60%;
        left: 50%;
        top: 45%;
        transform: translate(-50%, -50%);
        background: white;
        box-shadow: 2px 2px 15px #222;
    }

    .options {
        display: table;
        margin: 0;
        padding: 0;
        width: 60%;
        height: 60px;
        margin-top: 70px;
        margin-left: 20%;
    }

    .options li {
        display: table-cell;
        text-align: center;
        height: 100%;
    }

    .option li button {
        height: 100%;
    }

    .options li div {
        border: 2px solid transparent;
        border-radius: 12px;
        transition: background-color .3s;
    }

    .options li div:hover {
        background: #888;
    }

    button.download {
        background: #2d6fd8;
        font-size: 1.2em;
        border: none;
        padding: 15px 30px;
        border-radius: 8px;
        color: white;
    }

    button.download:hover {
        cursor: pointer;
    }
</style>


