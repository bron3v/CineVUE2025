<script>
    export default{
        props: {
            titolo:{
                type: String, 
                required: true
            },
            commento: {
                type: String, 
                required: true
            },
            voto: {
                type: Number, 
                required: true
            }, 
            num_like: {
                type: Number, 
                default: 0
            }, 
            num_dislike: {
                type: Number, 
                default: 0
            }
        }
    }
</script>

<template>
    <div class="newsCard">
        <h3 class="review-title">{{ titolo }}</h3>

        <p class="review-content">{{ commento }}</p>

        <p> <b>Giudizio:</b> {{ voto }} - 
            <b>Likes:</b> {{ num_like }} - 
            <b>Dislikes:</b> {{ num_dislike }}
        </p>
    </div>
</template>

<style>
.review-title {
    font-size: 20px;
    color: var(--tertiary);
}

.review-content {
    font-size: 18px;
    color: var(--black);
}
</style>





